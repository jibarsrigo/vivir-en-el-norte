/**
 * Descarga fotos de Wikimedia Commons para Val Miñor.
 * Uso: node scripts/descargar_fotos_val_minor.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "../web/public/fotos/val-minor");

/** filename Commons → destino local */
const FOTOS = [
  // Baiona
  ["Bayona - Pontevedra 13.jpg", "baiona-villa.jpg"],
  ["Baiona Monterreal.jpg", "baiona-monterreal.jpg"],
  ["Baiona - Paseo.jpg", "baiona-paseo.jpg"],
  ["Carabela Pinta, Baiona.jpg", "baiona-pinta.jpg"],
  ["Playa de Barbeira (Baiona).jpg", "baiona-barbeira.jpg"],
  ["Praia da Ladeira, Baiona.jpg", "baiona-ladeira.jpg"],
  // Nigrán
  ["Praia América, Nigrán.jpg", "nigran-praia-america.jpg"],
  ["Panxón.jpg", "nigran-panxon.jpg"],
  ["Templo Votivo del Mar - Panxón.jpg", "nigran-templo-votivo.jpg"],
  ["Monteferro - Monumento.jpg", "nigran-monteferro-monumento.jpg"],
  ["Praia de Patos, Nigrán.jpg", "nigran-patos.jpg"],
  ["Monteferro Nigrán.jpg", "nigran-monteferro.jpg"],
  // Gondomar
  ["Gondomar.jpg", "gondomar-villa.jpg"],
  ["Val Miñor desde Galiñeiro.jpg", "gondomar-valle.jpg"],
  ["Serra do Galiñeiro.jpg", "gondomar-galineiro.jpg"],
  ["Petroglifos Galiñeiro.jpg", "gondomar-petroglifos.jpg"],
  ["Río Miñor Gondomar.jpg", "gondomar-rio-minor.jpg"],
  ["Vincios Gondomar.jpg", "gondomar-vincios.jpg"],
];

async function commonsUrl(fileTitle) {
  const api =
    "https://commons.wikimedia.org/w/api.php?action=query&titles=" +
    encodeURIComponent("File:" + fileTitle) +
    "&prop=imageinfo&iiprop=url&format=json";
  const res = await fetch(api, {
    headers: { "User-Agent": "VivirEnElNorte/1.0 (local build script)" },
  });
  const data = await res.json();
  const pages = data.query?.pages ?? {};
  for (const p of Object.values(pages)) {
    const url = p.imageinfo?.[0]?.url;
    if (url) return url;
  }
  return null;
}

async function searchCommons(query) {
  const api =
    "https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=" +
    encodeURIComponent(query) +
    "&srnamespace=6&srlimit=5&format=json";
  const res = await fetch(api, {
    headers: { "User-Agent": "VivirEnElNorte/1.0 (local build script)" },
  });
  const data = await res.json();
  return (data.query?.search ?? []).map((s) => s.title.replace(/^File:/, ""));
}

async function download(url, dest) {
  const res = await fetch(url, {
    headers: { "User-Agent": "VivirEnElNorte/1.0 (local build script)" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  return buf.length;
}

async function resolveFile(preferred, fallbackQueries) {
  let url = await commonsUrl(preferred);
  if (url) return { title: preferred, url };
  for (const q of fallbackQueries) {
    const hits = await searchCommons(q);
    for (const title of hits) {
      url = await commonsUrl(title);
      if (url) return { title, url };
    }
  }
  return null;
}

const PLAN = [
  {
    dest: "baiona-villa.jpg",
    preferred: "Baiona.jpg",
    queries: ["Baiona bahía", "Baiona porto", "Bayona Galicia vista"],
  },
  {
    dest: "baiona-paseo.jpg",
    preferred: "Baiona paseo marítimo.jpg",
    queries: ["Baiona paseo", "Baiona port"],
  },
  {
    dest: "baiona-monterreal.jpg",
    preferred: "Castelo de Monterreal, Baiona.jpg",
    queries: ["Monterreal Baiona", "Fortaleza Monterreal"],
  },
  {
    dest: "baiona-pinta.jpg",
    preferred: "Carabela Pinta Baiona.jpg",
    queries: ["Pinta Baiona", "carabela Pinta"],
  },
  {
    dest: "baiona-barbeira.jpg",
    preferred: "Praia de Barbeira.jpg",
    queries: ["Barbeira Baiona", "playa Barbeira"],
  },
  {
    dest: "baiona-ladeira.jpg",
    preferred: "Praia da Ladeira.jpg",
    queries: ["Ladeira Baiona", "Praia Ladeira"],
  },
  {
    dest: "nigran-praia-america.jpg",
    preferred: "Praia América.jpg",
    queries: ["Praia América Nigrán", "Playa América Nigrán"],
  },
  {
    dest: "nigran-panxon.jpg",
    preferred: "Panxón.jpg",
    queries: ["Panxón Nigrán", "Panxon puerto"],
  },
  {
    dest: "nigran-templo-votivo.jpg",
    preferred: "Templo Votivo do Mar.jpg",
    queries: ["Templo Votivo Panxón", "Templo Votivo del Mar"],
  },
  {
    dest: "nigran-monteferro-monumento.jpg",
    preferred: "Monumento Marina Universal Monteferro.jpg",
    queries: ["Monteferro monumento", "Marina Universal Nigrán"],
  },
  {
    dest: "nigran-patos.jpg",
    preferred: "Praia de Patos.jpg",
    queries: ["Patos Nigrán playa", "Praia Patos"],
  },
  {
    dest: "nigran-monteferro.jpg",
    preferred: "Monteferro.jpg",
    queries: ["Monteferro Nigrán", "Monteferro sendero"],
  },
  {
    dest: "gondomar-villa.jpg",
    preferred: "Gondomar Pontevedra.jpg",
    queries: ["Gondomar Galicia", "Gondomar concello"],
  },
  {
    dest: "gondomar-valle.jpg",
    preferred: "Val Miñor.jpg",
    queries: ["Val Miñor valle", "Valle Miñor"],
  },
  {
    dest: "gondomar-galineiro.jpg",
    preferred: "Serra do Galiñeiro.jpg",
    queries: ["Galiñeiro", "Serra do Galineiro"],
  },
  {
    dest: "gondomar-petroglifos.jpg",
    preferred: "Petroglifos Galiñeiro.jpg",
    queries: ["petroglifo Galiñeiro", "petroglifos Vincios"],
  },
  {
    dest: "gondomar-rio-minor.jpg",
    preferred: "Río Miñor.jpg",
    queries: ["Río Miñor Gondomar", "Miñor río"],
  },
  {
    dest: "gondomar-vincios.jpg",
    preferred: "Vincios.jpg",
    queries: ["Vincios Gondomar", "Vincios Galicia"],
  },
];

fs.mkdirSync(OUT, { recursive: true });

for (const item of PLAN) {
  const dest = path.join(OUT, item.dest);
  process.stdout.write(`${item.dest} … `);
  try {
    const found = await resolveFile(item.preferred, item.queries);
    if (!found) {
      console.log("NO ENCONTRADA");
      continue;
    }
    const n = await download(found.url, dest);
    console.log(`OK (${Math.round(n / 1024)} KB) ← ${found.title}`);
  } catch (e) {
    console.log("ERROR", e.message);
  }
}
