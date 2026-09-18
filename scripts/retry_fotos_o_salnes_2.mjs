/** Retry 2 fotos pendientes O Salnés. Uso: node scripts/retry_fotos_o_salnes_2.mjs */
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "../web/public/fotos/o-salnes");
const UA = "VivirEnElNorte/1.0 (retry-2 o-salnes)";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function search(q) {
  const r = await fetch(
    "https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=" +
      encodeURIComponent(q) +
      "&srnamespace=6&srlimit=8&format=json",
    { headers: { "User-Agent": UA } },
  );
  if (r.status === 429) throw new Error("429");
  const d = await r.json();
  return (d.query?.search ?? []).map((s) => s.title.replace(/^File:/, ""));
}
async function urlFor(t) {
  const r = await fetch(
    "https://commons.wikimedia.org/w/api.php?action=query&titles=" +
      encodeURIComponent("File:" + t) +
      "&prop=imageinfo&iiprop=url&iiurlwidth=1400&format=json",
    { headers: { "User-Agent": UA } },
  );
  if (r.status === 429) throw new Error("429");
  const d = await r.json();
  for (const p of Object.values(d.query?.pages ?? {})) {
    const i = p.imageinfo?.[0];
    if (i) return i.thumburl || i.url;
  }
  return null;
}

const used = new Set();
for (const f of fs.readdirSync(OUT).filter((n) => n.endsWith(".jpg"))) {
  used.add(
    crypto.createHash("sha256").update(fs.readFileSync(path.join(OUT, f))).digest("hex").slice(0, 12).toUpperCase(),
  );
}

const plan = [
  ["illa-conserva.jpg", ["A Illa de Arousa", "Illa de Arousa porto", "Xufre Illa fábrica"]],
  ["vilagarcia-paseo.jpg", ["Vilagarcía de Arousa", "Vilagarcia paseo", "puerto Vilagarcía Arousa"]],
];

for (const [dest, qs] of plan) {
  process.stdout.write(`${dest} … `);
  try {
    let title = null;
    let url = null;
    for (const q of qs) {
      await sleep(2500);
      const hits = await search(q);
      for (const h of hits) {
        await sleep(1500);
        url = await urlFor(h);
        if (url) {
          title = h;
          break;
        }
      }
      if (url) break;
    }
    if (!url) {
      console.log("NO");
      continue;
    }
    const res = await fetch(url, { headers: { "User-Agent": UA } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    const h = crypto.createHash("sha256").update(buf).digest("hex").slice(0, 12).toUpperCase();
    if (used.has(h)) {
      console.log(`DUP ${h} ← ${title}`);
      continue;
    }
    fs.writeFileSync(path.join(OUT, dest), buf);
    used.add(h);
    console.log(`OK ${Math.round(buf.length / 1024)}KB ${h} ← ${title}`);
  } catch (e) {
    console.log("ERR", e.message);
    if (e.message === "429") await sleep(12000);
  }
  await sleep(4000);
}
