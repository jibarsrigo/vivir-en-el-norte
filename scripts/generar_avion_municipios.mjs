/**
 * Genera web/src/data/avion-municipios.json desde data/municipios.csv
 * emparejado con municipios-puntos.json.
 * Uso: node scripts/generar_avion_municipios.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const CSV = path.join(ROOT, "data", "municipios.csv");
const PUNTOS = path.join(ROOT, "web", "src", "data", "municipios-puntos.json");
const OUT = path.join(ROOT, "web", "src", "data", "avion-municipios.json");

function parseRow(line) {
  const out = [];
  let cur = "";
  let q = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      q = !q;
      continue;
    }
    if (c === ";" && !q) {
      out.push(cur);
      cur = "";
      continue;
    }
    cur += c;
  }
  out.push(cur);
  return out;
}

function norm(s) {
  return s
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/\s*\([^)]*\)\s*/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const raw = fs.readFileSync(CSV, "utf8");
const lines = raw.split(/\r?\n/).filter(Boolean);
const header = parseRow(lines[0]);
const ix = Object.fromEntries(header.map((k, i) => [k, i]));
const puntos = JSON.parse(fs.readFileSync(PUNTOS, "utf8"));

const porNorm = new Map();
for (const line of lines.slice(1)) {
  const r = parseRow(line);
  const municipio = r[ix.municipio];
  porNorm.set(norm(municipio), {
    municipio,
    aeropuertoMin: Number(r[ix.aeropuerto_min]),
    palmaMasCercano: r[ix.palma_mas_cercano],
    palmaMejor: r[ix.palma_mejor_opcion],
    aeropuertos: r[ix.aeropuertos],
  });
}

function buscarCsv(p) {
  const keys = [p.nombre, p.etiqueta].filter(Boolean);
  for (const k of keys) {
    const hit = porNorm.get(norm(k));
    if (hit) return hit;
  }
  for (const k of keys) {
    const nk = norm(k);
    for (const [ck, row] of porNorm) {
      if (nk.startsWith(ck) || ck.startsWith(nk)) return row;
    }
  }
  return null;
}

const out = [];
const faltan = [];
for (const p of puntos) {
  const row = buscarCsv(p);
  if (!row) {
    faltan.push(p.nombre);
    continue;
  }
  const primero = row.aeropuertos.split(";")[0]?.trim() ?? "";
  const aeroCercano = primero.replace(/\s+\d+\s*km.*/, "").trim() || null;
  out.push({
    zonaId: p.zonaId,
    nombre: p.nombre,
    aeropuertoMin: row.aeropuertoMin,
    aeroCercano,
    palmaMasCercano: row.palmaMasCercano,
    palmaMejor: row.palmaMejor,
    aeropuertos: row.aeropuertos,
  });
}

if (faltan.length) {
  console.error("Sin emparejar:", faltan.join(", "));
  process.exit(1);
}

fs.writeFileSync(OUT, JSON.stringify(out, null, 2) + "\n", "utf8");
console.log(`OK ${out.length} municipios → ${path.relative(ROOT, OUT)}`);
