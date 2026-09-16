"""Genera web/src/data/mar-municipios.json para todos los pueblos del atlas.

minCosta / minBano: estimación desde distancia geodésica a puntos de costa/playa
(referencia carretera ~1,6 min/km), con override exacto de fichas Baixo Miño.
"""
from __future__ import annotations

import json
import math
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
WEB_DATA = ROOT / "web" / "src" / "data"

# min/km en coche (calibrado con Baixo Miño: Tomiño ~12 km → 20 min).
MIN_POR_KM = 1.65


def haversine_km(lat1: float, lon1: float, lat2: float, lon2: float) -> float:
    r = 6371.0
    p1, p2 = math.radians(lat1), math.radians(lat2)
    dphi = math.radians(lat2 - lat1)
    dl = math.radians(lon2 - lon1)
    a = math.sin(dphi / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 2 * r * math.asin(math.sqrt(a))


def mins_from_km(km: float) -> int:
    return max(1, int(round(km * MIN_POR_KM)))


def densificar(poly: list[tuple[float, float]], paso_km: float = 4.0) -> list[tuple[float, float]]:
    out: list[tuple[float, float]] = []
    for i in range(len(poly) - 1):
        lat1, lon1 = poly[i]
        lat2, lon2 = poly[i + 1]
        out.append((lat1, lon1))
        d = haversine_km(lat1, lon1, lat2, lon2)
        n = max(1, int(d / paso_km))
        for k in range(1, n):
            t = k / n
            out.append((lat1 + (lat2 - lat1) * t, lon1 + (lon2 - lon1) * t))
    out.append(poly[-1])
    return out


# Polilínea aprox. costa atlántica + cantábrica (lat, lon), de sur a este.
COSTA_BASE: list[tuple[float, float]] = [
    (41.15, -8.68),  # Porto
    (41.35, -8.75),
    (41.55, -8.80),
    (41.70, -8.85),
    (41.82, -8.87),  # Âncora
    (41.90, -8.88),  # A Guarda
    (42.05, -8.89),  # Oia / Mougás
    (42.12, -8.85),  # Baiona
    (42.18, -8.82),
    (42.22, -8.78),  # Samil
    (42.28, -8.72),  # Cangas / ría
    (42.35, -8.78),  # Morrazo west
    (42.40, -8.70),
    (42.45, -8.85),  # Ons area coast
    (42.55, -8.90),  # O Grove / Sanxenxo
    (42.60, -8.80),
    (42.70, -9.00),  # Barbanza
    (42.78, -9.10),
    (42.90, -9.25),  # Fisterra area
    (43.05, -9.25),
    (43.20, -8.95),  # Costa da Morte N
    (43.30, -8.50),  # Ártabro
    (43.38, -8.40),  # A Coruña
    (43.45, -8.25),
    (43.55, -8.20),  # Ferrol
    (43.60, -7.80),
    (43.65, -7.55),  # Viveiro area
    (43.70, -7.35),  # Foz
    (43.55, -7.05),  # Ribadeo / Eo
    (43.55, -6.70),  # Occidente Asturias
    (43.55, -6.35),
    (43.55, -5.90),  # Avilés / Gijón coast
    (43.55, -5.65),
    (43.50, -5.40),  # Oriente
    (43.45, -5.05),
    (43.45, -4.75),  # Cantabria W
    (43.45, -4.40),
    (43.45, -4.00),
    (43.40, -3.80),  # Santander
    (43.40, -3.50),
    (43.35, -3.10),  # Laredo / Castro
    (43.35, -2.90),
]

# Rías / costa interior (también “costa” para paseo).
COSTA_RIAS: list[tuple[float, float]] = [
    (42.25, -8.72),
    (42.30, -8.65),  # Redondela / Cesantes
    (42.35, -8.62),
    (42.40, -8.65),  # Pontevedra ría
    (42.43, -8.65),
    (42.48, -8.85),
    (42.52, -8.87),
    (41.95, -8.78),  # Miño river mouth interior
    (42.02, -8.65),  # Tui river — no, that's not open sea; skip deep river
]

PLAYAS: list[tuple[str, float, float]] = [
    ("Matosinhos", 41.18, -8.69),
    ("Espinho", 41.01, -8.64),
    ("Ofir", 41.52, -8.79),
    ("Viana do Castelo", 41.69, -8.84),
    ("Moledo", 41.845, -8.868),
    ("Vila Praia de Âncora", 41.813, -8.865),
    ("Area Grande", 41.918, -8.879),
    ("O Muíño", 41.870, -8.856),
    ("Praia de Mougás", 42.053, -8.887),
    ("Praia Ladeira", 42.108, -8.836),
    ("Barbeira", 42.122, -8.852),
    ("Praia América", 42.136, -8.821),
    ("Panxón", 42.145, -8.823),
    ("Patos", 42.156, -8.832),
    ("Samil", 42.210, -8.777),
    ("Cesantes", 42.298, -8.630),
    ("Playa América (Nigrán)", 42.136, -8.821),
    ("Rodeira", 42.26, -8.78),
    ("Menduíña", 42.28, -8.85),
    ("Silgar", 42.40, -8.82),
    ("A Lanzada", 42.45, -8.88),
    ("Areas", 42.42, -8.82),
    ("Foxos", 42.48, -8.90),
    ("Ribeira", 42.56, -8.99),
    ("Corrubedo", 42.57, -9.05),
    ("Carnota", 42.82, -9.10),
    ("Fisterra", 42.91, -9.27),
    ("Laxe", 43.22, -9.00),
    ("Razo", 43.28, -8.70),
    ("Orzán", 43.37, -8.41),
    ("Riazor", 43.37, -8.41),
    ("Doniños", 43.50, -8.32),
    ("Frouxeira", 43.58, -8.20),
    ("Cedeira", 43.65, -8.06),
    ("Esteiro", 43.68, -7.90),
    ("Area Longa", 43.68, -7.60),
    ("Covas", 43.68, -7.58),
    ("Foz", 43.57, -7.25),
    ("As Catedrais", 43.55, -7.10),
    ("Pechón", 43.55, -6.90),
    ("Tapia", 43.57, -6.95),
    ("Navia", 43.55, -6.72),
    ("Luarca", 43.55, -6.54),
    ("Cudillero", 43.56, -6.15),
    ("Salinas", 43.58, -5.96),
    ("San Lorenzo", 43.55, -5.65),
    ("España (Villaviciosa)", 43.52, -5.40),
    ("Rodiles", 43.53, -5.38),
    ("La Griega", 43.48, -5.20),
    ("Santa Marina (Ribadesella)", 43.46, -5.06),
    ("Gulpiyuri", 43.45, -4.88),
    ("Torimbia", 43.45, -4.85),
    ("Oyambre", 43.40, -4.33),
    ("Comillas", 43.39, -4.29),
    ("Somo", 43.43, -3.75),
    ("El Sardinero", 43.47, -3.78),
    ("Berria", 43.42, -3.45),
    ("Laredo", 43.41, -3.41),
    ("Oriñón", 43.40, -3.32),
    ("Ostende (Castro)", 43.38, -3.22),
]


def nearest(lat: float, lon: float, pts: list[tuple[float, float]]) -> tuple[float, tuple[float, float]]:
    best = pts[0]
    best_d = haversine_km(lat, lon, best[0], best[1])
    for p in pts[1:]:
        d = haversine_km(lat, lon, p[0], p[1])
        if d < best_d:
            best_d, best = d, p
    return best_d, best


def nearest_playa(lat: float, lon: float) -> tuple[float, str]:
    best_name = PLAYAS[0][0]
    best_d = haversine_km(lat, lon, PLAYAS[0][1], PLAYAS[0][2])
    for name, plat, plon in PLAYAS[1:]:
        d = haversine_km(lat, lon, plat, plon)
        if d < best_d:
            best_d, best_name = d, name
    return best_d, best_name


def main() -> None:
    puntos = json.loads((WEB_DATA / "municipios-puntos.json").read_text(encoding="utf-8"))
    baixo = {
        f["municipio"]: f
        for f in json.loads((WEB_DATA / "municipios-baixo-mino.json").read_text(encoding="utf-8"))
    }

    costa = densificar(COSTA_BASE, 3.5) + densificar(COSTA_RIAS, 3.0)

    out = []
    for m in puntos:
        nombre = m["nombre"]
        zona_id = m["zonaId"]
        lat, lon = m["lat"], m["lon"]

        if zona_id == "baixo-mino" and nombre in baixo:
            f = baixo[nombre]
            min_costa = int(f["minCosta"])
            min_bano = int(f["minBano"])
            playa = f["playaBano"]
            franja = f["franja"]
        else:
            d_costa, _ = nearest(lat, lon, costa)
            d_playa, playa = nearest_playa(lat, lon)
            min_costa = mins_from_km(d_costa)
            min_bano = mins_from_km(d_playa)
            # Playa de baño no puede ser más cerca que la costa en la práctica habitual.
            if min_bano < min_costa:
                min_bano = min_costa
            franja = "A" if min_costa <= 5 else "B"

        out.append(
            {
                "zonaId": zona_id,
                "nombre": nombre,
                "minCosta": min_costa,
                "minBano": min_bano,
                "playaBano": playa,
                "franja": franja,
            }
        )

    dest = WEB_DATA / "mar-municipios.json"
    dest.write_text(json.dumps(out, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {len(out)} rows → {dest}")
    # sanity Baixo Miño
    for row in out:
        if row["zonaId"] == "baixo-mino":
            print(row)


if __name__ == "__main__":
    main()
