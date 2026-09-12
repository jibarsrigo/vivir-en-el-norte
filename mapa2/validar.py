"""Validación fila a fila de data/municipios.csv contra el esquema acordado.

Uso:
    python -m mapa2.validar            # imprime el informe y sale con 1 si hay errores
    python -m mapa2.validar --informe  # además escribe output/informe_validacion.md
"""
from __future__ import annotations

import argparse
import math
import sys
from dataclasses import dataclass, field

import pandas as pd

from . import esquema as E


@dataclass
class ResultadoFila:
    n: int
    municipio: str
    errores: list[str] = field(default_factory=list)
    avisos: list[str] = field(default_factory=list)

    @property
    def ok(self) -> bool:
        return not self.errores


def cargar() -> pd.DataFrame:
    df = pd.read_csv(E.CSV_MAESTRO, sep=";", encoding="utf-8")
    return df


def _vacio(v) -> bool:
    return v is None or (isinstance(v, float) and math.isnan(v)) or (isinstance(v, str) and not v.strip())


def validar_estructura(df: pd.DataFrame) -> list[str]:
    errores = []
    esperadas = [c.nombre for c in E.COLUMNAS]
    faltan = [c for c in esperadas if c not in df.columns]
    sobran = [c for c in df.columns if c not in esperadas]
    if faltan:
        errores.append(f"Faltan columnas: {faltan}")
    if sobran:
        errores.append(f"Columnas no previstas en el esquema: {sobran}")
    if len(df) != 41:
        errores.append(f"La tabla debe tener 41 filas y tiene {len(df)}")
    if "n" in df.columns and list(df["n"]) != list(range(1, len(df) + 1)):
        errores.append("La numeración Nº no es 1..41 consecutiva")
    if "municipio" in df.columns:
        if list(df["municipio"]) != E.MUNICIPIOS_ACORDADOS[: len(df)]:
            errores.append("El orden/nombre de municipios no coincide con la lista acordada")
        dup = df["municipio"][df["municipio"].duplicated()].tolist()
        if dup:
            errores.append(f"Municipios duplicados: {dup}")
    return errores


def validar_fila(fila: pd.Series) -> ResultadoFila:
    r = ResultadoFila(int(fila["n"]), str(fila["municipio"]))
    err, aviso = r.errores.append, r.avisos.append
    mun = r.municipio

    # Obligatoriedad y rangos por columna
    for col in E.COLUMNAS:
        v = fila.get(col.nombre)
        if _vacio(v):
            if col.obligatoria:
                err(f"{col.nombre}: vacío")
            continue
        if col.minimo is not None or col.maximo is not None:
            try:
                x = float(v)
            except (TypeError, ValueError):
                err(f"{col.nombre}: no numérico ({v!r})")
                continue
            if col.minimo is not None and x < col.minimo:
                err(f"{col.nombre}: {x} < mínimo {col.minimo}")
            if col.maximo is not None and x > col.maximo:
                err(f"{col.nombre}: {x} > máximo {col.maximo}")

    # Asignaciones cerradas
    if fila["hospital_referencia"] != E.HOSPITAL_DE.get(mun):
        err(f"hospital_referencia: {fila['hospital_referencia']!r} ≠ acordado {E.HOSPITAL_DE.get(mun)!r}")
    if fila["aeropuerto_principal"] != E.AEROPUERTO_DE.get(mun):
        err(f"aeropuerto_principal: {fila['aeropuerto_principal']!r} ≠ acordado {E.AEROPUERTO_DE.get(mun)!r}")
    if fila["pais"] != ("Portugal" if fila["provincia"] == "Viana do Castelo" else "España"):
        err("pais incoherente con la provincia")

    # Derivadas
    sol, dias = float(fila["sol_horas_anio"]), float(fila["lluvia_dias_anio"])
    if int(fila["sol_dias_equiv"]) != round(sol / 8):
        err(f"sol_dias_equiv: {fila['sol_dias_equiv']} ≠ {round(sol / 8)} (= horas/8)")
    if fila["clase_clima"] != E.clase_clima(sol, dias):
        err(f"clase_clima: {fila['clase_clima']!r} ≠ regla {E.clase_clima(sol, dias)!r}")
    if float(fila["temp_verano_c"]) <= float(fila["temp_invierno_c"]):
        err("temp_verano_c debe ser mayor que temp_invierno_c")

    # Mercado: precios de referencia
    pm2 = float(fila["precio_m2_eur"])
    if pm2 % 50 != 0:
        aviso("precio_m2_eur no está redondeado a 50 €")
    costa = float(fila["min_playa"]) <= E.MAX_MIN_PLAYA_COSTA
    esperados = {
        "viv_2hab_5min_eur": E.precio_vivienda(pm2, E.M2_2HAB, E.FACTOR_COSTA) if costa else None,
        "viv_3hab_5min_eur": E.precio_vivienda(pm2, E.M2_3HAB, E.FACTOR_COSTA) if costa else None,
        "viv_2hab_20_30min_eur": E.precio_vivienda(pm2, E.M2_2HAB, E.FACTOR_INTERIOR),
        "viv_3hab_20_30min_eur": E.precio_vivienda(pm2, E.M2_3HAB, E.FACTOR_INTERIOR),
    }
    for col, esperado in esperados.items():
        v = fila[col]
        if esperado is None:
            if not _vacio(v):
                err(f"{col}: debe estar vacío (núcleo a {fila['min_playa']} min de playa, > {E.MAX_MIN_PLAYA_COSTA})")
        elif _vacio(v):
            err(f"{col}: vacío pero el núcleo tiene playa a ≤ {E.MAX_MIN_PLAYA_COSTA} min")
        elif int(v) != esperado:
            err(f"{col}: {int(v)} ≠ {esperado} según la regla")
    if not costa and _vacio(fila["notas"]):
        err("notas: hay que justificar la ausencia de franja costera ≤ 5 min")

    # Primas
    pt, pv, ptv = fila["prima_terraza_pct"], fila["prima_vistas_mar_pct"], fila["prima_terraza_vistas_pct"]
    if _vacio(pv) != _vacio(ptv):
        err("prima_vistas_mar_pct y prima_terraza_vistas_pct deben estar ambas vacías o ambas rellenas")
    if not _vacio(pv):
        pt, pv, ptv = float(pt), float(pv), float(ptv)
        if not (max(pt, pv) <= ptv <= pt + pv):
            err(f"prima_terraza_vistas_pct={ptv} fuera de [max({pt},{pv}), {pt + pv}]")
    elif mun not in ("Tui", "Tomiño"):
        err("prima_vistas_mar_pct solo puede estar vacía en municipios sin costa (Tui, Tomiño)")

    # Coherencia operativa
    if int(fila["min_hospital"]) > 45:
        aviso(f"hospital a {fila['min_hospital']} min (> 45)")
    if int(fila["min_aeropuerto"]) > 90:
        aviso(f"aeropuerto a {fila['min_aeropuerto']} min (> 90)")
    if int(fila["dependencia_coche_1_10"]) <= 3 and int(fila["servicios_1_10"]) < 7:
        aviso("dependencia del coche muy baja para un nivel de servicios < 7")
    return r


def validar(df: pd.DataFrame) -> tuple[list[str], list[ResultadoFila]]:
    estructura = validar_estructura(df)
    filas = [validar_fila(f) for _, f in df.iterrows()] if not estructura or len(df) > 0 else []
    return estructura, filas


def informe_markdown(df: pd.DataFrame, estructura: list[str], filas: list[ResultadoFila]) -> str:
    total_err = len(estructura) + sum(len(f.errores) for f in filas)
    out = ["# Informe de validación · MAPA 2.0", ""]
    out.append(f"- Filas: **{len(df)}** · Columnas: **{len(df.columns)}**")
    out.append(f"- Errores de estructura: **{len(estructura)}**")
    out.append(f"- Filas con errores: **{sum(1 for f in filas if not f.ok)}** / {len(filas)}")
    out.append(f"- Avisos (no bloqueantes): **{sum(len(f.avisos) for f in filas)}**")
    out.append(f"- Resultado: **{'VÁLIDA' if total_err == 0 else 'CON ERRORES'}**")
    out.append("")
    if estructura:
        out.append("## Estructura")
        out += [f"- ❌ {e}" for e in estructura]
        out.append("")
    out.append("## Fila a fila")
    out.append("")
    out.append("| Nº | Municipio | Estado | Detalle |")
    out.append("|---:|---|---|---|")
    for f in filas:
        estado = "OK" if f.ok else "ERROR"
        detalle = "; ".join(f.errores + [f"aviso: {a}" for a in f.avisos]) or "—"
        out.append(f"| {f.n} | {f.municipio} | {estado} | {detalle} |")
    out.append("")
    out.append("## Cobertura por columna")
    out.append("")
    out.append("| Columna | Bloque | Tipo | Rellenas | Vacías | Vacíos justificados |")
    out.append("|---|---|---|---:|---:|---|")
    for c in E.COLUMNAS:
        vacias = int(df[c.nombre].isna().sum()) if c.nombre in df.columns else len(df)
        just = "sí (columna opcional)" if c.obligatoria is False and vacias else ("—" if not vacias else "NO")
        out.append(f"| {c.nombre} | {c.bloque} | {c.tipo} | {len(df) - vacias} | {vacias} | {just} |")
    return "\n".join(out) + "\n"


def main(argv: list[str] | None = None) -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--informe", action="store_true", help="escribe output/informe_validacion.md")
    args = ap.parse_args(argv)

    df = cargar()
    estructura, filas = validar(df)
    for e in estructura:
        print(f"ESTRUCTURA  ❌ {e}")
    for f in filas:
        marca = "OK " if f.ok else "ERR"
        extra = ""
        if f.errores:
            extra += "  " + " | ".join(f.errores)
        if f.avisos:
            extra += "  (avisos: " + " | ".join(f.avisos) + ")"
        print(f"{f.n:>2} {marca} {f.municipio:<32}{extra}")
    total_err = len(estructura) + sum(len(f.errores) for f in filas)
    print(f"\n{len(df)} filas × {len(df.columns)} columnas · errores: {total_err} · avisos: {sum(len(f.avisos) for f in filas)}")
    if args.informe:
        E.DIR_SALIDA.mkdir(exist_ok=True)
        ruta = E.DIR_SALIDA / "informe_validacion.md"
        ruta.write_text(informe_markdown(df, estructura, filas), encoding="utf-8")
        print(f"Informe escrito en {ruta.relative_to(E.RAIZ)}")
    return 1 if total_err else 0


if __name__ == "__main__":
    sys.exit(main())
