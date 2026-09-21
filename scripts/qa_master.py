#!/usr/bin/env python3
"""QA no destructivo de la tabla maestra 2026 (v2 COMPLETA por defecto).

Solo lee y comprueba estructura. No escribe en el XLSX ni en CSV/JSON/relatos.
"""

from __future__ import annotations

import math
import sys
from pathlib import Path

from openpyxl import load_workbook

ROOT = Path(__file__).resolve().parents[1]
XLSX = ROOT / "data" / "master" / "TABLA_MAESTRA_VIVIR_EN_EL_NORTE_2026_v2_COMPLETA.xlsx"

EXPECTED_TOTAL_COLS = 88
EXPECTED_HIST_COLS = 54
EXPECTED_NEW_COLS = 34

# A/B 2026 = precio_m2_2026 x factor (redondeo a entero permitido)
FACTORS = {
    "A2_2026": 84.5,
    "A3_2026": 117.0,
    "B2_2026": 68.25,
    "B3_2026": 94.5,
}

HIST_LAST = "comparado_con_mejor"
NEW_FIRST = "estado_revision_2026"


def _norm(s: object) -> str:
    if s is None:
        return ""
    return str(s).strip()


def _as_number(val: object) -> float | None:
    """Parse numeric price/AB. Empty, n.d., pendiente, text -> None (never treat as 0)."""
    if val is None:
        return None
    if isinstance(val, bool):
        return None
    if isinstance(val, (int, float)):
        if isinstance(val, float) and (math.isnan(val) or math.isinf(val)):
            return None
        return float(val)
    t = _norm(val).replace(",", ".").replace("\u00a0", "").replace(" ", "")
    if not t:
        return None
    low = t.lower()
    if any(
        x in low
        for x in (
            "pendiente",
            "n.d",
            "nd",
            "no comparable",
            "sin dato",
            "s/d",
        )
    ):
        return None
    # strip currency junk if present
    for ch in ("€", "eur", "EUR"):
        t = t.replace(ch, "")
    t = t.strip()
    try:
        return float(t)
    except ValueError:
        return None


def main() -> int:
    if not XLSX.is_file():
        print(f"ERROR: no existe {XLSX}")
        return 2

    wb = load_workbook(XLSX, data_only=True, read_only=True)
    if "MAESTRA_83" not in wb.sheetnames:
        print(f"ERROR: falta hoja MAESTRA_83; hojas={wb.sheetnames}")
        return 2

    ws = wb["MAESTRA_83"]
    rows = list(ws.iter_rows(values_only=True))
    if not rows:
        print("ERROR: hoja vacia")
        return 2

    headers = [_norm(h) for h in rows[0]]
    # drop trailing None-named empties if any
    while headers and headers[-1] == "":
        headers.pop()

    col = {name: i for i, name in enumerate(headers)}
    required = [
        "n",
        "zona",
        "municipio",
        "precio_m2_2026",
        "A2_2026",
        "A3_2026",
        "B2_2026",
        "B3_2026",
        "servicios_estado",
    ]
    missing = [k for k in required if k not in col]
    if missing:
        print(f"ERROR: columnas no encontradas: {missing}")
        print(f"  headers={headers}")
        return 2

    problems: list[str] = []

    n_cols = len(headers)
    print("=== QA TABLA MAESTRA 2026 v2 COMPLETA ===")
    print(f"Archivo: {XLSX}")
    print(f"Columnas totales: {n_cols} (esperado {EXPECTED_TOTAL_COLS})")
    if n_cols != EXPECTED_TOTAL_COLS:
        problems.append(f"columnas totales {n_cols} != {EXPECTED_TOTAL_COLS}")

    hist_n = EXPECTED_HIST_COLS
    new_n = n_cols - hist_n if n_cols >= hist_n else -1
    print(f"Columnas historicas (1-{EXPECTED_HIST_COLS}): {EXPECTED_HIST_COLS}")
    print(f"Columnas nuevas (capa 2026): {new_n} (esperado {EXPECTED_NEW_COLS})")
    if new_n != EXPECTED_NEW_COLS:
        problems.append(f"columnas nuevas {new_n} != {EXPECTED_NEW_COLS}")

    if len(headers) >= EXPECTED_HIST_COLS:
        if headers[EXPECTED_HIST_COLS - 1] != HIST_LAST:
            problems.append(
                f"ultima historica esperada {HIST_LAST!r}, hay {headers[EXPECTED_HIST_COLS - 1]!r}"
            )
        if headers[EXPECTED_HIST_COLS] != NEW_FIRST:
            problems.append(
                f"primera nueva esperada {NEW_FIRST!r}, hay {headers[EXPECTED_HIST_COLS]!r}"
            )

    data = [r for r in rows[1:] if any(c is not None and _norm(c) != "" for c in r)]
    n = len(data)
    print(f"Registros de datos: {n} (esperado 83)")
    if n != 83:
        problems.append(f"registros {n} != 83")

    ids: list[int] = []
    lugares: list[str] = []
    zonas: set[str] = set()
    precios_estructurados = 0
    precios_pendientes = 0
    formula_ok = 0
    formula_bad: list[str] = []
    servicios_validados = 0
    vacio_como_cero: list[str] = []

    for r in data:
        id_raw = r[col["n"]]
        try:
            rid = int(id_raw)
        except (TypeError, ValueError):
            problems.append(f"ID/n no entero: {id_raw!r}")
            continue
        ids.append(rid)

        zona = _norm(r[col["zona"]])
        lugar = _norm(r[col["municipio"]])
        if zona:
            zonas.add(zona)
        if lugar:
            lugares.append(lugar)

        if "santillana" in lugar.lower():
            problems.append(f"Santillana del Mar aparece (n={rid})")

        precio_raw = r[col["precio_m2_2026"]]
        precio = _as_number(precio_raw)

        # No interpretar vacios como cero: si el raw es None/texto y la celda AB es 0 numerico literal, avisar
        if precio is None:
            precios_pendientes += 1
            for key in FACTORS:
                ab_raw = r[col[key]]
                # Solo flag si hay un 0 numerico explicito (no None/vacio)
                if isinstance(ab_raw, (int, float)) and float(ab_raw) == 0.0:
                    vacio_como_cero.append(f"n={rid} {lugar}: {key}=0 con precio pendiente")
            # No exigir A/B
        else:
            precios_estructurados += 1
            for key, factor in FACTORS.items():
                expected = precio * factor
                got = _as_number(r[col[key]])
                if got is None:
                    formula_bad.append(f"n={rid} {lugar}: falta {key}")
                    continue
                if abs(got - round(expected)) <= 1 and abs(got - expected) < 1.01:
                    formula_ok += 1
                elif abs(got - expected) <= 1.0:
                    formula_ok += 1
                else:
                    formula_bad.append(
                        f"n={rid} {lugar}: {key}={got} esperado~{round(expected)} "
                        f"(precio x {factor} = {expected})"
                    )

        est = _norm(r[col["servicios_estado"]])
        if "VALIDADO" in est.upper():
            servicios_validados += 1

    id_set = set(ids)
    expected_ids = set(range(1, 84))
    print(f"IDs unicos: {len(id_set)}")
    print(f"IDs 1-83 completos: {id_set == expected_ids}")
    if id_set != expected_ids:
        print(f"  faltan: {sorted(expected_ids - id_set)}")
        print(f"  extra:  {sorted(id_set - expected_ids)}")
        problems.append("IDs 1-83 incompletos o incorrectos")

    dup_ids = sorted({i for i in ids if ids.count(i) > 1})
    if dup_ids:
        problems.append(f"IDs duplicados: {dup_ids}")
        print(f"IDs duplicados: {dup_ids}")
    else:
        print("IDs duplicados: no")

    lugar_counts: dict[str, int] = {}
    for L in lugares:
        lugar_counts[L] = lugar_counts.get(L, 0) + 1
    dup_lugares = sorted(k for k, v in lugar_counts.items() if v > 1)
    if dup_lugares:
        problems.append(f"Lugares duplicados: {dup_lugares}")
        print(f"Lugares duplicados: {dup_lugares}")
    else:
        print("Lugares duplicados: no")

    print(f"Zonas distintas: {len(zonas)} -> {sorted(zonas)}")
    if len(zonas) != 16:
        problems.append(f"zonas {len(zonas)} != 16")

    santillana = any("santillana" in L.lower() for L in lugares)
    print(f"Santillana del Mar ausente: {not santillana}")

    print(f"Precios 2026 estructurados (numericos): {precios_estructurados}")
    print(f"Precios 2026 pendientes / no numericos: {precios_pendientes}")
    print(f"Servicios 2026 marcados VALIDADO*: {servicios_validados}")
    print(f"Celdas A/B 2026 con formula OK (redondeo): {formula_ok}")

    if formula_bad:
        problems.append(f"{len(formula_bad)} desviaciones A/B 2026")
        print(f"Formulas A/B incorrectas: {len(formula_bad)}")
        for line in formula_bad[:20]:
            print(f"  - {line}")
        if len(formula_bad) > 20:
            print(f"  - ... y {len(formula_bad) - 20} mas")
    else:
        print("Formulas A/B 2026 correctas: si")

    if vacio_como_cero:
        problems.append(f"{len(vacio_como_cero)} celdas A/B=0 con precio pendiente (posible vacio-como-cero)")
        print("Posible vacio interpretado como cero:")
        for line in vacio_como_cero[:20]:
            print(f"  - {line}")
    else:
        print("Vacios no interpretados como cero: ok")

    print("---")
    print(f"83 lugares: {'si' if n == 83 else 'NO'}")
    print(f"16 zonas: {'si' if len(zonas) == 16 else 'NO'}")
    print(
        f"54+34=88 columnas: "
        f"{'si' if n_cols == 88 and new_n == 34 else 'NO'}"
    )

    if problems:
        print("RESULTADO: PROBLEMAS DETECTADOS (no se corrigen datos)")
        for p in problems:
            print(f"  ! {p}")
        return 1

    print("RESULTADO: OK")
    return 0


if __name__ == "__main__":
    sys.exit(main())
