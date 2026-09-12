"""Exporta la tabla maestra validada a Excel y genera el diccionario de columnas.

Uso:
    python -m mapa2.exportar
Salidas:
    output/tabla_maestra_mapa_2_0.xlsx   (hojas: Tabla maestra, Diccionario, Hospitales, Aeropuertos)
    data/diccionario_columnas.csv
"""
from __future__ import annotations

import sys

import pandas as pd

from . import esquema as E
from .validar import cargar, validar


def diccionario() -> pd.DataFrame:
    return pd.DataFrame([
        {
            "columna": c.nombre, "bloque": c.bloque, "etiqueta": c.etiqueta.replace("\n", " "), "unidad": c.unidad,
            "tipo_dato": c.tipo, "obligatoria": "sí" if c.obligatoria else "no",
            "minimo": c.minimo, "maximo": c.maximo, "definicion": c.definicion,
        }
        for c in E.COLUMNAS
    ])


def main(argv=None) -> int:
    df = cargar()
    estructura, filas = validar(df)
    errores = len(estructura) + sum(len(f.errores) for f in filas)
    if errores:
        raise SystemExit(f"La tabla tiene {errores} errores de validación; corrige data/municipios.csv antes de exportar.")

    dic = diccionario()
    dic.to_csv(E.RAIZ / "data" / "diccionario_columnas.csv", sep=";", index=False, encoding="utf-8")

    hosp = pd.DataFrame([(h, m) for h, ms in E.HOSPITALES_ACORDADOS.items() for m in ms], columns=["hospital", "municipio"])
    aero = pd.DataFrame([(a, m) for a, ms in E.AEROPUERTOS_ACORDADOS.items() for m in ms], columns=["aeropuerto", "municipio"])

    E.DIR_SALIDA.mkdir(exist_ok=True)
    ruta = E.DIR_SALIDA / "tabla_maestra_mapa_2_0.xlsx"
    etiquetas = {c.nombre: c.etiqueta.replace("\n", " ") for c in E.COLUMNAS}
    with pd.ExcelWriter(ruta, engine="openpyxl") as xw:
        df.rename(columns=etiquetas).to_excel(xw, sheet_name="Tabla maestra", index=False)
        dic.to_excel(xw, sheet_name="Diccionario", index=False)
        hosp.to_excel(xw, sheet_name="Hospitales", index=False)
        aero.to_excel(xw, sheet_name="Aeropuertos", index=False)
        for hoja in xw.sheets.values():
            hoja.freeze_panes = "C2" if hoja.title == "Tabla maestra" else "A2"
            for col in hoja.columns:
                ancho = max(len(str(c.value)) if c.value is not None else 0 for c in col)
                hoja.column_dimensions[col[0].column_letter].width = min(max(10, ancho + 2), 60)
    print(f"Excel escrito en {ruta.relative_to(E.RAIZ)}")
    print("Diccionario escrito en data/diccionario_columnas.csv")
    return 0


if __name__ == "__main__":
    sys.exit(main())
