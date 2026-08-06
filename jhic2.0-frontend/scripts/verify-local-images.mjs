import { readdirSync, statSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const srcDir = join(root, "src");
const publicDir = join(root, "public");

function walk(dir) {
  let out = [];
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) out = out.concat(walk(p));
    else if (/\.(ts|tsx)$/.test(e)) out.push(p);
  }
  return out;
}

const missing = new Set();
const seen = new Set();
for (const f of walk(srcDir)) {
  const t = readFileSync(f, "utf8");
  for (const m of t.matchAll(/["'`](\/images\/[^"'`\s?#]+)/g)) {
    const path = m[1];
    if (seen.has(path)) continue;
    seen.add(path);
    const abs = join(publicDir, path.replace(/^\//, ""));
    if (!existsSync(abs)) missing.add(path);
  }
  // `${K}`-relative template refs
  for (const m of t.matchAll(/\$\{K\}(\/[A-Za-z0-9_\-./]+)/g)) {
    const path = "/images/kurikulum" + m[1];
    if (seen.has(path)) continue;
    seen.add(path);
    const abs = join(publicDir, path.replace(/^\//, ""));
    if (!existsSync(abs)) missing.add(path);
  }
}

console.log(`Referenced ${seen.size} local image paths; ${missing.size} missing.`);
missing.forEach((p) => console.log("  MISSING " + p));
