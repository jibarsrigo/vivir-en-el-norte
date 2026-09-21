#!/usr/bin/env python3
"""QA no destructivo de la tabla maestra 2026.

Solo lee y comprueba estructura. No escribe en el XLSX ni en CSV/JSON/relatos.
"""

from __future__ import annotations

import sys
from pathlib import Path

from openpyxl import load_workbook

ROOT = Path(__file__).resolve().parents[1]
XLSX = ROOT / "data" / "master" / "TABLA_MAESTRA_VIVIR_EN_EL_NORTE_2026_v1.xlsx"

# A/B = precio × factor (redondeo a entero permitido)
FACTORS = {
    "A_2hab": 84.5,
    "A_3hab": 117.0,
    "B_2hab": 68.25,
    "B_3hab": 94.5,
}


def _norm(s: object) -> str:
    if s is None:
        return ""
    return str(s).strip()


def _is_pending_precio(val: object) -> bool:
    if val is None:
        return True
    if isinstance(val, (int, float)):
        return False
    t = _norm(val).lower()
    return t in {"", "pendiente", "n.d.", "n.d", "nd", "no comparable", "-"}


def _as_number(val: object) -> float | None:
    if val is None:
        return None
    if isinstance(val, (int, float)):
        return float(val)
    t = _norm(val).replace(",", ".")
    if not t or _is_pending_precio(t):
        return None
    try:
        return float(t)
    except ValueError:
        return None


def _header_map(headers: list[object]) -> dict[str, int]:
    """Map logical keys → column index, tolerant to encoding of €/ñ."""
    out: dict[str, int] = {}
    for i, h in enumerate(headers):
        name = _norm(h)
        low = name.lower()
        if name == "ID":
            out["ID"] = i
        elif name == "Zona":
            out["Zona"] = i
        elif name == "Lugar":
            out["Lugar"] = i
        elif "precio_ref" in low:
            out["precio"] = i
        elif low.startswith("a_2hab"):
            out["A_2hab"] = i
        elif low.startswith("a_3hab"):
            out["A_3hab"] = i
        elif low.startswith("b_2hab"):
            out["B_2hab"] = i
        elif low.startswith("b_3hab"):
            out["B_3hab"] = i
        elif "estado_servicios" in low:
            out["estado_servicios"] = i
    return out


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
        print("ERROR: hoja vacía")
        return 2

    headers = list(rows[0])
    col = _header_map(headers)
    required = ["ID", "Zona", "Lugar", "precio", "A_2hab", "A_3hab", "B_2hab", "B_3hab"]
    missing = [k for k in required if k not in col]
    if missing:
        print(f"ERROR: columnas no encontradas: {missing}")
        print(f"  headers={headers}")
        return 2

    data = [r for r in rows[1:] if any(c is not None and _norm(c) != "" for c in r)]

    problems: list[str] = []
    ids: list[int] = []
    lugares: list[str] = []
    zonas: set[str] = set()
    precios_pendientes = 0
    precios_con_valor = 0
    formula_ok = 0
    formula_bad: list[str] = []
    servicios_validados = 0

    for r in data:
        id_raw = r[col["ID"]]
        try:
            rid = int(id_raw)
        except (TypeError, ValueError):
            problems.append(f"ID no entero: {id_raw!r}")
            continue
        ids.append(rid)

        zona = _norm(r[col["Zona"]])
        lugar = _norm(r[col["Lugar"]])
        if zona:
            zonas.add(zona)
        if lugar:
            lugares.append(lugar)

        if "santillana" in lugar.lower():
            problems.append(f"Santillana del Mar aparece (ID {rid})")

        precio = _as_number(r[col["precio"]])
        if precio is None:
            precios_pendientes += 1
        else:
            precios_con_valor += 1
            for key, factor in FACTORS.items():
                expected = precio * factor
                got = _as_number(r[col[key]])
                if got is None:
                    formula_bad.append(f"ID {rid} {lugar}: falta {key}")
                    continue
                # Solo redondeo a entero (o ±0.5 por redondeo de Excel)
                if abs(got - round(expected)) <= 1 and abs(got - expected) < 1.01:
                    formula_ok += 1
                elif abs(got - expected) <= 1.0:
                    formula_ok += 1
                else:
                    formula_bad.append(
                        f"ID {rid} {lugar}: {key}={got} esperado~{round(expected)} "
                        f"(precio×{factor}={expected})"
                    )

        est = _norm(r[col.get("estado_servicios", -1)] if "estado_servicios" in col else "")
        if "VALIDADO" in est.upper():
            servicios_validados += 1

    n = len(data)
    id_set = set(ids)
    expected_ids = set(range(1, 84))

    print("=== QA TABLA MAESTRA 2026 v1 ===")
    print(f"Archivo: {XLSX}")
    print(f"Registros de datos: {n} (esperado 83)")
    print(f"IDs únicos: {len(id_set)}")
    print(f"IDs 1–83 completos: {id_set == expected_ids}")
    if id_set != expected_ids:
        print(f"  faltan: {sorted(expected_ids - id_set)}")
        print(f"  extra:  {sorted(id_set - expected_ids)}")
        problems.append("IDs 1–83 incompletos o incorrectos")

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

    print(f"Zonas distintas (MAESTRA_83): {len(zonas)} -> {sorted(zonas)}")

    # Hoja ZONAS_16 si existe
    zonas_sheet_n = None
    if "ZONAS_16" in wb.sheetnames:
        zs = list(wb["ZONAS_16"].iter_rows(min_row=2, values_only=True))
        zonas_sheet_n = sum(1 for r in zs if any(c is not None and _norm(c) != "" for c in r))
        print(f"Filas en ZONAS_16: {zonas_sheet_n} (esperado 16)")
        if zonas_sheet_n != 16:
            problems.append(f"ZONAS_16 tiene {zonas_sheet_n} filas, se esperaban 16")

    santillana = any("santillana" in L.lower() for L in lugares)
    print(f"Santillana del Mar ausente: {not santillana}")

    print(f"Precios con valor: {precios_con_valor}")
    print(f"Precios pendientes / sin valor: {precios_pendientes}")
    print(f"Servicios marcados VALIDADO*: {servicios_validados}")
    print(f"Celdas A/B con fórmula OK (redondeo): {formula_ok}")
    if formula_bad:
        problems.append(f"{len(formula_bad)} desviaciones A/B")
        print(f"Fórmulas A/B incorrectas: {len(formula_bad)}")
        for line in formula_bad[:20]:
            print(f"  - {line}")
        if len(formula_bad) > 20:
            print(f"  - ... y {len(formula_bad) - 20} mas")
    else:
        print("Fórmulas A/B correctas: sí")

    ok_83 = n == 83
    ok_16 = (len(zonas) == 16) and (zonas_sheet_n in (None, 16))
    print("---")
    print(f"83 lugares: {'sí' if ok_83 else 'NO'}")
    print(f"16 zonas: {'sí' if ok_16 else 'NO'}")

    if problems:
        print("RESULTADO: PROBLEMAS DETECTADOS (no se corrigen datos)")
        for p in problems:
            print(f"  ! {p}")
        return 1

    print("RESULTADO: OK")
    return 0


if __name__ == "__main__":
    sys.exit(main())
