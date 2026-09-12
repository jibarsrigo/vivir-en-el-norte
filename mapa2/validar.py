"""Validación fila a fila de data/municipios.csv contra el esquema acordado (v2).

Uso:
    python -m mapa2.validar            # imprime el informe y sale con 1 si hay errores
    python -m mapa2.validar --informe  # además escribe output/informe_validacion.md
"""
from __future__ import annotations

import argparse
import math
import re
import sys
from dataclasses import dataclass, field

import pandas as pd

from . import esquema as E

RE_HOSPITAL = re.compile(r"^(?P<nombre>.+?) \[(?P<tipo>Púb|Priv)\] (?P<km>\d+) km · (?P<min>\d+) min(?P<extra>( · fuera del SNS)?)$")
RE_AEROPUERTO = re.compile(r"^(?P<nombre>.+?) (?P<km>\d+) km · (?P<min>\d+) min \(Palma: (?P<palma>.+?)\)$")
RE_MEJOR_PALMA = re.compile(r"^(?P<nombre>.+?) \((?P<palma>.+?)\) · (?P<min>\d+) min$")
AEROPUERTO_POR_NOMBRE = {a.nombre: a for a in E.AEROPUERTOS.values()}
PAIS_DE_PROVINCIA = {"Viana do Castelo": "Portugal", "Braga": "Portugal", "Porto": "Portugal"}
SIN_VISTAS_MAR = {"Tui", "Tomiño", "Valença", "Vila Nova de Cerveira", "Ponte de Lima"}


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
    return pd.read_csv(E.CSV_MAESTRO, sep=";", encoding="utf-8")


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
    if list(df.columns) != esperadas and not faltan and not sobran:
        errores.append("El orden de las columnas no coincide con el esquema")
    total = len(E.MUNICIPIOS_ACORDADOS)
    if len(df) != total:
        errores.append(f"La tabla debe tener {total} filas y tiene {len(df)}")
    if "n" in df.columns and list(df["n"]) != list(range(1, len(df) + 1)):
        errores.append(f"La numeración Nº no es 1..{len(df)} consecutiva")
    if "municipio" in df.columns:
        if list(df["municipio"]) != E.MUNICIPIOS_ACORDADOS[: len(df)]:
            errores.append("El orden/nombre de municipios no coincide con la lista acordada por zonas")
        dup = df["municipio"][df["municipio"].duplicated()].tolist()
        if dup:
            errores.append(f"Municipios duplicados: {dup}")
    return errores


def _mejores(df: pd.DataFrame) -> tuple[int, int, int, int]:
    return (
        int(df["sol_horas_anio"].max()),
        int(df["lluvia_dias_anio"].min()),
        int(df["hospital_min"].min()),
        int(df["aeropuerto_min"].min()),
    )


def validar_fila(fila: pd.Series, mejores: tuple[int, int, int, int]) -> ResultadoFila:
    r = ResultadoFila(int(fila["n"]), str(fila["municipio"]))
    err, aviso = r.errores.append, r.avisos.append
    mun = r.municipio

    # Obligatoriedad, rangos y valores cerrados por columna
    for col in E.COLUMNAS:
        v = fila.get(col.nombre)
        if _vacio(v):
            if col.obligatoria:
                err(f"{col.nombre}: vacío")
            continue
        if col.valores is not None and str(v) not in col.valores:
            err(f"{col.nombre}: {v!r} no está en {list(col.valores)}")
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

    # Identificación
    if fila["zona"] != E.ZONA_DE.get(mun):
        err(f"zona: {fila['zona']!r} ≠ acordada {E.ZONA_DE.get(mun)!r}")
    if fila["origen"] != E.origen_de(mun):
        err(f"origen: {fila['origen']!r} ≠ {E.origen_de(mun)!r}")
    pais_esperado = PAIS_DE_PROVINCIA.get(str(fila["provincia"]), "España")
    if fila["pais"] != pais_esperado:
        err(f"pais: {fila['pais']!r} incoherente con la provincia {fila['provincia']!r}")

    # Clima (derivadas)
    sol, dias = float(fila["sol_horas_anio"]), float(fila["lluvia_dias_anio"])
    if int(fila["sol_dias_equiv"]) != round(sol / 8):
        err(f"sol_dias_equiv: {fila['sol_dias_equiv']} ≠ {round(sol / 8)} (= horas/8)")
    if fila["clase_clima"] != E.clase_clima(sol, dias):
        err(f"clase_clima: {fila['clase_clima']!r} ≠ regla {E.clase_clima(sol, dias)!r}")
    if float(fila["temp_verano_c"]) <= float(fila["temp_invierno_c"]):
        err("temp_verano_c debe ser mayor que temp_invierno_c")
    if float(fila["dias_despejados"]) + float(fila["dias_cubiertos"]) > 365:
        err("dias_despejados + dias_cubiertos > 365")

    # Mar
    min_costa, min_bano = float(fila["min_costa"]), float(fila["min_bano"])
    if fila["franja"] != E.franja(min_costa):
        err(f"franja: {fila['franja']!r} ≠ regla {E.franja(min_costa)!r} (min_costa={min_costa:g})")
    if min_bano > 30:
        err(f"min_bano: {min_bano:g} > 30 (condición del proyecto)")

    # Sanidad: lista de hospitales coherente con hospital_km / hospital_min
    hospitales = [h.strip() for h in str(fila["hospitales"]).split(";") if h.strip()]
    parseados = []
    for h in hospitales:
        m = RE_HOSPITAL.match(h)
        if not m:
            err(f"hospitales: formato no reconocido en {h!r}")
            continue
        if m["nombre"] not in E.HOSPITALES:
            err(f"hospitales: {m['nombre']!r} no está en la lista de hospitales del esquema")
            continue
        hosp = E.HOSPITALES[m["nombre"]]
        if hosp.tipo != m["tipo"]:
            err(f"hospitales: {hosp.nombre} es [{hosp.tipo}], no [{m['tipo']}]")
        if (hosp.pais != fila["pais"]) != bool(m["extra"]):
            err(f"hospitales: {hosp.nombre} debe marcarse 'fuera del SNS' solo si está en otro país")
        parseados.append((int(m["min"]), int(m["km"]), hosp))
    if not parseados:
        err("hospitales: lista vacía o ilegible")
    else:
        if len(parseados) > 4:
            err(f"hospitales: {len(parseados)} hospitales; el máximo acordado es 4")
        if [p[0] for p in parseados] != sorted(p[0] for p in parseados):
            err("hospitales: no están ordenados por minutos")
        if len(parseados) > 1 and any(p[0] > E.HOSPITAL_MAXIMO_MIN for p in parseados):
            err(f"hospitales: hay hospitales a más de {E.HOSPITAL_MAXIMO_MIN} min en la lista")
        propios = [p for p in parseados if p[2].pais == fila["pais"]] or parseados
        if int(fila["hospital_min"]) != propios[0][0] or int(fila["hospital_km"]) != propios[0][1]:
            err(f"hospital_km/min: {fila['hospital_km']:g}/{fila['hospital_min']:g} ≠ primer hospital del propio país {propios[0][1]}/{propios[0][0]}")
        if not any(p[2].tipo == "Púb" for p in parseados):
            err("hospitales: no hay ningún hospital público en la lista")
        pub = next((p for p in parseados if p[2].tipo == "Púb" and p[2].pais == fila["pais"]), None)
        priv = next((p for p in parseados if p[2].tipo == "Priv" and p[2].pais == fila["pais"]), None)
        esp_pub = f"{pub[1]} km · {pub[0]} min · {pub[2].nombre}" if pub else ""
        esp_priv = f"{priv[1]} km · {priv[0]} min · {priv[2].nombre}" if priv else ""
        if str(fila["hospital_pub"]) != esp_pub:
            err(f"hospital_pub: {fila['hospital_pub']!r} ≠ {esp_pub!r}")
        if ("" if _vacio(fila["hospital_priv"]) else str(fila["hospital_priv"])) != esp_priv:
            err(f"hospital_priv: {fila['hospital_priv']!r} ≠ {esp_priv!r}")
    hmin = int(fila["hospital_min"])
    if hmin > E.HOSPITAL_MAXIMO_MIN:
        err(f"hospital_min: {hmin} > máximo del proyecto {E.HOSPITAL_MAXIMO_MIN}")
    elif hmin > E.HOSPITAL_DESEABLE_MIN:
        aviso(f"hospital a {hmin} min (> {E.HOSPITAL_DESEABLE_MIN} deseable)")

    # Aeropuertos
    aeropuertos = [a.strip() for a in str(fila["aeropuertos"]).split(";") if a.strip()]
    aparseados = []
    for a in aeropuertos:
        m = RE_AEROPUERTO.match(a)
        if not m:
            err(f"aeropuertos: formato no reconocido en {a!r}")
            continue
        aero = AEROPUERTO_POR_NOMBRE.get(m["nombre"])
        if aero is None:
            err(f"aeropuertos: {m['nombre']!r} no está en la lista de aeropuertos del esquema")
            continue
        if m["palma"] != aero.palma.lower():
            err(f"aeropuertos: {aero.nombre} Palma={m['palma']!r} ≠ esquema {aero.palma.lower()!r}")
        aparseados.append((int(m["min"]), int(m["km"]), aero))
    if not aparseados:
        err("aeropuertos: lista vacía o ilegible")
    else:
        if not 1 <= len(aparseados) <= 3:
            err(f"aeropuertos: {len(aparseados)} aeropuertos; se acordaron 2-3 (1 si solo hay uno a ≤ 120 min)")
        if [p[0] for p in aparseados] != sorted(p[0] for p in aparseados):
            err("aeropuertos: no están ordenados por minutos")
        if any(p[0] > E.AEROPUERTO_MAXIMO_MIN for p in aparseados):
            err(f"aeropuertos: hay aeropuertos a más de {E.AEROPUERTO_MAXIMO_MIN} min en la lista")
        if int(fila["aeropuerto_min"]) != aparseados[0][0]:
            err(f"aeropuerto_min: {fila['aeropuerto_min']:g} ≠ primer aeropuerto {aparseados[0][0]}")
        if fila["palma_mas_cercano"] != aparseados[0][2].palma:
            err(f"palma_mas_cercano: {fila['palma_mas_cercano']!r} ≠ {aparseados[0][2].palma!r} ({aparseados[0][2].nombre})")
        mejor = min(aparseados, key=lambda t: (E.GRUPO_PALMA[t[2].palma], t[0]))
        esperado = f"{mejor[2].nombre} ({mejor[2].palma.lower()}) · {mejor[0]} min"
        if str(fila["palma_mejor_opcion"]) != esperado:
            err(f"palma_mejor_opcion: {fila['palma_mejor_opcion']!r} ≠ {esperado!r}")
    amin = int(fila["aeropuerto_min"])
    if amin > E.AEROPUERTO_MAXIMO_MIN:
        err(f"aeropuerto_min: {amin} > máximo del proyecto {E.AEROPUERTO_MAXIMO_MIN}")
    elif amin > E.AEROPUERTO_DESEABLE_MIN:
        aviso(f"aeropuerto a {amin} min (> {E.AEROPUERTO_DESEABLE_MIN} deseable)")

    # Mercado: precios de referencia
    pm2 = float(fila["precio_m2_eur"])
    if pm2 % 50 != 0:
        aviso("precio_m2_eur no está redondeado a 50 €")
    en_a = fila["franja"] == "A"
    esperados = {
        "A_2hab_eur": E.precio_vivienda(pm2, E.M2_2HAB, E.FACTOR_A) if en_a else None,
        "A_3hab_eur": E.precio_vivienda(pm2, E.M2_3HAB, E.FACTOR_A) if en_a else None,
        "B_2hab_eur": E.precio_vivienda(pm2, E.M2_2HAB, E.FACTOR_B),
        "B_3hab_eur": E.precio_vivienda(pm2, E.M2_3HAB, E.FACTOR_B),
    }
    for col, esperado in esperados.items():
        v = fila[col]
        if esperado is None:
            if not _vacio(v):
                err(f"{col}: debe estar vacío (franja B, núcleo a {min_costa:g} min de la costa)")
        elif _vacio(v):
            err(f"{col}: vacío pero el núcleo está en franja A")
        elif int(v) != esperado:
            err(f"{col}: {int(v)} ≠ {esperado} según la regla")
    if fila["producto_en_presupuesto"] != E.producto_en_presupuesto(pm2):
        err(f"producto_en_presupuesto: {fila['producto_en_presupuesto']!r} ≠ regla {E.producto_en_presupuesto(pm2)!r}")
    if not en_a and "Franja B:" not in str(fila["debilidad_principal"]):
        err("debilidad_principal: en franja B debe incluir la explicación «Franja B: …»")

    # Primas
    pt, pv, ptv = fila["prima_terraza_pct"], fila["prima_vistas_mar_pct"], fila["prima_terraza_vistas_pct"]
    if _vacio(pv) != _vacio(ptv):
        err("prima_vistas_mar_pct y prima_terraza_vistas_pct deben estar ambas vacías o ambas rellenas")
    if not _vacio(pv):
        pt, pv, ptv = float(pt), float(pv), float(ptv)
        if not (max(pt, pv) <= ptv <= pt + pv):
            err(f"prima_terraza_vistas_pct={ptv} fuera de [max({pt},{pv}), {pt + pv}]")
        if mun in SIN_VISTAS_MAR:
            err("prima_vistas_mar_pct: debe estar vacía en un municipio sin vistas al mar posibles")
    elif mun not in SIN_VISTAS_MAR:
        err(f"prima_vistas_mar_pct solo puede estar vacía en municipios sin vistas al mar ({sorted(SIN_VISTAS_MAR)})")

    # Comparado con el mejor
    esperado = E.comparado_con_mejor(sol, dias, hmin, amin, *mejores)
    if str(fila["comparado_con_mejor"]) != esperado:
        err(f"comparado_con_mejor: {fila['comparado_con_mejor']!r} ≠ {esperado!r}")

    # Coherencia operativa
    if int(fila["dependencia_coche_1_10"]) <= 3 and int(fila["servicios_1_10"]) < 7:
        aviso("dependencia del coche muy baja para un nivel de servicios < 7")
    if int(fila["servicios_1_10"]) <= 4 and "Falta" not in str(fila["servicios_nota"]):
        err("servicios_nota: con servicios ≤ 4 hay que indicar qué falta")
    if "Falta: nada" in str(fila["servicios_nota"]):
        err("servicios_nota: si no falta nada relevante, no se dice")
    if "Además:" not in str(fila["debilidad_principal"]) and int(fila["hospital_min"]) > E.HOSPITAL_DESEABLE_MIN:
        err("debilidad_principal: falta el bloque de hechos derivados («Además: …»)")
    return r


def validar(df: pd.DataFrame) -> tuple[list[str], list[ResultadoFila]]:
    estructura = validar_estructura(df)
    faltan = [c.nombre for c in E.COLUMNAS if c.nombre not in df.columns]
    if faltan or len(df) == 0:
        return estructura, []
    mejores = _mejores(df)
    filas = [validar_fila(f, mejores) for _, f in df.iterrows()]
    return estructura, filas


def informe_markdown(df: pd.DataFrame, estructura: list[str], filas: list[ResultadoFila]) -> str:
    total_err = len(estructura) + sum(len(f.errores) for f in filas)
    out = ["# Informe de validación · MAPA 2.0", ""]
    out.append(f"- Filas: **{len(df)}** · Columnas: **{len(df.columns)}** · Zonas: **{len(E.ZONAS)}**")
    out.append(f"- Errores de estructura: **{len(estructura)}**")
    out.append(f"- Filas con errores: **{sum(1 for f in filas if not f.ok)}** / {len(filas)}")
    out.append(f"- Avisos (no bloqueantes): **{sum(len(f.avisos) for f in filas)}**")
    out.append(f"- Resultado: **{'VÁLIDA' if total_err == 0 else 'CON ERRORES'}**")
    out.append("")
    if len(df) and not estructura:
        ms, ml, mh, ma = _mejores(df)
        out.append("## Mejores valores de la tabla (referencia de «Comparado con el mejor»)")
        out.append("")
        out.append(f"- Sol: **{ms} h** · Lluvia: **{ml} d** · Hospital: **{mh} min** · Aeropuerto: **{ma} min**")
        out.append("")
    if estructura:
        out.append("## Estructura")
        out += [f"- ❌ {e}" for e in estructura]
        out.append("")
    out.append("## Fila a fila")
    out.append("")
    out.append("| Nº | Zona | Municipio | Estado | Detalle |")
    out.append("|---:|---|---|---|---|")
    for f in filas:
        estado = "OK" if f.ok else "ERROR"
        detalle = "; ".join(f.errores + [f"aviso: {a}" for a in f.avisos]) or "—"
        out.append(f"| {f.n} | {E.ZONA_DE.get(f.municipio, '')} | {f.municipio} | {estado} | {detalle} |")
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
