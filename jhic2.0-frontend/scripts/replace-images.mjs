// Replaces downloaded external image URLs in src with local /images/... paths
// using scripts/image-map.json, and rewrites the kurikulum `${K}` base to local.
import { readdirSync, statSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const srcDir = join(root, "src");
const map = JSON.parse(readFileSync(join(root, "scripts", "image-map.json"), "utf8"));

function walk(dir) {
  let out = [];
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) out = out.concat(walk(p));
    else if (/\.(ts|tsx)$/.test(e)) out.push(p);
  }
  return out;
}

let total = 0;
for (const f of walk(srcDir)) {
  let text = readFileSync(f, "utf8");
  const before = text;

  for (const [url, rel] of Object.entries(map)) {
    const local = "/images/" + rel;
    if (text.includes(url)) {
      text = text.split(url).join(local);
    }
  }

  // Rewrite the kurikulum base constant to the local images dir
  text = text.replace(
    /const K = "https:\/\/kurikulum\.smktelkom-mlg\.sch\.id";/g,
    'const K = "/images/kurikulum";'
  );

  if (text !== before) {
    writeFileSync(f, text);
    total += 1;
    console.log("updated " + f.replace(root + "\\", ""));
  }
}
console.log(`\nUpdated ${total} files.`);
