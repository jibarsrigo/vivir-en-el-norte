"""Exporta Encaja si / No / Veredicto de todos los municipios a un TXT."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
WEB = ROOT / "web" / "src"
OUT = ROOT / "output" / "encaja_83_municipios.txt"


def unescape_ts(s: str) -> str:
    out: list[str] = []
    i = 0
    while i < len(s):
        if s[i] == "\\" and i + 1 < len(s):
            nxt = s[i + 1]
            if nxt == "n":
                out.append("\n")
            elif nxt == "t":
                out.append("\t")
            elif nxt in "\"'\\":
                out.append(nxt)
            else:
                out.append(nxt)
            i += 2
            continue
        out.append(s[i])
        i += 1
    return "".join(out)


def parse_quoted_strings(chunk: str) -> list[str]:
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
            out.append(unescape_ts("".join(buf)))
        else:
            i += 1
    return out


def matching_bracket(chunk: str, open_idx: int, open_ch: str = "[", close_ch: str = "]") -> str:
    depth = 0
    k = open_idx
    while k < len(chunk):
        c = chunk[k]
        if c == open_ch:
            depth += 1
        elif c == close_ch:
            depth -= 1
            if depth == 0:
                return chunk[open_idx : k + 1]
        elif c == '"':
            k += 1
            while k < len(chunk):
                if chunk[k] == "\\" and k + 1 < len(chunk):
                    k += 2
                    continue
                if chunk[k] == '"':
                    break
                k += 1
        k += 1
    return chunk[open_idx : open_idx + 20]


def extract_encaja(text: str) -> dict[str, tuple[list[str], list[str], str]]:
    results: dict[str, tuple[list[str], list[str], str]] = {}
    for m in re.finditer(
        r'(?:"([a-z0-9-]+)"|([a-z][a-z0-9-]*))\s*:\s*\{\s*\n\s*escala\s*:',
        text,
    ):
        slug = m.group(1) or m.group(2)
        chunk = text[m.start() : m.start() + 80000]
        enc = chunk.find("encaja:")
        if enc < 0:
            continue
        si_m = re.search(r"si\s*:\s*\[", chunk[enc:])
        no_m = re.search(r"no\s*:\s*\[", chunk[enc:])
        ver_m = re.search(r'veredicto\s*:\s*"', chunk[enc:])
        if not (si_m and no_m and ver_m):
            continue
        si_abs = enc + si_m.start()
        no_abs = enc + no_m.start()
        si_body = matching_bracket(chunk, chunk.index("[", si_abs))
        no_body = matching_bracket(chunk, chunk.index("[", no_abs))
        si = parse_quoted_strings(si_body)
        no = parse_quoted_strings(no_body)
        ver_abs = enc + ver_m.start()
        q = chunk.index('"', ver_abs + len("veredicto"))
        # single string: from q to closing quote
        ver_list = parse_quoted_strings(chunk[q : q + 12000])
        veredicto = ver_list[0] if ver_list else ""
        results[slug] = (si, no, veredicto)
    return results


def main() -> None:
    meta: dict[str, dict] = {}
    orden: list[str] = []
    for jf in sorted((WEB / "data").glob("municipios-*.json")):
        arr = json.loads(jf.read_text(encoding="utf-8"))
        for m in arr:
            slug = m.get("slug")
            if not slug or slug in meta:
                continue
            meta[slug] = {
                "nombre": m["municipio"],
                "zona": m.get("zona", ""),
                "n": m.get("n", 0),
            }
            orden.append(slug)
    orden.sort(key=lambda s: meta[s]["n"])

    by_slug: dict[str, tuple[list[str], list[str], str]] = {}
    files = [WEB / "components" / "RelatoMunicipio.tsx"] + sorted(
        (WEB / "lib").glob("relatos-*.ts")
    )
    for f in files:
        if f.exists():
            by_slug.update(extract_encaja(f.read_text(encoding="utf-8")))

    lines: list[str] = [
        "ENCAJA SI / NO ENCAJA / VEREDICTO — Vivir en el norte",
        "Fuente: relatos de municipio en el código.",
        f"Municipios en fichas: {len(orden)}",
        f"Con bloque Encaja: {sum(1 for s in orden if s in by_slug)}",
        "",
    ]

    for i, slug in enumerate(orden, 1):
        m = meta[slug]
        lines.append("=" * 72)
        lines.append(f"{i}. {m['nombre']}  [{m['zona']}]")
        lines.append(f"slug: {slug}")
        lines.append("-" * 72)
        if slug not in by_slug:
            lines.append("(Sin bloque Encaja en el relato)")
            lines.append("")
            continue
        si, no, ver = by_slug[slug]
        lines.append("ENCAJA SI")
        for n, p in enumerate(si, 1):
            lines.append(f"{n}) {p}")
            lines.append("")
        lines.append("NO ENCAJA")
        for n, p in enumerate(no, 1):
            lines.append(f"{n}) {p}")
            lines.append("")
        lines.append("VEREDICTO")
        lines.append(ver)
        lines.append("")

    missing = [s for s in orden if s not in by_slug]
    if missing:
        lines.append("FALTAN: " + ", ".join(missing))

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text("\n".join(lines), encoding="utf-8")
    print(f"wrote {OUT}")
    print(f"orden={len(orden)} relatos={len(by_slug)} missing={len(missing)}")
    if missing:
        print("missing:", ", ".join(missing))


if __name__ == "__main__":
    main()
