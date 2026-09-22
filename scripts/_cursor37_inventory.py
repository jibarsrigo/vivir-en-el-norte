# -*- coding: utf-8 -*-
"""CURSOR_37 — inventario 16 zonas + scans factuales (solo lectura / JSON)."""
from __future__ import annotations

import hashlib
import json
import re
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output"
DATA = ROOT / "web" / "src" / "data"
COMP = ROOT / "web" / "src" / "components"
LIB = ROOT / "web" / "src" / "lib"

RELATO_ZONA = {
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

MUN_JSON = {
    "baixo-mino": "municipios-baixo-mino.json",
    "val-minor": "municipios-val-minor.json",
    "vigo-e-ria": "municipios-vigo-e-ria.json",
    "o-morrazo": "municipios-o-morrazo.json",
    "pontevedra-e-sanxenxo": "municipios-pontevedra-e-sanxenxo.json",
    "o-salnes": "municipios-o-salnes.json",
    "barbanza-e-noia": "municipios-barbanza-e-noia.json",
    "golfo-artabro-e-ferrol": "municipios-golfo-artabro-e-ferrol.json",
    "a-marina": "municipios-a-marina.json",
    "asturias-occidente": "municipios-asturias-occidente.json",
    "asturias-centro": "municipios-asturias-centro.json",
    "asturias-oriente": "municipios-asturias-oriente.json",
    "cantabria-occidental": "municipios-cantabria-occidental.json",
    "cantabria-oriental": "municipios-cantabria-oriental.json",
    "alto-minho": "municipios-alto-minho.json",
    "litoral-norte": "municipios-litoral-norte.json",
}

ND_SLUGS = {"vilaboa", "xove", "muros-de-nalon", "afife-carreco"}


def strip_jsx_strings(text: str) -> str:
    """Approx plain text from TSX: keep template/string content and JSX text nodes."""
    # remove imports
    t = re.sub(r"^import .+?;\n", "", text, flags=re.M)
    # keep {zona.X} as markers
    t = re.sub(r"\{zona\.([a-zA-Z0-9_.]+)\}", r"[zona.\1]", t)
    t = re.sub(r"\{mallorca\.([a-zA-Z0-9_.]+)\}", r"[mallorca.\1]", t)
    # remove JSX tags but keep text
    t = re.sub(r"<[^>]+>", " ", t)
    # collapse
    t = re.sub(r"\s+", " ", t)
    return t


def find_all(pat: re.Pattern[str], text: str) -> list[str]:
    return [m.group(0) for m in pat.finditer(text)]


def main() -> None:
    zonas_doc = json.loads((DATA / "zonas.json").read_text(encoding="utf-8"))
    zonas = zonas_doc["zonas"]
    assert len(zonas) == 16

    public_z = json.loads((ROOT / "web/public/data/zonas.json").read_text(encoding="utf-8"))
    pub_match = public_z == zonas_doc

    all_mun: list[dict] = []
    by_zona_json: dict[str, list[dict]] = {}
    for zid, fname in MUN_JSON.items():
        rows = json.loads((DATA / fname).read_text(encoding="utf-8"))
        by_zona_json[zid] = rows
        all_mun.extend(rows)
    assert len(all_mun) == 83

    manifest = json.loads((DATA / "v1" / "manifest.json").read_text(encoding="utf-8"))
    v1_manifest_entries = manifest["entries"]
    v1_zones = sorted(e["zonaId"] for e in v1_manifest_entries if e["tipo"] == "zona")
    v1_alt: list[str] = []

    inventory = []
    scans = {}
    coverage_names_zonas = []
    coverage_names_json = []

    price_pat = re.compile(
        r"(?:unos?\s+)?(?:alrededor\s+de\s+)?~?\s*\d{1,2}\.?\d{3}\s*€\s*/\s*m²?"
        r"|\d{1,2}\.?\d{3}\s*euros?\s*(?:el\s+metro|/m)"
        r"|\d{1,2}\.?\d{3}\s*€/m",
        re.I,
    )
    total_pat = re.compile(r"\b\d{2,3}\.?\d{3}\s*euros?\b", re.I)
    x10_pat = re.compile(r"\b\d{1,2}\s*/\s*10\b")
    sol_hard_pat = re.compile(
        r"\b(?:1\.?\d{3}|2\.?\d{3})\s*horas?\b|\b1\.939\b|\b1939\b|\b2\.050\b|\b2050\b",
        re.I,
    )
    mm_pat = re.compile(r"\b\d{1,2}\.?\d{3}\s*mil[ií]metros?\b|\b\d{3,4}\s*mm\b", re.I)
    min_pat = re.compile(r"\b(?:unos?\s+)?(?:alrededor\s+de\s+)?\d{1,2}\s*minutos?\b", re.I)
    rank_pat = re.compile(
        r"\b(?:más\s+barat|más\s+car|el\s+mejor|la\s+mejor|recomendaci[oó]n\s+más|"
        r"va\s+primero|gana\s+por)\b",
        re.I,
    )
    zona_field_pat = re.compile(r"zona\.(solHoras|despejados|cubiertos|lluviaDias|lluvia)")

    for z in zonas:
        zid = z["id"]
        relato_name = RELATO_ZONA[zid]
        relato_path = COMP / relato_name
        assert relato_path.exists(), relato_path
        text = relato_path.read_text(encoding="utf-8")
        plain = strip_jsx_strings(text)

        mun_json = by_zona_json[zid]
        names_json = [m["municipio"] for m in mun_json]
        names_zona = list(z["municipios"])
        coverage_names_zonas.extend(names_zona)
        coverage_names_json.extend(names_json)

        # V1 path from manifest
        v1_path = None
        for e in v1_manifest_entries:
            if e.get("tipo") == "zona" and e.get("zonaId") == zid:
                cand = DATA / "v1" / e["file"]
                v1_path = cand if cand.exists() else None
                break

        precios = []
        for m in mun_json:
            precios.append(
                {
                    "slug": m["slug"],
                    "nombre": m["municipio"],
                    "precioM2": m.get("precioM2"),
                    "nd": m["slug"] in ND_SLUGS or m.get("precioM2") is None,
                }
            )

        sol_mun = sorted({m.get("solHoras") for m in mun_json if m.get("solHoras") is not None})
        scan = {
            "hardcoded_prices": find_all(price_pat, plain),
            "hardcoded_totals": find_all(total_pat, plain)[:40],
            "x10": find_all(x10_pat, plain),
            "sol_hard": find_all(sol_hard_pat, plain)[:30],
            "mm_hard": find_all(mm_pat, plain),
            "minutes": find_all(min_pat, plain)[:40],
            "rank_hits": find_all(rank_pat, plain)[:30],
            "uses_zona_fields": sorted(set(zona_field_pat.findall(text))),
            "mentions_vilaboa_price": bool(
                re.search(r"Vilaboa.{0,80}(?:1\.?300|1300|€)", plain, re.I)
                or re.search(r"(?:1\.?300|1300).{0,80}Vilaboa", plain, re.I)
            ),
            "mentions_1939": bool(re.search(r"1939|1\.939", plain)),
            "len_chars": len(plain),
            "sha256": hashlib.sha256(text.encode("utf-8")).hexdigest(),
        }
        scans[zid] = scan

        inventory.append(
            {
                "id": zid,
                "nombre": z["zona"],
                "provincia": z["provincia"],
                "activa": z["activa"],
                "municipios_zonas_json": names_zona,
                "municipios_capa": names_json,
                "municipios_match": names_zona == names_json
                or sorted(names_zona) == sorted(names_json),
                "n_mun": len(names_json),
                "relato": str(relato_path.relative_to(ROOT)).replace("\\", "/"),
                "mun_json": f"web/src/data/{MUN_JSON[zid]}",
                "v1": str(v1_path.relative_to(ROOT)).replace("\\", "/") if v1_path else None,
                "clima_zona": {
                    "solHoras": z["solHoras"],
                    "despejados": z["despejados"],
                    "cubiertos": z["cubiertos"],
                    "lluviaDias": z["lluviaDias"],
                    "lluviaMm": z["lluviaMm"],
                    "tempVerano": z["tempVerano"],
                    "calorAprieta": z["calorAprieta"],
                    "clase": z["clase"],
                },
                "solHoras_municipales_set": sol_mun,
                "precios_capa": precios,
                "scan": scan,
            }
        )

    # membership coverage
    set_z = set(coverage_names_zonas)
    set_j = set(coverage_names_json)
    name_to_slug = {m["municipio"]: m["slug"] for m in all_mun}

    summary = {
        "n_zonas": len(inventory),
        "n_municipios_json": len(all_mun),
        "n_names_zonas_json": len(coverage_names_zonas),
        "public_zonas_json_identical": pub_match,
        "names_only_in_zonas": sorted(set_z - set_j),
        "names_only_in_mun_json": sorted(set_j - set_z),
        "duplicate_names_zonas": sorted(
            n for n, c in __import__("collections").Counter(coverage_names_zonas).items() if c > 1
        ),
        "v1_zona_hits": v1_zones or v1_alt,
        "inventory": inventory,
    }

    (OUT / "_cursor37_inventory.json").write_text(
        json.dumps(summary, ensure_ascii=False, indent=2), encoding="utf-8"
    )

    # compact matrix for report
    matrix = []
    for row in inventory:
        s = row["scan"]
        matrix.append(
            {
                "id": row["id"],
                "n_mun": row["n_mun"],
                "match": row["municipios_match"],
                "v1": bool(row["v1"]),
                "n_price_hits": len(s["hardcoded_prices"]),
                "n_x10": len(s["x10"]),
                "n_mm": len(s["mm_hard"]),
                "vilaboa_price": s["mentions_vilaboa_price"],
                "has_1939": s["mentions_1939"],
                "zona_fields": s["uses_zona_fields"],
                "sol_zona": row["clima_zona"]["solHoras"],
                "sol_mun_set": row["solHoras_municipales_set"],
            }
        )
    (OUT / "_cursor37_matrix.json").write_text(
        json.dumps(matrix, ensure_ascii=False, indent=2), encoding="utf-8"
    )

    print("ZONAS", len(inventory))
    print("MUN", len(all_mun))
    print("public_match", pub_match)
    print("only_zonas", summary["names_only_in_zonas"])
    print("only_json", summary["names_only_in_mun_json"])
    print("dups", summary["duplicate_names_zonas"])
    for m in matrix:
        print(
            m["id"],
            "prices",
            m["n_price_hits"],
            "x10",
            m["n_x10"],
            "vilaboa",
            m["vilaboa_price"],
            "1939",
            m["has_1939"],
            "v1",
            m["v1"],
            "match",
            m["match"],
        )


if __name__ == "__main__":
    main()
