"""Descarga fotos Golfo Ártabro e Ferrol (zona + 7 municipios)."""
from __future__ import annotations

import hashlib
import json
import time
import urllib.parse
import urllib.request
from pathlib import Path

OUT = Path("web/public/fotos/golfo-artabro-e-ferrol")
UA = "VivirEnElNorte/1.0 (golfo-artabro photos)"
OUT.mkdir(parents=True, exist_ok=True)

# dest -> list of Commons titles to try (exact File names without File:)
PLAN: list[tuple[str, list[str]]] = [
    # Zona
    ("zona-hercules.jpg", [
        "Torre de Hércules.jpg",
        "Tower of Hercules.jpg",
        "Torre de Hercules A Coruña.jpg",
        "Hercules Tower Corunna.jpg",
    ]),
    ("zona-oleiros-mera.jpg", [
        "Mera Oleiros.jpg",
        "Faro de Mera.jpg",
        "Praia de Mera.jpg",
        "Playa de Mera.jpg",
        "Mera A Coruña.jpg",
    ]),
    ("zona-sada.jpg", [
        "Sada.jpg",
        "Sada A Coruña.jpg",
        "Puerto de Sada.jpg",
        "Porto de Sada.jpg",
        "Sada Galicia.jpg",
    ]),
    ("zona-gandario.jpg", [
        "Praia de Gandarío.jpg",
        "Playa de Gandarío.jpg",
        "Gandarío.jpg",
        "Gandario Bergondo.jpg",
        "Playa de Gandario.jpg",
    ]),
    ("zona-redes.jpg", [
        "Redes Ares.jpg",
        "Redes Galicia.jpg",
        "Aldea de Redes.jpg",
        "Redes A Coruña.jpg",
        "Puerto de Redes.jpg",
    ]),
    ("zona-doninos.jpg", [
        "Praia de Doniños.jpg",
        "Playa de Doniños.jpg",
        "Doniños.jpg",
        "Doninos Ferrol.jpg",
        "Laguna de Doniños.jpg",
    ]),
    # A Coruña
    ("coruna-hercules.jpg", [
        "Torre de Hércules.jpg",
        "Tower of Hercules from the sea.jpg",
        "Torre de Hércules Coruña.jpg",
    ]),
    ("coruna-paseo.jpg", [
        "Paseo marítimo A Coruña.jpg",
        "Paseo Maritimo Coruña.jpg",
        "Orzán promenade.jpg",
        "A Coruña seafront.jpg",
    ]),
    ("coruna-marina.jpg", [
        "Avenida de la Marina A Coruña.jpg",
        "Marina A Coruña.jpg",
        "Galerías A Coruña.jpg",
        "A Coruña harbour.jpg",
    ]),
    ("coruna-riazor.jpg", [
        "Praia de Riazor.jpg",
        "Playa de Riazor.jpg",
        "Riazor.jpg",
        "Riazor Coruña.jpg",
    ]),
    ("coruna-san-pedro.jpg", [
        "Monte de San Pedro A Coruña.jpg",
        "Parque de San Pedro Coruña.jpg",
        "San Pedro A Coruña.jpg",
        "Monte San Pedro.jpg",
    ]),
    ("coruna-casco.jpg", [
        "Casco antiguo A Coruña.jpg",
        "Ciudad Vieja A Coruña.jpg",
        "A Coruña old town.jpg",
        "Plaza de María Pita.jpg",
    ]),
    # Oleiros
    ("oleiros-santa-cruz.jpg", [
        "Castillo de Santa Cruz Oleiros.jpg",
        "Santa Cruz Oleiros.jpg",
        "Castelo de Santa Cruz.jpg",
        "Santa Cruz A Coruña.jpg",
    ]),
    ("oleiros-mera.jpg", [
        "Faro de Mera.jpg",
        "Mera Oleiros.jpg",
        "Praia de Mera Oleiros.jpg",
        "Playa de Mera Oleiros.jpg",
    ]),
    ("oleiros-santa-cristina.jpg", [
        "Praia de Santa Cristina.jpg",
        "Playa de Santa Cristina Oleiros.jpg",
        "Santa Cristina Oleiros.jpg",
        "Santa Cristina A Coruña.jpg",
    ]),
    ("oleiros-dexo.jpg", [
        "Dexo Serantes.jpg",
        "Monumento Natural de Dexo.jpg",
        "Costa de Dexo.jpg",
        "Dexo Oleiros.jpg",
        "Serantes Oleiros.jpg",
    ]),
    ("oleiros-bastiagueiro.jpg", [
        "Praia de Bastiagueiro.jpg",
        "Playa de Bastiagueiro.jpg",
        "Bastiagueiro.jpg",
        "Bastiagueiro Oleiros.jpg",
    ]),
    ("oleiros-perillo.jpg", [
        "Perillo Oleiros.jpg",
        "Perillo A Coruña.jpg",
        "Ría do Burgo Perillo.jpg",
        "Perillo.jpg",
    ]),
    # Sada
    ("sada-puerto.jpg", [
        "Puerto de Sada.jpg",
        "Porto de Sada.jpg",
        "Marina de Sada.jpg",
        "Sada puerto deportivo.jpg",
    ]),
    ("sada-paseo.jpg", [
        "Paseo marítimo Sada.jpg",
        "Paseo de Sada.jpg",
        "Sada paseo.jpg",
        "Sada waterfront.jpg",
    ]),
    ("sada-playa.jpg", [
        "Praia de Sada.jpg",
        "Playa de Sada.jpg",
        "Sada beach.jpg",
        "Playa urbana Sada.jpg",
    ]),
    ("sada-villa.jpg", [
        "Sada.jpg",
        "Sada Galicia.jpg",
        "Sada A Coruña.jpg",
        "Concello de Sada.jpg",
    ]),
    ("sada-gandario.jpg", [
        "Praia de Gandarío.jpg",
        "Gandarío Sada.jpg",
        "Playa de Gandarío.jpg",
    ]),
    ("sada-fontan.jpg", [
        "Fontán Sada.jpg",
        "O Fontán Sada.jpg",
        "Puerto Fontán Sada.jpg",
        "Fontan Sada.jpg",
    ]),
    # Bergondo
    ("bergondo-marinan.jpg", [
        "Pazo de Mariñán.jpg",
        "Pazo de Marinan.jpg",
        "Mariñán Bergondo.jpg",
        "Pazo Mariñan.jpg",
        "Palacio de Mariñán.jpg",
    ]),
    ("bergondo-gandario.jpg", [
        "Praia de Gandarío.jpg",
        "Gandarío Bergondo.jpg",
        "Playa de Gandarío Bergondo.jpg",
        "Gandario.jpg",
    ]),
    ("bergondo-pedrido.jpg", [
        "Praia do Pedrido.jpg",
        "Playa de Pedrido.jpg",
        "Pedrido Bergondo.jpg",
        "Pedrido.jpg",
    ]),
    ("bergondo-pazo.jpg", [
        "Pazo de Mariñán jardines.jpg",
        "Jardines Mariñán.jpg",
        "Pazo de Mariñán.jpg",
        "Mariñán.jpg",
    ]),
    ("bergondo-monasterio.jpg", [
        "Mosteiro de San Salvador de Bergondo.jpg",
        "Monasterio de Bergondo.jpg",
        "San Salvador de Bergondo.jpg",
        "Bergondo monasterio.jpg",
    ]),
    ("bergondo-ria.jpg", [
        "Ría de Betanzos.jpg",
        "Ria de Betanzos.jpg",
        "Bergondo ría.jpg",
        "Betanzos estuary.jpg",
    ]),
    # Miño
    ("mino-praia-grande.jpg", [
        "Praia Grande de Miño.jpg",
        "Playa Grande Miño.jpg",
        "Praia Grande Miño.jpg",
        "Miño beach.jpg",
    ]),
    ("mino-perbes.jpg", [
        "Praia de Perbes.jpg",
        "Playa de Perbes.jpg",
        "Perbes Miño.jpg",
        "Perbes.jpg",
    ]),
    ("mino-costa.jpg", [
        "Costa Miño.jpg",
        "Costa de Miño.jpg",
        "Miño golf.jpg",
        "Urbanización Costa Miño.jpg",
    ]),
    ("mino-villa.jpg", [
        "Miño A Coruña.jpg",
        "Miño Galicia.jpg",
        "Concello de Miño.jpg",
        "Miño.jpg",
    ]),
    ("mino-eume.jpg", [
        "Fragas do Eume.jpg",
        "Parque Natural Fragas do Eume.jpg",
        "Eume.jpg",
        "Fragas del Eume.jpg",
    ]),
    ("mino-tren.jpg", [
        "Estación de Miño.jpg",
        "Tren Miño Galicia.jpg",
        "Ferrocarril Miño.jpg",
        "Miño estación.jpg",
    ]),
    # Ares
    ("ares-redes.jpg", [
        "Redes Ares.jpg",
        "Redes Galicia.jpg",
        "Puerto de Redes.jpg",
        "Aldea de Redes.jpg",
    ]),
    ("ares-villa.jpg", [
        "Ares A Coruña.jpg",
        "Ares Galicia.jpg",
        "Concello de Ares.jpg",
        "Ares.jpg",
    ]),
    ("ares-seselle.jpg", [
        "Praia de Seselle.jpg",
        "Playa de Seselle.jpg",
        "Seselle Ares.jpg",
        "Seselle.jpg",
    ]),
    ("ares-chanteiro.jpg", [
        "Praia de Chanteiro.jpg",
        "Playa de Chanteiro.jpg",
        "Chanteiro Ares.jpg",
        "Chanteiro.jpg",
    ]),
    ("ares-playa.jpg", [
        "Praia de Ares.jpg",
        "Playa de Ares.jpg",
        "Ares beach.jpg",
        "Playa urbana Ares.jpg",
    ]),
    ("ares-ria.jpg", [
        "Ría de Ares.jpg",
        "Ria de Ares.jpg",
        "Ares ría.jpg",
        "Ría de Ares e Betanzos.jpg",
    ]),
    # Ferrol
    ("ferrol-magdalena.jpg", [
        "Barrio de la Magdalena Ferrol.jpg",
        "A Magdalena Ferrol.jpg",
        "Magdalena Ferrol.jpg",
        "Ferrol Magdalena.jpg",
    ]),
    ("ferrol-arsenal.jpg", [
        "Arsenal de Ferrol.jpg",
        "Astilleros Ferrol.jpg",
        "Navantia Ferrol.jpg",
        "Ferrol arsenal.jpg",
    ]),
    ("ferrol-doninos.jpg", [
        "Praia de Doniños.jpg",
        "Playa de Doniños.jpg",
        "Doniños Ferrol.jpg",
        "Doninos.jpg",
    ]),
    ("ferrol-san-xurxo.jpg", [
        "Praia de San Xurxo.jpg",
        "Playa de San Jorge Ferrol.jpg",
        "San Xurxo Ferrol.jpg",
        "San Jorge Ferrol playa.jpg",
    ]),
    ("ferrol-san-felipe.jpg", [
        "Castillo de San Felipe Ferrol.jpg",
        "Castelo de San Felipe.jpg",
        "San Felipe Ferrol.jpg",
        "Fortaleza de San Felipe.jpg",
    ]),
    ("ferrol-prior.jpg", [
        "Cabo Prior.jpg",
        "Cabo Prior Ferrol.jpg",
        "Prior Ferrol.jpg",
        "Cape Prior.jpg",
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
