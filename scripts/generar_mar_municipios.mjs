/**
 * Genera web/src/data/mar-municipios.json (misma lógica que scripts/generar_mar_municipios.py).
 * Uso: node scripts/generar_mar_municipios.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WEB_DATA = path.join(__dirname, "..", "web", "src", "data");
const MIN_POR_KM = 1.65;

function haversineKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const p1 = (lat1 * Math.PI) / 180;
  const p2 = (lat2 * Math.PI) / 180;
  const dphi = ((lat2 - lat1) * Math.PI) / 180;
  const dl = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dphi / 2) ** 2 + Math.cos(p1) * Math.cos(p2) * Math.sin(dl / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

function minsFromKm(km) {
  return Math.max(1, Math.round(km * MIN_POR_KM));
}

function densificar(poly, pasoKm = 4) {
  const out = [];
  for (let i = 0; i < poly.length - 1; i++) {
    const [lat1, lon1] = poly[i];
    const [lat2, lon2] = poly[i + 1];
    out.push([lat1, lon1]);
    const d = haversineKm(lat1, lon1, lat2, lon2);
    const n = Math.max(1, Math.floor(d / pasoKm));
    for (let k = 1; k < n; k++) {
      const t = k / n;
      out.push([lat1 + (lat2 - lat1) * t, lon1 + (lon2 - lon1) * t]);
    }
  }
  out.push(poly[poly.length - 1]);
  return out;
}

const COSTA_BASE = [
  [41.15, -8.68],
  [41.35, -8.75],
  [41.55, -8.8],
  [41.7, -8.85],
  [41.82, -8.87],
  [41.9, -8.88],
  [42.05, -8.89],
  [42.12, -8.85],
  [42.18, -8.82],
  [42.22, -8.78],
  [42.28, -8.72],
  [42.35, -8.78],
  [42.4, -8.7],
  [42.45, -8.85],
  [42.55, -8.9],
  [42.6, -8.8],
  [42.7, -9.0],
  [42.78, -9.1],
  [42.9, -9.25],
  [43.05, -9.25],
  [43.2, -8.95],
  [43.3, -8.5],
  [43.38, -8.4],
  [43.45, -8.25],
  [43.55, -8.2],
  [43.6, -7.8],
  [43.65, -7.55],
  [43.7, -7.35],
  [43.55, -7.05],
  [43.55, -6.7],
  [43.55, -6.35],
  [43.55, -5.9],
  [43.55, -5.65],
  [43.5, -5.4],
  [43.45, -5.05],
  [43.45, -4.75],
  [43.45, -4.4],
  [43.45, -4.0],
  [43.4, -3.8],
  [43.4, -3.5],
  [43.35, -3.1],
  [43.35, -2.9],
];

const COSTA_RIAS = [
  [42.25, -8.72],
  [42.3, -8.65],
  [42.35, -8.62],
  [42.4, -8.65],
  [42.43, -8.65],
  [42.48, -8.85],
  [42.52, -8.87],
];

const PLAYAS = [
  ["Matosinhos", 41.18, -8.69],
  ["Espinho", 41.01, -8.64],
  ["Ofir", 41.52, -8.79],
  ["Viana do Castelo", 41.69, -8.84],
  ["Moledo", 41.845, -8.868],
  ["Vila Praia de Âncora", 41.813, -8.865],
  ["Area Grande", 41.918, -8.879],
  ["O Muíño", 41.87, -8.856],
  ["Praia de Mougás", 42.053, -8.887],
  ["Praia Ladeira", 42.108, -8.836],
  ["Barbeira", 42.122, -8.852],
  ["Praia América", 42.136, -8.821],
  ["Panxón", 42.145, -8.823],
  ["Patos", 42.156, -8.832],
  ["Samil", 42.21, -8.777],
  ["Cesantes", 42.298, -8.63],
  ["Rodeira", 42.26, -8.78],
  ["Menduíña", 42.28, -8.85],
  ["Silgar", 42.4, -8.82],
  ["A Lanzada", 42.45, -8.88],
  ["Areas", 42.42, -8.82],
  ["Foxos", 42.48, -8.9],
  ["Ribeira", 42.56, -8.99],
  ["Corrubedo", 42.57, -9.05],
  ["Carnota", 42.82, -9.1],
  ["Fisterra", 42.91, -9.27],
  ["Laxe", 43.22, -9.0],
  ["Razo", 43.28, -8.7],
  ["Orzán", 43.37, -8.41],
  ["Doniños", 43.5, -8.32],
  ["Frouxeira", 43.58, -8.2],
  ["Cedeira", 43.65, -8.06],
  ["Esteiro", 43.68, -7.9],
  ["Area Longa", 43.68, -7.6],
  ["Covas", 43.68, -7.58],
  ["Foz", 43.57, -7.25],
  ["As Catedrais", 43.55, -7.1],
  ["Tapia", 43.57, -6.95],
  ["Navia", 43.55, -6.72],
  ["Luarca", 43.55, -6.54],
  ["Cudillero", 43.56, -6.15],
  ["Salinas", 43.58, -5.96],
  ["San Lorenzo", 43.55, -5.65],
  ["Rodiles", 43.53, -5.38],
  ["Santa Marina (Ribadesella)", 43.46, -5.06],
  ["Torimbia", 43.45, -4.85],
  ["Oyambre", 43.4, -4.33],
  ["Comillas", 43.39, -4.29],
  ["Somo", 43.43, -3.75],
  ["El Sardinero", 43.47, -3.78],
  ["Laredo", 43.41, -3.41],
  ["Ostende (Castro)", 43.38, -3.22],
];

function nearest(lat, lon, pts) {
  let best = pts[0];
  let bestD = haversineKm(lat, lon, best[0], best[1]);
  for (let i = 1; i < pts.length; i++) {
    const d = haversineKm(lat, lon, pts[i][0], pts[i][1]);
    if (d < bestD) {
      bestD = d;
      best = pts[i];
    }
  }
  return [bestD, best];
}

function nearestPlaya(lat, lon) {
  let bestName = PLAYAS[0][0];
  let bestD = haversineKm(lat, lon, PLAYAS[0][1], PLAYAS[0][2]);
  for (let i = 1; i < PLAYAS.length; i++) {
    const [name, plat, plon] = PLAYAS[i];
    const d = haversineKm(lat, lon, plat, plon);
    if (d < bestD) {
      bestD = d;
      bestName = name;
    }
  }
  return [bestD, bestName];
}

const puntos = JSON.parse(fs.readFileSync(path.join(WEB_DATA, "municipios-puntos.json"), "utf8"));
const baixoList = JSON.parse(fs.readFileSync(path.join(WEB_DATA, "municipios-baixo-mino.json"), "utf8"));
const baixo = Object.fromEntries(baixoList.map((f) => [f.municipio, f]));

const costa = densificar(COSTA_BASE, 3.5).concat(densificar(COSTA_RIAS, 3.0));

const out = puntos.map((m) => {
  const { nombre, zonaId, lat, lon } = m;
  if (zonaId === "baixo-mino" && baixo[nombre]) {
    const f = baixo[nombre];
    return {
      zonaId,
      nombre,
      minCosta: f.minCosta,
      minBano: f.minBano,
      playaBano: f.playaBano,
      franja: f.franja,
    };
  }
  const [dCosta] = nearest(lat, lon, costa);
  const [dPlaya, playa] = nearestPlaya(lat, lon);
  let minCosta = minsFromKm(dCosta);
  let minBano = minsFromKm(dPlaya);
  if (minBano < minCosta) minBano = minCosta;
  return {
    zonaId,
    nombre,
    minCosta,
    minBano,
    playaBano: playa,
    franja: minCosta <= 5 ? "A" : "B",
  };
});

const dest = path.join(WEB_DATA, "mar-municipios.json");
fs.writeFileSync(dest, JSON.stringify(out, null, 2) + "\n", "utf8");
console.log(`Wrote ${out.length} → ${dest}`);
console.log(out.filter((r) => r.zonaId === "baixo-mino"));
console.log(
  "sample",
  out.filter((r) => ["asturias-centro", "a-marina", "o-salnes"].includes(r.zonaId)).slice(0, 6),
);
