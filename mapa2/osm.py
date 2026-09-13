"""Descarga (y guarda en caché) los elementos de OpenStreetMap de cada término municipal.

Se usa como base de los mapas municipales del estudio. La caché se guarda en
``data/osm/<municipio>.json`` ya filtrada y compacta, para no depender de la red al
regenerar los mapas. Datos © colaboradores de OpenStreetMap (ODbL).

Uso:  python -m mapa2.osm "A Guarda" "Oia" ...      (sin argumentos: todos los de la tabla)
"""
from __future__ import annotations

import json
import re
import sys
import time
import unicodedata
import urllib.parse
import urllib.request
from pathlib import Path

import geopandas as gpd
import pandas as pd
from shapely.geometry import LineString, Point

from . import esquema as E

RAIZ = Path(__file__).resolve().parent.parent
DIR_OSM = RAIZ / "data" / "osm"
OVERPASS = "https://overpass-api.de/api/interpreter"

CONSULTA = """
[out:json][timeout:90];
(
  nwr["natural"="beach"]({bbox});
  nwr["tourism"="viewpoint"]({bbox});
  nwr["amenity"="pharmacy"]({bbox});
  nwr["shop"="supermarket"]({bbox});
  nwr["amenity"~"^(hospital|clinic|doctors)$"]({bbox});
  nwr["healthcare"~"^(hospital|centre|clinic)$"]({bbox});
  nwr["railway"~"^(station|halt)$"]["station"!="subway"]({bbox});
  nwr["leisure"="marina"]({bbox});
  nwr["harbour"="yes"]({bbox});
  nwr["amenity"="ferry_terminal"]({bbox});
  nwr["landuse"="port"]({bbox});
  nwr["leisure"="golf_course"]({bbox});
  nwr["natural"="peak"]["name"]({bbox});
  nwr["historic"~"^(castle|monastery|archaeological_site|fort|city_gate|citywalls)$"]["name"]({bbox});
  nwr["amenity"="place_of_worship"]["building"="cathedral"]({bbox});
  nwr["tourism"="museum"]["name"]({bbox});
  nwr["amenity"~"^(spa|public_bath)$"]({bbox});
  nwr["leisure"="water_park"]({bbox});
  nwr["amenity"="marketplace"]({bbox});
  nwr["aeroway"="aerodrome"]({bbox});
  node["place"~"^(city|town|village|suburb)$"]({bbox});
);
out center tags;
(
  way["highway"~"^(motorway|trunk|primary|secondary)$"]({bbox});
  way["railway"="rail"]["service"!~"."]({bbox});
);
out geom tags;
"""


def slug(nombre: str) -> str:
    base = nombre.split(" (")[0]
    base = unicodedata.normalize("NFKD", base).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", "_", base.lower()).strip("_")


def ruta_cache(municipio: str) -> Path:
    return DIR_OSM / f"{slug(municipio)}.json"


def clasificar(t: dict) -> str | None:
    nombre = (t.get("name") or "").lower()
    if t.get("natural") == "beach":
        return "playa"
    if t.get("tourism") == "viewpoint":
        return "mirador"
    if t.get("amenity") == "pharmacy":
        return "farmacia"
    if t.get("shop") == "supermarket":
        return "supermercado"
    if t.get("amenity") == "hospital" or t.get("healthcare") == "hospital":
        return "hospital"
    if t.get("amenity") in ("clinic", "doctors") or t.get("healthcare") in ("centre", "clinic"):
        if re.search(r"centro de sa|centre de sa|centro de salud|\bpac\b|punto de atenci|usf|ucsp|unidade de sa|consultorio|ambulatorio", nombre):
            return "salud"
        return None
    if t.get("railway") in ("station", "halt"):
        return "tren"
    if t.get("leisure") == "marina" or t.get("harbour") == "yes" or t.get("landuse") == "port" or t.get("amenity") == "ferry_terminal":
        return "puerto"
    if t.get("leisure") == "golf_course":
        return "golf"
    if t.get("natural") == "peak":
        return "cima"
    if t.get("historic") or t.get("building") == "cathedral":
        return "historico"
    if t.get("tourism") == "museum":
        return "museo"
    if t.get("amenity") in ("spa", "public_bath") or t.get("leisure") == "water_park":
        return "termas"
    if t.get("amenity") == "marketplace":
        return "mercado"
    if t.get("aeroway") == "aerodrome":
        return "aeropuerto"
    if t.get("place") in ("city", "town", "village", "suburb"):
        return "lugar"
    return None


def _consultar(bbox: tuple[float, float, float, float], intentos: int = 4) -> dict:
    lon0, lat0, lon1, lat1 = bbox
    q = CONSULTA.format(bbox=f"{lat0:.4f},{lon0:.4f},{lat1:.4f},{lon1:.4f}")
    datos = urllib.parse.urlencode({"data": q}).encode()
    espera = 5
    for i in range(intentos):
        try:
            peticion = urllib.request.Request(OVERPASS, data=datos, headers={"User-Agent": "MAPA2/1.0 (estudio de municipios; contacto vía repositorio)"})
            with urllib.request.urlopen(peticion, timeout=180) as r:
                cuerpo = r.read().decode("utf-8")
            if cuerpo.lstrip().startswith("{"):
                return json.loads(cuerpo)
        except Exception as exc:  # noqa: BLE001
            print(f"   reintento {i + 1}: {exc}")
        time.sleep(espera)
        espera *= 2
    raise RuntimeError("Overpass no respondió")


def _poligono_municipio(municipio: str, lat: float, lon: float, pais: str):
    capa = "municipios_pt_norte" if pais == "Portugal" else "municipios_es_norte"
    g = gpd.read_file(E.DIR_GEO / f"{capa}.geojson")
    p = Point(lon, lat)
    dentro = g[g.geometry.contains(p)]
    if len(dentro):
        return dentro.iloc[0].geometry
    return None


def descargar(municipio: str, lat: float, lon: float, pais: str, forzar: bool = False) -> dict:
    destino = ruta_cache(municipio)
    if destino.exists() and not forzar:
        return json.loads(destino.read_text(encoding="utf-8"))
    poligono = _poligono_municipio(municipio, lat, lon, pais)
    if poligono is None:
        raise RuntimeError(f"No encuentro el término municipal de {municipio}")
    minx, miny, maxx, maxy = poligono.bounds
    margen = 0.03
    bbox = (minx - margen, miny - margen, maxx + margen, maxy + margen)
    bruto = _consultar(bbox)
    puntos: list[dict] = []
    vias: list[dict] = []
    for el in bruto.get("elements", []):
        t = el.get("tags", {})
        if el["type"] == "way" and "geometry" in el and (t.get("highway") or t.get("railway") == "rail"):
            coords = [(g["lon"], g["lat"]) for g in el["geometry"]]
            if len(coords) < 2:
                continue
            linea = LineString(coords).simplify(0.0003)
            vias.append({
                "clase": t.get("highway") or "rail",
                "ref": t.get("ref", ""),
                "nombre": t.get("name", ""),
                "coords": [[round(x, 5), round(y, 5)] for x, y in linea.coords],
            })
            continue
        tipo = clasificar(t)
        if not tipo:
            continue
        if "lat" in el:
            la, lo = el["lat"], el["lon"]
        elif "center" in el:
            la, lo = el["center"]["lat"], el["center"]["lon"]
        else:
            continue
        puntos.append({
            "tipo": tipo,
            "nombre": t.get("name", ""),
            "lat": round(la, 5),
            "lon": round(lo, 5),
            "dentro": bool(poligono.contains(Point(lo, la))),
            "marca": t.get("brand", ""),
            "ele": t.get("ele", ""),
        })
    salida = {
        "municipio": municipio,
        "bbox": [round(v, 4) for v in bbox],
        "descargado": time.strftime("%Y-%m-%d"),
        "fuente": "OpenStreetMap (ODbL) vía Overpass API",
        "puntos": puntos,
        "vias": vias,
    }
    DIR_OSM.mkdir(parents=True, exist_ok=True)
    destino.write_text(json.dumps(salida, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    return salida


def resumen(datos: dict) -> dict[str, int]:
    c: dict[str, int] = {}
    for p in datos["puntos"]:
        if p["dentro"]:
            c[p["tipo"]] = c.get(p["tipo"], 0) + 1
    return c


def main(nombres: list[str]) -> None:
    df = pd.read_csv(E.CSV_MAESTRO, sep=";", encoding="utf-8")
    if nombres:
        df = df[df["municipio"].isin(nombres)]
    for _, f in df.iterrows():
        cache = ruta_cache(f["municipio"])
        nuevo = not cache.exists()
        datos = descargar(f["municipio"], f["lat"], f["lon"], f["pais"])
        print(f"{f['municipio']:<28} {'descargado' if nuevo else 'caché':<11} {resumen(datos)}")
        if nuevo:
            time.sleep(3)  # cortesía con Overpass


if __name__ == "__main__":
    main(sys.argv[1:])
