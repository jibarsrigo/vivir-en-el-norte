# -*- coding: utf-8 -*-
"""CURSOR_35: build frozen V1 snapshot from baseline-pre-revision-2026-09-21 / 5cff55d.

Writes ONLY under web/src/data/v1/. Does not modify current relatos or JSON product.
"""
from __future__ import annotations

import hashlib
import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "web" / "src" / "data" / "v1"
BASELINE_TAG = "baseline-pre-revision-2026-09-21"
EXPECTED_COMMIT = "5cff55db6c4576476cf4d5ae9ec039d9865ed1aa"

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


def git_show(path: str, commit: str) -> str:
    r = subprocess.run(
        ["git", "show", f"{commit}:{path}"],
        cwd=ROOT,
        capture_output=True,
    )
    if r.returncode != 0:
        raise SystemExit(f"git show failed: {commit}:{path}\n{r.stderr.decode('utf-8', 'replace')}")
    return r.stdout.decode("utf-8")


def sha256_text(s: str) -> str:
    return hashlib.sha256(s.encode("utf-8")).hexdigest()


def peel_baseline() -> str:
    peel = run(["git", "rev-list", "-n", "1", BASELINE_TAG]).strip()
    short = run(["git", "rev-parse", EXPECTED_COMMIT[:7]]).strip()
    if peel != EXPECTED_COMMIT:
        raise SystemExit(
            f"STOP: tag {BASELINE_TAG} peels to {peel}, expected {EXPECTED_COMMIT}"
        )
    if not short.startswith("5cff55d"):
        raise SystemExit(f"STOP: unexpected short commit {short}")
    return peel


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


def jsx_text_content(inner: str, zona: dict, mallorca: dict) -> str:
    """Flatten JSX children of <P>…</P> into plain text with expressions resolved."""
    s = inner
    # Remove nested tags that shouldn't appear in P (none expected)
    # Resolve {expr}
    def repl(m: re.Match) -> str:
        return resolve_zona_expr(m.group(1), zona, mallorca)

    s = re.sub(r"\{((?:zona|mallorca)\.[^}]+)\}", repl, s)
    # Collapse whitespace between tags remnants / newlines
    s = re.sub(r"\s*\n\s*", " ", s)
    s = re.sub(r"\s{2,}", " ", s)
    return s.strip()


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

    # Remove live widgets (not frozen editorial prose)
    body = re.sub(r"<TablaPrecios\b[^>]*/>", "", body)
    body = re.sub(r"<EnlaceIdealista\b[^>]*/>", "", body)
    body = re.sub(r"<MunicipiosZonaFin\b[^>]*/>", "", body)

    # Tokenize by H2 / P / Foto / Encaja / credit p
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
            # parse from match text
            enc = parse_encaja(next_m.group(0))
            blocks.append({"type": "encaja", **enc})
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

    return {
        "escalas": extract_escala(tsx),
        "blocks": blocks,
        "widgetsOmitidos": [
            "TablaPrecios (widget en vivo; no congelado con datos 2026)",
            "EnlaceIdealista (widget en vivo)",
            "MunicipiosZonaFin (sustituido por lista V1 del manifiesto)",
        ],
    }


def load_universe(commit: str) -> tuple[list[dict], dict, dict]:
    zonas_doc = json.loads(git_show("web/src/data/zonas.json", commit))
    mallorca = zonas_doc["mallorca"]
    zonas = zonas_doc["zonas"]
    if len(zonas) != 16:
        raise SystemExit(f"STOP: expected 16 zonas, got {len(zonas)}")
    municipios: list[dict] = []
    for z in zonas:
        zid = z["id"]
        rows = json.loads(git_show(f"web/src/data/municipios-{zid}.json", commit))
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
                }
            )
    if len(municipios) != 83:
        raise SystemExit(f"STOP: expected 83 municipios, got {len(municipios)}")
    # Santillana must not appear
    for m in municipios:
        if "santillana" in m["slug"] or "Santillana" in m["nombre"]:
            raise SystemExit("STOP: Santillana found in universe 83")
    return municipios, {z["id"]: z for z in zonas}, mallorca


def main() -> None:
    commit = peel_baseline()
    print("BASELINE_OK", commit)

    municipios_meta, zonas_by_id, mallorca = load_universe(commit)

    # Clean output dirs
    if OUT.exists():
        # Only remove our known structure
        for sub in ("municipios", "zonas", "sources"):
            p = OUT / sub
            if p.exists():
                for f in p.rglob("*"):
                    if f.is_file():
                        f.unlink()
    (OUT / "municipios").mkdir(parents=True, exist_ok=True)
    (OUT / "zonas").mkdir(parents=True, exist_ok=True)
    (OUT / "sources" / "municipios").mkdir(parents=True, exist_ok=True)
    (OUT / "sources" / "zonas").mkdir(parents=True, exist_ok=True)

    manifest_entries: list[dict] = []
    asset_missing: list[str] = []

    # --- MUNICIPIOS ---
    # Preload source files
    src_cache: dict[str, str] = {}
    for zid, (path, _export, _baixo) in MUN_SOURCES.items():
        src_cache[zid] = git_show(path, commit)

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

        # Asset check
        for group in ("fotosAbrir", "fotosHistoria", "fotosFuera"):
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
            "sourceTag": BASELINE_TAG,
            "contentHash": content_hash,
            "relato": relato,
        }
        # Write source object (literal) + entry
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

    # --- ZONAS ---
    for zid, fname in ZONE_RELATO.items():
        path = f"web/src/components/{fname}"
        tsx = git_show(path, commit)
        source_hash = sha256_text(tsx)
        zona = zonas_by_id[zid]
        parsed = parse_zone_tsx(tsx, zona, mallorca)
        # Asset check fotos in blocks
        for b in parsed["blocks"]:
            if b["type"] == "foto":
                pub = ROOT / "web" / "public" / b["src"].lstrip("/")
                if not pub.exists():
                    asset_missing.append(f"zona:{zid}:{b['src']}")

        # Hash of serialized editorial (blocks) for verification of display payload
        display_payload = json.dumps(parsed["blocks"], ensure_ascii=False, separators=(",", ":"))
        content_hash = sha256_text(display_payload)

        entry = {
            "tipo": "zona",
            "zonaId": zid,
            "nombre": zona["zona"],
            "sourcePath": path,
            "sourceCommit": commit,
            "sourceTag": BASELINE_TAG,
            "sourceFileHash": source_hash,
            "contentHash": content_hash,
            "zonaBaseline": {
                k: zona[k]
                for k in (
                    "id",
                    "zona",
                    "provincia",
                    "pais",
                    "solHoras",
                    "despejados",
                    "cubiertos",
                    "lluviaDias",
                    "lluviaMm",
                    "lluvia",
                    "tempVerano",
                    "calorAprieta",
                )
                if k in zona
            },
            "mallorcaBaseline": mallorca,
            "escalas": parsed["escalas"],
            "blocks": parsed["blocks"],
            "widgetsOmitidos": parsed["widgetsOmitidos"],
            "serializationNote": (
                "Prosa extraída del Relato*.tsx del baseline; "
                "interpolaciones {zona.*}/{mallorca.*} resueltas con zonas.json del mismo commit. "
                "Widgets en vivo (TablaPrecios/Idealista/MunicipiosZonaFin) omitidos a propósito."
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

    manifest = {
        "version": "v1",
        "title": "V1 · versión original",
        "sourceTag": BASELINE_TAG,
        "sourceCommit": commit,
        "extractedFrom": "Git baseline (literal); no reconstrucción manual",
        "counts": {"municipios": mun_n, "zonas": zon_n, "total": mun_n + zon_n},
        "entries": manifest_entries,
        "assetMissing": asset_missing,
        "notes": [
            "Archivo congelado. No actualizar al sincronizar v15/v16.",
            "Verificar con: python scripts/qa_v1.py",
            "Santillana no forma parte del universo 83.",
        ],
    }
    (OUT / "manifest.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
        newline="\n",
    )

    readme = f"""# V1 · versión original (archivo congelado)

Copia histórica, literal y verificable de los textos editoriales **anteriores a la revisión 2026**.

## Fuente

- Tag: `{BASELINE_TAG}`
- Commit: `{commit}`
- No usar `main` actual como sustituto.

## Qué contiene

- **83** municipios (`municipios/*.json`)
- **16** zonas (`zonas/*.json`)
- **99** entradas en `manifest.json`
- Fuentes literales en `sources/` (objetos TS / TSX del baseline) para auditoría

## Qué NO es

- No es la capa v15/v16
- No se actualiza al sincronizar master → web
- No mezcla prosa actual con histórica

## Verificar

```bash
python scripts/qa_v1.py
```

Debe reportar 83/83 + 16/16 y 99/99 hashes alineados con `git show {commit[:7]}:…`.
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
