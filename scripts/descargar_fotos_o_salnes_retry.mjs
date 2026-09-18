/**
 * Reintenta solo fotos de O Salnés que siguen siendo stand-ins repetidos.
 * Uso: node scripts/descargar_fotos_o_salnes_retry.mjs
 */
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "../web/public/fotos/o-salnes");
const UA = "VivirEnElNorte/1.0 (retry; fotos o-salnes)";

/** Hashes de stand-ins conocidos (copias vacías / placeholders). */
const STANDIN = new Set([
  "4BF4B9D0B9F6",
  "5407D14B34A3",
  "70660F472907",
  "72DFAF5048AB",
  "B91E79EFC2F7",
  "C4C467C7FFB2",
  "C88EB36B07CE",
]);

const PLAN = [
  {
    dest: "cambados-pastora.jpg",
    preferred: "A Pastora, Cambados.jpg",
    queries: ["Pastora Cambados mirador", "A Pastora Cambados"],
  },
  {
    dest: "meano-vinedos.jpg",
    preferred: "Viñedos en Meaño.jpg",
    queries: ["viñedo Albariño Salnés", "viñas Cambados", "Albariño Galicia vineyard"],
  },
  {
    dest: "meano-dena.jpg",
    preferred: "Dena (Meaño).jpg",
    queries: ["Dena Meaño Galicia", "Meaño pueblo"],
  },
  {
    dest: "meano-san-xoan.jpg",
    preferred: "Igrexa de San Xoán de Meaño.jpg",
    queries: ["iglesia Meaño", "San Xoán Meaño Pontevedra"],
  },
  {
    dest: "meano-castrove.jpg",
    preferred: "Monte Castrove desde Meaño.jpg",
    queries: ["Monte Castrove Galicia", "Castrove Pontevedra"],
  },
  {
    dest: "illa-puente.jpg",
    preferred: "Ponte da Illa de Arousa 01.jpg",
    queries: ["Ponte Illa de Arousa", "bridge A Illa de Arousa"],
  },
  {
    dest: "illa-o-bao.jpg",
    preferred: "Praia do Bao.jpg",
    queries: ["Praia do Bao Arousa", "playa O Bao Illa"],
  },
  {
    dest: "vilanova-paseo.jpg",
    preferred: "Vilanova de Arousa - Porto.jpg",
    queries: ["Vilanova de Arousa", "Vilanova Arousa paseo"],
  },
  {
    dest: "vilanova-terron.jpg",
    preferred: "O Terrón Vilanova.jpg",
    queries: ["Terrón Vilanova de Arousa", "playa Terrón"],
  },
  {
    dest: "vilanova-valle-inclan.jpg",
    preferred: "Casa Museo Valle Inclán Vilanova.jpg",
    queries: ["Valle-Inclán Vilanova", "Casa do Cuadrante Vilanova"],
  },
  {
    dest: "vilanova-sinas.jpg",
    preferred: "Praia das Sinas.jpg",
    queries: ["As Sinas Vilanova", "Praia das Sinas Arousa"],
  },
  {
    dest: "vilanova-lobeira.jpg",
    preferred: "Cima do Monte Lobeira.jpg",
    queries: ["Monte Lobeira Galicia", "Lobeira Vilanova mirador"],
  },
  {
    dest: "vilagarcia-paseo.jpg",
    preferred: "Vilagarcía de Arousa.jpg",
    queries: ["Vilagarcía de Arousa puerto", "Vilagarcia paseo marítimo"],
  },
  {
    dest: "vilagarcia-carril.jpg",
    preferred: "O Carril, Vilagarcía de Arousa.jpg",
    queries: ["Carril Vilagarcía puerto", "O Carril Galicia", "Carril Arousa"],
  },
  {
    dest: "vilagarcia-vista-alegre.jpg",
    preferred: "Convento de Vista Alegre.jpg",
    queries: ["Vista Alegre Vilagarcía", "Pazo Vista Alegre"],
  },
  {
    dest: "vilagarcia-estacion.jpg",
    preferred: "Estación de tren de Vilagarcía de Arousa.jpg",
    queries: ["estación Vilagarcía Arousa", "tren Vilagarcía"],
  },
  {
    dest: "vilagarcia-compostela.jpg",
    preferred: "Playa de Compostela Vilagarcía.jpg",
    queries: ["Compostela Vilagarcía playa", "Praia de Compostela"],
  },
  {
    dest: "vilagarcia-cortegada.jpg",
    preferred: "Illa de Cortegada desde Carril.jpg",
    queries: ["Illa de Cortegada", "Cortegada Parque Nacional"],
  },
];

function shortHash(buf) {
  return crypto.createHash("sha256").update(buf).digest("hex").slice(0, 12).toUpperCase();
}

async function commonsUrl(fileTitle) {
  const api =
    "https://commons.wikimedia.org/w/api.php?action=query&titles=" +
    encodeURIComponent("File:" + fileTitle) +
    "&prop=imageinfo&iiprop=url&iiurlwidth=1400&format=json";
  const res = await fetch(api, { headers: { "User-Agent": UA } });
  if (res.status === 429) throw new Error("429");
  if (!res.ok) throw new Error(`API ${res.status}`);
  const data = await res.json();
  for (const p of Object.values(data.query?.pages ?? {})) {
    const info = p.imageinfo?.[0];
    if (info) return info.thumburl || info.url;
  }
  return null;
}

async function searchCommons(query) {
  const api =
    "https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=" +
    encodeURIComponent(query) +
    "&srnamespace=6&srlimit=8&format=json";
  const res = await fetch(api, { headers: { "User-Agent": UA } });
  if (res.status === 429) throw new Error("429");
  if (!res.ok) throw new Error(`search ${res.status}`);
  const data = await res.json();
  return (data.query?.search ?? []).map((s) => s.title.replace(/^File:/, ""));
}

async function resolveFile(preferred, queries) {
  let url = await commonsUrl(preferred);
  if (url) return { title: preferred, url };
  for (const q of queries) {
    await sleep(1200);
    const hits = await searchCommons(q);
    for (const title of hits) {
      await sleep(800);
      url = await commonsUrl(title);
      if (url) return { title, url };
    }
  }
  return null;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

const existingHashes = new Map();
for (const f of fs.readdirSync(OUT).filter((n) => n.endsWith(".jpg"))) {
  const buf = fs.readFileSync(path.join(OUT, f));
  const h = shortHash(buf);
  if (!STANDIN.has(h)) existingHashes.set(h, f);
}

let ok = 0;
let skip = 0;
let fail = 0;

for (const item of PLAN) {
  const dest = path.join(OUT, item.dest);
  const cur = fs.existsSync(dest) ? shortHash(fs.readFileSync(dest)) : null;
  if (cur && !STANDIN.has(cur)) {
    console.log(`${item.dest} … ya OK (${cur})`);
    skip++;
    continue;
  }
  process.stdout.write(`${item.dest} … `);
  try {
    const found = await resolveFile(item.preferred, item.queries);
    if (!found) {
      console.log("NO ENCONTRADA");
      fail++;
      await sleep(2500);
      continue;
    }
    const res = await fetch(found.url, { headers: { "User-Agent": UA } });
    if (res.status === 429) throw new Error("429");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    const h = shortHash(buf);
    if (STANDIN.has(h)) {
      console.log(`stand-in otra vez ← ${found.title}`);
      fail++;
    } else if (existingHashes.has(h) && existingHashes.get(h) !== item.dest) {
      console.log(`DUP de ${existingHashes.get(h)} ← ${found.title}`);
      fail++;
    } else {
      fs.writeFileSync(dest, buf);
      existingHashes.set(h, item.dest);
      console.log(`OK (${Math.round(buf.length / 1024)} KB, ${h}) ← ${found.title}`);
      ok++;
    }
  } catch (e) {
    console.log("ERROR", e.message);
    fail++;
    if (e.message === "429") await sleep(8000);
  }
  await sleep(2800);
}

console.log(`\nOK ${ok}, skip ${skip}, fail ${fail}. Únicas buenas: ${existingHashes.size}`);
