"""Genera mapas municipales faltantes leyendo nombres desde JSON (UTF-8)."""
from __future__ import annotations

import json
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(RAIZ))

import pandas as pd

from mapa2 import esquema as E
from mapa2.mapas_municipio import DIR_SALIDA, generar, nombre_fichero

DATA = RAIZ / "web" / "src" / "data"


def main() -> None:
    publicados: list[str] = []
    for p in sorted(DATA.glob("municipios-*.json")):
        if "puntos" in p.name:
            continue
        for m in json.loads(p.read_text(encoding="utf-8")):
            publicados.append(m["municipio"])

    df = pd.read_csv(E.CSV_MAESTRO, sep=";", encoding="utf-8")
    df = df[df["municipio"].isin(publicados)]
    faltan = []
    for _, f in df.iterrows():
        dest = DIR_SALIDA / nombre_fichero(f)
        if not dest.exists():
            faltan.append(f["municipio"])
    print("Faltan:", faltan)
    if faltan:
        generar(faltan)


if __name__ == "__main__":
    main()
