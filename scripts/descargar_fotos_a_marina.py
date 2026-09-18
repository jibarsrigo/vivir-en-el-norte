"""Descarga fotos A Mariña (zona + 8 municipios)."""
from __future__ import annotations

import hashlib
import json
import time
import urllib.parse
import urllib.request
from pathlib import Path

OUT = Path("web/public/fotos/a-marina")
UA = "VivirEnElNorte/1.0 (a-marina photos)"
OUT.mkdir(parents=True, exist_ok=True)

# dest -> list of Commons titles to try (exact File names without File:)
PLAN: list[tuple[str, list[str]]] = [
    # Zona
    ("zona-catedrais.jpg", [
        "As Catedrais.jpg",
        "Playa de las Catedrales.jpg",
        "Praia das Catedrais.jpg",
        "As Catedrais Ribadeo.jpg",
        "Catedral Beach.jpg",
    ]),
    ("zona-viveiro.jpg", [
        "Viveiro.jpg",
        "Viveiro Galicia.jpg",
        "Vivero Lugo.jpg",
        "Ría de Viveiro.jpg",
        "Viveiro casco.jpg",
    ]),
    ("zona-foz.jpg", [
        "Foz.jpg",
        "Foz Lugo.jpg",
        "Foz Galicia.jpg",
        "Ría de Foz.jpg",
        "Praia da Rapadoira.jpg",
    ]),
    ("zona-ribadeo.jpg", [
        "Ribadeo.jpg",
        "Ribadeo Galicia.jpg",
        "Ribadeo Lugo.jpg",
        "Ría del Eo Ribadeo.jpg",
        "Puerto de Ribadeo.jpg",
    ]),
    ("zona-burela.jpg", [
        "Burela.jpg",
        "Burela Lugo.jpg",
        "Puerto de Burela.jpg",
        "Porto de Burela.jpg",
        "Burela Galicia.jpg",
    ]),
    ("zona-vicedo.jpg", [
        "O Vicedo.jpg",
        "Vicedo.jpg",
        "O Vicedo Lugo.jpg",
        "Fuciño do Porco.jpg",
        "Ría do Barqueiro.jpg",
    ]),
    # O Vicedo
    ("vicedo-villa.jpg", [
        "O Vicedo.jpg",
        "Vicedo Galicia.jpg",
        "O Vicedo Lugo.jpg",
        "Vicedo villa.jpg",
    ]),
    ("vicedo-puerto.jpg", [
        "Puerto O Vicedo.jpg",
        "Porto do Vicedo.jpg",
        "O Vicedo puerto.jpg",
        "Ría do Barqueiro puerto.jpg",
    ]),
    ("vicedo-playa.jpg", [
        "Praia de Xilloi.jpg",
        "Playa de Xilloi.jpg",
        "Xilloi.jpg",
        "Arealonga O Vicedo.jpg",
        "Praia de Arealonga Vicedo.jpg",
    ]),
    ("vicedo-ria.jpg", [
        "Ría do Barqueiro.jpg",
        "Ria do Barqueiro.jpg",
        "Barqueiro ría.jpg",
        "O Barqueiro.jpg",
    ]),
    ("vicedo-faro.jpg", [
        "Estaca de Bares.jpg",
        "Faro de Estaca de Bares.jpg",
        "Cabo Ortegal Estaca de Bares.jpg",
        "Estaca de Bares faro.jpg",
    ]),
    ("vicedo-costa.jpg", [
        "Fuciño do Porco.jpg",
        "Fucino do Porco.jpg",
        "Costa O Vicedo.jpg",
        "Acantilados O Vicedo.jpg",
    ]),
    # Viveiro
    ("viveiro-casco.jpg", [
        "Viveiro.jpg",
        "Casco histórico Viveiro.jpg",
        "Viveiro Galicia.jpg",
        "Vivero Lugo casco.jpg",
    ]),
    ("viveiro-covas.jpg", [
        "Praia de Covas.jpg",
        "Playa de Covas Viveiro.jpg",
        "Covas Viveiro.jpg",
        "Area de Covas.jpg",
    ]),
    ("viveiro-celeiro.jpg", [
        "Celeiro.jpg",
        "Puerto de Celeiro.jpg",
        "Porto de Celeiro.jpg",
        "Celeiro Viveiro.jpg",
    ]),
    ("viveiro-porta.jpg", [
        "Porta de Carlos V.jpg",
        "Puerta de Carlos V Viveiro.jpg",
        "Porta do Castelo Viveiro.jpg",
        "Carlos V Viveiro.jpg",
    ]),
    ("viveiro-ria.jpg", [
        "Ría de Viveiro.jpg",
        "Ria de Viveiro.jpg",
        "Viveiro ría.jpg",
        "Estuario Viveiro.jpg",
    ]),
    ("viveiro-semana-santa.jpg", [
        "Semana Santa Viveiro.jpg",
        "Procesión Viveiro.jpg",
        "Semana Santa de Viveiro.jpg",
        "Viveiro procesion.jpg",
    ]),
    # Xove
    ("xove-villa.jpg", [
        "Xove.jpg",
        "Xove Lugo.jpg",
        "Xove Galicia.jpg",
        "Jove Lugo.jpg",
    ]),
    ("xove-playa.jpg", [
        "Praia de Esteiro.jpg",
        "Playa de Esteiro.jpg",
        "Esteiro Xove.jpg",
        "Esteiro arcos.jpg",
    ]),
    ("xove-costa.jpg", [
        "Costa de Xove.jpg",
        "Xove costa.jpg",
        "Litoral Xove.jpg",
        "Esteiro costa.jpg",
    ]),
    ("xove-portocelo.jpg", [
        "Portocelo.jpg",
        "Portocelo Xove.jpg",
        "Porto Celó.jpg",
        "Portocelo Lugo.jpg",
    ]),
    ("xove-faro.jpg", [
        "Faro Xove.jpg",
        "Faro Portocelo.jpg",
        "Faro costa Lugo Xove.jpg",
        "Cabo Xove.jpg",
    ]),
    ("xove-parroquia.jpg", [
        "Xove parroquia.jpg",
        "Igrexa Xove.jpg",
        "Xove iglesia.jpg",
        "Xove rural.jpg",
    ]),
    # Cervo
    ("cervo-sargadelos.jpg", [
        "Sargadelos.jpg",
        "Real Fábrica de Sargadelos.jpg",
        "Sargadelos Cervo.jpg",
        "Cerámica Sargadelos.jpg",
    ]),
    ("cervo-villa.jpg", [
        "Cervo.jpg",
        "Cervo Lugo.jpg",
        "Cervo Galicia.jpg",
        "San Cibrao.jpg",
    ]),
    ("cervo-playa.jpg", [
        "Praia de Cubelas.jpg",
        "Playa de Cubelas.jpg",
        "Cubelas Cervo.jpg",
        "Praia do Torno.jpg",
        "O Torno Cervo.jpg",
    ]),
    ("cervo-faro.jpg", [
        "Faro de San Cibrao.jpg",
        "Faro San Ciprián.jpg",
        "San Cibrao faro.jpg",
        "Faro Cervo.jpg",
    ]),
    ("cervo-puerto.jpg", [
        "Puerto de San Cibrao.jpg",
        "Porto de San Cibrao.jpg",
        "San Cibrao puerto.jpg",
        "San Ciprián puerto.jpg",
    ]),
    ("cervo-costa.jpg", [
        "Costa San Cibrao.jpg",
        "San Cibrao costa.jpg",
        "Península San Cibrao.jpg",
        "Cervo costa.jpg",
    ]),
    # Burela
    ("burela-puerto.jpg", [
        "Puerto de Burela.jpg",
        "Porto de Burela.jpg",
        "Burela puerto.jpg",
        "Burela lonja.jpg",
    ]),
    ("burela-villa.jpg", [
        "Burela.jpg",
        "Burela Lugo.jpg",
        "Burela Galicia.jpg",
        "Burela villa.jpg",
    ]),
    ("burela-playa.jpg", [
        "Praia da Marosa.jpg",
        "Playa de A Marosa.jpg",
        "A Marosa Burela.jpg",
        "Praia de Ril.jpg",
        "Ril Burela.jpg",
    ]),
    ("burela-paseo.jpg", [
        "Paseo Burela.jpg",
        "Paseo marítimo Burela.jpg",
        "Burela paseo.jpg",
        "Burela waterfront.jpg",
    ]),
    ("burela-lonja.jpg", [
        "Lonja de Burela.jpg",
        "Lonxa Burela.jpg",
        "Burela lonja.jpg",
        "Puerto Burela barcos.jpg",
    ]),
    ("burela-costa.jpg", [
        "Cabo Burela.jpg",
        "Costa Burela.jpg",
        "Burela costa.jpg",
        "Litoral Burela.jpg",
    ]),
    # Foz
    ("foz-ria.jpg", [
        "Ría de Foz.jpg",
        "Ria de Foz.jpg",
        "Foz ría.jpg",
        "Estuario Foz.jpg",
    ]),
    ("foz-playa.jpg", [
        "Praia da Rapadoira.jpg",
        "Playa de A Rapadoira.jpg",
        "A Rapadoira.jpg",
        "Praia de Llas.jpg",
        "Llas Foz.jpg",
    ]),
    ("foz-villa.jpg", [
        "Foz.jpg",
        "Foz Lugo.jpg",
        "Foz Galicia.jpg",
        "Foz villa.jpg",
    ]),
    ("foz-paseo.jpg", [
        "Paseo Foz.jpg",
        "Paseo marítimo Foz.jpg",
        "Foz paseo.jpg",
        "Foz waterfront.jpg",
    ]),
    ("foz-puente.jpg", [
        "Puente de Foz.jpg",
        "Ponte de Foz.jpg",
        "Foz puente.jpg",
        "Puente ría Foz.jpg",
    ]),
    ("foz-marisma.jpg", [
        "Marisma de Foz.jpg",
        "Marismas Foz.jpg",
        "Foz marisma.jpg",
        "Ría Foz marisma.jpg",
    ]),
    # Barreiros
    ("barreiros-catedrais.jpg", [
        "As Catedrais.jpg",
        "Playa de las Catedrales.jpg",
        "Praia das Catedrais.jpg",
        "As Catedrales Barreiros.jpg",
    ]),
    ("barreiros-playa.jpg", [
        "Praia de Arealonga Barreiros.jpg",
        "Arealonga Barreiros.jpg",
        "Playa Altar Barreiros.jpg",
        "Praia do Coto.jpg",
        "Barreiros playa.jpg",
    ]),
    ("barreiros-villa.jpg", [
        "Barreiros.jpg",
        "Barreiros Lugo.jpg",
        "Barreiros Galicia.jpg",
        "Barreiros villa.jpg",
    ]),
    ("barreiros-reinante.jpg", [
        "Reinante.jpg",
        "Praia de Reinante.jpg",
        "Reinante Barreiros.jpg",
        "Playa de Reinante.jpg",
    ]),
    ("barreiros-san-miguel.jpg", [
        "San Miguel de Reinante.jpg",
        "San Miguel Barreiros.jpg",
        "Praia de San Miguel Barreiros.jpg",
        "San Miguel de Barreiros.jpg",
    ]),
    ("barreiros-costa.jpg", [
        "Costa Barreiros.jpg",
        "Barreiros costa.jpg",
        "Litoral Barreiros.jpg",
        "Acantilados Barreiros.jpg",
    ]),
    # Ribadeo
    ("ribadeo-catedrais.jpg", [
        "As Catedrais.jpg",
        "Playa de las Catedrales.jpg",
        "Praia das Catedrais Ribadeo.jpg",
        "As Catedrais desde arriba.jpg",
    ]),
    ("ribadeo-villa.jpg", [
        "Ribadeo.jpg",
        "Ribadeo casco.jpg",
        "Torre dos Moreno.jpg",
        "Ribadeo Galicia.jpg",
    ]),
    ("ribadeo-puerto.jpg", [
        "Puerto de Ribadeo.jpg",
        "Porto de Ribadeo.jpg",
        "Ribadeo puerto.jpg",
        "Ribadeo harbour.jpg",
    ]),
    ("ribadeo-ilha-pancha.jpg", [
        "Illa Pancha.jpg",
        "Isla Pancha.jpg",
        "Faro de Illa Pancha.jpg",
        "Illa Pancha Ribadeo.jpg",
    ]),
    ("ribadeo-puente.jpg", [
        "Puente de los Santos.jpg",
        "Ponte dos Santos.jpg",
        "Puente Ribadeo.jpg",
        "Ribadeo puente Eo.jpg",
    ]),
    ("ribadeo-paseo.jpg", [
        "Paseo Ribadeo.jpg",
        "Paseo marítimo Ribadeo.jpg",
        "Ribadeo paseo.jpg",
        "Ribadeo waterfront.jpg",
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
