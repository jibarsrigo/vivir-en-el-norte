"""Descarga fotos Litoral Norte (zona + 3 municipios)."""
from __future__ import annotations

import hashlib
import json
import time
import urllib.parse
import urllib.request
from pathlib import Path

OUT = Path("web/public/fotos/litoral-norte")
UA = "VivirEnElNorte/1.0 (litoral-norte photos)"
OUT.mkdir(parents=True, exist_ok=True)

# Títulos o fragmentos que delatan sitio equivocado (España, Algarve, Alto Minho, etc.)
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
    "asturias",
    "cantabria",
    "galicia",
    "sanxenxo",
    "baiona",
    "nigrán",
    "nigran",
    "vigo",
    "ría de vigo",
    "cesantes",
    "samil",
    "pontevedra",
    "a coruña",
    "coruña",
    "ferrol",
    "gijón",
    "gijon",
    "santander",
    "llanes",
    "madeira",
    "açores",
    "azores",
    "lisboa",
    "lisbon",
    "algarve",
    "faro portugal",
    "lagos portugal",
    "portimão",
    "portimao",
    "cascais",
    "sintra",
    "nazaré",
    "nazare",
    "aveiro",
    "coimbra",
    "fátima",
    "fatima",
    "valença",
    "valenca",
    "caminha",
    "moledo",
    "âncora",
    "ancora",
    "viana do castelo",
    "ponte de lima",
    "afife",
    "carreço",
    "carreco",
    "cerveira",
    "matosinhos",
    "gaia",
    "espinho",
)

# dest -> list of Commons titles to try (exact File names without File:)
PLAN: list[tuple[str, list[str]]] = [
    # Zona
    ("zona-esposende.jpg", [
        "Esposende.jpg",
        "Esposende Portugal.jpg",
        "Esposende beach.jpg",
        "Esposende Cávado.jpg",
        "Vista de Esposende.jpg",
    ]),
    ("zona-ofir.jpg", [
        "Ofir.jpg",
        "Ofir Esposende.jpg",
        "Praia de Ofir.jpg",
        "Ofir Portugal.jpg",
        "Ofir beach.jpg",
    ]),
    ("zona-apulia.jpg", [
        "Apúlia.jpg",
        "Apulia Esposende.jpg",
        "Moinhos de Apúlia.jpg",
        "Apúlia molinos.jpg",
        "Praia de Apúlia.jpg",
    ]),
    ("zona-povoa.jpg", [
        "Póvoa de Varzim.jpg",
        "Povoa de Varzim.jpg",
        "Póvoa de Varzim Portugal.jpg",
        "Póvoa de Varzim beach.jpg",
        "Vista de Póvoa de Varzim.jpg",
    ]),
    ("zona-vila-do-conde.jpg", [
        "Vila do Conde.jpg",
        "Vila do Conde Portugal.jpg",
        "Vila do Conde centro.jpg",
        "Vila do Conde Ave.jpg",
        "Vista de Vila do Conde.jpg",
    ]),
    ("zona-dunas.jpg", [
        "Parque Natural do Litoral Norte.jpg",
        "Dunas Litoral Norte.jpg",
        "Pasarelas Apúlia.jpg",
        "Dunas de Apúlia.jpg",
        "Litoral Norte Portugal dunas.jpg",
    ]),
    # Esposende
    ("esposende-villa.jpg", [
        "Esposende.jpg",
        "Esposende Portugal.jpg",
        "Esposende centro.jpg",
        "Esposende villa.jpg",
        "Esposende Cávado.jpg",
    ]),
    ("esposende-ofir.jpg", [
        "Ofir.jpg",
        "Ofir Esposende.jpg",
        "Praia de Ofir.jpg",
        "Ofir pinos.jpg",
        "Ofir Portugal.jpg",
    ]),
    ("esposende-fao.jpg", [
        "Fão.jpg",
        "Fao Esposende.jpg",
        "Fão Portugal.jpg",
        "Fão villa.jpg",
        "Fao Portugal.jpg",
    ]),
    ("esposende-apulia.jpg", [
        "Moinhos de Apúlia.jpg",
        "Apúlia molinos.jpg",
        "Apúlia Esposende.jpg",
        "Windmills Apúlia.jpg",
        "Apulia Esposende molinos.jpg",
    ]),
    ("esposende-estuario.jpg", [
        "Estuário do Cávado.jpg",
        "Estuario del Cávado.jpg",
        "Cávado Esposende.jpg",
        "Foz do Cávado.jpg",
        "Cavado Esposende.jpg",
    ]),
    ("esposende-dunas.jpg", [
        "Parque Natural do Litoral Norte.jpg",
        "Dunas Esposende.jpg",
        "Pasarelas Litoral Norte.jpg",
        "Dunas de Apúlia.jpg",
        "Esposende dunas.jpg",
    ]),
    # Póvoa de Varzim
    ("povoa-paseo.jpg", [
        "Passeio marítimo Póvoa de Varzim.jpg",
        "Paseo marítimo Póvoa de Varzim.jpg",
        "Póvoa de Varzim promenade.jpg",
        "Avenida dos Banhos Póvoa.jpg",
        "Póvoa de Varzim paseo.jpg",
    ]),
    ("povoa-casino.jpg", [
        "Casino da Póvoa.jpg",
        "Casino Póvoa de Varzim.jpg",
        "Póvoa de Varzim casino.jpg",
        "Casino da Povoa.jpg",
        "Póvoa casino.jpg",
    ]),
    ("povoa-puerto.jpg", [
        "Porto de pesca Póvoa de Varzim.jpg",
        "Puerto Póvoa de Varzim.jpg",
        "Póvoa de Varzim harbour.jpg",
        "Porto Póvoa de Varzim.jpg",
        "Póvoa de Varzim porto.jpg",
    ]),
    ("povoa-mercado.jpg", [
        "Mercado Municipal Póvoa de Varzim.jpg",
        "Mercado Póvoa de Varzim.jpg",
        "Póvoa de Varzim mercado.jpg",
        "Market Póvoa de Varzim.jpg",
        "Póvoa mercado.jpg",
    ]),
    ("povoa-playa.jpg", [
        "Praia da Póvoa de Varzim.jpg",
        "Praia da Redonda.jpg",
        "Póvoa de Varzim beach.jpg",
        "Salgueira Póvoa.jpg",
        "Playa Póvoa de Varzim.jpg",
    ]),
    ("povoa-estela.jpg", [
        "Estela Golf.jpg",
        "Estela Golf Course.jpg",
        "Estela Póvoa de Varzim.jpg",
        "Golf Estela.jpg",
        "Estela links.jpg",
    ]),
    # Vila do Conde
    ("vila-casco.jpg", [
        "Vila do Conde.jpg",
        "Vila do Conde centro histórico.jpg",
        "Vila do Conde casco.jpg",
        "Centro histórico Vila do Conde.jpg",
        "Vila do Conde Portugal.jpg",
    ]),
    ("vila-acueducto.jpg", [
        "Aqueduto de Vila do Conde.jpg",
        "Acueducto de Vila do Conde.jpg",
        "Aqueduct Vila do Conde.jpg",
        "Aqueduto Santa Clara.jpg",
        "Vila do Conde aqueduct.jpg",
    ]),
    ("vila-santa-clara.jpg", [
        "Mosteiro de Santa Clara Vila do Conde.jpg",
        "Convento de Santa Clara Vila do Conde.jpg",
        "Santa Clara Vila do Conde.jpg",
        "Santa Clara convent Vila do Conde.jpg",
        "Mosteiro Santa Clara.jpg",
    ]),
    ("vila-nau.jpg", [
        "Nau Quinhentista.jpg",
        "Nau Quinhentista Vila do Conde.jpg",
        "Carrack Vila do Conde.jpg",
        "Nau Vila do Conde.jpg",
        "Replica nau Vila do Conde.jpg",
    ]),
    ("vila-playa.jpg", [
        "Praia de Vila do Conde.jpg",
        "Vila do Conde beach.jpg",
        "Playa Vila do Conde.jpg",
        "Vila do Conde praia.jpg",
        "Praia Vila do Conde Portugal.jpg",
    ]),
    ("vila-azurara.jpg", [
        "Praia de Azurara.jpg",
        "Azurara.jpg",
        "Azurara Vila do Conde.jpg",
        "Azurara beach.jpg",
        "Azurara surf.jpg",
    ]),
]


def blocked(title: str) -> bool:
    """Rechaza títulos de sitios equivocados (España, Algarve, Alto Minho, etc.)."""
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
