"""Descarga fotos Asturias Occidente (zona + 4 municipios)."""
from __future__ import annotations

import hashlib
import json
import time
import urllib.parse
import urllib.request
from pathlib import Path

OUT = Path("web/public/fotos/asturias-occidente")
UA = "VivirEnElNorte/1.0 (asturias-occidente photos)"
OUT.mkdir(parents=True, exist_ok=True)

# dest -> list of Commons titles to try (exact File names without File:)
PLAN: list[tuple[str, list[str]]] = [
    # Zona
    ("zona-luarca.jpg", [
        "Luarca.jpg",
        "Luarca Asturias.jpg",
        "Luarca Valdés.jpg",
        "Puerto de Luarca.jpg",
        "Luarca harbour.jpg",
    ]),
    ("zona-tapia.jpg", [
        "Tapia de Casariego.jpg",
        "Tapia Asturias.jpg",
        "Puerto de Tapia de Casariego.jpg",
        "Tapia de Casariego puerto.jpg",
        "Tapia Casariego.jpg",
    ]),
    ("zona-navia.jpg", [
        "Navia.jpg",
        "Navia Asturias.jpg",
        "Navia España.jpg",
        "Ría de Navia.jpg",
        "Navia villa.jpg",
    ]),
    ("zona-castropol.jpg", [
        "Castropol.jpg",
        "Castropol Asturias.jpg",
        "Castropol ría.jpg",
        "Castropol Eo.jpg",
        "Castropol pueblo.jpg",
    ]),
    ("zona-penarronda.jpg", [
        "Playa de Penarronda.jpg",
        "Penarronda.jpg",
        "Praia de Penarronda.jpg",
        "Penarronda Asturias.jpg",
        "Penarronda dunas.jpg",
    ]),
    ("zona-vega.jpg", [
        "Puerto de Vega.jpg",
        "Puerto de Vega Asturias.jpg",
        "Puerto de Vega Navia.jpg",
        "Porto de Vega.jpg",
        "Puerto Vega.jpg",
    ]),
    # Castropol
    ("castropol-villa.jpg", [
        "Castropol.jpg",
        "Castropol Asturias.jpg",
        "Castropol pueblo blanco.jpg",
        "Castropol villa.jpg",
    ]),
    ("castropol-ria.jpg", [
        "Ría del Eo Castropol.jpg",
        "Ría del Eo.jpg",
        "Castropol ría.jpg",
        "Estuario del Eo.jpg",
        "Eo Castropol.jpg",
    ]),
    ("castropol-figueras.jpg", [
        "Figueras Castropol.jpg",
        "Figueras Asturias.jpg",
        "Figueras del Eo.jpg",
        "Palacio de Peñalba.jpg",
        "Figueras puerto.jpg",
    ]),
    ("castropol-penarronda.jpg", [
        "Playa de Penarronda.jpg",
        "Penarronda.jpg",
        "Penarronda Castropol.jpg",
        "Praia de Penarronda.jpg",
    ]),
    ("castropol-paseo.jpg", [
        "Paseo Castropol.jpg",
        "Paseo ría Castropol.jpg",
        "Castropol paseo.jpg",
        "Castropol waterfront.jpg",
    ]),
    ("castropol-vista.jpg", [
        "Castropol vista.jpg",
        "Castropol desde la ría.jpg",
        "Castropol panorama.jpg",
        "Castropol promontorio.jpg",
    ]),
    # Tapia
    ("tapia-puerto.jpg", [
        "Puerto de Tapia de Casariego.jpg",
        "Tapia de Casariego puerto.jpg",
        "Porto de Tapia.jpg",
        "Tapia harbour.jpg",
    ]),
    ("tapia-casco.jpg", [
        "Tapia de Casariego.jpg",
        "Casco Tapia de Casariego.jpg",
        "Tapia Asturias casco.jpg",
        "Tapia de Casariego villa.jpg",
    ]),
    ("tapia-faro.jpg", [
        "Faro de Tapia de Casariego.jpg",
        "Faro Tapia.jpg",
        "Isla del Faro Tapia.jpg",
        "Tapia faro.jpg",
    ]),
    ("tapia-playa.jpg", [
        "Playa de Anguileiro.jpg",
        "Anguileiro.jpg",
        "Playa de Serantes Tapia.jpg",
        "Arnao Tapia.jpg",
        "Tapia playa.jpg",
    ]),
    ("tapia-paseo.jpg", [
        "Paseo Tapia de Casariego.jpg",
        "Paseo marítimo Tapia.jpg",
        "Tapia paseo.jpg",
        "Tapia waterfront.jpg",
    ]),
    ("tapia-surf.jpg", [
        "Surf Tapia de Casariego.jpg",
        "Playa de Represas.jpg",
        "Serantes surf.jpg",
        "Anguileiro surf.jpg",
        "Tapia surf.jpg",
    ]),
    # Navia
    ("navia-villa.jpg", [
        "Navia.jpg",
        "Navia Asturias.jpg",
        "Navia España.jpg",
        "Navia villa.jpg",
    ]),
    ("navia-ria.jpg", [
        "Ría de Navia.jpg",
        "Ria de Navia.jpg",
        "Navia ría.jpg",
        "Estuario Navia.jpg",
    ]),
    ("navia-vega.jpg", [
        "Puerto de Vega.jpg",
        "Puerto de Vega Asturias.jpg",
        "Puerto de Vega Navia.jpg",
        "Porto de Vega.jpg",
    ]),
    ("navia-playa.jpg", [
        "Playa de Navia.jpg",
        "Playa de Frexulfe.jpg",
        "Frexulfe.jpg",
        "Barayo.jpg",
        "Navia playa.jpg",
    ]),
    ("navia-coana.jpg", [
        "Castro de Coaña.jpg",
        "Coaña castro.jpg",
        "Castro de Coana.jpg",
        "Coaña Asturias.jpg",
    ]),
    ("navia-paseo.jpg", [
        "Paseo Navia.jpg",
        "Paseo ría Navia.jpg",
        "Navia paseo.jpg",
        "Navia waterfront.jpg",
    ]),
    # Luarca
    ("luarca-puerto.jpg", [
        "Puerto de Luarca.jpg",
        "Luarca puerto.jpg",
        "Luarca harbour.jpg",
        "Porto de Luarca.jpg",
    ]),
    ("luarca-cementerio.jpg", [
        "Cementerio de Luarca.jpg",
        "Cementerio Luarca acantilado.jpg",
        "Luarca cemetery.jpg",
        "Ermita Luarca cementerio.jpg",
    ]),
    ("luarca-faro.jpg", [
        "Faro de Luarca.jpg",
        "Luarca faro.jpg",
        "Faro Luarca Asturias.jpg",
        "Luarca lighthouse.jpg",
    ]),
    ("luarca-casco.jpg", [
        "Luarca.jpg",
        "Luarca Asturias.jpg",
        "Luarca casco.jpg",
        "Luarca Valdés.jpg",
        "Villa blanca Luarca.jpg",
    ]),
    ("luarca-playa.jpg", [
        "Playa de Luarca.jpg",
        "Primera playa de Luarca.jpg",
        "Segunda playa de Luarca.jpg",
        "Luarca playa.jpg",
        "Playa Otur.jpg",
    ]),
    ("luarca-indianos.jpg", [
        "Casa de Indianos Luarca.jpg",
        "Indianos Luarca.jpg",
        "Palacete indiano Luarca.jpg",
        "Luarca indianos.jpg",
        "Arquitectura indiana Luarca.jpg",
    ]),
]


def sha(b: bytes) -> str:
    return hashlib.sha256(b).hexdigest()[:12].upper()


def api(url: str) -> dict:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.loads(r.read().decode())


def get_url(title: str) -> str | None:
    if title.lower().endswith((".pdf", ".djvu", ".svg")):
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
    return [s["title"].removeprefix("File:") for s in api(u).get("query", {}).get("search", [])]


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
        if t in seen:
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
