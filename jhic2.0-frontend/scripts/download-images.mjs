// Downloads every external image referenced in the frontend to public/images/
// and writes scripts/image-map.json (url -> local path) for the replace step.
import { readdirSync, statSync, readFileSync, writeFileSync, mkdirSync, renameSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";
import crypto from "node:crypto";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = join(root, "src");
const imagesDir = join(root, "public", "images");
const mapFile = join(root, "scripts", "image-map.json");

const KURI_BASE = "https://kurikulum.smktelkom-mlg.sch.id";
const IMG_HOSTS = /kurikulum|unsplash|ui-avatars|smktelkom|gstatic|shutterstock|vecteezy|medium\.com|msoft\.team|chi\.ac\.uk|coursesonline|dot\.co\.id/i;
const IMG_EXT = /\.(png|jpe?g|webp|svg|gif|avif)(\?|$)/i;

function walk(dir) {
  let out = [];
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) out = out.concat(walk(p));
    else if (/\.(ts|tsx)$/.test(e)) out.push(p);
  }
  return out;
}

const hash8 = (s) => crypto.createHash("sha1").update(s).digest("hex").slice(0, 8);

function extForContentType(ct) {
  if (!ct) return ".jpg";
  if (ct.includes("png")) return ".png";
  if (ct.includes("webp")) return ".webp";
  if (ct.includes("svg")) return ".svg";
  if (ct.includes("gif")) return ".gif";
  if (ct.includes("avif")) return ".avif";
  return ".jpg";
}

function localPathFor(url) {
  const u = new URL(url);
  const host = u.hostname;
  const path = decodeURIComponent(u.pathname).replace(/^\//, "");
  if (host.includes("kurikulum")) return "kurikulum/" + path;
  if (host.includes("unsplash")) return "unsplash/" + path.split("/")[0];
  if (host.includes("ui-avatars")) return "avatars/avatar-" + hash8(url);
  if (host.includes("smktelkom")) return "school/" + path;
  let name = basename(path) || "image";
  name = name.replace(/[^A-Za-z0-9._-]/g, "_");
  return "expertise/" + name;
}

async function download(url, outAbs) {
  mkdirSync(dirname(outAbs), { recursive: true });
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 20000);
  try {
    const res = await fetch(url, { signal: ctrl.signal, redirect: "follow" });
    if (!res.ok) return null;
    const buf = Buffer.from(await res.arrayBuffer());
    const ct = res.headers.get("content-type") ?? "";
    writeFileSync(outAbs, buf);
    return ct;
  } catch {
    return null;
  } finally {
    clearTimeout(t);
  }
}

const files = walk(srcDir);
const urlMap = new Map();
const urlRegex = /https?:\/\/[^\s"'`)\]}]+/g;

// 1. Literal URLs
for (const f of files) {
  const text = readFileSync(f, "utf8");
  for (const m of text.matchAll(urlRegex)) {
    const u = m[0].replace(/[.,;]+$/, "");
    if (!IMG_EXT.test(u) && !IMG_HOSTS.test(u)) continue;
    if (urlMap.has(u)) continue;

    let rel = localPathFor(u);
    if (IMG_EXT.test(rel)) {
      const ct = await download(u, join(imagesDir, rel));
      if (ct === null) {
        console.warn("SKIP (failed) " + u);
        continue;
      }
      urlMap.set(u, rel);
      console.log("OK   " + rel + "  <-  " + u);
    } else {
      const tmp = join(imagesDir, rel + ".tmp");
      const ct = await download(u, tmp);
      if (ct === null) {
        console.warn("SKIP (failed) " + u);
        continue;
      }
      const finalRel = rel + extForContentType(ct);
      renameSync(tmp, join(imagesDir, finalRel));
      urlMap.set(u, finalRel);
      console.log("OK   " + finalRel + "  <-  " + u);
    }
  }
}

// 2. Kurikulum `${K}` template images
const kFiles = files.filter((f) => /programUmumData|konsentrasiData|persiapanKelulusanData/.test(f));
const kRefs = new Set();
for (const f of kFiles) {
  const text = readFileSync(f, "utf8");
  for (const m of text.matchAll(/\$\{K\}(\/[A-Za-z0-9_\-./]+)/g)) {
    kRefs.add(m[1]);
  }
}
for (const relPath of kRefs) {
  const url = KURI_BASE + relPath;
  const outAbs = join(imagesDir, "kurikulum", relPath.replace(/^\//, ""));
  const ct = await download(url, outAbs);
  if (ct === null) console.warn("SKIP (failed) " + url);
  else console.log("OK   kurikulum" + relPath + "  <-  " + url);
}

writeFileSync(mapFile, JSON.stringify(Object.fromEntries(urlMap), null, 2));
console.log(`\nDownloaded ${urlMap.size} literal images + ${kRefs.size} kurikulum images. Map -> ${mapFile}`);
