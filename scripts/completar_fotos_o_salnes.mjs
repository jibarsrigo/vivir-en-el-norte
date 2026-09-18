/**
 * Completa fotos únicas de O Salnés hasta 6/municipio (+ huecos de zona).
 * Uso: node scripts/completar_fotos_o_salnes.mjs
 */
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "../web/public/fotos/o-salnes");
const UA = "VivirEnElNorte/1.0 (completar o-salnes; local build)";

const STANDIN = new Set([
  "4BF4B9D0B9F6",
  "5407D14B34A3",
  "70660F472907",
  "72DFAF5048AB",
  "B91E79EFC2F7",
  "C4C467C7FFB2",
  "C88EB36B07CE",
]);

/** Solo destinos que faltan o siguen siendo stand-in. */
const PLAN = [
  // Meaño (+2)
  {
    dest: "meano-pazo.jpg",
    queries: ["Pazo Meaño", "pazo Albariño Salnés", "Pazo Fefiñáns exterior"],
    preferred: "Pazo en Meaño.jpg",
  },
  {
    dest: "meano-parroquia.jpg",
    queries: ["Santa Eulalia de Xil", "iglesia Xil Meaño", "Meaño Galicia iglesia"],
    preferred: "Igrexa de Santa Eulalia de Xil.jpg",
  },
  // Cambados (+1)
  {
    dest: "meano-umia.jpg",
    queries: ["río Umia Cambados", "Umia Salnés", "desembocadura Umia"],
    preferred: "Río Umia.jpg",
  },
  {
    dest: "cambados-pazo-interior.jpg",
    queries: ["Pazo Fefiñáns interior", "bodega Fefiñáns", "Cambados Albariño plaza"],
    preferred: "Pazo de Fefiñáns. Cambados- Galiza. CBD23.jpg",
  },
  // Illa (+2)
  {
    dest: "illa-o-bao.jpg",
    queries: ["Praia do Bao Illa de Arousa", "O Bao playa Arousa", "playa Bao Illa"],
    preferred: "Praia do Bao.jpg",
  },
  {
    dest: "illa-conserva.jpg",
    queries: ["conserva Illa de Arousa", "fábrica conserva Arousa", "Centro Interpretación Conserva"],
    preferred: "A Illa de Arousa.jpg",
  },
  // Vilanova (+3)
  {
    dest: "vilanova-paseo.jpg",
    queries: ["Vilanova de Arousa paseo", "Vilanova Arousa porto", "Vilanova de Arousa"],
    preferred: "Vilanova de Arousa.jpg",
  },
  {
    dest: "vilanova-terron.jpg",
    queries: ["O Terrón Vilanova", "Terrón Vilanova de Arousa", "praia Terrón"],
    preferred: "Praia do Terrón.jpg",
  },
  {
    dest: "vilanova-baion.jpg",
    queries: ["Pazo de Baión", "Baión Vilanova", "Pazo Baion Albariño"],
    preferred: "Pazo de Baión.jpg",
  },
  // Vilagarcía (+4)
  {
    dest: "vilagarcia-paseo.jpg",
    queries: ["Vilagarcía de Arousa paseo", "Vilagarcia puerto", "Vilagarcía Arousa"],
    preferred: "Vilagarcía de Arousa.jpg",
  },
  {
    dest: "vilagarcia-carril.jpg",
    queries: ["Carril Vilagarcía puerto", "O Carril Arousa", "Carril Galicia lonxa"],
    preferred: "O Carril, Vilagarcía de Arousa.jpg",
  },
  {
    dest: "vilagarcia-vista-alegre.jpg",
    queries: ["Vista Alegre Vilagarcía", "convento Vista Alegre", "Pazo Vista Alegre"],
    preferred: "Pazo de Vista Alegre.jpg",
  },
  {
    dest: "vilagarcia-estacion.jpg",
    queries: ["estación Vilagarcía tren", "estación de Vilagarcía de Arousa", "tren Vilagarcia"],
    preferred: "Estación de Vilagarcía de Arousa.jpg",
  },
  // Zona (+1) — foto propia de comarca/viñedo
  {
    dest: "zona-bateas-arousa.jpg",
    queries: ["bateas ría de Arousa", "mejillón bateas Galicia", "bateas Arousa"],
    preferred: "Bateas na ría de Arousa.jpg",
  },
];

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

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
    await sleep(1500);
    const hits = await searchCommons(q);
    for (const title of hits) {
      await sleep(900);
      url = await commonsUrl(title);
      if (url) return { title, url };
    }
  }
  return null;
}

fs.mkdirSync(OUT, { recursive: true });

const used = new Map();
for (const f of fs.readdirSync(OUT).filter((n) => n.endsWith(".jpg"))) {
  const buf = fs.readFileSync(path.join(OUT, f));
  const h = shortHash(buf);
  if (!STANDIN.has(h)) used.set(h, f);
}

let ok = 0;
let skip = 0;
let fail = 0;

for (const item of PLAN) {
  const dest = path.join(OUT, item.dest);
  if (fs.existsSync(dest)) {
    const h = shortHash(fs.readFileSync(dest));
    if (!STANDIN.has(h) && used.get(h) === item.dest) {
      console.log(`${item.dest} … ya OK`);
      skip++;
      continue;
    }
    if (!STANDIN.has(h) && !used.has(h)) {
      used.set(h, item.dest);
      console.log(`${item.dest} … ya OK`);
      skip++;
      continue;
    }
    if (!STANDIN.has(h) && used.get(h) === item.dest) {
      console.log(`${item.dest} … ya OK`);
      skip++;
      continue;
    }
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
      console.log(`stand-in ← ${found.title}`);
      fail++;
    } else if (used.has(h) && used.get(h) !== item.dest) {
      console.log(`DUP de ${used.get(h)} ← ${found.title}`);
      fail++;
    } else {
      fs.writeFileSync(dest, buf);
      used.set(h, item.dest);
      console.log(`OK ${Math.round(buf.length / 1024)}KB ${h} ← ${found.title}`);
      ok++;
    }
  } catch (e) {
    console.log("ERROR", e.message);
    fail++;
    if (e.message === "429") await sleep(10000);
  }
  await sleep(3000);
}

console.log(`\nOK ${ok}, skip ${skip}, fail ${fail}. Hashes buenos: ${used.size}`);
