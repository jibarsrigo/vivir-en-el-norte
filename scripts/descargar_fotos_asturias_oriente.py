"""Descarga fotos Asturias Oriente (zona + 5 municipios)."""
from __future__ import annotations

import hashlib
import json
import time
import urllib.parse
import urllib.request
from pathlib import Path

OUT = Path("web/public/fotos/asturias-oriente")
UA = "VivirEnElNorte/1.0 (asturias-oriente photos)"
OUT.mkdir(parents=True, exist_ok=True)

# dest -> list of Commons titles to try (exact File names without File:)
PLAN: list[tuple[str, list[str]]] = [
    # Zona
    ("zona-lastres.jpg", [
        "Lastres.jpg",
        "Lastres Asturias.jpg",
        "Lastres Colunga.jpg",
        "Puerto de Lastres.jpg",
        "Lastres pueblo.jpg",
    ]),
    ("zona-llanes.jpg", [
        "Llanes.jpg",
        "Llanes Asturias.jpg",
        "Puerto de Llanes.jpg",
        "Llanes casco.jpg",
        "Llanes villa.jpg",
    ]),
    ("zona-ribadesella.jpg", [
        "Ribadesella.jpg",
        "Ribadesella Asturias.jpg",
        "Puerto de Ribadesella.jpg",
        "Ribadesella Sella.jpg",
        "Ribadesella villa.jpg",
    ]),
    ("zona-rodiles.jpg", [
        "Playa de Rodiles.jpg",
        "Rodiles.jpg",
        "Rodiles Villaviciosa.jpg",
        "Playa Rodiles Asturias.jpg",
        "Rodiles beach.jpg",
    ]),
    ("zona-picos.jpg", [
        "Picos de Europa.jpg",
        "Picos de Europa Asturias.jpg",
        "Naranjo de Bulnes.jpg",
        "Picos de Europa desde Asturias.jpg",
        "Lagos de Covadonga.jpg",
    ]),
    ("zona-gulpiyuri.jpg", [
        "Playa de Gulpiyuri.jpg",
        "Gulpiyuri.jpg",
        "Gulpiyuri Llanes.jpg",
        "Playa Gulpiyuri Asturias.jpg",
        "Gulpiyuri beach.jpg",
    ]),
    # Villaviciosa
    ("villaviciosa-villa.jpg", [
        "Villaviciosa.jpg",
        "Villaviciosa Asturias.jpg",
        "Villaviciosa villa.jpg",
        "Villaviciosa casco.jpg",
    ]),
    ("villaviciosa-ria.jpg", [
        "Ría de Villaviciosa.jpg",
        "Ria de Villaviciosa.jpg",
        "Villaviciosa ría.jpg",
        "Estuario de Villaviciosa.jpg",
        "Villaviciosa estuary.jpg",
    ]),
    ("villaviciosa-casco.jpg", [
        "Villaviciosa casco histórico.jpg",
        "Villaviciosa plaza.jpg",
        "Villaviciosa Asturias casco.jpg",
        "Centro Villaviciosa.jpg",
    ]),
    ("villaviciosa-valdedios.jpg", [
        "Monasterio de Valdediós.jpg",
        "Valdediós.jpg",
        "Valdedios Asturias.jpg",
        "San Salvador de Valdediós.jpg",
        "Valdediós Villaviciosa.jpg",
    ]),
    ("villaviciosa-tazones.jpg", [
        "Tazones.jpg",
        "Tazones Asturias.jpg",
        "Tazones Villaviciosa.jpg",
        "Puerto de Tazones.jpg",
        "Tazones pueblo.jpg",
    ]),
    ("villaviciosa-rodiles.jpg", [
        "Playa de Rodiles.jpg",
        "Rodiles Villaviciosa.jpg",
        "Rodiles.jpg",
        "Playa Rodiles.jpg",
    ]),
    # Colunga
    ("colunga-lastres.jpg", [
        "Lastres.jpg",
        "Lastres Asturias.jpg",
        "Lastres Colunga.jpg",
        "Puerto de Lastres.jpg",
        "Lastres pueblo colgado.jpg",
    ]),
    ("colunga-mirador.jpg", [
        "Mirador de San Roque Lastres.jpg",
        "Mirador San Roque Lastres.jpg",
        "San Roque Lastres.jpg",
        "Mirador Lastres.jpg",
        "Lastres mirador.jpg",
    ]),
    ("colunga-muja.jpg", [
        "MUJA.jpg",
        "Museo del Jurásico de Asturias.jpg",
        "MUJA Colunga.jpg",
        "Museo Jurásico Asturias.jpg",
        "MUJA Asturias.jpg",
    ]),
    ("colunga-sueve.jpg", [
        "Sierra del Sueve.jpg",
        "Sueve.jpg",
        "Mirador del Fitu.jpg",
        "El Fitu.jpg",
        "Sueve Asturias.jpg",
    ]),
    ("colunga-griega.jpg", [
        "Playa de La Griega.jpg",
        "La Griega.jpg",
        "La Griega Colunga.jpg",
        "Playa La Griega Asturias.jpg",
        "Huellas dinosaurio La Griega.jpg",
    ]),
    ("colunga-isla.jpg", [
        "Playa de La Isla Colunga.jpg",
        "Playa de La Isla Asturias.jpg",
        "La Isla Colunga.jpg",
        "Playa La Isla Asturias.jpg",
        "La Isla Asturias playa.jpg",
    ]),
    # Ribadesella
    ("ribadesella-puerto.jpg", [
        "Puerto de Ribadesella.jpg",
        "Ribadesella puerto.jpg",
        "Ribadesella harbour.jpg",
        "Porto de Ribadesella.jpg",
    ]),
    ("ribadesella-santa-marina.jpg", [
        "Playa de Santa Marina Ribadesella.jpg",
        "Santa Marina Ribadesella.jpg",
        "Paseo de Santa Marina.jpg",
        "Santa Marina Asturias.jpg",
        "Ribadesella Santa Marina.jpg",
    ]),
    ("ribadesella-indianos.jpg", [
        "Casas de Indianos Ribadesella.jpg",
        "Indianos Ribadesella.jpg",
        "Paseo Santa Marina Indianos.jpg",
        "Ribadesella indianos.jpg",
        "Villas indianas Ribadesella.jpg",
    ]),
    ("ribadesella-tito.jpg", [
        "Cueva de Tito Bustillo.jpg",
        "Tito Bustillo.jpg",
        "Tito Bustillo Ribadesella.jpg",
        "Centro de Arte Rupestre Tito Bustillo.jpg",
        "Tito Bustillo Asturias.jpg",
    ]),
    ("ribadesella-sella.jpg", [
        "Ría del Sella.jpg",
        "Río Sella Ribadesella.jpg",
        "Sella Ribadesella.jpg",
        "Desembocadura del Sella.jpg",
        "Ribadesella Sella.jpg",
    ]),
    ("ribadesella-vega.jpg", [
        "Playa de Vega Ribadesella.jpg",
        "Playa de Vega Asturias.jpg",
        "Vega Ribadesella.jpg",
        "Playa Vega Asturias.jpg",
        "Vega playa Asturias.jpg",
    ]),
    # Llanes
    ("llanes-casco.jpg", [
        "Llanes casco histórico.jpg",
        "Llanes muralla.jpg",
        "Llanes Asturias casco.jpg",
        "Casco antiguo de Llanes.jpg",
        "Llanes.jpg",
    ]),
    ("llanes-puerto.jpg", [
        "Puerto de Llanes.jpg",
        "Llanes puerto.jpg",
        "Llanes harbour.jpg",
        "Cubos de la Memoria.jpg",
        "Porto de Llanes.jpg",
    ]),
    ("llanes-san-pedro.jpg", [
        "Paseo de San Pedro Llanes.jpg",
        "Paseo de San Pedro.jpg",
        "San Pedro Llanes.jpg",
        "Paseo San Pedro Asturias.jpg",
        "San Pedro Llanes pradera.jpg",
    ]),
    ("llanes-cuera.jpg", [
        "Sierra del Cuera.jpg",
        "Cuera.jpg",
        "Sierra de Cuera.jpg",
        "Cuera Llanes.jpg",
        "Cuera Asturias.jpg",
    ]),
    ("llanes-gulpiyuri.jpg", [
        "Playa de Gulpiyuri.jpg",
        "Gulpiyuri.jpg",
        "Gulpiyuri Llanes.jpg",
        "Playa Gulpiyuri.jpg",
    ]),
    ("llanes-barro.jpg", [
        "Playa de Barro.jpg",
        "Barro Llanes.jpg",
        "Playa Barro Asturias.jpg",
        "Playa de Torimbia.jpg",
        "Torimbia Llanes.jpg",
    ]),
    # Ribadedeva
    ("ribadedeva-colombres.jpg", [
        "Colombres.jpg",
        "Colombres Asturias.jpg",
        "Colombres Ribadedeva.jpg",
        "Colombres villa.jpg",
        "Colombres pueblo.jpg",
    ]),
    ("ribadedeva-guadalupe.jpg", [
        "Quinta Guadalupe.jpg",
        "Archivo de Indianos.jpg",
        "Fundación Archivo de Indianos.jpg",
        "Quinta Guadalupe Colombres.jpg",
        "Archivo Indianos Colombres.jpg",
    ]),
    ("ribadedeva-pindal.jpg", [
        "Cueva del Pindal.jpg",
        "Pindal.jpg",
        "Cueva de El Pindal.jpg",
        "El Pindal Asturias.jpg",
        "Pindal Ribadedeva.jpg",
    ]),
    ("ribadedeva-hermida.jpg", [
        "Desfiladero de La Hermida.jpg",
        "La Hermida.jpg",
        "Desfiladero La Hermida.jpg",
        "La Hermida Cantabria.jpg",
        "Garganta de La Hermida.jpg",
    ]),
    ("ribadedeva-franca.jpg", [
        "Playa de La Franca.jpg",
        "La Franca.jpg",
        "La Franca Asturias.jpg",
        "Playa La Franca Ribadedeva.jpg",
        "La Franca playa.jpg",
    ]),
    ("ribadedeva-frontera.jpg", [
        "Tina Mayor.jpg",
        "Ría de Tina Mayor.jpg",
        "Bustio.jpg",
        "Unquera.jpg",
        "Tina Mayor Ribadedeva.jpg",
        "Frontera Asturias Cantabria.jpg",
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
