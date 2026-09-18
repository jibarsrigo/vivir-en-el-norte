"""Descarga fotos Barbanza e Noia (zona + 6 municipios)."""
from __future__ import annotations

import hashlib
import json
import time
import urllib.parse
import urllib.request
from pathlib import Path

OUT = Path("web/public/fotos/barbanza-e-noia")
UA = "VivirEnElNorte/1.0 (barbanza photos)"
OUT.mkdir(parents=True, exist_ok=True)

# dest -> list of Commons titles to try (exact File names without File:)
PLAN: list[tuple[str, list[str]]] = [
    ("zona-curota.jpg", ["Mirador de A Curota.jpg", "A Curota.jpg", "Mirador da Curota.jpg"]),
    ("zona-corrubedo.jpg", ["Duna de Corrubedo.jpg", "Parque Natural de Corrubedo.jpg", "Corrubedo.jpg"]),
    ("zona-baroña.jpg", ["Castro de Baroña.jpg", "Castro de Barona.jpg", "Baroña castro.jpg"]),
    ("zona-noia-casco.jpg", ["Noia.jpg", "Noia Galicia.jpg", "Casco histórico de Noia.jpg"]),
    ("zona-barraña.jpg", ["Praia de Barraña.jpg", "Playa de Barraña.jpg", "Barraña Boiro.jpg"]),
    ("zona-axeitos.jpg", ["Dolmen de Axeitos.jpg", "Dolmen de Axeitos Ribeira.jpg"]),
    ("rianxo-villa.jpg", ["Rianxo.jpg", "Rianxo Galicia.jpg", "Rianjo.jpg"]),
    ("rianxo-tanxil.jpg", ["Praia de Tanxil.jpg", "Tanxil Rianxo.jpg"]),
    ("rianxo-castelao.jpg", ["Monumento a Castelao Rianxo.jpg", "Casa Museo Castelao.jpg", "Castelao Rianxo.jpg"]),
    ("rianxo-puerto.jpg", ["Porto de Rianxo.jpg", "Puerto de Rianxo.jpg"]),
    ("rianxo-torre.jpg", ["Torre de San Paio Rianxo.jpg", "Rianxo torre.jpg"]),
    ("rianxo-paseo.jpg", ["Paseo Rianxo.jpg", "Rianxo ría.jpg"]),
    ("boiro-villa.jpg", ["Boiro.jpg", "Boiro Galicia.jpg"]),
    ("boiro-barraña.jpg", ["Praia de Barraña Boiro.jpg", "Barraña.jpg"]),
    ("boiro-neixon.jpg", ["Castros de Neixón.jpg", "Neixón Boiro.jpg", "Castro de Neixón.jpg"]),
    ("boiro-paseo.jpg", ["Paseo Boiro.jpg", "Boiro paseo marítimo.jpg"]),
    ("boiro-carragueiros.jpg", ["Praia de Carragueiros.jpg", "Carragueiros.jpg"]),
    ("boiro-sierra.jpg", ["Serra do Barbanza.jpg", "Barbanza sierra.jpg"]),
    ("pobra-casco.jpg", ["A Pobra do Caramiñal.jpg", "Pobra do Caramiñal.jpg", "Puebla del Caramiñal.jpg"]),
    ("pobra-curota.jpg", ["Vista desde A Curota.jpg", "A Curota panorámica.jpg", "Mirador de A Curota.jpg"]),
    ("pobra-torre-bermudez.jpg", ["Torre de Bermúdez.jpg", "Torre Bermúdez Pobra.jpg"]),
    ("pobra-pozas.jpg", ["Pozas do Río Pedras.jpg", "Río Pedras A Pobra.jpg", "Pozas de Río Pedras.jpg"]),
    ("pobra-cabio.jpg", ["Praia de Cabío.jpg", "Cabío.jpg", "Playa de Cabío.jpg"]),
    ("pobra-puerto.jpg", ["Porto A Pobra do Caramiñal.jpg", "Puerto Pobra Caramiñal.jpg"]),
    ("ribeira-puerto.jpg", ["Porto de Ribeira.jpg", "Ribeira puerto.jpg", "Ribeira Galicia.jpg"]),
    ("ribeira-coroso.jpg", ["Praia do Coroso.jpg", "Coroso Ribeira.jpg"]),
    ("ribeira-corrubedo.jpg", ["Corrubedo faro.jpg", "Faro de Corrubedo.jpg", "Duna de Corrubedo.jpg"]),
    ("ribeira-axeitos.jpg", ["Dolmen de Axeitos.jpg"]),
    ("ribeira-san-roque.jpg", ["Parque de San Roque Ribeira.jpg", "San Roque Ribeira.jpg"]),
    ("ribeira-aguiño.jpg", ["Aguiño.jpg", "Praia de Aguiño.jpg"]),
    ("son-baroña.jpg", ["Castro de Baroña.jpg"]),
    ("son-area-longa.jpg", ["Praia de Area Longa.jpg", "Area Longa Porto do Son.jpg"]),
    ("son-portosin.jpg", ["Portosín.jpg", "Portosin.jpg"]),
    ("son-furnas.jpg", ["Praia das Furnas.jpg", "As Furnas Porto do Son.jpg"]),
    ("son-enxa.jpg", ["Monte da Enxa.jpg", "Enxa Porto do Son.jpg"]),
    ("son-villa.jpg", ["Porto do Son.jpg", "Puerto del Son.jpg"]),
    ("noia-san-martino.jpg", ["Igrexa de San Martiño de Noia.jpg", "San Martiño Noia.jpg"]),
    ("noia-santa-maria.jpg", ["Santa María a Nova Noia.jpg", "Santa María a Nova.jpg"]),
    ("noia-casco.jpg", ["Noia casco histórico.jpg", "Noia.jpg"]),
    ("noia-puerto.jpg", ["Porto de Noia.jpg", "Puerto de Noia.jpg"]),
    ("noia-testal.jpg", ["Praia do Testal.jpg", "Testal Noia.jpg"]),
    ("noia-boa.jpg", ["Praia da Boa.jpg", "Boa Noia.jpg"]),
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
