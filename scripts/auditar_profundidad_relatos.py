"""Compara longitud de secciones del relato por zona (sin Encaja)."""
from __future__ import annotations

import re
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "web" / "src"
files = [ROOT / "components" / "RelatoMunicipio.tsx"] + sorted(
    (ROOT / "lib").glob("relatos-*.ts")
)


def parse_strings(chunk: str) -> list[str]:
    out: list[str] = []
    i = 0
    while i < len(chunk):
        if chunk[i] == '"':
            i += 1
            buf: list[str] = []
            while i < len(chunk):
                c = chunk[i]
                if c == "\\" and i + 1 < len(chunk):
                    buf.append(chunk[i : i + 2])
                    i += 2
                    continue
                if c == '"':
                    i += 1
                    break
                buf.append(c)
                i += 1
            t = "".join(buf).replace("\\n", "\n").replace('\\"', '"')
            out.append(t)
        else:
            i += 1
    return out


def array_body(chunk: str, name: str) -> str | None:
    m = re.search(rf"{name}\s*:\s*\[", chunk)
    if not m:
        return None
    j = chunk.index("[", m.start())
    depth = 0
    k = j
    while k < len(chunk):
        c = chunk[k]
        if c == "[":
            depth += 1
        elif c == "]":
            depth -= 1
            if depth == 0:
                return chunk[j : k + 1]
        elif c == '"':
            k += 1
            while k < len(chunk):
                if chunk[k] == "\\":
                    k += 2
                    continue
                if chunk[k] == '"':
                    break
                k += 1
        k += 1
    return None


def field_chars(chunk: str, name: str) -> tuple[int, int]:
    body = array_body(chunk, name)
    if not body:
        return 0, 0
    ss = parse_strings(body)
    return len(ss), sum(len(x) for x in ss)


rows: list[tuple[str, str, dict, int, int]] = []
for f in files:
    text = f.read_text(encoding="utf-8")
    zona = "baixo-mino" if f.name == "RelatoMunicipio.tsx" else f.stem.replace("relatos-", "")
    for m in re.finditer(
        r'(?:"([a-z0-9-]+)"|([a-z][a-z0-9-]*))\s*:\s*\{\s*\n\s*escala\s*:',
        text,
    ):
        slug = m.group(1) or m.group(2)
        chunk = text[m.start() : m.start() + 90000]
        # Cortar antes del siguiente municipio si aparece
        nxt = re.search(
            r'\n  (?:"[a-z0-9-]+"|[a-z][a-z0-9-]*)\s*:\s*\{\s*\n\s*escala\s*:',
            chunk[200:],
        )
        if nxt:
            chunk = chunk[: 200 + nxt.start()]
        parts = {
            name: field_chars(chunk, name)
            for name in ("abrir", "tiempo", "historia", "fuera", "casa")
        }
        fotos = len(re.findall(r"\{\s*src:", chunk))
        total = sum(c for _, c in parts.values())
        rows.append((zona, slug, parts, fotos, total))

agg: dict[str, list] = defaultdict(list)
for zona, slug, parts, fotos, total in rows:
    agg[zona].append((slug, parts, fotos, total))

order = [
    "baixo-mino",
    "val-minor",
    "vigo-e-ria",
    "o-morrazo",
    "pontevedra-e-sanxenxo",
    "o-salnes",
    "barbanza-e-noia",
    "golfo-artabro-e-ferrol",
    "a-marina",
    "asturias-occidente",
    "asturias-centro",
    "asturias-oriente",
    "cantabria-occidental",
    "cantabria-oriental",
    "alto-minho",
    "litoral-norte",
]

print(
    f"{'zona':28} {'n':>2} {'abrir':>6} {'tiempo':>6} {'hist':>6} "
    f"{'fuera':>6} {'casa':>6} {'fotos':>5} {'TOTAL':>6}"
)
for z in order:
    items = agg[z]
    n = len(items)

    def avg_chars(field: str) -> int:
        return int(sum(p[field][1] for _, p, _, _ in items) / n)

    af = int(sum(f for _, _, f, _ in items) / n)
    at = int(sum(t for _, _, _, t in items) / n)
    print(
        f"{z:28} {n:2} {avg_chars('abrir'):6} {avg_chars('tiempo'):6} "
        f"{avg_chars('historia'):6} {avg_chars('fuera'):6} {avg_chars('casa'):6} "
        f"{af:5} {at:6}"
    )

print("\nMás cortos (abrir+tiempo+historia+fuera+casa):")
for zona, slug, parts, fotos, total in sorted(rows, key=lambda x: x[4])[:8]:
    print(
        f"  {total:5} {slug:28} abrir {parts['abrir'][0]}p/{parts['abrir'][1]}c  "
        f"hist {parts['historia'][0]}p  fuera {parts['fuera'][0]}p  casa {parts['casa'][0]}p  fotos {fotos}"
    )

print("\nMás largos:")
for zona, slug, parts, fotos, total in sorted(rows, key=lambda x: x[4])[-5:]:
    print(
        f"  {total:5} {slug:28} abrir {parts['abrir'][0]}p/{parts['abrir'][1]}c  "
        f"hist {parts['historia'][0]}p  fuera {parts['fuera'][0]}p  casa {parts['casa'][0]}p  fotos {fotos}"
    )
