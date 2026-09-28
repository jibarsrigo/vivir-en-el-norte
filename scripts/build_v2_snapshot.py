# -*- coding: utf-8 -*-
"""Build frozen V2 snapshot from the CURRENT working tree (antes del cutover NUEVO2).

Writes ONLY under web/src/data/v2/. Does not modify V1, CURRENT product files, or NUEVO2.
"""
from __future__ import annotations

import hashlib
import json
import re
import subprocess
import sys
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "web" / "src" / "data" / "v2"
SOURCE_TAG = f"current-freeze-{date.today().isoformat()}"

ZONE_RELATO = {
    "baixo-mino": "RelatoBaixoMino.tsx",
    "val-minor": "RelatoValMinor.tsx",
    "vigo-e-ria": "RelatoVigoERia.tsx",
    "o-morrazo": "RelatoOMorrazo.tsx",
    "pontevedra-e-sanxenxo": "RelatoPontevedraESanxenxo.tsx",
    "o-salnes": "RelatoOSalnes.tsx",
    "barbanza-e-noia": "RelatoBarbanzaENoia.tsx",
    "golfo-artabro-e-ferrol": "RelatoGolfoArtabroEFerrol.tsx",
    "a-marina": "RelatoAMarina.tsx",
    "asturias-occidente": "RelatoAsturiasOccidente.tsx",
    "asturias-centro": "RelatoAsturiasCentro.tsx",
    "asturias-oriente": "RelatoAsturiasOriente.tsx",
    "cantabria-occidental": "RelatoCantabriaOccidental.tsx",
    "cantabria-oriental": "RelatoCantabriaOriental.tsx",
    "alto-minho": "RelatoAltoMinho.tsx",
    "litoral-norte": "RelatoLitoralNorte.tsx",
}

MUN_SOURCES = {
    "baixo-mino": ("web/src/components/RelatoMunicipio.tsx", "RELATOS_BAIXO_MINO", True),
    "val-minor": ("web/src/lib/relatos-val-minor.ts", "RELATOS_VAL_MINOR", False),
    "vigo-e-ria": ("web/src/lib/relatos-vigo-e-ria.ts", "RELATOS_VIGO_E_RIA", False),
    "o-morrazo": ("web/src/lib/relatos-o-morrazo.ts", "RELATOS_O_MORRAZO", False),
    "pontevedra-e-sanxenxo": (
        "web/src/lib/relatos-pontevedra-e-sanxenxo.ts",
        "RELATOS_PONTEVEDRA_E_SANXENXO",
        False,
    ),
    "o-salnes": ("web/src/lib/relatos-o-salnes.ts", "RELATOS_O_SALNES", False),
    "barbanza-e-noia": (
        "web/src/lib/relatos-barbanza-e-noia.ts",
        "RELATOS_BARBANZA_E_NOIA",
        False,
    ),
    "golfo-artabro-e-ferrol": (
        "web/src/lib/relatos-golfo-artabro-e-ferrol.ts",
        "RELATOS_GOLFO_ARTABRO_E_FERROL",
        False,
    ),
    "a-marina": ("web/src/lib/relatos-a-marina.ts", "RELATOS_A_MARINA", False),
    "asturias-occidente": (
        "web/src/lib/relatos-asturias-occidente.ts",
        "RELATOS_ASTURIAS_OCCIDENTE",
        False,
    ),
    "asturias-centro": (
        "web/src/lib/relatos-asturias-centro.ts",
        "RELATOS_ASTURIAS_CENTRO",
        False,
    ),
    "asturias-oriente": (
        "web/src/lib/relatos-asturias-oriente.ts",
        "RELATOS_ASTURIAS_ORIENTE",
        False,
    ),
    "cantabria-occidental": (
        "web/src/lib/relatos-cantabria-occidental.ts",
        "RELATOS_CANTABRIA_OCCIDENTAL",
        False,
    ),
    "cantabria-oriental": (
        "web/src/lib/relatos-cantabria-oriental.ts",
        "RELATOS_CANTABRIA_ORIENTAL",
        False,
    ),
    "alto-minho": ("web/src/lib/relatos-alto-minho.ts", "RELATOS_ALTO_MINHO", False),
    "litoral-norte": (
        "web/src/lib/relatos-litoral-norte.ts",
        "RELATOS_LITORAL_NORTE",
        False,
    ),
}


def run(cmd: list[str]) -> str:
    r = subprocess.run(cmd, cwd=ROOT, capture_output=True, text=True, encoding="utf-8")
    if r.returncode != 0:
        raise SystemExit(f"CMD FAIL {' '.join(cmd)}\n{r.stderr}")
    return r.stdout


def read_tree(path: str) -> str:
    """Read CURRENT source from the working tree (freeze point)."""
    full = ROOT / path
    if not full.is_file():
        raise SystemExit(f"STOP: missing CURRENT source {path}")
    return full.read_text(encoding="utf-8")


def sha256_text(s: str) -> str:
    return hashlib.sha256(s.encode("utf-8")).hexdigest()


def freeze_commit() -> str:
    """Record HEAD for provenance; freeze content comes from the working tree."""
    return run(["git", "rev-parse", "HEAD"]).strip()


def extract_object(text: str, key: str) -> str:
    markers = [
        f'  "{key}": {{',
        f'"{key}": {{',
        f"  {key}: {{",
        f"{key}: {{",
    ]
    start = None
    for m in markers:
        idx = text.find(m)
        if idx != -1:
            start = text.find("{", idx)
            break
    if start is None:
        raise KeyError(f"missing object key: {key}")
    depth = 0
    for i in range(start, len(text)):
        ch = text[i]
        if ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0:
                return text[start : i + 1]
    raise KeyError(f"unbalanced braces for key: {key}")


def extract_baixo_block(file_text: str) -> str:
    block_start = file_text.find("const RELATOS_BAIXO_MINO")
    if block_start < 0:
        raise KeyError("RELATOS_BAIXO_MINO not found")
    brace0 = file_text.find("{", block_start)
    depth = 0
    for i in range(brace0, len(file_text)):
        if file_text[i] == "{":
            depth += 1
        elif file_text[i] == "}":
            depth -= 1
            if depth == 0:
                return file_text[block_start : i + 1]
    raise KeyError("RELATOS_BAIXO_MINO unbalanced")


def find_credito(file_text: str) -> str:
    m = re.search(r'const credito\s*=\s*"([^"]*)"\s*;', file_text)
    if m:
        return m.group(1)
    # Baixo Miño embeds creditoFotos as literal string in some entries
    return "Fotos: Wikimedia Commons (licencias indicadas en los archivos de origen)."


def ts_object_to_json(obj_ts: str, credito: str) -> dict:
    """Parse RelatoMun-like TS object literal via Node (handles nested strings)."""
    node = Path(r"C:\Users\Jose\AppData\Local\nodejs-portable\node.exe")
    if not node.exists():
        # fallback PATH
        node = Path("node")
    # Substitute creditoFotos: credito
    prepared = re.sub(
        r"creditoFotos\s*:\s*credito\b",
        "creditoFotos: __CREDITO__",
        obj_ts,
    )
    # Remove TypeScript-only trailing commas before ] or } — Node tolerates them in modern engines
    script = r"""
const fs = require('fs');
const credito = JSON.parse(fs.readFileSync(0, 'utf8')).credito;
const objText = JSON.parse(fs.readFileSync(0, 'utf8'));
"""
    # Use file-based approach for reliability
    tmp_dir = ROOT / "output" / "_v1_tmp"
    tmp_dir.mkdir(parents=True, exist_ok=True)
    obj_path = tmp_dir / "obj.ts.txt"
    out_path = tmp_dir / "out.json"
    obj_path.write_text(prepared, encoding="utf-8")
    js = tmp_dir / "parse_relato.js"
    js.write_text(
        f"""
const fs = require('fs');
const credito = {json.dumps(credito, ensure_ascii=False)};
let raw = fs.readFileSync({json.dumps(str(obj_path))}, 'utf8');
raw = raw.replace(/__CREDITO__/g, JSON.stringify(credito));
// Strip import-like leftovers if any
let obj;
try {{
  obj = eval('(' + raw + ')');
}} catch (e) {{
  console.error('EVAL_FAIL', e.message);
  process.exit(2);
}}
fs.writeFileSync({json.dumps(str(out_path))}, JSON.stringify(obj, null, 2), 'utf8');
""",
        encoding="utf-8",
    )
    r = subprocess.run(
        [str(node) if node.name != "node" else "node", str(js)],
        cwd=ROOT,
        capture_output=True,
        text=True,
        encoding="utf-8",
    )
    if r.returncode != 0:
        raise SystemExit(f"Node parse fail: {r.stderr or r.stdout}\nobj preview: {obj_ts[:200]}")
    return json.loads(out_path.read_text(encoding="utf-8"))


def locale_es(n) -> str:
    s = f"{n:,}".replace(",", "X").replace(".", ",").replace("X", ".")
    # for integers like 2400 → 2.400
    if isinstance(n, float) and n == int(n):
        n = int(n)
    if isinstance(n, int):
        return f"{n:,}".replace(",", ".")
    return str(n)


def resolve_zona_expr(expr: str, zona: dict, mallorca: dict) -> str:
    expr = expr.strip()
    if expr == 'zona.solHoras.toLocaleString("es-ES")':
        return locale_es(zona["solHoras"])
    if expr == 'zona.lluviaMm.toLocaleString("es-ES")':
        return locale_es(zona["lluviaMm"])
    if expr == 'mallorca.solHoras.toLocaleString("es-ES")':
        return locale_es(mallorca["solHoras"])
    mapping = {
        "zona.despejados": zona["despejados"],
        "zona.cubiertos": zona["cubiertos"],
        "zona.lluviaDias": zona["lluviaDias"],
        "zona.tempVerano": zona["tempVerano"],
        "zona.zona": zona["zona"],
        "zona.id": zona["id"],
        "zona.lluvia.oct_mar": zona["lluvia"]["oct_mar"],
        "zona.lluvia.peor": zona["lluvia"]["peor"],
        "zona.lluvia.peor_n": zona["lluvia"]["peor_n"],
        "zona.lluvia.verano": zona["lluvia"]["verano"],
        "mallorca.despejados": mallorca["despejados"],
        "mallorca.lluviaDias": mallorca["lluviaDias"],
        "mallorca.lluvia.oct_mar": mallorca["lluvia"]["oct_mar"],
    }
    if expr in mapping:
        return str(mapping[expr])
    raise SystemExit(f"STOP: unresolved zona expr {{{expr}}}")


def strip_jsx_whitespace_exprs(s: str) -> str:
    """Remove JSX {" "}/{' '} serialization artifacts so frozen text matches CURRENT."""
    # {" "}, {' '}, {` `}, {"\n"}, etc. → single space
    s = re.sub(r'\{\s*["\']\s*["\']\s*\}', " ", s)
    s = re.sub(r"\{\s*`\s*`\s*\}", " ", s)
    # Literal leftover from a previous bad freeze: {" "}
    s = s.replace('{" "}', " ").replace("{' '}", " ")
    return s


def jsx_text_content(inner: str, zona: dict, mallorca: dict) -> str:
    """Flatten JSX children of <P>…</P> into plain text with expressions resolved."""
    s = strip_jsx_whitespace_exprs(inner)
    # Resolve {expr} after whitespace exprs so they don't collide
    def repl(m: re.Match) -> str:
        return resolve_zona_expr(m.group(1), zona, mallorca)

    s = re.sub(r"\{((?:zona|mallorca)\.[^}]+)\}", repl, s)
    # Any remaining empty JSX expr → space
    s = strip_jsx_whitespace_exprs(s)
    # Collapse whitespace between tags remnants / newlines
    s = re.sub(r"\s*\n\s*", " ", s)
    s = re.sub(r"\s{2,}", " ", s)
    return s.strip()


MAPA_DETALLE_ESTATICO = {
    "baixo-mino": "/mapas/zona_01_detalle.png",
    "val-minor": "/mapas/zona_02_detalle.png",
    "vigo-e-ria": "/mapas/zona_03_detalle.png",
    "o-morrazo": "/mapas/zona_04_detalle.png",
    "pontevedra-e-sanxenxo": "/mapas/zona_05_detalle.png",
    "o-salnes": "/mapas/zona_06_detalle.png",
    "barbanza-e-noia": "/mapas/zona_07_detalle.png",
    "golfo-artabro-e-ferrol": "/mapas/zona_08_detalle.png",
    "a-marina": "/mapas/zona_09_detalle.png",
    "asturias-occidente": "/mapas/zona_10_detalle.png",
    "asturias-centro": "/mapas/zona_11_detalle.png",
    "asturias-oriente": "/mapas/zona_12_detalle.png",
    "cantabria-occidental": "/mapas/zona_13_detalle.png",
    "cantabria-oriental": "/mapas/zona_14_detalle.png",
    "alto-minho": "/mapas/zona_15_detalle.png",
    "litoral-norte": "/mapas/zona_16_detalle.png",
}


def parse_ts_string_record(text: str, const_name: str) -> dict[str, str]:
    """Extract `const NAME: Record<..., string> = { key: "value", ... }`."""
    m = re.search(
        rf"(?:export\s+)?const {re.escape(const_name)}[^=]*=\s*\{{(.*?)\n\}};",
        text,
        re.S,
    )
    if not m:
        raise SystemExit(f"STOP: could not parse {const_name}")
    body = m.group(1)
    out: dict[str, str] = {}
    for m2 in re.finditer(
        r'(?:\"([^\"]+)\"|\'([^\']+)\'|([A-Za-z0-9_-]+))\s*:\s*\"((?:\\.|[^\"\\])*)\"',
        body,
    ):
        key = (m2.group(1) or m2.group(2) or m2.group(3) or "").strip()
        out[key] = json.loads('"' + m2.group(4) + '"')
    return out


def load_idealista_urls() -> tuple[dict[str, str], dict[str, str]]:
    text = read_tree("web/src/lib/idealista.ts")
    venta = "https://www.idealista.com/venta-viviendas"
    mun = parse_ts_string_record(text, "MUNICIPIO_PATH")
    zona = parse_ts_string_record(text, "ZONA_PATH")
    mun_urls = {k: f"{venta}/{v}/" for k, v in mun.items()}
    zona_urls = {k: f"{venta}/{v}/" for k, v in zona.items()}
    return mun_urls, zona_urls


def load_resumen_zona() -> dict[str, str]:
    text = read_tree("web/src/lib/zona-resumen.ts")
    return parse_ts_string_record(text, "RESUMEN_ZONA")


def extract_escala(tsx: str) -> dict[str, str]:
    m = re.search(r"const ESCALA:\s*Record<string,\s*string>\s*=\s*\{(.*?)\n\};", tsx, re.S)
    if not m:
        return {}
    body = m.group(1)
    out: dict[str, str] = {}
    for m2 in re.finditer(
        r'(?:\"([^\"]+)\"|([A-Za-zÁÉÍÓÚáéíóúÑñçÇ ]+))\s*:\s*\"([^\"]*)\"',
        body,
    ):
        key = (m2.group(1) or m2.group(2) or "").strip()
        out[key] = m2.group(3)
    return out


def parse_encaja(tsx: str) -> dict:
    # Find <Encaja ... /> block (may span lines)
    m = re.search(r"<Encaja\b([\s\S]*?)/\s*>", tsx)
    if not m:
        raise SystemExit("STOP: Encaja not found in zone relato")
    block = m.group(0)

    def arr(prop: str) -> list[str]:
        mm = re.search(rf"{prop}=\{{\[(.*?)\]\}}", block, re.S)
        if not mm:
            raise SystemExit(f"STOP: Encaja.{prop} missing")
        items = re.findall(r'"((?:\\.|[^"\\])*)"', mm.group(1))
        return [bytes(i, "utf-8").decode("unicode_escape") if "\\" in i else i for i in items]

    # Prefer unicode_escape carefully — our strings use \" rarely; use codecs
    def arr2(prop: str) -> list[str]:
        mm = re.search(rf"{prop}=\{{\[(.*?)\]\}}", block, re.S)
        if not mm:
            raise SystemExit(f"STOP: Encaja.{prop} missing")
        raw = mm.group(1)
        items = []
        for sm in re.finditer(r'"((?:\\.|[^"\\])*)"', raw):
            items.append(json.loads('"' + sm.group(1) + '"'))
        return items

    vm = re.search(r'veredicto=\{?"((?:\\.|[^"\\])*)"\}?', block)
    if not vm:
        # veredicto="..." without braces
        vm = re.search(r'veredicto="((?:\\.|[^"\\])*)"', block)
    if not vm:
        raise SystemExit("STOP: Encaja.veredicto missing")
    veredicto = json.loads('"' + vm.group(1) + '"')
    return {"si": arr2("si"), "no": arr2("no"), "veredicto": veredicto}


def parse_zone_tsx(tsx: str, zona: dict, mallorca: dict) -> dict:
    """Extract editorial blocks from zone Relato TSX; resolve clima interpolations with baseline zona."""
    blocks: list[dict] = []
    # Work on article body
    art = re.search(r"<article\b[^>]*>([\s\S]*)</article>", tsx)
    if not art:
        raise SystemExit("STOP: <article> not found in zone relato")
    body = art.group(1)

    # Expand calorAprieta conditional into plain paragraph or nothing
    def calor_repl(m: re.Match) -> str:
        if not zona.get("calorAprieta"):
            return ""
        inner = m.group(1)
        # resolve {zona.calorAprieta} inside
        text = re.sub(
            r"\{zona\.calorAprieta\}",
            str(zona["calorAprieta"]),
            inner,
        )
        text = re.sub(r"\s*\n\s*", " ", text)
        text = re.sub(r"\s{2,}", " ", text).strip()
        return f'<P>{text}</P>'

    body = re.sub(
        r"\{zona\.calorAprieta\s*\?\s*\(\s*<p[^>]*>([\s\S]*?)</p>\s*\)\s*:\s*null\}",
        calor_repl,
        body,
    )

    # Keep widgets as frozen markers (rendered from freeze data, not live CURRENT)
    body = re.sub(r"<TablaPrecios\b[^>]*/>", '<WIDGET type="tablaPrecios"/>', body)
    body = re.sub(r"<EnlaceIdealista\b[^>]*/>", '<WIDGET type="idealista"/>', body)
    body = re.sub(r"<MunicipiosZonaFin\b[^>]*/>", '<WIDGET type="municipiosFin"/>', body)

    # Tokenize by H2 / P / Foto / Encaja / Widget / credit p
    pos = 0
    patterns = [
        ("h2", re.compile(r"<H2>([\s\S]*?)</H2>")),
        ("p", re.compile(r"<P>([\s\S]*?)</P>")),
        (
            "foto",
            re.compile(
                r'<Foto\s+src="([^"]+)"\s+pie="((?:\\.|[^"\\])*)"\s*/>'
            ),
        ),
        ("encaja", re.compile(r"<Encaja\b[\s\S]*?/\s*>")),
        ("widget", re.compile(r'<WIDGET type="(tablaPrecios|idealista|municipiosFin)"/>')),
        (
            "credito",
            re.compile(
                r'<p className="mt-12[^"]*"[^>]*>([\s\S]*?)</p>'
            ),
        ),
    ]

    while pos < len(body):
        next_m = None
        next_kind = None
        next_start = len(body)
        for kind, cre in patterns:
            m = cre.search(body, pos)
            if m and m.start() < next_start:
                next_m = m
                next_kind = kind
                next_start = m.start()
        if not next_m:
            break
        if next_kind == "h2":
            blocks.append({"type": "h2", "text": jsx_text_content(next_m.group(1), zona, mallorca)})
        elif next_kind == "p":
            blocks.append({"type": "p", "text": jsx_text_content(next_m.group(1), zona, mallorca)})
        elif next_kind == "foto":
            pie = json.loads('"' + next_m.group(2) + '"')
            blocks.append({"type": "foto", "src": next_m.group(1), "pie": pie})
        elif next_kind == "encaja":
            enc = parse_encaja(next_m.group(0))
            blocks.append({"type": "encaja", **enc})
        elif next_kind == "widget":
            blocks.append({"type": next_m.group(1)})
        elif next_kind == "credito":
            blocks.append(
                {
                    "type": "credito",
                    "text": jsx_text_content(next_m.group(1), zona, mallorca),
                }
            )
        pos = next_m.end()

    if not any(b["type"] == "h2" for b in blocks):
        raise SystemExit(f"STOP: no H2 blocks parsed for zona {zona['id']}")
    if not any(b["type"] == "encaja" for b in blocks):
        raise SystemExit(f"STOP: no Encaja parsed for zona {zona['id']}")
    for w in ("tablaPrecios", "idealista", "municipiosFin"):
        if not any(b["type"] == w for b in blocks):
            raise SystemExit(f"STOP: missing widget marker {w} in zona {zona['id']}")

    return {
        "escalas": extract_escala(tsx),
        "blocks": blocks,
    }


def load_universe() -> tuple[list[dict], dict, dict, dict[str, list[dict]]]:
    zonas_doc = json.loads(read_tree("web/src/data/zonas.json"))
    mallorca = zonas_doc["mallorca"]
    zonas = zonas_doc["zonas"]
    if len(zonas) != 16:
        raise SystemExit(f"STOP: expected 16 zonas, got {len(zonas)}")
    fichas_by_zona: dict[str, list[dict]] = {}
    municipios: list[dict] = []
    for z in zonas:
        zid = z["id"]
        rows = json.loads(read_tree(f"web/src/data/municipios-{zid}.json"))
        if isinstance(rows, dict) and "municipios" in rows:
            rows = rows["municipios"]
        fichas_by_zona[zid] = rows
        for row in rows:
            municipios.append(
                {
                    "slug": row["slug"],
                    "nombre": row["municipio"],
                    "n": row["n"],
                    "zonaId": zid,
                    "zonaNombre": z["zona"],
                    "provincia": row.get("provincia"),
                    "pais": row.get("pais"),
                    "ficha": row,
                }
            )
    if len(municipios) != 83:
        raise SystemExit(f"STOP: expected 83 municipios, got {len(municipios)}")
    for m in municipios:
        if "santillana" in m["slug"] or "Santillana" in m["nombre"]:
            raise SystemExit("STOP: Santillana found in universe 83")
    return municipios, {z["id"]: z for z in zonas}, mallorca, fichas_by_zona


def main() -> None:
    commit = freeze_commit()
    print("FREEZE_OK", SOURCE_TAG, "HEAD", commit)

    municipios_meta, zonas_by_id, mallorca, fichas_by_zona = load_universe()
    idealista_mun, idealista_zona = load_idealista_urls()
    resumen_zona = load_resumen_zona()

    if OUT.exists():
        for sub in ("municipios", "zonas", "sources", "freeze"):
            p = OUT / sub
            if p.exists():
                for f in p.rglob("*"):
                    if f.is_file():
                        f.unlink()
    (OUT / "municipios").mkdir(parents=True, exist_ok=True)
    (OUT / "zonas").mkdir(parents=True, exist_ok=True)
    (OUT / "freeze").mkdir(parents=True, exist_ok=True)
    (OUT / "sources" / "municipios").mkdir(parents=True, exist_ok=True)
    (OUT / "sources" / "zonas").mkdir(parents=True, exist_ok=True)

    # Freeze shared CURRENT data snapshots (V2 must not read live CURRENT later)
    (OUT / "freeze" / "zonas.json").write_text(
        read_tree("web/src/data/zonas.json"), encoding="utf-8", newline="\n"
    )
    (OUT / "freeze" / "municipios-puntos.json").write_text(
        read_tree("web/src/data/municipios-puntos.json"), encoding="utf-8", newline="\n"
    )
    for zid in ZONE_RELATO:
        src = read_tree(f"web/src/data/municipios-{zid}.json")
        (OUT / "freeze" / f"municipios-{zid}.json").write_text(
            src, encoding="utf-8", newline="\n"
        )
    (OUT / "freeze" / "idealista.json").write_text(
        json.dumps(
            {"municipio": idealista_mun, "zona": idealista_zona},
            ensure_ascii=False,
            indent=2,
        )
        + "\n",
        encoding="utf-8",
        newline="\n",
    )
    (OUT / "freeze" / "resumen-zona.json").write_text(
        json.dumps(resumen_zona, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
        newline="\n",
    )
    (OUT / "freeze" / "mapa-detalle.json").write_text(
        json.dumps(MAPA_DETALLE_ESTATICO, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
        newline="\n",
    )

    manifest_entries: list[dict] = []
    asset_missing: list[str] = []

    src_cache: dict[str, str] = {}
    for zid, (path, _export, _baixo) in MUN_SOURCES.items():
        src_cache[zid] = read_tree(path)

    # Precompute escalas by zona from relatos (fallback to ESCALA in zone TSX later)
    escalas_por_slug: dict[str, str] = {}

    for meta in municipios_meta:
        zid = meta["zonaId"]
        slug = meta["slug"]
        path, export_name, is_baixo = MUN_SOURCES[zid]
        file_text = src_cache[zid]
        if is_baixo:
            scope = extract_baixo_block(file_text)
            obj_ts = extract_object(scope, slug)
        else:
            obj_ts = extract_object(file_text, slug)
        credito = find_credito(file_text)
        content_hash = sha256_text(obj_ts)
        relato = ts_object_to_json(obj_ts, credito)
        escalas_por_slug[slug] = relato.get("escala") or ""

        for group in (
            "fotosAbrir",
            "fotosHistoria",
            "fotosFuera",
            "fotosClima",
            "fotosVivir",
            "fotosCasa",
        ):
            for f in relato.get(group) or []:
                src = f.get("src") or ""
                if src.startswith("/"):
                    pub = ROOT / "web" / "public" / src.lstrip("/")
                    if not pub.exists():
                        asset_missing.append(f"{slug}:{src}")
        if relato.get("fotoIdentidad"):
            src = relato["fotoIdentidad"].get("src") or ""
            if src.startswith("/"):
                pub = ROOT / "web" / "public" / src.lstrip("/")
                if not pub.exists():
                    asset_missing.append(f"{slug}:{src}")

        fichas_zona = fichas_by_zona[zid]
        escalas_zona = {
            row["municipio"]: escalas_por_slug.get(row["slug"], "")
            for row in fichas_zona
        }
        # Fill escalas after first pass — second write below for neighbors
        entry = {
            "tipo": "municipio",
            "slug": slug,
            "nombre": meta["nombre"],
            "n": meta["n"],
            "zonaId": zid,
            "zonaNombre": meta["zonaNombre"],
            "provincia": meta["provincia"],
            "pais": meta["pais"],
            "sourcePath": path,
            "sourceKey": slug,
            "sourceExport": export_name,
            "sourceCommit": commit,
            "sourceTag": SOURCE_TAG,
            "contentHash": content_hash,
            "ficha": meta["ficha"],
            "fichasZona": fichas_zona,
            "idealistaUrl": idealista_mun.get(slug),
            "resumenZona": resumen_zona.get(zid),
            "relato": relato,
        }
        (OUT / "sources" / "municipios" / f"{slug}.ts.txt").write_text(
            obj_ts, encoding="utf-8", newline="\n"
        )
        (OUT / "municipios" / f"{slug}.json").write_text(
            json.dumps(entry, ensure_ascii=False, indent=2) + "\n",
            encoding="utf-8",
            newline="\n",
        )
        manifest_entries.append(
            {
                "tipo": "municipio",
                "slug": slug,
                "nombre": meta["nombre"],
                "zonaId": zid,
                "zonaNombre": meta["zonaNombre"],
                "n": meta["n"],
                "sourcePath": path,
                "sourceKey": slug,
                "sourceCommit": commit,
                "contentHash": content_hash,
                "file": f"municipios/{slug}.json",
            }
        )
        print(f"MUN {meta['n']:02d} {slug} hash={content_hash[:12]}")

    # Second pass: embed escalas de vecinos (now that all escalas_por_slug are known)
    for meta in municipios_meta:
        slug = meta["slug"]
        path_json = OUT / "municipios" / f"{slug}.json"
        entry = json.loads(path_json.read_text(encoding="utf-8"))
        entry["escalasZona"] = {
            row["municipio"]: escalas_por_slug.get(row["slug"], "")
            for row in entry["fichasZona"]
        }
        path_json.write_text(
            json.dumps(entry, ensure_ascii=False, indent=2) + "\n",
            encoding="utf-8",
            newline="\n",
        )

    for zid, fname in ZONE_RELATO.items():
        path = f"web/src/components/{fname}"
        tsx = read_tree(path)
        source_hash = sha256_text(tsx)
        zona = zonas_by_id[zid]
        parsed = parse_zone_tsx(tsx, zona, mallorca)
        for b in parsed["blocks"]:
            if b["type"] == "foto":
                pub = ROOT / "web" / "public" / b["src"].lstrip("/")
                if not pub.exists():
                    asset_missing.append(f"zona:{zid}:{b['src']}")

        display_payload = json.dumps(parsed["blocks"], ensure_ascii=False, separators=(",", ":"))
        content_hash = sha256_text(display_payload)

        # Prefer escalas from zone ESCALA; fill gaps from relatos
        escalas = dict(parsed["escalas"])
        for row in fichas_by_zona[zid]:
            if not escalas.get(row["municipio"]):
                escalas[row["municipio"]] = escalas_por_slug.get(row["slug"], "")

        entry = {
            "tipo": "zona",
            "zonaId": zid,
            "nombre": zona["zona"],
            "sourcePath": path,
            "sourceCommit": commit,
            "sourceTag": SOURCE_TAG,
            "sourceFileHash": source_hash,
            "contentHash": content_hash,
            "zonaBaseline": {
                k: zona[k]
                for k in (
                    "id",
                    "zona",
                    "provincia",
                    "pais",
                    "lat",
                    "lon",
                    "solHoras",
                    "despejados",
                    "cubiertos",
                    "lluviaDias",
                    "lluviaMm",
                    "lluvia",
                    "tempVerano",
                    "calorAprieta",
                    "viento",
                    "niebla",
                    "activa",
                )
                if k in zona
            },
            "mallorcaBaseline": mallorca,
            "fichas": fichas_by_zona[zid],
            "mapaDetalle": MAPA_DETALLE_ESTATICO.get(zid),
            "idealistaUrl": idealista_zona.get(zid),
            "resumen": resumen_zona.get(zid),
            "escalas": escalas,
            "blocks": parsed["blocks"],
            "serializationNote": (
                "Prosa + widgets congelados del Relato*.tsx CURRENT; "
                "interpolaciones {zona.*}/{mallorca.*} resueltas; "
                '{" "} JSX eliminado; fichas/Idealista/mapas embebidos en freeze/.'
            ),
        }
        (OUT / "sources" / "zonas" / f"{zid}.tsx.txt").write_text(
            tsx, encoding="utf-8", newline="\n"
        )
        (OUT / "zonas" / f"{zid}.json").write_text(
            json.dumps(entry, ensure_ascii=False, indent=2) + "\n",
            encoding="utf-8",
            newline="\n",
        )
        manifest_entries.append(
            {
                "tipo": "zona",
                "slug": zid,
                "nombre": zona["zona"],
                "zonaId": zid,
                "zonaNombre": zona["zona"],
                "sourcePath": path,
                "sourceCommit": commit,
                "contentHash": content_hash,
                "sourceFileHash": source_hash,
                "file": f"zonas/{zid}.json",
            }
        )
        print(f"ZONA {zid} source={source_hash[:12]} content={content_hash[:12]}")

    mun_n = sum(1 for e in manifest_entries if e["tipo"] == "municipio")
    zon_n = sum(1 for e in manifest_entries if e["tipo"] == "zona")
    if mun_n != 83 or zon_n != 16:
        raise SystemExit(f"STOP: coverage {mun_n}/83 municipios, {zon_n}/16 zonas")

    # Sanity: no JSX whitespace artifacts in zone prose
    for zid in ZONE_RELATO:
        doc = json.loads((OUT / "zonas" / f"{zid}.json").read_text(encoding="utf-8"))
        for b in doc["blocks"]:
            text = b.get("text") or ""
            if '{" "}' in text or "{' '}" in text:
                raise SystemExit(f"STOP: JSX artifact remains in zona {zid}: {text[:80]}")

    manifest = {
        "version": "v2",
        "title": "V2 · CURRENT congelado",
        "sourceTag": SOURCE_TAG,
        "sourceCommit": commit,
        "extractedFrom": (
            "Working tree CURRENT (relatos + Relato*.tsx + fichas JSON + "
            "Idealista/resúmenes/mapas); independiente de NUEVO2"
        ),
        "counts": {"municipios": mun_n, "zonas": zon_n, "total": mun_n + zon_n},
        "entries": manifest_entries,
        "assetMissing": asset_missing,
        "notes": [
            "Archivo congelado del CURRENT previo al cutover NUEVO2.",
            "Incluye widgets visibles (TablaPrecios, Idealista, MunicipiosZonaFin) con datos freeze.",
            "No actualizar al seguir desarrollando NUEVO2 ni al sincronizar master.",
            "No depende de rutas /nuevo2/ ni de Relato*.tsx en vivo.",
            "Santillana no forma parte del universo 83.",
        ],
    }
    (OUT / "manifest.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
        newline="\n",
    )

    readme = f"""# V2 · CURRENT congelado

Copia navegable y congelada de la web **CURRENT** tal como existía al crear V2
(antes de que NUEVO2 la sustituya).

## Fuente

- Tag de congelación: `{SOURCE_TAG}`
- HEAD de referencia: `{commit}`
- Contenido: working tree CURRENT (no NUEVO2)

## Qué contiene

- **83** municipios (`municipios/*.json`) con ficha + relato + Idealista
- **16** zonas (`zonas/*.json`) con prosa, widgets, fichas y mapa
- Datos compartidos en `freeze/` (zonas, municipios-*, Idealista, resúmenes, mapas)
- **99** entradas en `manifest.json`
- Fuentes literales en `sources/` para auditoría

## Qué NO es

- No es V1
- No es NUEVO2
- No se actualiza al desarrollar fichas NUEVO2
- No mezcla prosa futura con esta congelación

## Rutas públicas

- `/v2/`
- `/v2/zona/[id]/`
- `/v2/zona/[id]/[municipio]/`
"""
    (OUT / "README.md").write_text(readme, encoding="utf-8", newline="\n")

    print("---")
    print(f"WROTE {OUT}")
    print(f"municipios {mun_n}/83 zonas {zon_n}/16 total {mun_n + zon_n}/99")
    print(f"asset_missing {len(asset_missing)}")
    if asset_missing:
        for a in asset_missing[:20]:
            print("  MISSING", a)


if __name__ == "__main__":
    main()
