/**
 * Descarga fotos distintas de Wikimedia Commons para O Salnés.
 * Uso: node scripts/descargar_fotos_o_salnes.mjs
 *
 * Cada destino debe ser un archivo distinto (sin stand-ins repetidos).
 */
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "../web/public/fotos/o-salnes");
const UA = "VivirEnElNorte/1.0 (local build; fotos zona o-salnes)";

const PLAN = [
  // Zona + Cambados
  {
    dest: "cambados-fefinans.jpg",
    preferred: "Pazo de Fefiñáns. Cambados- Galiza. CBD14.jpg",
    queries: ["Pazo Fefiñáns Cambados", "Praza de Fefiñáns"],
  },
  {
    dest: "cambados-santo-tome.jpg",
    preferred: "Santo Tomé do Mar, Cambados.jpg",
    queries: ["Santo Tomé Cambados", "barrio Santo Tomé Cambados"],
  },
  {
    dest: "cambados-santa-marina.jpg",
    preferred: "Ruínas de Santa Mariña Dozo, Cambados 01.jpg",
    queries: ["Santa Mariña Dozo", "Santa Marina Dozo Cambados"],
  },
  {
    dest: "cambados-san-sadurnino.jpg",
    preferred: "Torre de San Sadurniño, Cambados.jpg",
    queries: ["San Sadurniño Cambados", "torre San Sadurniño"],
  },
  {
    dest: "cambados-pastora.jpg",
    preferred: "Mirador da Pastora, Cambados.jpg",
    queries: ["A Pastora Cambados", "mirador Pastora Cambados"],
  },
  // Meaño
  {
    dest: "meano-vinedos.jpg",
    preferred: "Viñedos de Albariño en Meaño.jpg",
    queries: ["Meaño viñedo", "Albariño Meaño", "viñas O Salnés"],
  },
  {
    dest: "meano-dena.jpg",
    preferred: "Dena, Meaño.jpg",
    queries: ["Dena Meaño", "Dena Galicia"],
  },
  {
    dest: "meano-san-xoan.jpg",
    preferred: "Igrexa de San Xoán de Meaño.jpg",
    queries: ["San Xoán Meaño", "iglesia Meaño"],
  },
  {
    dest: "meano-castrove.jpg",
    preferred: "Monte Castrove.jpg",
    queries: ["Monte Castrove", "Castrove Meaño"],
  },
  // A Illa
  {
    dest: "illa-puente.jpg",
    preferred: "Ponte da Illa de Arousa.jpg",
    queries: ["puente Illa de Arousa", "Ponte A Illa"],
  },
  {
    dest: "illa-xufre.jpg",
    preferred: "Porto do Xufre, A Illa de Arousa.jpg",
    queries: ["Xufre Illa", "porto Xufre"],
  },
  {
    dest: "illa-punta-cabalo.jpg",
    preferred: "Faro de Punta Cabalo, A Illa de Arousa.jpg",
    queries: ["Punta Cabalo", "faro Illa de Arousa"],
  },
  {
    dest: "illa-carreiron.jpg",
    preferred: "Parque Natural de Carreirón.jpg",
    queries: ["Carreirón Illa", "Carreiron Arousa"],
  },
  {
    dest: "illa-o-bao.jpg",
    preferred: "Praia do Bao, A Illa de Arousa.jpg",
    queries: ["Praia do Bao", "O Bao Illa de Arousa"],
  },
  // Vilanova
  {
    dest: "vilanova-paseo.jpg",
    preferred: "Vilanova de Arousa.jpg",
    queries: ["Vilanova de Arousa paseo", "Vilanova Arousa"],
  },
  {
    dest: "vilanova-terron.jpg",
    preferred: "Praia do Terrón, Vilanova de Arousa.jpg",
    queries: ["Terrón Vilanova", "O Terrón Arousa"],
  },
  {
    dest: "vilanova-valle-inclan.jpg",
    preferred: "Casa Museo de Valle-Inclán, Vilanova de Arousa.jpg",
    queries: ["Valle-Inclán Vilanova", "Casa do Cuadrante"],
  },
  {
    dest: "vilanova-sinas.jpg",
    preferred: "Praia das Sinas, Vilanova de Arousa.jpg",
    queries: ["As Sinas Vilanova", "Praia das Sinas"],
  },
  {
    dest: "vilanova-lobeira.jpg",
    preferred: "Monte Lobeira.jpg",
    queries: ["Monte Lobeira", "Lobeira Vilanova"],
  },
  // Vilagarcía
  {
    dest: "vilagarcia-paseo.jpg",
    preferred: "Paseo marítimo de Vilagarcía de Arousa.jpg",
    queries: ["Vilagarcía paseo", "Vilagarcia Arousa puerto"],
  },
  {
    dest: "vilagarcia-carril.jpg",
    preferred: "Puerto de Carril, Vilagarcía de Arousa.jpg",
    queries: ["Carril puerto", "O Carril Vilagarcía", "Carril Arousa"],
  },
  {
    dest: "vilagarcia-vista-alegre.jpg",
    preferred: "Pazo de Vista Alegre, Vilagarcía de Arousa.jpg",
    queries: ["Vista Alegre Vilagarcía", "convento Vista Alegre"],
  },
  {
    dest: "vilagarcia-estacion.jpg",
    preferred: "Estación de Vilagarcía de Arousa.jpg",
    queries: ["estación Vilagarcía", "tren Vilagarcia"],
  },
  {
    dest: "vilagarcia-compostela.jpg",
    preferred: "Praia de Compostela, Vilagarcía de Arousa.jpg",
    queries: ["Compostela Vilagarcía", "playa Compostela Arousa"],
  },
  {
    dest: "vilagarcia-cortegada.jpg",
    preferred: "Illa de Cortegada.jpg",
    queries: ["Cortegada isla", "Illa de Cortegada"],
  },
];

async function commonsUrl(fileTitle) {
  const api =
    "https://commons.wikimedia.org/w/api.php?action=query&titles=" +
    encodeURIComponent("File:" + fileTitle) +
    "&prop=imageinfo&iiprop=url&iiurlwidth=1600&format=json";
  const res = await fetch(api, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`API ${res.status}`);
  const data = await res.json();
  for (const p of Object.values(data.query?.pages ?? {})) {
    const info = p.imageinfo?.[0];
    if (!info) continue;
    return info.thumburl || info.url;
  }
  return null;
}

async function searchCommons(query) {
  const api =
    "https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=" +
    encodeURIComponent(query) +
    "&srnamespace=6&srlimit=8&format=json";
  const res = await fetch(api, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`search ${res.status}`);
  const data = await res.json();
  return (data.query?.search ?? []).map((s) => s.title.replace(/^File:/, ""));
}

async function download(url, dest) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  return { bytes: buf.length, hash: crypto.createHash("sha256").update(buf).digest("hex") };
}

async function resolveFile(preferred, queries) {
  let url = await commonsUrl(preferred);
  if (url) return { title: preferred, url };
  for (const q of queries) {
    const hits = await searchCommons(q);
    for (const title of hits) {
      url = await commonsUrl(title);
      if (url) return { title, url };
    }
  }
  return null;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

fs.mkdirSync(OUT, { recursive: true });

const seenHash = new Map();
let ok = 0;
let fail = 0;

for (const item of PLAN) {
  const dest = path.join(OUT, item.dest);
  process.stdout.write(`${item.dest} … `);
  try {
    const found = await resolveFile(item.preferred, item.queries);
    if (!found) {
      console.log("NO ENCONTRADA");
      fail++;
      await sleep(400);
      continue;
    }
    const { bytes, hash } = await download(found.url, dest);
    const prev = seenHash.get(hash);
    if (prev) {
      console.log(`DUP de ${prev} ← ${found.title}`);
      fail++;
    } else {
      seenHash.set(hash, item.dest);
      console.log(`OK (${Math.round(bytes / 1024)} KB) ← ${found.title}`);
      ok++;
    }
  } catch (e) {
    console.log("ERROR", e.message);
    fail++;
  }
  await sleep(700);
}

console.log(`\nListo: ${ok} distintas, ${fail} fallos/dup.`);
