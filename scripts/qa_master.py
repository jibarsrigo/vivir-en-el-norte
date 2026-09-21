#!/usr/bin/env python3
"""QA no destructivo de la tabla maestra 2026 (v15 candidata final por defecto).

Solo lee y comprueba estructura/cobertura contando celdas de MAESTRA_83.
No escribe en el XLSX ni en CSV/JSON/relatos.
No confía en hojas QA_* del propio Excel para afirmar cobertura.
"""

from __future__ import annotations

import math
import re
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

EXPECTED_TOTAL_COLS = 88
EXPECTED_HIST_COLS = 54
EXPECTED_NEW_COLS = 34
EXPECTED_PRICES = 79
EXPECTED_ND = {
    "Vilaboa",
    "Xove",
    "Muros de Nalón",
    "Afife-Carreço (Viana)",
}

FACTORS = {
    "A2_2026": 84.5,
    "A3_2026": 117.0,
    "B2_2026": 68.25,
    "B3_2026": 94.5,
}

HIST_LAST = "comparado_con_mejor"
NEW_FIRST = "estado_revision_2026"

QUALITATIVE_REQUIRED = [
    "radio_cotidiano",
    "radio_salida",
    "playa_cotidiana",
    "playa_cotidiana_modo",
    "paseo_cotidiano",
    "sanidad_primaria_2026",
    "urgencias_PAC_2026",
    "hospital_practico_2026",
    "hospital_referencia_2026",
    "aeropuerto_practico_2026",
    "palma_directa_2026",
    "transporte_relevante_2026",
    "dependencia_coche_texto",
    "autonomia_cotidiana",
    "estacionalidad_2026",
    "peaje_realidad",
    "casa_que_buscar",
    "mercado_reventa",
]

# Campos que CURSOR_03 pide reportar de forma destacada
PROBLEMATIC_SIX = [
    "urgencias_PAC_2026",
    "hospital_practico_2026",
    "hospital_referencia_2026",
    "aeropuerto_practico_2026",
    "palma_directa_2026",
    "transporte_relevante_2026",
]

CELL_ERROR_RE = re.compile(
    r"^#(REF!|DIV/0!|VALUE!|NAME\?|N/A|NULL!|NUM!|GETTING_DATA)",
    re.IGNORECASE,
)


def _norm(s: object) -> str:
    if s is None:
        return ""
    return str(s).strip()


def _filled(val: object) -> bool:
    if val is None:
        return False
    if isinstance(val, float) and (math.isnan(val) or math.isinf(val)):
        return False
    return _norm(val) != ""


def _excel_round0(x: float) -> int:
    """Excel ROUND(x, 0): half away from zero."""
    if x >= 0:
        return int(math.floor(x + 0.5))
    return int(math.ceil(x - 0.5))


def _as_number(val: object) -> float | None:
    """Parse numeric. Empty / n.d. / pendiente / text -> None (never invent 0)."""
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
    t2 = t.replace(",", ".").replace("€", "").replace(" ", "")
    for ch in ("eur", "EUR"):
        t2 = t2.replace(ch, "")
    try:
        return float(t2)
    except ValueError:
        return None


def _is_formula(val: object) -> bool:
    return isinstance(val, str) and val.startswith("=")


def main() -> int:
    if not XLSX.is_file():
        print(f"ERROR: no existe {XLSX}")
        return 2

    wb_val = load_workbook(XLSX, data_only=True, read_only=True)
    wb_f = load_workbook(XLSX, data_only=False, read_only=True)

    if "MAESTRA_83" not in wb_val.sheetnames:
        print(f"ERROR: falta hoja MAESTRA_83; hojas={wb_val.sheetnames}")
        return 2

    ws_v = wb_val["MAESTRA_83"]
    ws_f = wb_f["MAESTRA_83"]
    rows_v = list(ws_v.iter_rows(values_only=True))
    rows_f = list(ws_f.iter_rows(values_only=True))

    headers = [_norm(h) for h in rows_v[0]]
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
        "servicios_2026",
        "servicios_estado",
        *QUALITATIVE_REQUIRED,
    ]
    missing = [k for k in required if k not in col]
    problems: list[str] = []
    if missing:
        print(f"ERROR: columnas no encontradas: {missing}")
        return 2

    n_cols = len(headers)
    print("=== QA TABLA MAESTRA 2026 v15 CANDIDATA FINAL CORREGIDA ===")
    print(f"Archivo: {XLSX}")
    print("(Cobertura contada en celdas de MAESTRA_83; hojas QA_* ignoradas)")
    print(f"Columnas totales: {n_cols} (esperado {EXPECTED_TOTAL_COLS})")
    if n_cols != EXPECTED_TOTAL_COLS:
        problems.append(f"columnas totales {n_cols} != {EXPECTED_TOTAL_COLS}")

    new_n = n_cols - EXPECTED_HIST_COLS if n_cols >= EXPECTED_HIST_COLS else -1
    print(f"Columnas historicas: {EXPECTED_HIST_COLS}")
    print(f"Columnas nuevas: {new_n} (esperado {EXPECTED_NEW_COLS})")
    if new_n != EXPECTED_NEW_COLS:
        problems.append(f"columnas nuevas {new_n} != {EXPECTED_NEW_COLS}")

    if len(headers) >= EXPECTED_HIST_COLS + 1:
        if headers[EXPECTED_HIST_COLS - 1] != HIST_LAST:
            problems.append(
                f"ultima historica esperada {HIST_LAST!r}, hay {headers[EXPECTED_HIST_COLS - 1]!r}"
            )
        if headers[EXPECTED_HIST_COLS] != NEW_FIRST:
            problems.append(
                f"primera nueva esperada {NEW_FIRST!r}, hay {headers[EXPECTED_HIST_COLS]!r}"
            )

    data_v = [r for r in rows_v[1:] if any(_filled(c) for c in r)]
    data_f = [r for r in rows_f[1:] if any(_filled(c) for c in r)]
    n = len(data_v)
    print(f"Registros: {n} (esperado 83)")
    if n != 83:
        problems.append(f"registros {n} != 83")
    if len(data_f) != n:
        problems.append(f"filas formula workbook {len(data_f)} != data_only {n}")

    ids: list[int] = []
    lugares: list[str] = []
    zonas: set[str] = set()
    precios_ok = 0
    nd_names: list[str] = []
    formula_ok = 0
    formula_bad: list[str] = []
    ab_fabricados: list[str] = []
    vacio_como_cero: list[str] = []
    cell_errors: list[str] = []

    for idx, r in enumerate(data_v):
        rf = data_f[idx] if idx < len(data_f) else r
        try:
            rid = int(r[col["n"]])
        except (TypeError, ValueError):
            problems.append(f"n no entero: {r[col['n']]!r}")
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

        if precio is None:
            nd_names.append(lugar)
            for key in FACTORS:
                ab_v = r[col[key]]
                ab_f = rf[col[key]]
                if _as_number(ab_v) is not None or (
                    isinstance(ab_v, (int, float)) and float(ab_v) == 0.0
                ):
                    ab_fabricados.append(
                        f"n={rid} {lugar}: {key}={ab_v!r} con precio n.d."
                    )
                    if isinstance(ab_v, (int, float)) and float(ab_v) == 0.0:
                        vacio_como_cero.append(f"n={rid} {lugar}: {key}=0")
                if _is_formula(ab_f) and _as_number(ab_v) is not None:
                    ab_fabricados.append(
                        f"n={rid} {lugar}: {key} formula con valor cached {ab_v!r}"
                    )
        else:
            precios_ok += 1
            for key, factor in FACTORS.items():
                expected = _excel_round0(precio * factor)
                got = _as_number(r[col[key]])
                ab_f = rf[col[key]]
                if got is None:
                    if _is_formula(ab_f):
                        formula_ok += 1
                        continue
                    formula_bad.append(f"n={rid} {lugar}: falta {key}")
                    continue
                if abs(got - expected) <= 1:
                    formula_ok += 1
                else:
                    formula_bad.append(
                        f"n={rid} {lugar}: {key}={got} esperado {expected} "
                        f"(precio x {factor})"
                    )

        for i, name in enumerate(headers):
            for src, label in ((r, "val"), (rf, "fml")):
                cell = src[i] if i < len(src) else None
                if isinstance(cell, str) and CELL_ERROR_RE.match(cell.strip()):
                    cell_errors.append(f"n={rid} {lugar} {name} [{label}]={cell}")

    id_set = set(ids)
    expected_ids = set(range(1, 84))
    print(f"IDs 1-83 completos: {id_set == expected_ids}")
    if id_set != expected_ids:
        problems.append("IDs 1-83 incompletos")
        print(f"  faltan: {sorted(expected_ids - id_set)}")
        print(f"  extra: {sorted(id_set - expected_ids)}")

    dup_ids = sorted({i for i in ids if ids.count(i) > 1})
    print(f"IDs duplicados: {dup_ids or 'no'}")
    if dup_ids:
        problems.append(f"IDs duplicados: {dup_ids}")

    lugar_counts: dict[str, int] = {}
    for L in lugares:
        lugar_counts[L] = lugar_counts.get(L, 0) + 1
    dup_lugares = sorted(k for k, v in lugar_counts.items() if v > 1)
    print(f"Lugares duplicados: {dup_lugares or 'no'}")
    if dup_lugares:
        problems.append(f"Lugares duplicados: {dup_lugares}")

    print(f"Zonas distintas: {len(zonas)}")
    if len(zonas) != 16:
        problems.append(f"zonas {len(zonas)} != 16")

    santillana = any("santillana" in L.lower() for L in lugares)
    print(f"Santillana ausente: {not santillana}")

    print(f"Precios estructurados: {precios_ok}/83 (esperado {EXPECTED_PRICES})")
    print(f"Lugares n.d.: {nd_names}")
    if precios_ok != EXPECTED_PRICES:
        problems.append(f"precios estructurados {precios_ok} != {EXPECTED_PRICES}")
    if set(nd_names) != EXPECTED_ND:
        problems.append(
            f"n.d. esperados {sorted(EXPECTED_ND)}, hay {sorted(nd_names)}"
        )
    else:
        print("n.d. exactos (Vilaboa, Xove, Muros de Nalon, Afife-Carreco): si")

    if formula_bad:
        problems.append(f"{len(formula_bad)} desviaciones A/B")
        print(f"A/B incorrectas: {len(formula_bad)}")
        for line in formula_bad[:15]:
            print(f"  - {line}")
    else:
        print(f"A/B correctas (celdas OK/formula): {formula_ok}")

    if ab_fabricados:
        problems.append(f"{len(ab_fabricados)} A/B fabricados en n.d.")
        for line in ab_fabricados[:10]:
            print(f"  - {line}")
    else:
        print("A/B en n.d. no fabricados: si")

    if vacio_como_cero:
        problems.append(f"{len(vacio_como_cero)} vacio-como-cero")
        for line in vacio_como_cero[:10]:
            print(f"  - {line}")
    else:
        print("Vacios no interpretados como cero: ok")

    sv = sum(1 for r in data_v if _filled(r[col["servicios_2026"]]))
    se = sum(1 for r in data_v if _filled(r[col["servicios_estado"]]))
    print(f"servicios_2026: {sv}/83")
    print(f"servicios_estado: {se}/83")
    if sv != 83 or se != 83:
        problems.append(f"servicios cobertura {sv}/{se} != 83/83")

    qual_fail: list[str] = []
    print("Cobertura cualitativa (conteo directo MAESTRA_83):")
    for field in QUALITATIVE_REQUIRED:
        covered = sum(1 for r in data_v if _filled(r[col[field]]))
        mark = "OK" if covered == 83 else "FAIL"
        print(f"  {mark} {covered}/83  {field}")
        if covered != 83:
            qual_fail.append(f"{field}: {covered}/83")
    if qual_fail:
        problems.append("capa cualitativa incompleta")
    else:
        print(f"Capa cualitativa requerida: 83/83 ({len(QUALITATIVE_REQUIRED)} campos)")

    print("Seis campos previamente problematicos:")
    for field in PROBLEMATIC_SIX:
        covered = sum(1 for r in data_v if _filled(r[col[field]]))
        print(f"  {covered}/83  {field}")

    if cell_errors:
        problems.append(f"{len(cell_errors)} errores de celda")
        print("Errores de formula/celda:")
        for line in cell_errors[:20]:
            print(f"  - {line}")
    else:
        print("Errores de formula/celda: no")

    print("---")
    print(f"83 lugares: {'si' if n == 83 else 'NO'}")
    print(f"16 zonas: {'si' if len(zonas) == 16 else 'NO'}")
    print(f"54+34=88: {'si' if n_cols == 88 and new_n == 34 else 'NO'}")
    print(f"79+4 precios: {'si' if precios_ok == 79 and len(nd_names) == 4 else 'NO'}")

    if problems:
        print("RESULTADO: PROBLEMAS DETECTADOS (no se corrigen datos)")
        for p in problems:
            print(f"  ! {p}")
        return 1

    print("RESULTADO: OK")
    return 0


if __name__ == "__main__":
    sys.exit(main())
