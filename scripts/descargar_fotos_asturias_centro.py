"""Descarga fotos Asturias Centro (zona + 7 municipios)."""
from __future__ import annotations

import hashlib
import json
import time
import urllib.parse
import urllib.request
from pathlib import Path

OUT = Path("web/public/fotos/asturias-centro")
UA = "VivirEnElNorte/1.0 (asturias-centro photos)"
OUT.mkdir(parents=True, exist_ok=True)

# dest -> list of Commons titles to try (exact File names without File:)
PLAN: list[tuple[str, list[str]]] = [
    # Zona
    ("zona-cudillero.jpg", [
        "Cudillero.jpg",
        "Cudillero Asturias.jpg",
        "Puerto de Cudillero.jpg",
        "Cudillero harbour.jpg",
        "Cudillero pueblo.jpg",
    ]),
    ("zona-salinas.jpg", [
        "Playa de Salinas Asturias.jpg",
        "Salinas Asturias.jpg",
        "Salinas Castrillón.jpg",
        "Playa de Salinas.jpg",
        "Salinas playa.jpg",
    ]),
    ("zona-luanco.jpg", [
        "Luanco.jpg",
        "Luanco Asturias.jpg",
        "Puerto de Luanco.jpg",
        "Luanco Gozón.jpg",
        "Luanco villa.jpg",
    ]),
    ("zona-gijon.jpg", [
        "Playa de San Lorenzo Gijón.jpg",
        "Gijón San Lorenzo.jpg",
        "Gijon San Lorenzo.jpg",
        "Gijón.jpg",
        "San Lorenzo Gijón.jpg",
    ]),
    ("zona-penas.jpg", [
        "Cabo Peñas.jpg",
        "Cabo de Peñas.jpg",
        "Faro de Cabo Peñas.jpg",
        "Cabo Peñas Asturias.jpg",
        "Peñas lighthouse.jpg",
    ]),
    ("zona-silencio.jpg", [
        "Playa del Silencio.jpg",
        "Playa del Silencio Asturias.jpg",
        "Playa del Silencio Cudillero.jpg",
        "Castañeras Silencio.jpg",
        "Silencio beach Asturias.jpg",
    ]),
    # Cudillero
    ("cudillero-puerto.jpg", [
        "Puerto de Cudillero.jpg",
        "Cudillero puerto.jpg",
        "Cudillero harbour.jpg",
        "Porto de Cudillero.jpg",
    ]),
    ("cudillero-pueblo.jpg", [
        "Cudillero.jpg",
        "Cudillero Asturias.jpg",
        "Cudillero pueblo.jpg",
        "Cudillero casas.jpg",
    ]),
    ("cudillero-vidio.jpg", [
        "Cabo Vidio.jpg",
        "Faro de Cabo Vidio.jpg",
        "Cabo Vidio Asturias.jpg",
        "Cabo Vidiu.jpg",
    ]),
    ("cudillero-playa.jpg", [
        "Playa de Aguilar Cudillero.jpg",
        "Playa de Aguilar.jpg",
        "Concha de Artedo.jpg",
        "Playa Artedo.jpg",
        "Cudillero playa.jpg",
    ]),
    ("cudillero-pito.jpg", [
        "El Pito Cudillero.jpg",
        "El Pito Asturias.jpg",
        "Quinta de Selgas.jpg",
        "Palacio de Selgas.jpg",
        "El Pito.jpg",
    ]),
    ("cudillero-cuesta.jpg", [
        "Cudillero calles.jpg",
        "Cudillero cuesta.jpg",
        "Cudillero stairs.jpg",
        "Cudillero casco.jpg",
        "Cudillero hillside.jpg",
    ]),
    # Muros
    ("muros-miradores.jpg", [
        "Miradores de Muros de Nalón.jpg",
        "Ruta de los Miradores Muros.jpg",
        "Muros de Nalón mirador.jpg",
        "Muros de Nalon.jpg",
        "Muros de Nalón.jpg",
    ]),
    ("muros-ria.jpg", [
        "Desembocadura del Nalón.jpg",
        "Estuario del Nalón.jpg",
        "Ría del Nalón.jpg",
        "Nalón Muros.jpg",
        "Muros de Nalón ría.jpg",
    ]),
    ("muros-villa.jpg", [
        "Muros de Nalón.jpg",
        "Muros de Nalon.jpg",
        "Muros de Nalón Asturias.jpg",
        "Muros Nalón villa.jpg",
    ]),
    ("muros-selgas.jpg", [
        "Quinta de Selgas.jpg",
        "Palacio de Selgas.jpg",
        "Selgas El Pito.jpg",
        "Quinta Selgas Asturias.jpg",
    ]),
    ("muros-paseo.jpg", [
        "Paseo Muros de Nalón.jpg",
        "Muros de Nalón paseo.jpg",
        "Muros Nalon paseo.jpg",
        "Muros de Nalón.jpg",
    ]),
    ("muros-nalon.jpg", [
        "Río Nalón.jpg",
        "Nalón Asturias.jpg",
        "Estuario Nalón.jpg",
        "Nalon estuary.jpg",
        "Desembocadura Nalón.jpg",
    ]),
    # Soto
    ("soto-arena.jpg", [
        "San Juan de la Arena.jpg",
        "San Juan de la Arena Asturias.jpg",
        "San Juan de la Arena Soto.jpg",
        "Juan de la Arena.jpg",
    ]),
    ("soto-playa.jpg", [
        "Playa Soto del Barco.jpg",
        "Playa San Juan de la Arena.jpg",
        "Soto del Barco playa.jpg",
        "Arena playa Asturias.jpg",
    ]),
    ("soto-castillo.jpg", [
        "Castillo de San Martín Soto del Barco.jpg",
        "Castillo de San Martín Asturias.jpg",
        "Castillo San Martín Nalón.jpg",
        "San Martín Soto del Barco.jpg",
    ]),
    ("soto-estuario.jpg", [
        "Estuario del Nalón Soto.jpg",
        "Soto del Barco estuario.jpg",
        "Desembocadura del Nalón.jpg",
        "Nalón Soto del Barco.jpg",
    ]),
    ("soto-villa.jpg", [
        "Soto del Barco.jpg",
        "Soto del Barco Asturias.jpg",
        "Soto del Barco villa.jpg",
        "Soto Barco.jpg",
    ]),
    ("soto-quebrantos.jpg", [
        "Playa de los Quebrantos.jpg",
        "Los Quebrantos.jpg",
        "Quebrantos San Juan de la Arena.jpg",
        "Playa Quebrantos.jpg",
    ]),
    # Salinas
    ("salinas-playa.jpg", [
        "Playa de Salinas Asturias.jpg",
        "Playa de Salinas.jpg",
        "Salinas Castrillón playa.jpg",
        "Salinas beach Asturias.jpg",
    ]),
    ("salinas-paseo.jpg", [
        "Paseo de Salinas.jpg",
        "Paseo marítimo Salinas.jpg",
        "Salinas Asturias paseo.jpg",
        "Salinas Castrillón paseo.jpg",
    ]),
    ("salinas-dunas.jpg", [
        "Dunas de Salinas.jpg",
        "El Espartal.jpg",
        "Espartal Salinas.jpg",
        "Dunas El Espartal.jpg",
        "Salinas dunas.jpg",
    ]),
    ("salinas-anclas.jpg", [
        "Museo de Anclas.jpg",
        "Museo de Anclas Philippe Cousteau.jpg",
        "Anclas Salinas.jpg",
        "Peñona Salinas.jpg",
        "Museo Anclas Castrillón.jpg",
    ]),
    ("salinas-chalets.jpg", [
        "Salinas Castrillón.jpg",
        "Salinas Asturias.jpg",
        "Salinas villas.jpg",
        "Salinas casas.jpg",
        "Castrillón Salinas.jpg",
    ]),
    ("salinas-aviles.jpg", [
        "Avilés.jpg",
        "Aviles Asturias.jpg",
        "Centro Niemeyer.jpg",
        "Avilés casco.jpg",
        "Avilés puerto.jpg",
    ]),
    # Luanco
    ("luanco-casco.jpg", [
        "Luanco.jpg",
        "Luanco Asturias.jpg",
        "Luanco casco.jpg",
        "Luanco Gozón.jpg",
    ]),
    ("luanco-puerto.jpg", [
        "Puerto de Luanco.jpg",
        "Luanco puerto.jpg",
        "Luanco harbour.jpg",
        "Porto de Luanco.jpg",
    ]),
    ("luanco-playa.jpg", [
        "Playa de La Ribera Luanco.jpg",
        "Playa de la Ribera.jpg",
        "La Ribera Luanco.jpg",
        "Luanco playa.jpg",
    ]),
    ("luanco-penas.jpg", [
        "Cabo Peñas.jpg",
        "Cabo de Peñas.jpg",
        "Faro de Cabo Peñas.jpg",
        "Cabo Peñas Gozón.jpg",
    ]),
    ("luanco-museo.jpg", [
        "Museo Marítimo de Asturias.jpg",
        "Museo Marítimo Luanco.jpg",
        "Museo Maritimo Luanco.jpg",
        "Maritime Museum Luanco.jpg",
    ]),
    ("luanco-aramar.jpg", [
        "Playa de Aramar.jpg",
        "Aramar Luanco.jpg",
        "Aramar Asturias.jpg",
        "Playa Aramar.jpg",
    ]),
    # Candás
    ("candas-puerto.jpg", [
        "Puerto de Candás.jpg",
        "Candás puerto.jpg",
        "Candas puerto.jpg",
        "Puerto Candas.jpg",
    ]),
    ("candas-faro.jpg", [
        "Faro de Candás.jpg",
        "Faro Candás.jpg",
        "Candás faro.jpg",
        "Candas lighthouse.jpg",
    ]),
    ("candas-playa.jpg", [
        "Playa de Candás.jpg",
        "Candás playa.jpg",
        "Playa Carranques.jpg",
        "Carranques Candás.jpg",
    ]),
    ("candas-villa.jpg", [
        "Candás.jpg",
        "Candas Asturias.jpg",
        "Candás Carreño.jpg",
        "Candás villa.jpg",
    ]),
    ("candas-palmera.jpg", [
        "Playa de la Palmera.jpg",
        "Playa Palmera Candás.jpg",
        "Palmera Candás.jpg",
        "La Palmera Candas.jpg",
    ]),
    ("candas-paseo.jpg", [
        "Paseo Candás.jpg",
        "Paseo marítimo Candás.jpg",
        "Candás paseo.jpg",
        "Candas waterfront.jpg",
    ]),
    # Gijón
    ("gijon-san-lorenzo.jpg", [
        "Playa de San Lorenzo Gijón.jpg",
        "San Lorenzo Gijón.jpg",
        "Playa San Lorenzo Gijon.jpg",
        "Gijón San Lorenzo.jpg",
    ]),
    ("gijon-cimavilla.jpg", [
        "Cimadevilla.jpg",
        "Cimavilla Gijón.jpg",
        "Cimadevilla Gijón.jpg",
        "Cimadevilla Gijon.jpg",
    ]),
    ("gijon-poniente.jpg", [
        "Playa de Poniente Gijón.jpg",
        "Poniente Gijón.jpg",
        "Playa Poniente Gijon.jpg",
        "Gijón Poniente.jpg",
    ]),
    ("gijon-cervigon.jpg", [
        "Senda del Cervigón.jpg",
        "Cervigón Gijón.jpg",
        "Senda Cervigon.jpg",
        "Paseo del Cervigón.jpg",
    ]),
    ("gijon-paseo.jpg", [
        "Paseo del Muro.jpg",
        "Paseo del Muro Gijón.jpg",
        "Muro San Lorenzo.jpg",
        "Gijón paseo.jpg",
    ]),
    ("gijon-somio.jpg", [
        "Somió.jpg",
        "Somio Gijón.jpg",
        "Somió Gijón.jpg",
        "Somió Asturias.jpg",
        "Somio Gijon.jpg",
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
