/**
 * Disuelve los términos municipales GADM por zona y escribe
 * web/public/data/zonas.geojson (sin óvalos que se pisan).
 *
 * Uso: node mapa2/zonas_web.mjs   (con @turf/turf instalado)
 */
import { createRequire } from "node:module";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const turf = createRequire(join(process.env.TURF_ROOT || process.cwd(), "package.json"))("@turf/turf");

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");
const csv = readFileSync(join(raiz, "data", "municipios.csv"), "utf8");
const meta = JSON.parse(readFileSync(join(raiz, "web", "src", "data", "zonas.json"), "utf8"));
const es = JSON.parse(readFileSync(join(raiz, "data", "geo", "municipios_es_norte.geojson"), "utf8"));
const pt = JSON.parse(readFileSync(join(raiz, "data", "geo", "municipios_pt_norte.geojson"), "utf8"));

const filas = csv
  .trim()
  .split(/\r?\n/)
  .slice(1)
  .map((linea) => {
    const c = linea.split(";");
    return { zona: c[1], municipio: c[2], pais: c[4], lat: Number(c[6]), lon: Number(c[7]) };
  });

function gid(feat) {
  const p = feat.properties || {};
  return p.GID_4 || p.GID_3 || p.GID_2 || p.NAME_4 || p.NAME_2 || JSON.stringify(feat.geometry).slice(0, 80);
}

function clave(s) {
  const paren = String(s).match(/\(([^)]+)\)/);
  const base = paren ? paren[1] : String(s);
  return base
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^a-z]/g, "");
}

function poligonoDe(lon, lat, pais, municipio) {
  const punto = turf.point([lon, lat]);
  const capa = pais === "Portugal" ? pt : es;
  for (const f of capa.features) {
    try {
      if (turf.booleanPointInPolygon(punto, f)) return f;
    } catch {
      /* geometría rara */
    }
  }
  const k = clave(municipio);
  for (const f of capa.features) {
    const n = f.properties?.NAME_4 || f.properties?.NAME_2 || "";
    if (clave(n) === k) return f;
  }
  let mejor = null;
  let dist = 8;
  for (const f of capa.features) {
    try {
      const d = turf.distance(punto, turf.centroid(f));
      if (d < dist) {
        dist = d;
        mejor = f;
      }
    } catch {
      /* */
    }
  }
  return mejor;
}

function unir(feats) {
  if (feats.length === 1) return feats[0];
  let acc = feats[0];
  for (const f of feats.slice(1)) {
    const u = turf.union(turf.featureCollection([acc, f]));
    if (u) acc = u;
  }
  return acc;
}

const features = [];
const avisos = [];

for (const z of meta.zonas) {
  const vistos = new Set();
  const piezas = [];
  for (const f of filas.filter((x) => x.zona === z.zona)) {
    const poly = poligonoDe(f.lon, f.lat, f.pais, f.municipio);
    if (!poly) {
      avisos.push(`sin polígono: ${f.municipio}`);
      continue;
    }
    const id = gid(poly);
    if (vistos.has(id)) continue;
    vistos.add(id);
    piezas.push(poly);
  }
  if (!piezas.length) throw new Error(`Zona vacía: ${z.zona}`);
  const union = unir(piezas);
  const suave = turf.simplify(union, { tolerance: 0.0035, highQuality: true, mutate: false });
  const marca = turf.pointOnFeature(suave);
  features.push({
    type: "Feature",
    properties: {
      id: z.id,
      zona: z.zona,
      clase: z.clase,
      activa: z.activa,
      portugal: z.portugal,
      lat: marca.geometry.coordinates[1],
      lon: marca.geometry.coordinates[0],
    },
    geometry: suave.geometry,
  });
}

const salida = { type: "FeatureCollection", features };
const destino = join(raiz, "web", "public", "data", "zonas.geojson");
writeFileSync(destino, JSON.stringify(salida));
console.log(`escrito ${destino} (${Math.round(JSON.stringify(salida).length / 1024)} KB)`);
if (avisos.length) console.log(avisos.join("\n"));
