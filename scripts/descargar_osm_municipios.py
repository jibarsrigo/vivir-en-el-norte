"""Descarga caché OSM de los municipios publicados que faltan (con pausa).

Uso: python scripts/descargar_osm_municipios.py
"""
from __future__ import annotations

import json
import time
from pathlib import Path

import pandas as pd

from mapa2 import esquema as E
from mapa2 import osm

RAIZ = Path(__file__).resolve().parent.parent
DATA = RAIZ / "web" / "src" / "data"


def nombres_publicados() -> list[str]:
    out: list[str] = []
    for p in sorted(DATA.glob("municipios-*.json")):
        if "puntos" in p.name:
            continue
        for m in json.loads(p.read_text(encoding="utf-8")):
            out.append(m["municipio"])
    return out


def main() -> None:
    publicados = set(nombres_publicados())
    df = pd.read_csv(E.CSV_MAESTRO, sep=";", encoding="utf-8")
    df = df[df["municipio"].isin(publicados)]
    for _, f in df.iterrows():
        cache = osm.ruta_cache(f["municipio"])
        nuevo = not cache.exists()
        datos = osm.descargar(f["municipio"], f["lat"], f["lon"], f["pais"])
        print(f"{f['municipio']:<28} {'descargado' if nuevo else 'caché':<11} {osm.resumen(datos)}")
        if nuevo:
            time.sleep(12)


if __name__ == "__main__":
    main()
