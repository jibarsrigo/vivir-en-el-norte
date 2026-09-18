/**
 * Audita que las fotos referenciadas en relatos de una zona no repitan hash.
 * Uso: node scripts/auditar_fotos_unicas.mjs o-salnes
 */
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const zonaId = process.argv[2];
if (!zonaId) {
  console.error("Uso: node scripts/auditar_fotos_unicas.mjs <zonaId>");
  process.exit(1);
}

const fotosDir = path.join(root, "web/public/fotos", zonaId);
const relatoTs = path.join(root, "web/src/lib", `relatos-${zonaId}.ts`);
const relatoZonaCandidates = [
  path.join(root, "web/src/components", `Relato${toPascal(zonaId)}.tsx`),
  ...fs
    .readdirSync(path.join(root, "web/src/components"))
    .filter((f) => f.startsWith("Relato") && f.endsWith(".tsx"))
    .map((f) => path.join(root, "web/src/components", f)),
];

function toPascal(id) {
  return id
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("");
}

function sha12(filePath) {
  const buf = fs.readFileSync(filePath);
  return crypto.createHash("sha256").update(buf).digest("hex").slice(0, 12);
}

function extractSrcs(text) {
  const out = [];
  const re = /\/fotos\/[^"'\s)]+\.(?:jpg|jpeg|png|webp)/gi;
  let m;
  while ((m = re.exec(text))) out.push(m[0]);
  return out;
}

const srcs = new Set();
if (fs.existsSync(relatoTs)) {
  for (const s of extractSrcs(fs.readFileSync(relatoTs, "utf8"))) {
    if (s.includes(`/fotos/${zonaId}/`)) srcs.add(s);
  }
}
for (const cand of relatoZonaCandidates) {
  if (!fs.existsSync(cand)) continue;
  const text = fs.readFileSync(cand, "utf8");
  if (!text.includes(`/fotos/${zonaId}/`)) continue;
  for (const s of extractSrcs(text)) {
    if (s.includes(`/fotos/${zonaId}/`)) srcs.add(s);
  }
}

if (!srcs.size) {
  console.error(`No se encontraron fotos de ${zonaId} en relatos.`);
  process.exit(1);
}

const byHash = new Map();
const missing = [];
for (const src of [...srcs].sort()) {
  const file = path.join(root, "web/public", src.replace(/^\//, "").replace(/\//g, path.sep));
  if (!fs.existsSync(file)) {
    missing.push(src);
    continue;
  }
  const h = sha12(file);
  if (!byHash.has(h)) byHash.set(h, []);
  byHash.get(h).push(src);
}

let dups = 0;
for (const [h, list] of byHash) {
  if (list.length > 1) {
    dups++;
    console.log(`DUP ${h}:`);
    for (const s of list) console.log(`  ${s}`);
  }
}
if (missing.length) {
  console.log("FALTAN:");
  for (const s of missing) console.log(`  ${s}`);
}

console.log(
  `\n${srcs.size} refs, ${byHash.size} hashes únicos, ${dups} grupos duplicados, ${missing.length} faltan.`,
);
if (!fs.existsSync(fotosDir)) {
  console.log(`(aviso: no existe ${fotosDir})`);
}

process.exit(dups || missing.length ? 1 : 0);
