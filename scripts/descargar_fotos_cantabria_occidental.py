"""Descarga fotos Cantabria Occidental (zona + 5 municipios)."""
from __future__ import annotations

import hashlib
import json
import time
import urllib.parse
import urllib.request
from pathlib import Path

OUT = Path("web/public/fotos/cantabria-occidental")
UA = "VivirEnElNorte/1.0 (cantabria-occidental photos)"
OUT.mkdir(parents=True, exist_ok=True)

# Títulos o fragmentos que delatan sitio equivocado (Alicante, Canarias, etc.)
BLOCK = (
    "alicante",
    "benidorm",
    "canarias",
    "tenerife",
    "gran canaria",
    "lanzarote",
    "fuerteventura",
    "mallorca",
    "palma de mallorca",
    "ibiza",
    "valencia",
    "barcelona",
    "málaga",
    "malaga",
    "cádiz",
    "cadiz",
    "huelva",
    "galicia",
    "asturias",
    "vizcaya",
    "bizkaia",
    "bilbao",
    "san sebastián",
    "san sebastian",
    "donostia",
)

# dest -> list of Commons titles to try (exact File names without File:)
PLAN: list[tuple[str, list[str]]] = [
    # Zona
    ("zona-san-vicente.jpg", [
        "San Vicente de la Barquera.jpg",
        "San Vicente de la Barquera Cantabria.jpg",
        "Ría de San Vicente de la Barquera.jpg",
        "San Vicente de la Barquera villa.jpg",
        "Puerto de San Vicente de la Barquera.jpg",
    ]),
    ("zona-comillas.jpg", [
        "Comillas.jpg",
        "Comillas Cantabria.jpg",
        "Comillas villa.jpg",
        "Vista de Comillas.jpg",
        "Comillas desde el mar.jpg",
    ]),
    ("zona-suances.jpg", [
        "Suances.jpg",
        "Suances Cantabria.jpg",
        "Playa de Suances.jpg",
        "Suances villa.jpg",
        "Puerto de Suances.jpg",
    ]),
    ("zona-liencres.jpg", [
        "Dunas de Liencres.jpg",
        "Parque Natural de las Dunas de Liencres.jpg",
        "Liencres Cantabria.jpg",
        "Playa de Liencres.jpg",
        "Liencres dunas.jpg",
    ]),
    ("zona-sardinero.jpg", [
        "Playa del Sardinero.jpg",
        "El Sardinero Santander.jpg",
        "Sardinero Santander.jpg",
        "Primera playa del Sardinero.jpg",
        "Sardinero Cantabria.jpg",
    ]),
    ("zona-oyambre.jpg", [
        "Playa de Oyambre.jpg",
        "Oyambre.jpg",
        "Parque Natural de Oyambre.jpg",
        "Oyambre Cantabria.jpg",
        "Oyambre San Vicente.jpg",
    ]),
    # San Vicente de la Barquera
    ("san-vicente-villa.jpg", [
        "San Vicente de la Barquera.jpg",
        "San Vicente de la Barquera casco.jpg",
        "San Vicente de la Barquera Cantabria.jpg",
        "Villa San Vicente de la Barquera.jpg",
    ]),
    ("san-vicente-ria.jpg", [
        "Ría de San Vicente de la Barquera.jpg",
        "Ria de San Vicente de la Barquera.jpg",
        "San Vicente de la Barquera ría.jpg",
        "Estuario San Vicente de la Barquera.jpg",
        "San Vicente Barquera Picos.jpg",
    ]),
    ("san-vicente-castillo.jpg", [
        "Castillo de San Vicente de la Barquera.jpg",
        "Castillo del Rey San Vicente de la Barquera.jpg",
        "Castillo San Vicente Barquera.jpg",
        "Castle San Vicente de la Barquera.jpg",
    ]),
    ("san-vicente-maza.jpg", [
        "Puente de la Maza.jpg",
        "Puente de la Maza San Vicente.jpg",
        "Puente de la Maza Cantabria.jpg",
        "Bridge of la Maza.jpg",
        "La Maza San Vicente de la Barquera.jpg",
    ]),
    ("san-vicente-meron.jpg", [
        "Playa de Merón.jpg",
        "Playa de Meron.jpg",
        "Merón San Vicente de la Barquera.jpg",
        "Meron Cantabria.jpg",
        "Playa Merón Cantabria.jpg",
    ]),
    ("san-vicente-oyambre.jpg", [
        "Playa de Oyambre.jpg",
        "Oyambre San Vicente.jpg",
        "Oyambre Cantabria.jpg",
        "Parque Natural Oyambre.jpg",
    ]),
    # Comillas
    ("comillas-capricho.jpg", [
        "El Capricho.jpg",
        "El Capricho Gaudí.jpg",
        "El Capricho de Gaudí Comillas.jpg",
        "Capricho Gaudí Comillas.jpg",
        "Villa Quijano Comillas.jpg",
    ]),
    ("comillas-sobrellano.jpg", [
        "Palacio de Sobrellano.jpg",
        "Sobrellano Comillas.jpg",
        "Palacio Sobrellano Comillas.jpg",
        "Palacio de Sobrellano Cantabria.jpg",
    ]),
    ("comillas-plaza.jpg", [
        "Plaza de Comillas.jpg",
        "Comillas plaza.jpg",
        "Plaza del Ayuntamiento Comillas.jpg",
        "Comillas casco.jpg",
        "Comillas Cantabria plaza.jpg",
    ]),
    ("comillas-playa.jpg", [
        "Playa de Comillas.jpg",
        "Comillas playa.jpg",
        "Playa Comillas Cantabria.jpg",
        "Beach Comillas.jpg",
    ]),
    ("comillas-villa.jpg", [
        "Comillas.jpg",
        "Comillas Cantabria.jpg",
        "Vista de Comillas.jpg",
        "Comillas villa modernista.jpg",
    ]),
    ("comillas-pontificia.jpg", [
        "Universidad Pontificia de Comillas.jpg",
        "Universidad Pontificia Comillas.jpg",
        "Pontificia Comillas.jpg",
        "Seminario Mayor Comillas.jpg",
        "Comillas Pontificia.jpg",
    ]),
    # Suances
    ("suances-concha.jpg", [
        "Playa de La Concha Suances.jpg",
        "La Concha Suances.jpg",
        "Playa La Concha Suances.jpg",
        "Concha de Suances.jpg",
        "Playa de Suances La Concha.jpg",
    ]),
    ("suances-locos.jpg", [
        "Playa de Los Locos.jpg",
        "Los Locos Suances.jpg",
        "Playa Los Locos Suances.jpg",
        "Los Locos Cantabria.jpg",
        "Playa de los Locos Suances.jpg",
    ]),
    ("suances-puerto.jpg", [
        "Puerto de Suances.jpg",
        "Suances puerto.jpg",
        "Puerto Suances Cantabria.jpg",
        "Harbour Suances.jpg",
        "Ría de San Martín de la Arena.jpg",
    ]),
    ("suances-dichoso.jpg", [
        "Punta del Dichoso.jpg",
        "Punta del Dichoso Suances.jpg",
        "Dichoso Suances.jpg",
        "Faro Punta del Dichoso.jpg",
        "Punta Dichoso Cantabria.jpg",
    ]),
    ("suances-villa.jpg", [
        "Suances.jpg",
        "Suances Cantabria.jpg",
        "Suances villa.jpg",
        "Casco de Suances.jpg",
        "Suances pueblo.jpg",
    ]),
    ("suances-paseo.jpg", [
        "Paseo de Suances.jpg",
        "Paseo marítimo Suances.jpg",
        "Suances paseo.jpg",
        "Paseo Suances Cantabria.jpg",
    ]),
    # Liencres (Piélagos)
    ("liencres-dunas.jpg", [
        "Dunas de Liencres.jpg",
        "Parque Natural de las Dunas de Liencres.jpg",
        "Dunas Liencres Cantabria.jpg",
        "Liencres dunes.jpg",
    ]),
    ("liencres-valdearenas.jpg", [
        "Playa de Valdearenas.jpg",
        "Valdearenas.jpg",
        "Valdearenas Liencres.jpg",
        "Playa Valdearenas Cantabria.jpg",
        "Valdearenas Piélagos.jpg",
    ]),
    ("liencres-canallave.jpg", [
        "Playa de Canallave.jpg",
        "Canallave.jpg",
        "Canallave Liencres.jpg",
        "Playa Canallave Cantabria.jpg",
        "Canallave Piélagos.jpg",
    ]),
    ("liencres-costa-quebrada.jpg", [
        "Costa Quebrada.jpg",
        "Costa Quebrada Cantabria.jpg",
        "Costa Quebrada Liencres.jpg",
        "Los Urros.jpg",
        "Los Urros Cantabria.jpg",
    ]),
    ("liencres-urbanizacion.jpg", [
        "Liencres.jpg",
        "Liencres Cantabria.jpg",
        "Liencres Piélagos.jpg",
        "Liencres pueblo.jpg",
        "Urbanización Liencres.jpg",
    ]),
    ("liencres-mortera.jpg", [
        "Mortera.jpg",
        "Mortera Cantabria.jpg",
        "Mortera Piélagos.jpg",
        "Mortera Liencres.jpg",
        "Urbanización Mortera.jpg",
    ]),
    # Santander
    ("santander-sardinero.jpg", [
        "Playa del Sardinero.jpg",
        "El Sardinero Santander.jpg",
        "Sardinero Santander.jpg",
        "Primera playa del Sardinero.jpg",
        "Segunda playa del Sardinero.jpg",
    ]),
    ("santander-magdalena.jpg", [
        "Palacio de la Magdalena.jpg",
        "Península de la Magdalena.jpg",
        "Magdalena Santander.jpg",
        "Peninsula de la Magdalena.jpg",
        "Palacio Magdalena Santander.jpg",
    ]),
    ("santander-cabo-mayor.jpg", [
        "Faro de Cabo Mayor.jpg",
        "Cabo Mayor.jpg",
        "Cabo Mayor Santander.jpg",
        "Faro Cabo Mayor Santander.jpg",
        "Cabo Mayor Cantabria.jpg",
    ]),
    ("santander-pereda.jpg", [
        "Paseo de Pereda.jpg",
        "Paseo de Pereda Santander.jpg",
        "Pereda Santander.jpg",
        "Paseo Pereda Cantabria.jpg",
    ]),
    ("santander-botin.jpg", [
        "Centro Botín.jpg",
        "Centro Botin Santander.jpg",
        "Centro Botín Santander.jpg",
        "Botín Santander.jpg",
        "Centro Botin.jpg",
    ]),
    ("santander-bahia.jpg", [
        "Bahía de Santander.jpg",
        "Bahia de Santander.jpg",
        "Bay of Santander.jpg",
        "Santander bahía.jpg",
        "Puerto de Santander.jpg",
    ]),
]


def blocked(title: str) -> bool:
    """Rechaza títulos de sitios equivocados (Alicante, Canarias, etc.)."""
    t = title.lower()
    return any(b in t for b in BLOCK)


def sha(b: bytes) -> str:
    return hashlib.sha256(b).hexdigest()[:12].upper()


def api(url: str) -> dict:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.loads(r.read().decode())


def get_url(title: str) -> str | None:
    if title.lower().endswith((".pdf", ".djvu", ".svg")):
        return None
    if blocked(title):
        return None
    u = (
        "https://commons.wikimedia.org/w/api.php?action=query&titles="
        + urllib.parse.quote("File:" + title)
        + "&prop=imageinfo&iiprop=url|mime&iiurlwidth=1400&format=json"
    )
    d = api(u)
    for p in d.get("query", {}).get("pages", {}).values():
        ii = (p.get("imageinfo") or [None])[0]
        if not ii:
            return None
        mime = (ii.get("mime") or "").lower()
        if not mime.startswith("image/"):
            return None
        return ii.get("thumburl") or ii.get("url")
    return None


def search(q: str) -> list[str]:
    u = (
        "https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch="
        + urllib.parse.quote(q + " filetype:bitmap")
        + "&srnamespace=6&srlimit=6&format=json"
    )
    return [
        s["title"].removeprefix("File:")
        for s in api(u).get("query", {}).get("search", [])
        if not blocked(s["title"])
    ]


used: dict[str, str] = {}
for f in OUT.glob("*.jpg"):
    used[sha(f.read_bytes())] = f.name

ok = fail = skip = 0
for dest, titles in PLAN:
    path = OUT / dest
    if path.exists() and path.stat().st_size > 8000:
        h = sha(path.read_bytes())
        if h not in used or used[h] == dest:
            used[h] = dest
            print(f"{dest} skip")
            skip += 1
            continue
    print(dest, "...", end=" ", flush=True)
    found = False
    candidates = list(titles)
    for t in titles[:1]:
        try:
            candidates += search(t.replace(".jpg", "").replace(".JPG", ""))
        except Exception:
            time.sleep(8)
    seen = set()
    for t in candidates:
        if t in seen or blocked(t):
            continue
        seen.add(t)
        time.sleep(1.5)
        try:
            url = get_url(t)
        except Exception as e:
            if "429" in str(e):
                time.sleep(20)
            continue
        if not url:
            continue
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=120) as r:
                buf = r.read()
        except Exception as e:
            if "429" in str(e):
                time.sleep(20)
            continue
        if not (len(buf) > 5000 and buf[0] == 0xFF and buf[1] == 0xD8):
            continue
        h = sha(buf)
        if h in used and used[h] != dest:
            continue
        path.write_bytes(buf)
        used[h] = dest
        print(f"OK {len(buf)//1024}KB <- {t}")
        ok += 1
        found = True
        break
    if not found:
        print("FAIL")
        fail += 1
    time.sleep(2.5)

print(f"\nOK {ok} skip {skip} fail {fail}")
print(f"Destino: {OUT.resolve()}")
print(f"Archivos JPG: {len(list(OUT.glob('*.jpg')))}")
