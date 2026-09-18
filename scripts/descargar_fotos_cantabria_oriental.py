"""Descarga fotos Cantabria Oriental (zona + 5 municipios)."""
from __future__ import annotations

import hashlib
import json
import time
import urllib.parse
import urllib.request
from pathlib import Path

OUT = Path("web/public/fotos/cantabria-oriental")
UA = "VivirEnElNorte/1.0 (cantabria-oriental photos)"
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
    "san vicente de la barquera",
    "comillas",
    "suances",
    "liencres",
    "sardinero",
    "oyambre",
)

# dest -> list of Commons titles to try (exact File names without File:)
PLAN: list[tuple[str, list[str]]] = [
    # Zona
    ("zona-somo.jpg", [
        "Playa de Somo.jpg",
        "Somo Cantabria.jpg",
        "Somo Ribamontán al Mar.jpg",
        "Playa Somo.jpg",
        "Somo Loredo.jpg",
    ]),
    ("zona-noja.jpg", [
        "Noja.jpg",
        "Noja Cantabria.jpg",
        "Playa de Noja.jpg",
        "Noja playa.jpg",
        "Vista de Noja.jpg",
    ]),
    ("zona-santona.jpg", [
        "Santoña.jpg",
        "Santoña Cantabria.jpg",
        "Puerto de Santoña.jpg",
        "Vista de Santoña.jpg",
        "Santoña bahía.jpg",
    ]),
    ("zona-laredo.jpg", [
        "Laredo.jpg",
        "Laredo Cantabria.jpg",
        "Playa de La Salvé.jpg",
        "La Salvé Laredo.jpg",
        "Vista de Laredo.jpg",
    ]),
    ("zona-castro.jpg", [
        "Castro-Urdiales.jpg",
        "Castro Urdiales.jpg",
        "Castro-Urdiales Cantabria.jpg",
        "Vista de Castro-Urdiales.jpg",
        "Castro-Urdiales puerto.jpg",
    ]),
    ("zona-buciero.jpg", [
        "Monte Buciero.jpg",
        "Monte Buciero Santoña.jpg",
        "Buciero Santoña.jpg",
        "Faro del Caballo.jpg",
        "Faro del Caballo Santoña.jpg",
    ]),
    # Ribamontán al Mar
    ("ribamontan-somo.jpg", [
        "Playa de Somo.jpg",
        "Somo Cantabria.jpg",
        "Somo Ribamontán.jpg",
        "Playa Somo Cantabria.jpg",
        "Somo surf.jpg",
    ]),
    ("ribamontan-casas.jpg", [
        "Ribamontán al Mar.jpg",
        "Ribamontan al Mar.jpg",
        "Loredo Cantabria.jpg",
        "Somo pueblo.jpg",
        "Ribamontán al Mar casas.jpg",
    ]),
    ("ribamontan-loredo.jpg", [
        "Playa de Loredo.jpg",
        "Loredo.jpg",
        "Loredo Cantabria.jpg",
        "Loredo Ribamontán.jpg",
        "Playa Loredo Cantabria.jpg",
    ]),
    ("ribamontan-langre.jpg", [
        "Playa de Langre.jpg",
        "Langre.jpg",
        "Langre Cantabria.jpg",
        "Acantilados de Langre.jpg",
        "Langre Ribamontán.jpg",
    ]),
    ("ribamontan-galizano.jpg", [
        "Playa de Galizano.jpg",
        "Galizano.jpg",
        "Galizano Cantabria.jpg",
        "Galizano Ribamontán.jpg",
        "Playa Galizano Cantabria.jpg",
    ]),
    ("ribamontan-playa.jpg", [
        "Playa de Somo.jpg",
        "Somo Loredo.jpg",
        "Costa de Ribamontán al Mar.jpg",
        "Ribamontán al Mar playa.jpg",
        "Playa Loredo Somo.jpg",
    ]),
    # Noja
    ("noja-bloques.jpg", [
        "Noja.jpg",
        "Noja Cantabria.jpg",
        "Noja apartamentos.jpg",
        "Noja urbanización.jpg",
        "Vista de Noja.jpg",
    ]),
    ("noja-ris.jpg", [
        "Playa de Ris.jpg",
        "Playa del Ris.jpg",
        "Ris Noja.jpg",
        "Playa Ris Noja.jpg",
        "Playa de Ris Noja.jpg",
    ]),
    ("noja-villa.jpg", [
        "Noja.jpg",
        "Noja Cantabria.jpg",
        "Casco de Noja.jpg",
        "Noja pueblo.jpg",
        "Centro de Noja.jpg",
    ]),
    ("noja-marismas.jpg", [
        "Marismas de Victoria y Joyel.jpg",
        "Marisma de Victoria.jpg",
        "Marismas de Joyel.jpg",
        "Parque Natural Marismas de Santoña Victoria y Joyel.jpg",
        "Joyel Noja.jpg",
    ]),
    ("noja-trengandin.jpg", [
        "Playa de Trengandín.jpg",
        "Playa de Trengandin.jpg",
        "Trengandín Noja.jpg",
        "Trengandin Noja.jpg",
        "Playa Trengandín Cantabria.jpg",
    ]),
    ("noja-playa.jpg", [
        "Playa de Noja.jpg",
        "Noja playa.jpg",
        "Playas de Noja.jpg",
        "Noja Cantabria playa.jpg",
        "Ris Trengandín.jpg",
    ]),
    # Santoña
    ("santona-villa.jpg", [
        "Santoña.jpg",
        "Santoña Cantabria.jpg",
        "Vista de Santoña.jpg",
        "Casco de Santoña.jpg",
        "Santoña villa.jpg",
    ]),
    ("santona-puerto.jpg", [
        "Puerto de Santoña.jpg",
        "Santoña puerto.jpg",
        "Puerto Santoña Cantabria.jpg",
        "Harbour Santoña.jpg",
        "Lonja de Santoña.jpg",
    ]),
    ("santona-san-martin.jpg", [
        "Fuerte de San Martín Santoña.jpg",
        "Fuerte de San Martin Santoña.jpg",
        "San Martín Santoña.jpg",
        "Fuerte San Martín.jpg",
        "Playa de San Martín Santoña.jpg",
    ]),
    ("santona-buciero.jpg", [
        "Monte Buciero.jpg",
        "Monte Buciero Santoña.jpg",
        "Buciero.jpg",
        "Faro del Caballo Santoña.jpg",
        "Faro del Caballo.jpg",
    ]),
    ("santona-berria.jpg", [
        "Playa de Berria.jpg",
        "Berria Santoña.jpg",
        "Playa Berria Cantabria.jpg",
        "Berria.jpg",
        "Dunas de Berria.jpg",
    ]),
    ("santona-marismas.jpg", [
        "Marismas de Santoña.jpg",
        "Parque Natural de las Marismas de Santoña.jpg",
        "Marismas Santoña Victoria Joyel.jpg",
        "Marisma de Santoña.jpg",
        "Observatorio marismas Santoña.jpg",
    ]),
    # Laredo
    ("laredo-salve.jpg", [
        "Playa de La Salvé.jpg",
        "La Salvé Laredo.jpg",
        "Playa La Salve Laredo.jpg",
        "La Salve Laredo.jpg",
        "Playa de Laredo.jpg",
    ]),
    ("laredo-villa.jpg", [
        "Laredo.jpg",
        "Laredo Cantabria.jpg",
        "Vista de Laredo.jpg",
        "Laredo desde el aire.jpg",
        "Laredo villa.jpg",
    ]),
    ("laredo-puebla.jpg", [
        "Puebla Vieja de Laredo.jpg",
        "Puebla Vieja Laredo.jpg",
        "Casco antiguo de Laredo.jpg",
        "Laredo casco medieval.jpg",
        "Puebla Vieja.jpg",
    ]),
    ("laredo-asuncion.jpg", [
        "Iglesia de la Asunción Laredo.jpg",
        "Iglesia de Santa María de la Asunción Laredo.jpg",
        "Asunción Laredo.jpg",
        "Iglesia Asunción Laredo.jpg",
        "Santa María de la Asunción Laredo.jpg",
    ]),
    ("laredo-paseo.jpg", [
        "Paseo de Laredo.jpg",
        "Paseo marítimo Laredo.jpg",
        "Laredo paseo.jpg",
        "Paseo La Salvé.jpg",
        "Paseo Laredo Cantabria.jpg",
    ]),
    ("laredo-puerto.jpg", [
        "Puerto de Laredo.jpg",
        "Puerto deportivo de Laredo.jpg",
        "Laredo puerto.jpg",
        "Marina Laredo.jpg",
        "Puerto Laredo Cantabria.jpg",
    ]),
    # Castro-Urdiales
    ("castro-villa.jpg", [
        "Castro-Urdiales.jpg",
        "Castro Urdiales.jpg",
        "Vista de Castro-Urdiales.jpg",
        "Castro-Urdiales Cantabria.jpg",
        "Castro-Urdiales casco.jpg",
    ]),
    ("castro-paseo.jpg", [
        "Paseo de Castro-Urdiales.jpg",
        "Paseo marítimo Castro-Urdiales.jpg",
        "Castro-Urdiales paseo.jpg",
        "Paseo Castro Urdiales.jpg",
        "Malecón Castro-Urdiales.jpg",
    ]),
    ("castro-santa-maria.jpg", [
        "Iglesia de Santa María de la Asunción Castro-Urdiales.jpg",
        "Santa María Castro-Urdiales.jpg",
        "Iglesia Santa María Castro-Urdiales.jpg",
        "Santa Maria Castro Urdiales.jpg",
        "Iglesia de Santa María Castro-Urdiales.jpg",
    ]),
    ("castro-castillo.jpg", [
        "Castillo de Santa Ana Castro-Urdiales.jpg",
        "Castillo-faro de Castro-Urdiales.jpg",
        "Faro de Castro-Urdiales.jpg",
        "Castillo Castro-Urdiales.jpg",
        "Castle Castro-Urdiales.jpg",
    ]),
    ("castro-brazomar.jpg", [
        "Playa de Brazomar.jpg",
        "Brazomar.jpg",
        "Brazomar Castro-Urdiales.jpg",
        "Playa Brazomar Cantabria.jpg",
        "Playa de Brazomar Castro-Urdiales.jpg",
    ]),
    ("castro-ostende.jpg", [
        "Playa de Ostende Castro-Urdiales.jpg",
        "Ostende Castro-Urdiales.jpg",
        "Playa Ostende Castro.jpg",
        "Ostende Cantabria.jpg",
        "Playa de Ostende.jpg",
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
