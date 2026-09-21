#!/usr/bin/env python3
"""Sincroniza SOLO precio_m2_2026 y A/B 2026 desde v15 hacia los 16 JSON de ficha.

Uso:
  python scripts/sync_master_v15_to_web.py          # aplica
  python scripts/sync_master_v15_to_web.py --check  # solo verifica v15 ↔ JSON

No escribe el XLSX. No toca CSV, relatos, zonas ni capas.
"""

from __future__ import annotations

import argparse
import json
import math
import sys
from pathlib import Path

from openpyxl import load_workbook

ROOT = Path(__file__).resolve().parents[1]
XLSX = (
    ROOT
    / "data"
    / "master"
    / "TABLA_MAESTRA_VIVIR_EN_EL_NORTE_2026_v15_CANDIDATA_FINAL_CORREGIDA.xlsx"
)
DATA_DIR = ROOT / "web" / "src" / "data"

JSON_FILES = [
    "municipios-baixo-mino.json",
    "municipios-val-minor.json",
    "municipios-vigo-e-ria.json",
    "municipios-o-morrazo.json",
    "municipios-pontevedra-e-sanxenxo.json",
    "municipios-o-salnes.json",
    "municipios-barbanza-e-noia.json",
    "municipios-golfo-artabro-e-ferrol.json",
    "municipios-a-marina.json",
    "municipios-asturias-occidente.json",
    "municipios-asturias-centro.json",
    "municipios-asturias-oriente.json",
    "municipios-cantabria-occidental.json",
    "municipios-cantabria-oriental.json",
    "municipios-alto-minho.json",
    "municipios-litoral-norte.json",
]

EXPECTED_ND = {
    "Vilaboa",
    "Xove",
    "Muros de Nalón",
    "Afife-Carreço (Viana)",
}

PRICE_KEYS = ("precioM2", "A_2hab", "A_3hab", "B_2hab", "B_3hab")
FACTORS = {
    "A2_2026": 84.5,
    "A3_2026": 117.0,
    "B2_2026": 68.25,
    "B3_2026": 94.5,
}


def _norm(s: object) -> str:
    if s is None:
        return ""
    return str(s).strip()


def _as_number(val: object) -> float | None:
    if val is None:
        return None
    if isinstance(val, bool):
        return None
    if isinstance(val, (int, float)):
        if isinstance(val, float) and (math.isnan(val) or math.isinf(val)):
            return None
        return float(val)
    t = _norm(val).replace("\u00a0", " ")
    if not t:
        return None
    low = t.lower()
    if any(x in low for x in ("pendiente", "n.d", "nd", "no comparable", "sin dato")):
        return None
    t2 = t.replace(",", ".").replace("€", "").replace(" ", "")
    try:
        return float(t2)
    except ValueError:
        return None


def _excel_round0(x: float) -> int:
    if x >= 0:
        return int(math.floor(x + 0.5))
    return int(math.ceil(x - 0.5))


def _to_json_number(val: float | None) -> int | None:
    if val is None:
        return None
    return int(round(val))


def load_master() -> list[dict]:
    if not XLSX.is_file():
        raise SystemExit(f"ABORT: no existe {XLSX}")
    wb = load_workbook(XLSX, data_only=True, read_only=True)
    if "MAESTRA_83" not in wb.sheetnames:
        raise SystemExit("ABORT: falta hoja MAESTRA_83")
    rows = list(wb["MAESTRA_83"].iter_rows(values_only=True))
    headers = [_norm(h) for h in rows[0]]
    col = {name: i for i, name in enumerate(headers)}
    for need in ("n", "municipio", "precio_m2_2026", *FACTORS):
        if need not in col:
            raise SystemExit(f"ABORT: columna maestra ausente: {need}")

    out: list[dict] = []
    for r in rows[1:]:
        if not any(_norm(c) for c in r if c is not None):
            continue
        n = int(r[col["n"]])
        nombre = _norm(r[col["municipio"]])
        precio = _as_number(r[col["precio_m2_2026"]])
        abs_ = {k: _as_number(r[col[k]]) for k in FACTORS}
        if precio is None:
            if any(v is not None for v in abs_.values()):
                raise SystemExit(f"ABORT: n={n} {nombre}: n.d. con A/B numérico en v15")
        else:
            for k, factor in FACTORS.items():
                got = abs_[k]
                if got is None:
                    raise SystemExit(f"ABORT: n={n} {nombre}: falta {k} en v15")
                exp = _excel_round0(precio * factor)
                if abs(got - exp) > 1:
                    raise SystemExit(
                        f"ABORT: n={n} {nombre}: {k}={got} incoherente (esperado ~{exp})"
                    )
        out.append(
            {
                "n": n,
                "municipio": nombre,
                "precioM2": _to_json_number(precio),
                "A_2hab": _to_json_number(abs_["A2_2026"]),
                "A_3hab": _to_json_number(abs_["A3_2026"]),
                "B_2hab": _to_json_number(abs_["B2_2026"]),
                "B_3hab": _to_json_number(abs_["B3_2026"]),
            }
        )

    if len(out) != 83:
        raise SystemExit(f"ABORT: master tiene {len(out)} filas, se esperaban 83")
    ids = [r["n"] for r in out]
    if set(ids) != set(range(1, 84)) or len(ids) != 83:
        raise SystemExit("ABORT: IDs master no son 1–83 únicos")
    nd = {r["municipio"] for r in out if r["precioM2"] is None}
    if nd != EXPECTED_ND:
        raise SystemExit(f"ABORT: n.d. esperados {sorted(EXPECTED_ND)}, hay {sorted(nd)}")
    return out


def load_product() -> tuple[dict[int, dict], dict[str, list[dict]]]:
    by_n: dict[int, dict] = {}
    files: dict[str, list[dict]] = {}
    for name in JSON_FILES:
        path = DATA_DIR / name
        if not path.is_file():
            raise SystemExit(f"ABORT: falta JSON {path}")
        data = json.loads(path.read_text(encoding="utf-8"))
        if not isinstance(data, list):
            raise SystemExit(f"ABORT: {name} no es lista")
        files[name] = data
        for row in data:
            n = int(row["n"])
            if n in by_n:
                raise SystemExit(f"ABORT: ID duplicado en producto: {n}")
            by_n[n] = row
    if len(by_n) != 83:
        raise SystemExit(f"ABORT: producto tiene {len(by_n)} lugares, se esperaban 83")
    return by_n, files


def map_master_to_product(master: list[dict], by_n: dict[int, dict]) -> None:
    """Valida mapeo inequívoco por n y coherencia de nombre."""
    for m in master:
        p = by_n.get(m["n"])
        if p is None:
            raise SystemExit(f"ABORT: no hay producto para n={m['n']} {m['municipio']}")
        if _norm(p.get("municipio")) != m["municipio"]:
            raise SystemExit(
                f"ABORT: nombre ambiguo n={m['n']}: master {m['municipio']!r} vs "
                f"producto {_norm(p.get('municipio'))!r}"
            )


def apply_sync(master: list[dict], files: dict[str, list[dict]]) -> dict:
    by_master = {m["n"]: m for m in master}
    changed_precio = 0
    changed_ab = 0
    examples: list[str] = []
    nd_retired: list[str] = []
    touched_files: list[str] = []

    for fname, rows in files.items():
        file_changed = False
        for row in rows:
            n = int(row["n"])
            m = by_master[n]
            before = {k: row.get(k) for k in PRICE_KEYS}
            after = {k: m[k] for k in PRICE_KEYS}
            if before != after:
                file_changed = True
                if before["precioM2"] != after["precioM2"]:
                    changed_precio += 1
                    if after["precioM2"] is None and before["precioM2"] is not None:
                        nd_retired.append(
                            f"{m['municipio']}: retirado {before['precioM2']} → null"
                        )
                    elif len(examples) < 8:
                        examples.append(
                            f"{m['municipio']}: precio {before['precioM2']} → {after['precioM2']}; "
                            f"A2 {before['A_2hab']} → {after['A_2hab']}"
                        )
                if any(before[k] != after[k] for k in ("A_2hab", "A_3hab", "B_2hab", "B_3hab")):
                    changed_ab += 1
                for k in PRICE_KEYS:
                    row[k] = after[k]
        if file_changed:
            touched_files.append(fname)

    for fname, rows in files.items():
        path = DATA_DIR / fname
        path.write_text(
            json.dumps(rows, ensure_ascii=False, indent=4) + "\n",
            encoding="utf-8",
        )

    return {
        "changed_precio": changed_precio,
        "changed_ab": changed_ab,
        "examples": examples,
        "nd_retired": nd_retired,
        "touched_files": touched_files,
    }


def verify(master: list[dict], by_n: dict[int, dict]) -> None:
    ok_precio = ok_a2 = ok_a3 = ok_b2 = ok_b3 = 0
    for m in master:
        p = by_n[m["n"]]
        # only price keys may differ from pre-sync; here we assert equality to master
        if p.get("precioM2") == m["precioM2"]:
            ok_precio += 1
        if p.get("A_2hab") == m["A_2hab"]:
            ok_a2 += 1
        if p.get("A_3hab") == m["A_3hab"]:
            ok_a3 += 1
        if p.get("B_2hab") == m["B_2hab"]:
            ok_b2 += 1
        if p.get("B_3hab") == m["B_3hab"]:
            ok_b3 += 1
        else:
            pass
    nd = {p["municipio"] for p in by_n.values() if p.get("precioM2") is None}
    print("=== SYNC QA v15 ↔ JSON ===")
    print(f"mapeados: {len(master)}/83")
    print(f"precios iguales: {ok_precio}/83")
    print(f"A2 iguales: {ok_a2}/83")
    print(f"A3 iguales: {ok_a3}/83")
    print(f"B2 iguales: {ok_b2}/83")
    print(f"B3 iguales: {ok_b3}/83")
    print(f"n.d. en JSON: {sorted(nd)}")
    if nd != EXPECTED_ND:
        raise SystemExit(f"ABORT QA: n.d. incorrectos {sorted(nd)}")
    if min(ok_precio, ok_a2, ok_a3, ok_b2, ok_b3) != 83:
        raise SystemExit("ABORT QA: algún campo precio/A-B no coincide 83/83")
    # ensure AB null iff precio null
    for p in by_n.values():
        is_nd = p.get("precioM2") is None
        abs_null = all(p.get(k) is None for k in ("A_2hab", "A_3hab", "B_2hab", "B_3hab"))
        abs_full = all(p.get(k) is not None for k in ("A_2hab", "A_3hab", "B_2hab", "B_3hab"))
        if is_nd and not abs_null:
            raise SystemExit(f"ABORT QA: {p['municipio']} n.d. con A/B")
        if not is_nd and not abs_full:
            raise SystemExit(f"ABORT QA: {p['municipio']} con precio pero A/B incompleto")
    print("RESULTADO SYNC QA: OK")


def assert_only_price_fields_changed(
    before_files: dict[str, list[dict]], after_files: dict[str, list[dict]]
) -> None:
    for fname in JSON_FILES:
        b_rows = {int(r["n"]): r for r in before_files[fname]}
        a_rows = {int(r["n"]): r for r in after_files[fname]}
        if set(b_rows) != set(a_rows):
            raise SystemExit(f"ABORT: {fname} cambió el conjunto de IDs")
        for n, br in b_rows.items():
            ar = a_rows[n]
            if set(br.keys()) != set(ar.keys()):
                raise SystemExit(f"ABORT: {fname} n={n} cambió claves JSON")
            for k, bv in br.items():
                av = ar[k]
                if k in PRICE_KEYS:
                    continue
                if bv != av:
                    raise SystemExit(
                        f"ABORT: {fname} n={n} campo no autorizado cambió: {k} "
                        f"{bv!r} → {av!r}"
                    )


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true", help="Solo verificar, no escribir")
    args = parser.parse_args()

    master = load_master()
    by_n, files = load_product()
    map_master_to_product(master, by_n)

    if args.check:
        verify(master, by_n)
        return 0

    before = {fname: json.loads(json.dumps(rows)) for fname, rows in files.items()}
    stats = apply_sync(master, files)
    # reload and verify
    by_n2, files2 = load_product()
    assert_only_price_fields_changed(before, files2)
    verify(master, by_n2)

    print("---")
    print(f"JSON tocados: {len(stats['touched_files'])}")
    print(f"precios cambiados: {stats['changed_precio']}")
    print(f"A/B cambiados: {stats['changed_ab']}")
    print("n.d. retirados:")
    for line in stats["nd_retired"]:
        print(f"  - {line}")
    print("ejemplos:")
    for line in stats["examples"]:
        print(f"  - {line}")
    return 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except SystemExit:
        raise
    except Exception as e:
        print(f"ABORT: {e}", file=sys.stderr)
        sys.exit(2)
