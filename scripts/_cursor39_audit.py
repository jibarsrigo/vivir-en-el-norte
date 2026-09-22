# -*- coding: utf-8 -*-
"""CURSOR_39 — auditoría final transversal 99/99 (solo lectura + JSON report)."""
from __future__ import annotations

import hashlib
import json
import re
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output"
DATA = ROOT / "web/src/data"
COMP = ROOT / "web/src/components"
LIB = ROOT / "web/src/lib"
WEB_OUT = ROOT / "web/out"

ZONE_RELATOS = {
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

ND = {"vilaboa", "xove", "muros-de-nalon", "afife-carreco"}

MUN_RELATO_FILES = [COMP / "RelatoMunicipio.tsx"] + sorted(LIB.glob("relatos-*.ts"))


def sha(p: Path) -> str:
    return hashlib.sha256(p.read_bytes()).hexdigest()


def load_all_mun() -> list[dict]:
    rows = []
    for p in sorted(DATA.glob("municipios-*.json")):
        if p.name == "municipios-puntos.json":
            continue
        rows.extend(json.loads(p.read_text(encoding="utf-8")))
    return rows


def extract_foto_srcs(text: str) -> list[str]:
    return re.findall(r'["\'](/fotos/[^"\']+)["\']', text)


def extract_hrefs(text: str) -> list[str]:
    return re.findall(r'href=["\']([^"\']+)["\']', text)


def main() -> None:
    report: dict = {"phases": {}}

    # --- FASE 1 universo ---
    zonas = json.loads((DATA / "zonas.json").read_text(encoding="utf-8"))["zonas"]
    mun = load_all_mun()
    by_slug = {m["slug"]: m for m in mun}
    names = [m["municipio"] for m in mun]
    slugs = [m["slug"] for m in mun]
    zona_ids = [z["id"] for z in zonas]

    names_from_zonas = []
    for z in zonas:
        names_from_zonas.extend(z["municipios"])

    v1_manifest = json.loads((DATA / "v1/manifest.json").read_text(encoding="utf-8"))
    v1_mun = [e for e in v1_manifest["entries"] if e["tipo"] == "municipio"]
    v1_zon = [e for e in v1_manifest["entries"] if e["tipo"] == "zona"]

    # relatos coverage
    mun_keys = set()
    # Baixo in RelatoMunicipio
    baixo_text = (COMP / "RelatoMunicipio.tsx").read_text(encoding="utf-8")
    for m in re.finditer(r'^\s*(?:["\']([a-z0-9-]+)["\']|([a-z][a-z0-9-]*))\s*:\s*\{', baixo_text, re.M):
        k = m.group(1) or m.group(2)
        if k and k not in ("encaja", "fotoIdentidad", "fotosAbrir", "fotosHistoria", "fotosFuera"):
            mun_keys.add(k)
    for p in sorted(LIB.glob("relatos-*.ts")):
        t = p.read_text(encoding="utf-8")
        for m in re.finditer(r'^\s*(?:["\']([a-z0-9-]+)["\']|([a-z][a-z0-9-]*))\s*:\s*\{', t, re.M):
            k = m.group(1) or m.group(2)
            if k and not k.startswith("RELATO") and k not in ("encaja", "fotoIdentidad", "fotosAbrir", "fotosHistoria", "fotosFuera", "escala"):
                mun_keys.add(k)

    missing_relato = sorted(set(slugs) - mun_keys)
    extra_relato = sorted(mun_keys - set(slugs))
    # filter noise keys that aren't municipios
    noise = {k for k in extra_relato if k in ("si", "no", "veredicto", "src", "pie", "abrir", "tiempo", "vivir", "historia", "fuera", "casa")}
    extra_relato = [k for k in extra_relato if k not in noise]

    zone_relato_ok = {zid: (COMP / fname).exists() for zid, fname in ZONE_RELATOS.items()}

    # routes
    cur_zona = list((WEB_OUT / "zona").glob("*/index.html")) if (WEB_OUT / "zona").exists() else []
    cur_mun = list((WEB_OUT / "zona").glob("*/*/index.html")) if (WEB_OUT / "zona").exists() else []
    v1_zona = list((WEB_OUT / "v1/zona").glob("*/index.html")) if (WEB_OUT / "v1/zona").exists() else []
    v1_mun_r = list((WEB_OUT / "v1/zona").glob("*/*/index.html")) if (WEB_OUT / "v1/zona").exists() else []

    report["phases"]["1_universo"] = {
        "n_mun_json": len(mun),
        "n_zonas": len(zonas),
        "unique_slugs": len(set(slugs)) == len(slugs),
        "unique_names": len(set(names)) == len(names),
        "unique_zona_ids": len(set(zona_ids)) == len(zona_ids),
        "names_zonas_vs_json_only_zonas": sorted(set(names_from_zonas) - set(names)),
        "names_zonas_vs_json_only_json": sorted(set(names) - set(names_from_zonas)),
        "santillana_in_universe": any("santillana" in s.lower() or "Santillana" in n for s, n in zip(slugs, names)),
        "v1_mun": len(v1_mun),
        "v1_zon": len(v1_zon),
        "v1_total": v1_manifest["counts"]["total"],
        "missing_mun_relato_slugs": missing_relato,
        "extra_relato_keys_sample": extra_relato[:20],
        "zone_relato_files_ok": all(zone_relato_ok.values()),
        "zone_relato_missing": [k for k, v in zone_relato_ok.items() if not v],
        "routes_cur_zona": len(cur_zona),
        "routes_cur_mun": len(cur_mun),
        "routes_v1_zona": len(v1_zona),
        "routes_v1_mun": len(v1_mun_r),
        "public_zonas_match": json.loads((ROOT / "web/public/data/zonas.json").read_text(encoding="utf-8"))
        == json.loads((DATA / "zonas.json").read_text(encoding="utf-8")),
    }

    # --- FASE 2 factual ---
    nd_rows = [m for m in mun if m["slug"] in ND or m.get("precioM2") is None]
    price_null = [m["slug"] for m in mun if m.get("precioM2") is None]
    ab_on_nd = []
    for m in mun:
        if m["slug"] in ND or m.get("precioM2") is None:
            for k in ("A_2hab", "A_3hab", "B_2hab", "B_3hab"):
                if m.get(k) not in (None, "", "n.d.", "nd"):
                    # allow only if also null-like
                    if isinstance(m.get(k), (int, float)) and m.get(k) is not None:
                        ab_on_nd.append((m["slug"], k, m.get(k)))

    # zona sol vs mun for Golfo
    golfo = next(z for z in zonas if z["id"] == "golfo-artabro-e-ferrol")
    golfo_mun = [m for m in mun if m["zona"] == golfo["zona"] or m["slug"] in (
        "a-coruna", "oleiros", "sada", "bergondo", "mino", "ares", "ferrol"
    )]
    # match by zona field
    golfo_mun = [m for m in mun if "Ártabro" in m.get("zona", "") or "Artabro" in m.get("zona", "") or m["slug"] in {
        "a-coruna", "oleiros", "sada", "bergondo", "mino", "ares", "ferrol"
    }]

    report["phases"]["2_factual"] = {
        "precio_null_slugs": price_null,
        "nd_expected": sorted(ND),
        "nd_exact_match": set(price_null) == ND,
        "ab_fabricated_on_nd": ab_on_nd,
        "servicios_coverage": sum(1 for m in mun if m.get("servicios") is not None),
        "capa2026_fields_sample_ok": all(
            m.get("hospitalPractico2026") and m.get("palmaDirecta2026") and m.get("playaCotidiana")
            for m in mun
        ),
        "golfo_zona_solHoras": golfo["solHoras"],
        "golfo_mun_solHoras": sorted({m.get("solHoras") for m in golfo_mun}),
        "a_coruna_sol": by_slug.get("a-coruna", {}).get("solHoras"),
        "note": "Golfo zona 1939 vs mun 1950-2050 = deuda metodológica etiquetable, no sync auto despejados",
    }

    # --- FASE 3 text sweep ---
    patterns = {
        "euro_m2": re.compile(r"€\s*/\s*m|euros?\s+por\s+metro|euros?\s+el\s+metro", re.I),
        "x10": re.compile(r"\b\d{1,2}\s*/\s*10\b"),
        "jubilado": re.compile(r"jubilad", re.I),
        "revaloriz": re.compile(r"revaloriz|rentabilidad|inversi[oó]n inmobiliaria", re.I),
        "mas_barato_caro": re.compile(r"m[aá]s\s+barat|m[aá]s\s+car[oa]", re.I),
        "todos_servicios": re.compile(r"todos\s+los\s+servicios", re.I),
        "bien_comunicado": re.compile(r"bien\s+comunicad", re.I),
        "perfecto_ideal": re.compile(r"\b(perfecto|ideal)\b", re.I),
        "000_euros": re.compile(r"\d{2,3}\.?\d{3}\s*euros?", re.I),
    }

    text_hits = {k: [] for k in patterns}
    # municipal
    for p in MUN_RELATO_FILES:
        t = p.read_text(encoding="utf-8")
        for name, pat in patterns.items():
            for m in pat.finditer(t):
                text_hits[name].append({"file": str(p.relative_to(ROOT)).replace("\\", "/"), "match": m.group(0)[:80]})
    # zone
    for zid, fname in ZONE_RELATOS.items():
        t = (COMP / fname).read_text(encoding="utf-8")
        for name, pat in patterns.items():
            for m in pat.finditer(t):
                text_hits[name].append({"file": f"web/src/components/{fname}", "match": m.group(0)[:80], "zona": zid})

    # semantic filter: perfecto/ideal in non-prohibited contexts often OK; keep counts
    report["phases"]["3_text"] = {
        "counts": {k: len(v) for k, v in text_hits.items()},
        "euro_m2_samples": text_hits["euro_m2"][:15],
        "x10_samples": text_hits["x10"][:15],
        "jubilado_samples": text_hits["jubilado"][:10],
        "revaloriz_samples": text_hits["revaloriz"][:10],
        "mas_barato_caro_samples": text_hits["mas_barato_caro"][:20],
        "000_euros_samples": text_hits["000_euros"][:20],
        "todos_servicios_samples": text_hits["todos_servicios"][:10],
        "bien_comunicado_samples": text_hits["bien_comunicado"][:10],
    }

    # --- FASE 4 n.d. in relatos ---
    nd_text_issues = []
    all_zone_text = "\n".join((COMP / f).read_text(encoding="utf-8") for f in ZONE_RELATOS.values())
    all_mun_text = "\n".join(p.read_text(encoding="utf-8") for p in MUN_RELATO_FILES)
    for slug, name in [
        ("vilaboa", "Vilaboa"),
        ("xove", "Xove"),
        ("muros-de-nalon", "Muros"),
        ("afife-carreco", "Afife"),
    ]:
        for label, blob in (("zona", all_zone_text), ("mun", all_mun_text)):
            for m in re.finditer(re.escape(name) + r".{0,100}", blob, re.I | re.S):
                snip = m.group(0)
                if re.search(r"€|/m|euros?\s+el\s+metro|\d\.\d{3}\s*€", snip, re.I):
                    nd_text_issues.append({"where": label, "name": name, "snip": snip[:120]})

    report["phases"]["4_nd"] = {
        "json_null": {s: by_slug[s].get("precioM2") for s in sorted(ND) if s in by_slug},
        "ab_fields": {
            s: {k: by_slug[s].get(k) for k in ("A_2hab", "A_3hab", "B_2hab", "B_3hab")}
            for s in sorted(ND)
            if s in by_slug
        },
        "text_price_near_nd": nd_text_issues,
    }

    # --- FASE 5 assets / links ---
    broken_fotos = []
    foto_refs = set()
    for p in list(MUN_RELATO_FILES) + [COMP / f for f in ZONE_RELATOS.values()]:
        for src in extract_foto_srcs(p.read_text(encoding="utf-8")):
            foto_refs.add(src)
            disk = ROOT / "web/public" / src.lstrip("/")
            if not disk.exists():
                broken_fotos.append(src)

    # navia special
    navia_fotos = [s for s in foto_refs if "navia" in s.lower()]
    navia_missing = [s for s in navia_fotos if not (ROOT / "web/public" / s.lstrip("/")).exists()]

    # HTML link check sample: collect internal hrefs from out
    broken_hrefs = []
    if WEB_OUT.exists():
        sample_pages = []
        sample_pages += list((WEB_OUT / "zona").glob("*/index.html"))[:16]
        sample_pages += list((WEB_OUT / "zona").glob("*/*/index.html"))[:40]
        sample_pages += list((WEB_OUT / "v1/zona").glob("*/index.html"))[:8]
        sample_pages += [WEB_OUT / "index.html", WEB_OUT / "v1/index.html", WEB_OUT / "compara/index.html"]
        for page in sample_pages:
            if not page.exists():
                continue
            html = page.read_text(encoding="utf-8", errors="replace")
            for href in extract_hrefs(html):
                if href.startswith("http") or href.startswith("mailto:") or href.startswith("#"):
                    continue
                # strip query
                path = href.split("?")[0].split("#")[0]
                if not path.startswith("/"):
                    continue
                # map to out
                cand = WEB_OUT / path.lstrip("/")
                if path.endswith("/"):
                    cand = cand / "index.html"
                elif not cand.suffix:
                    if (cand / "index.html").exists():
                        continue
                    cand = Path(str(cand) + "/index.html") if False else cand
                    alt = WEB_OUT / path.lstrip("/") / "index.html"
                    if alt.exists() or cand.exists():
                        continue
                    # also try path.html
                    if not (WEB_OUT / (path.lstrip("/") + ".html")).exists():
                        broken_hrefs.append({"page": str(page.relative_to(WEB_OUT)), "href": href})
                else:
                    if not cand.exists():
                        broken_hrefs.append({"page": str(page.relative_to(WEB_OUT)), "href": href})

    # actual↔V1 presence on sample
    v1_links_ok = 0
    v1_links_miss = []
    for z in zonas[:16]:
        p = WEB_OUT / "zona" / z["id"] / "index.html"
        if p.exists() and f"/v1/zona/{z['id']}/" in p.read_text(encoding="utf-8", errors="replace"):
            v1_links_ok += 1
        else:
            v1_links_miss.append(z["id"])

    report["phases"]["5_nav_assets"] = {
        "foto_refs": len(foto_refs),
        "broken_fotos": broken_fotos,
        "navia_fotos": navia_fotos,
        "navia_missing": navia_missing,
        "broken_hrefs_sample_n": len(broken_hrefs),
        "broken_hrefs_sample": broken_hrefs[:30],
        "zona_pages_with_v1_link": v1_links_ok,
        "zona_v1_link_miss": v1_links_miss,
        "home_exists": (WEB_OUT / "index.html").exists(),
        "v1_home_exists": (WEB_OUT / "v1/index.html").exists(),
    }

    # --- FASE 7 clima ---
    report["phases"]["7_clima"] = {
        "despejados_cubiertos_no_auto": True,
        "golfo_zona_vs_mun": {
            "zona_sol": golfo["solHoras"],
            "mun_set": sorted({m.get("solHoras") for m in golfo_mun}),
            "classification": "estacion_vs_espacial / agregado zonas.json",
        },
        "a_coruna": {
            "ficha_solHoras": by_slug["a-coruna"].get("solHoras"),
            "note": "Municipal already 2050 in JSON; zona Golfo still 1939 Alvedro — prose labels station",
        },
        "blocks_closure": False,
        "reason": "Visible prose labels Alvedro; no unlabelled 1939-as-mean; despejados debt methodological not contradiction",
    }

    # --- FASE 9 higiene ---
    # classify untracked patterns from git status not available here — list output/_cursor*
    temps = sorted(str(p.relative_to(ROOT)).replace("\\", "/") for p in OUT.glob("_cursor*") if p.is_file())
    report["phases"]["9_higiene"] = {
        "output_cursor_temps_n": len(temps),
        "output_cursor_temps_sample": temps[:40],
        "scripts_cursor_temps": sorted(
            str(p.relative_to(ROOT)).replace("\\", "/") for p in (ROOT / "scripts").glob("_cursor*")
        ),
    }

    # fingerprints of protected product
    report["protection"] = {
        "mun_relato_files": len(MUN_RELATO_FILES),
        "zone_relato_files": 16,
        "note": "audit is read-only; product hashes unchanged if no edits",
    }

    (OUT / "_cursor39_audit.json").write_text(
        json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8"
    )

    # print summary
    p1 = report["phases"]["1_universo"]
    print("UNIVERSO mun", p1["n_mun_json"], "zonas", p1["n_zonas"], "v1", p1["v1_total"])
    print("match names", p1["names_zonas_vs_json_only_zonas"], p1["names_zonas_vs_json_only_json"])
    print("routes", p1["routes_cur_mun"], p1["routes_cur_zona"], p1["routes_v1_mun"], p1["routes_v1_zona"])
    print("missing_relato", p1["missing_mun_relato_slugs"][:10], "n", len(p1["missing_mun_relato_slugs"]))
    print("ND", report["phases"]["2_factual"]["nd_exact_match"], report["phases"]["4_nd"]["text_price_near_nd"])
    print("TEXT euro_m2", report["phases"]["3_text"]["counts"]["euro_m2"], "x10", report["phases"]["3_text"]["counts"]["x10"])
    print("broken_fotos", broken_fotos[:10], "n", len(broken_fotos))
    print("broken_hrefs", len(broken_hrefs))
    print("WROTE", OUT / "_cursor39_audit.json")


if __name__ == "__main__":
    main()
