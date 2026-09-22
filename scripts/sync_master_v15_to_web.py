#!/usr/bin/env python3
"""Sincroniza oleadas controladas desde v15 hacia los 16 JSON de ficha.

Oleadas:
  precios     — precioM2 + A/B (CURSOR_05)
  servicios   — servicios + autonomía cotidiana (CURSOR_06)
  logistica   — sanidad / aeropuerto-Palma / transporte 2026 (CURSOR_07)
  mar_paseos  — playa cotidiana / paseos / microzona (CURSOR_08)
  casa_reventa — casaQueBuscar / mercadoReventa (CURSOR_09)
  clima_basico — sol/lluvia/temps/humedad/viento/niebla/clase/tempAgua (CURSOR_11)
                 NO escribe despejados/cubiertos/sol_dias_equiv
                 NO toca clima-municipios.json ni zonas.json

Uso:
  python scripts/sync_master_v15_to_web.py --wave precios|servicios|logistica|mar_paseos|casa_reventa|clima_basico
  python scripts/sync_master_v15_to_web.py --check

No escribe el XLSX. No toca CSV, relatos, zonas ni capas.
No escribe bajo web/src/data/v1/ (archivo histórico congelado).
No inventa minutos ni reduce textos 2026 a campos históricos.
No rellena campos selectivos vacíos en v15.
No deriva scores/predicciones de CASA/reventa.
No propaga dias_despejados / dias_cubiertos / sol_dias_equiv.
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

# v15 field → JSON key (servicios_2026 actualiza el indicador visible `servicios`)
SERVICIOS_MAP = {
    "servicios_2026": "servicios",
    "servicios_estado": "serviciosEstado",
    "radio_cotidiano": "radioCotidiano",
    "radio_salida": "radioSalida",
    "dependencia_coche_texto": "dependenciaCocheTexto",
    "autonomia_cotidiana": "autonomiaCotidiana",
    "estacionalidad_2026": "estacionalidad2026",
    "peaje_realidad": "peajeRealidad",
}
SERVICIOS_JSON_KEYS = tuple(SERVICIOS_MAP.values())
SERVICIOS_NEW_KEYS = tuple(k for k in SERVICIOS_JSON_KEYS if k != "servicios")

# v15 → JSON (capa logística 2026; textos íntegros, sin derivar minutos)
LOGISTICA_MAP = {
    "sanidad_primaria_2026": "sanidadPrimaria2026",
    "urgencias_PAC_2026": "urgenciasPAC2026",
    "hospital_practico_2026": "hospitalPractico2026",
    "hospital_referencia_2026": "hospitalReferencia2026",
    "aeropuerto_practico_2026": "aeropuertoPractico2026",
    "palma_directa_2026": "palmaDirecta2026",
    "transporte_relevante_2026": "transporteRelevante2026",
}
LOGISTICA_JSON_KEYS = tuple(LOGISTICA_MAP.values())

# v15 → JSON (mar/paseos/microzona). Universales vs selectivos (no rellenar vacíos).
MAR_PASEOS_MAP = {
    "playa_cotidiana": "playaCotidiana",
    "playa_cotidiana_modo": "playaCotidianaModo",
    "paseo_cotidiano": "paseoCotidiano",
    "paseo_pendiente_topografia": "paseoPendienteTopografia",
    "advertencia_microzona": "advertenciaMicrozona",
    "microzona_precio": "microzonaPrecio",
}
MAR_PASEOS_UNIVERSAL = (
    "playaCotidiana",
    "playaCotidianaModo",
    "paseoCotidiano",
)
MAR_PASEOS_SELECTIVE = (
    "paseoPendienteTopografia",
    "advertenciaMicrozona",
    "microzonaPrecio",
)
MAR_PASEOS_JSON_KEYS = tuple(MAR_PASEOS_MAP.values())

CASA_REVENTA_MAP = {
    "casa_que_buscar": "casaQueBuscar",
    "mercado_reventa": "mercadoReventa",
}
CASA_REVENTA_JSON_KEYS = tuple(CASA_REVENTA_MAP.values())

# CURSOR_11: campos climáticos comparables. Excluye despejados/cubiertos/sol_dias_equiv.
CLIMA_BASICO_MAP = {
    "sol_horas_anio": "solHoras",
    "lluvia_dias_anio": "lluviaDias",
    "lluvia_mm_anio": "lluviaMm",
    "temp_verano_c": "tempVerano",
    "temp_invierno_c": "tempInvierno",
    "humedad_pct": "humedad",
    "viento": "viento",
    "niebla": "niebla",
    "clase_clima": "clase",
    "temp_agua_verano": "tempAgua",
}
CLIMA_BASICO_JSON_KEYS = tuple(CLIMA_BASICO_MAP.values())
CLIMA_BASICO_NUM_KEYS = (
    "solHoras",
    "lluviaDias",
    "lluviaMm",
    "tempVerano",
    "tempInvierno",
    "humedad",
)
CLIMA_EXCLUIDOS_JSON = ("despejados", "cubiertos")  # no escribir; proteger en regresión
CLIMA_MUNICIPIOS_PATH = DATA_DIR / "clima-municipios.json"
ZONAS_JSON_PATH = DATA_DIR / "zonas.json"

# Regresión por oleada (no incluir las claves que la propia oleada escribe)
REGRESSION_BEFORE_SERVICIOS = PRICE_KEYS
REGRESSION_BEFORE_LOGISTICA = PRICE_KEYS + SERVICIOS_JSON_KEYS
REGRESSION_BEFORE_MAR_PASEOS = PRICE_KEYS + SERVICIOS_JSON_KEYS + LOGISTICA_JSON_KEYS
REGRESSION_BEFORE_CASA_REVENTA = (
    PRICE_KEYS + SERVICIOS_JSON_KEYS + LOGISTICA_JSON_KEYS + MAR_PASEOS_JSON_KEYS
)
REGRESSION_BEFORE_CLIMA_BASICO = (
    PRICE_KEYS
    + SERVICIOS_JSON_KEYS
    + LOGISTICA_JSON_KEYS
    + MAR_PASEOS_JSON_KEYS
    + CASA_REVENTA_JSON_KEYS
    + CLIMA_EXCLUIDOS_JSON
)


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


def _to_json_int(val: float | None) -> int | None:
    if val is None:
        return None
    return int(round(val))


def _to_json_servicios(val: object) -> int | float:
    """Preserve exact v15 number; keep ints as int, decimals as float (e.g. 4.5)."""
    num = _as_number(val)
    if num is None:
        raise SystemExit(f"ABORT: servicios_2026 no numérico: {val!r}")
    if abs(num - round(num)) < 1e-9:
        return int(round(num))
    return float(num)


def _to_json_clima_num(dst: str, val: object) -> int | float:
    """Climate numbers: whole → int; half-degrees stay float."""
    num = _as_number(val)
    if num is None:
        raise SystemExit(f"ABORT: clima {dst} no numérico: {val!r}")
    if dst in ("tempVerano", "tempInvierno"):
        if abs(num - round(num)) < 1e-9:
            return float(int(round(num)))
        return float(num)
    return int(round(num))


def _same_num(a: object, b: object) -> bool:
    """Compare JSON number vs master number allowing int/float equivalence."""
    if a is None and b is None:
        return True
    if a is None or b is None:
        return False
    try:
        return abs(float(a) - float(b)) < 1e-9
    except (TypeError, ValueError):
        return a == b


def load_master() -> list[dict]:
    if not XLSX.is_file():
        raise SystemExit(f"ABORT: no existe {XLSX}")
    wb = load_workbook(XLSX, data_only=True, read_only=True)
    if "MAESTRA_83" not in wb.sheetnames:
        raise SystemExit("ABORT: falta hoja MAESTRA_83")
    rows = list(wb["MAESTRA_83"].iter_rows(values_only=True))
    headers = [_norm(h) for h in rows[0]]
    col = {name: i for i, name in enumerate(headers)}
    needed = (
        "n",
        "municipio",
        "precio_m2_2026",
        *FACTORS,
        *SERVICIOS_MAP.keys(),
        *LOGISTICA_MAP.keys(),
        *MAR_PASEOS_MAP.keys(),
        *CASA_REVENTA_MAP.keys(),
        *CLIMA_BASICO_MAP.keys(),
    )
    for need in needed:
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

        row: dict = {
            "n": n,
            "municipio": nombre,
            "precioM2": _to_json_int(precio),
            "A_2hab": _to_json_int(abs_["A2_2026"]),
            "A_3hab": _to_json_int(abs_["A3_2026"]),
            "B_2hab": _to_json_int(abs_["B2_2026"]),
            "B_3hab": _to_json_int(abs_["B3_2026"]),
            "servicios": _to_json_servicios(r[col["servicios_2026"]]),
        }
        for src, dst in SERVICIOS_MAP.items():
            if dst == "servicios":
                continue
            text = _norm(r[col[src]])
            if not text:
                raise SystemExit(f"ABORT: n={n} {nombre}: {src} vacío en v15")
            row[dst] = text
        for src, dst in LOGISTICA_MAP.items():
            text = _norm(r[col[src]])
            if not text:
                raise SystemExit(f"ABORT: n={n} {nombre}: {src} vacío en v15")
            row[dst] = text
        for src, dst in MAR_PASEOS_MAP.items():
            text = _norm(r[col[src]])
            # Selectivos: vacío en v15 → null (no inventar). Universales: obligatorios.
            if dst in MAR_PASEOS_UNIVERSAL and not text:
                raise SystemExit(f"ABORT: n={n} {nombre}: {src} vacío en v15")
            row[dst] = text if text else None
        for src, dst in CASA_REVENTA_MAP.items():
            text = _norm(r[col[src]])
            if not text:
                raise SystemExit(f"ABORT: n={n} {nombre}: {src} vacío en v15")
            row[dst] = text
        for src, dst in CLIMA_BASICO_MAP.items():
            raw = r[col[src]]
            if dst in CLIMA_BASICO_NUM_KEYS:
                row[dst] = _to_json_clima_num(dst, raw)
            else:
                text = _norm(raw)
                if not text:
                    raise SystemExit(f"ABORT: n={n} {nombre}: {src} vacío en v15")
                row[dst] = text
        out.append(row)

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
    for m in master:
        p = by_n.get(m["n"])
        if p is None:
            raise SystemExit(f"ABORT: no hay producto para n={m['n']} {m['municipio']}")
        if _norm(p.get("municipio")) != m["municipio"]:
            raise SystemExit(
                f"ABORT: nombre ambiguo n={m['n']}: master {m['municipio']!r} vs "
                f"producto {_norm(p.get('municipio'))!r}"
            )


def write_files(files: dict[str, list[dict]]) -> None:
    for fname, rows in files.items():
        if "v1" in Path(fname).parts or str(fname).replace("\\", "/").startswith("v1/"):
            raise SystemExit(f"ABORT: sync no puede escribir en archivo V1 ({fname})")
        path = DATA_DIR / fname
        if "v1" in path.parts:
            raise SystemExit(f"ABORT: sync no puede escribir en archivo V1 ({path})")
        path.write_text(
            json.dumps(rows, ensure_ascii=False, indent=4) + "\n",
            encoding="utf-8",
        )


def apply_precios(master: list[dict], files: dict[str, list[dict]]) -> dict:
    by_master = {m["n"]: m for m in master}
    changed_precio = changed_ab = 0
    examples: list[str] = []
    nd_retired: list[str] = []
    touched: list[str] = []

    for fname, rows in files.items():
        file_changed = False
        for row in rows:
            m = by_master[int(row["n"])]
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
                            f"{m['municipio']}: precio {before['precioM2']} → {after['precioM2']}"
                        )
                if any(before[k] != after[k] for k in PRICE_KEYS if k != "precioM2"):
                    changed_ab += 1
                for k in PRICE_KEYS:
                    row[k] = after[k]
        if file_changed:
            touched.append(fname)

    write_files(files)
    return {
        "touched_files": touched,
        "changed_precio": changed_precio,
        "changed_ab": changed_ab,
        "examples": examples,
        "nd_retired": nd_retired,
    }


def apply_servicios(master: list[dict], files: dict[str, list[dict]]) -> dict:
    by_master = {m["n"]: m for m in master}
    changed_serv = 0
    examples: list[str] = []
    touched: list[str] = []
    decimals: list[str] = []

    for fname, rows in files.items():
        file_changed = False
        for row in rows:
            m = by_master[int(row["n"])]
            before_serv = row.get("servicios")
            after_serv = m["servicios"]
            if not _same_num(before_serv, after_serv):
                changed_serv += 1
                file_changed = True
                if len(examples) < 8:
                    examples.append(
                        f"{m['municipio']}: servicios {before_serv} → {after_serv}"
                    )
            row["servicios"] = after_serv
            if isinstance(after_serv, float):
                decimals.append(f"{m['municipio']}={after_serv}")

            for key in SERVICIOS_NEW_KEYS:
                if row.get(key) != m[key]:
                    file_changed = True
                row[key] = m[key]
        if file_changed:
            touched.append(fname)

    write_files(files)
    return {
        "touched_files": touched,
        "changed_servicios": changed_serv,
        "examples": examples,
        "decimals": decimals,
    }


def verify_precios(master: list[dict], by_n: dict[int, dict]) -> None:
    ok = {k: 0 for k in PRICE_KEYS}
    for m in master:
        p = by_n[m["n"]]
        for k in PRICE_KEYS:
            if p.get(k) == m[k]:
                ok[k] += 1
    nd = {p["municipio"] for p in by_n.values() if p.get("precioM2") is None}
    print("--- PRECIOS/A-B ---")
    print(f"precios iguales: {ok['precioM2']}/83")
    for k in ("A_2hab", "A_3hab", "B_2hab", "B_3hab"):
        print(f"{k} iguales: {ok[k]}/83")
    print(f"n.d. en JSON: {sorted(nd)}")
    if nd != EXPECTED_ND:
        raise SystemExit(f"ABORT QA: n.d. incorrectos {sorted(nd)}")
    if min(ok.values()) != 83:
        raise SystemExit("ABORT QA: regresión precio/A-B")
    for p in by_n.values():
        is_nd = p.get("precioM2") is None
        abs_null = all(p.get(k) is None for k in ("A_2hab", "A_3hab", "B_2hab", "B_3hab"))
        abs_full = all(p.get(k) is not None for k in ("A_2hab", "A_3hab", "B_2hab", "B_3hab"))
        if is_nd and not abs_null:
            raise SystemExit(f"ABORT QA: {p['municipio']} n.d. con A/B")
        if not is_nd and not abs_full:
            raise SystemExit(f"ABORT QA: {p['municipio']} con precio pero A/B incompleto")


def verify_servicios(master: list[dict], by_n: dict[int, dict]) -> None:
    print("--- SERVICIOS/AUTONOMÍA ---")
    counts = {k: 0 for k in SERVICIOS_JSON_KEYS}
    for m in master:
        p = by_n[m["n"]]
        for k in SERVICIOS_JSON_KEYS:
            if k == "servicios":
                if _same_num(p.get(k), m[k]):
                    counts[k] += 1
            else:
                if _norm(p.get(k)) == _norm(m[k]):
                    counts[k] += 1
                elif k not in p:
                    pass
    for k in SERVICIOS_JSON_KEYS:
        print(f"{k}: {counts[k]}/83")
        if counts[k] != 83:
            raise SystemExit(f"ABORT QA: {k} no coincide 83/83")


def apply_logistica(master: list[dict], files: dict[str, list[dict]]) -> dict:
    by_master = {m["n"]: m for m in master}
    touched: list[str] = []
    examples: list[str] = []

    for fname, rows in files.items():
        file_changed = False
        for row in rows:
            m = by_master[int(row["n"])]
            for key in LOGISTICA_JSON_KEYS:
                if row.get(key) != m[key]:
                    file_changed = True
                    if len(examples) < 6 and key == "hospitalPractico2026":
                        prev = row.get(key)
                        examples.append(
                            f"{m['municipio']}: hospitalPractico "
                            f"{'(nuevo)' if prev is None else 'actualizado'}"
                        )
                row[key] = m[key]
        if file_changed:
            touched.append(fname)

    write_files(files)
    return {"touched_files": touched, "examples": examples}


def verify_logistica(master: list[dict], by_n: dict[int, dict]) -> None:
    print("--- LOGÍSTICA 2026 ---")
    counts = {k: 0 for k in LOGISTICA_JSON_KEYS}
    for m in master:
        p = by_n[m["n"]]
        for k in LOGISTICA_JSON_KEYS:
            if _norm(p.get(k)) == _norm(m[k]):
                counts[k] += 1
    for k in LOGISTICA_JSON_KEYS:
        print(f"{k}: {counts[k]}/83")
        if counts[k] != 83:
            raise SystemExit(f"ABORT QA: {k} no coincide 83/83")


def _empty_or_null(val: object) -> bool:
    return val is None or _norm(val) == ""


def apply_mar_paseos(master: list[dict], files: dict[str, list[dict]]) -> dict:
    by_master = {m["n"]: m for m in master}
    touched: list[str] = []
    coverage = {k: 0 for k in MAR_PASEOS_JSON_KEYS}

    for fname, rows in files.items():
        file_changed = False
        for row in rows:
            m = by_master[int(row["n"])]
            for key in MAR_PASEOS_JSON_KEYS:
                target = m[key]  # str or None
                if row.get(key) != target:
                    file_changed = True
                row[key] = target
                if target is not None:
                    coverage[key] += 1
        if file_changed:
            touched.append(fname)

    write_files(files)
    return {"touched_files": touched, "coverage": coverage}


def verify_mar_paseos(master: list[dict], by_n: dict[int, dict]) -> None:
    print("--- MAR / PASEOS / MICROZONA ---")
    for k in MAR_PASEOS_UNIVERSAL:
        ok = sum(
            1
            for m in master
            if _norm(by_n[m["n"]].get(k)) == _norm(m[k]) and not _empty_or_null(m[k])
        )
        print(f"{k}: {ok}/83")
        if ok != 83:
            raise SystemExit(f"ABORT QA: {k} no coincide 83/83")

    for k in MAR_PASEOS_SELECTIVE:
        master_filled = {m["municipio"] for m in master if not _empty_or_null(m[k])}
        prod_filled = {
            p["municipio"]
            for p in by_n.values()
            if not _empty_or_null(p.get(k))
        }
        equal_text = 0
        for m in master:
            p = by_n[m["n"]]
            mv, pv = m[k], p.get(k)
            if _empty_or_null(mv) and _empty_or_null(pv):
                equal_text += 1
            elif _norm(mv) == _norm(pv):
                equal_text += 1
        print(
            f"{k}: cobertura v15={len(master_filled)} producto={len(prod_filled)} "
            f"filas_iguales={equal_text}/83"
        )
        if master_filled != prod_filled:
            raise SystemExit(
                f"ABORT QA: {k} cobertura distinta "
                f"solo_v15={sorted(master_filled - prod_filled)[:5]} "
                f"solo_prod={sorted(prod_filled - master_filled)[:5]}"
            )
        if equal_text != 83:
            raise SystemExit(f"ABORT QA: {k} no coincide fila a fila 83/83")


def apply_casa_reventa(master: list[dict], files: dict[str, list[dict]]) -> dict:
    by_master = {m["n"]: m for m in master}
    touched: list[str] = []
    examples: list[str] = []

    for fname, rows in files.items():
        file_changed = False
        for row in rows:
            m = by_master[int(row["n"])]
            for key in CASA_REVENTA_JSON_KEYS:
                if row.get(key) != m[key]:
                    file_changed = True
                    if len(examples) < 4 and key == "casaQueBuscar":
                        examples.append(f"{m['municipio']}: casaQueBuscar (nuevo/actualizado)")
                row[key] = m[key]
        if file_changed:
            touched.append(fname)

    write_files(files)
    return {"touched_files": touched, "examples": examples}


def verify_casa_reventa(master: list[dict], by_n: dict[int, dict]) -> None:
    print("--- CASA / REVENTA ---")
    for k in CASA_REVENTA_JSON_KEYS:
        ok = sum(1 for m in master if _norm(by_n[m["n"]].get(k)) == _norm(m[k]))
        print(f"{k}: {ok}/83")
        if ok != 83:
            raise SystemExit(f"ABORT QA: {k} no coincide 83/83")


def apply_clima_basico(master: list[dict], files: dict[str, list[dict]]) -> dict:
    by_master = {m["n"]: m for m in master}
    touched: list[str] = []
    changed_by_key = {k: 0 for k in CLIMA_BASICO_JSON_KEYS}
    examples: list[str] = []

    for fname, rows in files.items():
        file_changed = False
        for row in rows:
            m = by_master[int(row["n"])]
            for key in CLIMA_BASICO_JSON_KEYS:
                before = row.get(key)
                after = m[key]
                same = (
                    _same_num(before, after)
                    if key in CLIMA_BASICO_NUM_KEYS
                    else _norm(before) == _norm(after)
                )
                if not same:
                    file_changed = True
                    changed_by_key[key] += 1
                    if len(examples) < 12:
                        examples.append(
                            f"{m['municipio']}: {key} {before!r} → {after!r}"
                        )
                    row[key] = after
            # Garantía: no tocar despejados/cubiertos (ni siquiera reasignar)
        if file_changed:
            touched.append(fname)

    # Solo reescribe JSON con cambios reales (evita churn de tipos 20→20.0).
    write_files({f: files[f] for f in touched})
    return {
        "touched_files": touched,
        "changed_by_key": changed_by_key,
        "examples": examples,
    }


def verify_clima_basico(master: list[dict], by_n: dict[int, dict]) -> None:
    print("--- CLIMA BÁSICO (autorizados CURSOR_11) ---")
    for k in CLIMA_BASICO_JSON_KEYS:
        if k in CLIMA_BASICO_NUM_KEYS:
            ok = sum(1 for m in master if _same_num(by_n[m["n"]].get(k), m[k]))
        else:
            ok = sum(
                1 for m in master if _norm(by_n[m["n"]].get(k)) == _norm(m[k])
            )
        print(f"{k}: {ok}/83")
        if ok != 83:
            raise SystemExit(f"ABORT QA: {k} no coincide 83/83")
    print(
        "excluidos (no auto): despejados/cubiertos/sol_dias_equiv — no verificados vs v15"
    )


def assert_no_regression(
    before_snapshot: dict[int, dict], by_n: dict[int, dict], keys: tuple[str, ...]
) -> None:
    for n, prev in before_snapshot.items():
        cur = by_n[n]
        for k in keys:
            if k == "servicios":
                if not _same_num(prev.get(k), cur.get(k)):
                    raise SystemExit(f"ABORT: regresión {k} en n={n}")
            elif prev.get(k) != cur.get(k):
                raise SystemExit(f"ABORT: regresión {k} en n={n}: {prev.get(k)!r} → {cur.get(k)!r}")


def assert_authorized_only(
    before_files: dict[str, list[dict]],
    after_files: dict[str, list[dict]],
    allowed: set[str],
    allow_new: set[str],
) -> None:
    for fname in JSON_FILES:
        b_rows = {int(r["n"]): r for r in before_files[fname]}
        a_rows = {int(r["n"]): r for r in after_files[fname]}
        if set(b_rows) != set(a_rows):
            raise SystemExit(f"ABORT: {fname} cambió el conjunto de IDs")
        for n, br in b_rows.items():
            ar = a_rows[n]
            new_keys = set(ar.keys()) - set(br.keys())
            removed = set(br.keys()) - set(ar.keys())
            if removed:
                raise SystemExit(f"ABORT: {fname} n={n} perdió claves {sorted(removed)}")
            if new_keys - allow_new:
                raise SystemExit(
                    f"ABORT: {fname} n={n} claves nuevas no autorizadas: {sorted(new_keys - allow_new)}"
                )
            for k, bv in br.items():
                av = ar[k]
                if k in allowed:
                    continue
                if bv != av:
                    raise SystemExit(
                        f"ABORT: {fname} n={n} campo no autorizado cambió: {k} "
                        f"{bv!r} → {av!r}"
                    )


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--wave",
        choices=(
            "precios",
            "servicios",
            "logistica",
            "mar_paseos",
            "casa_reventa",
            "clima_basico",
        ),
        help="Oleada a aplicar (obligatoria si no es --check)",
    )
    parser.add_argument("--check", action="store_true", help="Solo verificar, no escribir")
    args = parser.parse_args()

    if not args.check and not args.wave:
        raise SystemExit(
            "ABORT: indica --wave precios|servicios|logistica|mar_paseos|"
            "casa_reventa|clima_basico o --check"
        )

    master = load_master()
    by_n, files = load_product()
    map_master_to_product(master, by_n)

    print("=== SYNC QA v15 ↔ JSON ===")
    print(f"mapeados: {len(master)}/83")

    if args.check:
        verify_precios(master, by_n)
        present_serv = sum(
            1 for p in by_n.values() if all(k in p for k in SERVICIOS_NEW_KEYS)
        )
        if present_serv == 0:
            print("--- SERVICIOS/AUTONOMÍA ---")
            print("capa servicios aún no sincronizada")
        elif present_serv != 83:
            raise SystemExit(
                f"ABORT QA: cobertura parcial de claves servicios ({present_serv}/83)"
            )
        else:
            verify_servicios(master, by_n)

        present_log = sum(
            1 for p in by_n.values() if all(k in p for k in LOGISTICA_JSON_KEYS)
        )
        if present_log == 0:
            print("--- LOGÍSTICA 2026 ---")
            print("capa logística aún no sincronizada (0/83)")
        elif present_log != 83:
            raise SystemExit(
                f"ABORT QA: cobertura parcial de claves logística ({present_log}/83)"
            )
        else:
            verify_logistica(master, by_n)

        present_mar = sum(1 for p in by_n.values() if "playaCotidiana" in p)
        if present_mar == 0:
            print("--- MAR / PASEOS / MICROZONA ---")
            print("capa mar/paseos aún no sincronizada (0/83)")
        elif present_mar != 83:
            raise SystemExit(
                f"ABORT QA: cobertura parcial mar/paseos ({present_mar}/83)"
            )
        else:
            verify_mar_paseos(master, by_n)

        present_casa = sum(
            1 for p in by_n.values() if all(k in p for k in CASA_REVENTA_JSON_KEYS)
        )
        if present_casa == 0:
            print("--- CASA / REVENTA ---")
            print("capa CASA/reventa aún no sincronizada (0/83)")
        elif present_casa != 83:
            raise SystemExit(
                f"ABORT QA: cobertura parcial CASA/reventa ({present_casa}/83)"
            )
        else:
            verify_casa_reventa(master, by_n)

        # clima_basico: campos ya existen; tras CURSOR_11 deben = v15 83/83
        verify_clima_basico(master, by_n)

        print("RESULTADO SYNC QA: OK")
        return 0

    before = {fname: json.loads(json.dumps(rows)) for fname, rows in files.items()}

    if args.wave == "precios":
        stats = apply_precios(master, files)
        by_n2, files2 = load_product()
        assert_authorized_only(before, files2, set(PRICE_KEYS), set())
        verify_precios(master, by_n2)
        print("RESULTADO SYNC QA: OK")
        print("---")
        print(f"JSON tocados: {len(stats['touched_files'])}")
        print(f"precios cambiados: {stats['changed_precio']}")
        print(f"A/B cambiados: {stats['changed_ab']}")
        return 0

    if args.wave == "servicios":
        price_before = {
            int(r["n"]): {k: r.get(k) for k in REGRESSION_BEFORE_SERVICIOS}
            for rows in before.values()
            for r in rows
        }
        stats = apply_servicios(master, files)
        by_n2, files2 = load_product()
        assert_no_regression(price_before, by_n2, REGRESSION_BEFORE_SERVICIOS)
        assert_authorized_only(
            before,
            files2,
            allowed={"servicios", *SERVICIOS_NEW_KEYS},
            allow_new=set(SERVICIOS_NEW_KEYS),
        )
        verify_precios(master, by_n2)
        verify_servicios(master, by_n2)
        print("RESULTADO SYNC QA: OK")
        print("---")
        print(f"JSON tocados: {len(stats['touched_files'])}")
        print(f"servicios cambiados: {stats['changed_servicios']}")
        print(f"decimales preservados: {stats['decimals'] or 'ninguno'}")
        for line in stats["examples"]:
            print(f"  - {line}")
        return 0

    if args.wave == "logistica":
        prev_snap = {
            int(r["n"]): {k: r.get(k) for k in REGRESSION_BEFORE_LOGISTICA}
            for rows in before.values()
            for r in rows
        }
        stats = apply_logistica(master, files)
        by_n2, files2 = load_product()
        assert_no_regression(prev_snap, by_n2, REGRESSION_BEFORE_LOGISTICA)
        assert_authorized_only(
            before,
            files2,
            allowed=set(LOGISTICA_JSON_KEYS),
            allow_new=set(LOGISTICA_JSON_KEYS),
        )
        verify_precios(master, by_n2)
        verify_servicios(master, by_n2)
        verify_logistica(master, by_n2)
        print("RESULTADO SYNC QA: OK")
        print("---")
        print(f"JSON tocados: {len(stats['touched_files'])}")
        for src, dst in LOGISTICA_MAP.items():
            print(f"  {src} → {dst}")
        return 0

    if args.wave == "mar_paseos":
        prev_snap = {
            int(r["n"]): {k: r.get(k) for k in REGRESSION_BEFORE_MAR_PASEOS}
            for rows in before.values()
            for r in rows
        }
        stats = apply_mar_paseos(master, files)
        by_n2, files2 = load_product()
        assert_no_regression(prev_snap, by_n2, REGRESSION_BEFORE_MAR_PASEOS)
        assert_authorized_only(
            before,
            files2,
            allowed=set(MAR_PASEOS_JSON_KEYS),
            allow_new=set(MAR_PASEOS_JSON_KEYS),
        )

        verify_precios(master, by_n2)
        verify_servicios(master, by_n2)
        verify_logistica(master, by_n2)
        verify_mar_paseos(master, by_n2)
        for rows in before.values():
            for r in rows:
                n = int(r["n"])
                cur = by_n2[n]
                for hk in ("minCosta", "minBano", "playaBano", "franja"):
                    if cur.get(hk) != r.get(hk):
                        raise SystemExit(
                            f"ABORT: se alteró campo histórico mar {hk} en n={n}"
                        )
        print("RESULTADO SYNC QA: OK")
        print("---")
        print(f"JSON tocados: {len(stats['touched_files'])}")
        for src, dst in MAR_PASEOS_MAP.items():
            print(f"  {src} → {dst}")
        print("cobertura (no-null en producto):")
        for k, nfilled in stats["coverage"].items():
            print(f"  {k}: {nfilled}/83")
        print("mar-municipios.json: no modificado.")
        return 0

    if args.wave == "casa_reventa":
        prev_snap = {
            int(r["n"]): {k: r.get(k) for k in REGRESSION_BEFORE_CASA_REVENTA}
            for rows in before.values()
            for r in rows
        }
        stats = apply_casa_reventa(master, files)
        by_n2, files2 = load_product()
        assert_no_regression(prev_snap, by_n2, REGRESSION_BEFORE_CASA_REVENTA)
        assert_authorized_only(
            before,
            files2,
            allowed=set(CASA_REVENTA_JSON_KEYS),
            allow_new=set(CASA_REVENTA_JSON_KEYS),
        )
        verify_precios(master, by_n2)
        verify_servicios(master, by_n2)
        verify_logistica(master, by_n2)
        verify_mar_paseos(master, by_n2)
        verify_casa_reventa(master, by_n2)
        print("RESULTADO SYNC QA: OK")
        print("---")
        print(f"JSON tocados: {len(stats['touched_files'])}")
        for src, dst in CASA_REVENTA_MAP.items():
            print(f"  {src} → {dst}")
        for line in stats["examples"]:
            print(f"  - {line}")
        print(
            "Semántica: textos literales v15; sin scores/rankings/predicciones; "
            "sin inserción en relatos; UI de ficha pendiente."
        )
        return 0

    # wave clima_basico
    if not CLIMA_MUNICIPIOS_PATH.is_file():
        raise SystemExit(f"ABORT: falta {CLIMA_MUNICIPIOS_PATH}")
    if not ZONAS_JSON_PATH.is_file():
        raise SystemExit(f"ABORT: falta {ZONAS_JSON_PATH}")
    clima_before = CLIMA_MUNICIPIOS_PATH.read_bytes()
    zonas_before = ZONAS_JSON_PATH.read_bytes()

    prev_snap = {
        int(r["n"]): {k: r.get(k) for k in REGRESSION_BEFORE_CLIMA_BASICO}
        for rows in before.values()
        for r in rows
    }
    stats = apply_clima_basico(master, files)
    by_n2, files2 = load_product()
    assert_no_regression(prev_snap, by_n2, REGRESSION_BEFORE_CLIMA_BASICO)
    assert_authorized_only(
        before,
        files2,
        allowed=set(CLIMA_BASICO_JSON_KEYS),
        allow_new=set(),
    )
    if CLIMA_MUNICIPIOS_PATH.read_bytes() != clima_before:
        raise SystemExit("ABORT: clima-municipios.json fue modificado (prohibido)")
    if ZONAS_JSON_PATH.read_bytes() != zonas_before:
        raise SystemExit("ABORT: zonas.json fue modificado (prohibido)")

    verify_precios(master, by_n2)
    verify_servicios(master, by_n2)
    verify_logistica(master, by_n2)
    verify_mar_paseos(master, by_n2)
    verify_casa_reventa(master, by_n2)
    verify_clima_basico(master, by_n2)

    ac_before = next(
        r for rows in before.values() for r in rows if int(r["n"]) == 32
    )
    ac_after = by_n2[32]
    if ac_before.get("despejados") != ac_after.get("despejados") or ac_before.get(
        "cubiertos"
    ) != ac_after.get("cubiertos"):
        raise SystemExit("ABORT: A Coruña despejados/cubiertos alterados")

    print("RESULTADO SYNC QA: OK")
    print("---")
    print(f"JSON tocados: {len(stats['touched_files'])}")
    for src, dst in CLIMA_BASICO_MAP.items():
        print(f"  {src} → {dst} (cambios: {stats['changed_by_key'][dst]})")
    for line in stats["examples"]:
        print(f"  - {line}")
    print(
        "A Coruña: sol/lluvia alineados a v15; despejados/cubiertos intactos; "
        "relato AEMET/1939 y zonas.json Golfo sin tocar (deuda editorial)."
    )
    print("clima-municipios.json: no modificado. zonas.json: no modificado.")
    return 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except SystemExit:
        raise
    except Exception as e:
        print(f"ABORT: {e}", file=sys.stderr)
        sys.exit(2)
