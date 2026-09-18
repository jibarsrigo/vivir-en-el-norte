import fs from "node:fs";

const t = fs.readFileSync("web/src/lib/relatos-o-salnes.ts", "utf8");
const keys = ["meano", "cambados", "a-illa-de-arousa", "vilanova-de-arousa", "vilagarcia-de-arousa"];
for (const k of keys) {
  const marker = k.includes("-") ? `\n  "${k}": {` : `\n  ${k}: {`;
  const i = t.indexOf(marker);
  const next = keys.map((x) => (x.includes("-") ? `\n  "${x}": {` : `\n  ${x}: {`)).filter((m) => t.indexOf(m) > i);
  const end = next.length ? Math.min(...next.map((m) => t.indexOf(m))) : t.length;
  const slice = t.slice(i, end);
  const files = [...slice.matchAll(/src: "([^"]+)"/g)].map((m) => m[1].split("/").pop());
  console.log(`${k}: ${files.length} → ${files.join(", ")}`);
}
const z = fs.readFileSync("web/src/components/RelatoOSalnes.tsx", "utf8");
const zs = [...z.matchAll(/Foto src="([^"]+)"/g)].map((m) => m[1].split("/").pop());
console.log(`zona: ${zs.length} → ${zs.join(", ")}`);
