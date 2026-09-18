"""Descarga fotos Alto Minho (zona + 8 municipios)."""
from __future__ import annotations

import hashlib
import json
import time
import urllib.parse
import urllib.request
from pathlib import Path

OUT = Path("web/public/fotos/alto-minho")
UA = "VivirEnElNorte/1.0 (alto-minho photos)"
OUT.mkdir(parents=True, exist_ok=True)

# Títulos o fragmentos que delatan sitio equivocado (España, Canarias, etc.)
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
    "sanxenxo",
    "baiona",
    "nigrán",
    "nigran",
    "vigo ría",
    "ría de vigo",
    "cesantes",
    "samil",
    "pontevedra españa",
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
)

# dest -> list of Commons titles to try (exact File names without File:)
PLAN: list[tuple[str, list[str]]] = [
    # Zona
    ("zona-valenca.jpg", [
        "Valença Portugal.jpg",
        "Fortaleza de Valença.jpg",
        "Valença do Minho.jpg",
        "Valenca Portugal.jpg",
        "Valença fortaleza.jpg",
    ]),
    ("zona-caminha.jpg", [
        "Caminha.jpg",
        "Caminha Portugal.jpg",
        "Caminha Minho.jpg",
        "Vila de Caminha.jpg",
        "Caminha desembocadura.jpg",
    ]),
    ("zona-moledo.jpg", [
        "Moledo.jpg",
        "Moledo Caminha.jpg",
        "Praia de Moledo.jpg",
        "Moledo Portugal.jpg",
        "Playa de Moledo.jpg",
    ]),
    ("zona-ancora.jpg", [
        "Vila Praia de Âncora.jpg",
        "Vila Praia de Ancora.jpg",
        "Âncora Portugal.jpg",
        "Ancora Portugal.jpg",
        "Praia de Âncora.jpg",
    ]),
    ("zona-viana.jpg", [
        "Viana do Castelo.jpg",
        "Viana do Castelo Portugal.jpg",
        "Santa Luzia Viana do Castelo.jpg",
        "Viana do Castelo vista.jpg",
        "Basílica de Santa Luzia.jpg",
    ]),
    ("zona-arga.jpg", [
        "Serra d'Arga.jpg",
        "Serra de Arga.jpg",
        "Serra d Arga.jpg",
        "Santo João d'Arga.jpg",
        "Serra d'Arga Portugal.jpg",
    ]),
    # Valença
    ("valenca-fortaleza.jpg", [
        "Fortaleza de Valença.jpg",
        "Valença fortaleza.jpg",
        "Valença do Minho fortaleza.jpg",
        "Murallas de Valença.jpg",
        "Valença Portugal fortaleza.jpg",
    ]),
    ("valenca-comercio.jpg", [
        "Valença Portugal.jpg",
        "Valença do Minho.jpg",
        "Interior fortaleza Valença.jpg",
        "Valença comercio.jpg",
        "Valenca Portugal.jpg",
    ]),
    ("valenca-baluartes.jpg", [
        "Baluartes Valença.jpg",
        "Fortaleza de Valença.jpg",
        "Valença muralhas.jpg",
        "Valença do Minho muralhas.jpg",
        "Valença Portugal murallas.jpg",
    ]),
    ("valenca-puente.jpg", [
        "Puente Internacional Tui Valença.jpg",
        "Ponte Tui Valença.jpg",
        "Bridge Tui Valença.jpg",
        "Valença Tui puente.jpg",
        "Ponte internacional Valença.jpg",
    ]),
    ("valenca-ecopista.jpg", [
        "Ecopista do Minho.jpg",
        "Ecopista Valença.jpg",
        "Ecopista do Minho Valença.jpg",
        "Via verde Minho.jpg",
        "Ecopista Monção Valença.jpg",
    ]),
    ("valenca-rio.jpg", [
        "Rio Minho Valença.jpg",
        "Miño Valença.jpg",
        "Minho Valença.jpg",
        "Valença rio.jpg",
        "River Minho Valença.jpg",
    ]),
    # Vila Nova de Cerveira
    ("cerveira-villa.jpg", [
        "Vila Nova de Cerveira.jpg",
        "Vila Nova de Cerveira Portugal.jpg",
        "Cerveira Portugal.jpg",
        "Vila Nova de Cerveira Minho.jpg",
        "Cerveira villa.jpg",
    ]),
    ("cerveira-castillo.jpg", [
        "Castelo de Vila Nova de Cerveira.jpg",
        "Castillo Vila Nova de Cerveira.jpg",
        "Cerveira castelo.jpg",
        "Castle Vila Nova de Cerveira.jpg",
        "Vila Nova de Cerveira castelo.jpg",
    ]),
    ("cerveira-arte.jpg", [
        "Bienal de Vila Nova de Cerveira.jpg",
        "Vila Nova de Cerveira arte.jpg",
        "Cerveira escultura.jpg",
        "Vila Nova de Cerveira sculpture.jpg",
        "Arte Cerveira.jpg",
    ]),
    ("cerveira-aquamuseu.jpg", [
        "Aquamuseu Vila Nova de Cerveira.jpg",
        "Aquamuseu do Rio Minho.jpg",
        "Aquamuseu Cerveira.jpg",
        "Aquamuseum Cerveira.jpg",
        "Museu Cerveira.jpg",
    ]),
    ("cerveira-praia.jpg", [
        "Praia fluvial Vila Nova de Cerveira.jpg",
        "Praia fluvial Cerveira.jpg",
        "Cerveira praia.jpg",
        "River beach Cerveira.jpg",
        "Vila Nova de Cerveira praia.jpg",
    ]),
    ("cerveira-cervo.jpg", [
        "Alto do Cervo.jpg",
        "Alto do Cervo Cerveira.jpg",
        "Miradouro Alto do Cervo.jpg",
        "Alto do Cervo Vila Nova de Cerveira.jpg",
        "Cerveira miradouro.jpg",
    ]),
    # Caminha
    ("caminha-plaza.jpg", [
        "Caminha praça.jpg",
        "Praça Caminha.jpg",
        "Caminha Portugal.jpg",
        "Caminha plaza.jpg",
        "Centro de Caminha.jpg",
    ]),
    ("caminha-torre.jpg", [
        "Torre do Relógio Caminha.jpg",
        "Torre do Relogio Caminha.jpg",
        "Clock tower Caminha.jpg",
        "Caminha torre.jpg",
        "Torre Caminha Portugal.jpg",
    ]),
    ("caminha-iglesia.jpg", [
        "Igreja Matriz de Caminha.jpg",
        "Iglesia matriz Caminha.jpg",
        "Caminha igreja.jpg",
        "Church Caminha.jpg",
        "Matriz Caminha.jpg",
    ]),
    ("caminha-fortaleza.jpg", [
        "Forte da Ínsua.jpg",
        "Forte da Insua.jpg",
        "Ínsua Caminha.jpg",
        "Insua Caminha.jpg",
        "Fort Ínsua.jpg",
    ]),
    ("caminha-foz.jpg", [
        "Foz do Minho.jpg",
        "Foz do Minho Caminha.jpg",
        "Desembocadura Miño Caminha.jpg",
        "Minho estuary Caminha.jpg",
        "Caminha foz.jpg",
    ]),
    ("caminha-ferry.jpg", [
        "Ferry Caminha A Guarda.jpg",
        "Barco Caminha A Guarda.jpg",
        "Caminha ferry.jpg",
        "Ferry Caminha.jpg",
        "Caminha A Guarda.jpg",
    ]),
    # Moledo
    ("moledo-playa.jpg", [
        "Praia de Moledo.jpg",
        "Moledo beach.jpg",
        "Playa de Moledo.jpg",
        "Moledo Caminha praia.jpg",
        "Moledo Portugal playa.jpg",
    ]),
    ("moledo-pinar.jpg", [
        "Moledo pinar.jpg",
        "Moledo pinos.jpg",
        "Moledo Caminha.jpg",
        "Moledo Portugal.jpg",
        "Pinhal Moledo.jpg",
    ]),
    ("moledo-chales.jpg", [
        "Moledo chalés.jpg",
        "Moledo chales.jpg",
        "Moledo Caminha casas.jpg",
        "Moledo villas.jpg",
        "Moledo Portugal.jpg",
    ]),
    ("moledo-insua.jpg", [
        "Forte da Ínsua.jpg",
        "Forte da Insua Moledo.jpg",
        "Ínsua desde Moledo.jpg",
        "Insua Moledo.jpg",
        "Forte Ínsua Caminha.jpg",
    ]),
    ("moledo-dunas.jpg", [
        "Dunas de Moledo.jpg",
        "Moledo dunas.jpg",
        "Praia de Moledo dunas.jpg",
        "Moledo dunes.jpg",
        "Dunas Moledo Caminha.jpg",
    ]),
    ("moledo-kite.jpg", [
        "Moledo kite.jpg",
        "Moledo windsurf.jpg",
        "Praia de Moledo.jpg",
        "Moledo surf.jpg",
        "Moledo Caminha praia.jpg",
    ]),
    # Vila Praia de Âncora
    ("ancora-puerto.jpg", [
        "Porto de Vila Praia de Âncora.jpg",
        "Porto Âncora.jpg",
        "Vila Praia de Âncora porto.jpg",
        "Ancora harbour.jpg",
        "Puerto Âncora.jpg",
    ]),
    ("ancora-playa.jpg", [
        "Praia de Vila Praia de Âncora.jpg",
        "Praia de Âncora.jpg",
        "Âncora beach.jpg",
        "Vila Praia de Ancora praia.jpg",
        "Playa Âncora.jpg",
    ]),
    ("ancora-lagarteira.jpg", [
        "Forte da Lagarteira.jpg",
        "Fortaleza de Lagarteira.jpg",
        "Lagarteira Âncora.jpg",
        "Lagarteira Ancora.jpg",
        "Forte Lagarteira.jpg",
    ]),
    ("ancora-villa.jpg", [
        "Vila Praia de Âncora.jpg",
        "Vila Praia de Ancora.jpg",
        "Âncora Portugal.jpg",
        "Ancora Portugal.jpg",
        "Vila Praia de Âncora centro.jpg",
    ]),
    ("ancora-gelfa.jpg", [
        "Praia da Gelfa.jpg",
        "Gelfa.jpg",
        "Gelfa Âncora.jpg",
        "Gelfa Caminha.jpg",
        "Praia Gelfa Portugal.jpg",
    ]),
    ("ancora-arga.jpg", [
        "Serra d'Arga.jpg",
        "Serra de Arga Âncora.jpg",
        "Vale do Âncora.jpg",
        "Serra d'Arga Caminha.jpg",
        "Arga Portugal.jpg",
    ]),
    # Afife-Carreço
    ("afife-aldea.jpg", [
        "Afife.jpg",
        "Afife Portugal.jpg",
        "Afife Viana do Castelo.jpg",
        "Aldeia Afife.jpg",
        "Afife village.jpg",
    ]),
    ("afife-playa.jpg", [
        "Praia de Afife.jpg",
        "Afife beach.jpg",
        "Playa de Afife.jpg",
        "Afife praia.jpg",
        "Afife surf.jpg",
    ]),
    ("afife-granito.jpg", [
        "Afife granito.jpg",
        "Carreço.jpg",
        "Carreco Portugal.jpg",
        "Afife casas.jpg",
        "Afife Carreço.jpg",
    ]),
    ("carreco-montedor.jpg", [
        "Farol de Montedor.jpg",
        "Faro de Montedor.jpg",
        "Montedor.jpg",
        "Montedor Carreço.jpg",
        "Lighthouse Montedor.jpg",
    ]),
    ("afife-paco.jpg", [
        "Praia de Paçô.jpg",
        "Praia de Paco.jpg",
        "Paçô Carreço.jpg",
        "Paco Carreco.jpg",
        "Praia Paçô.jpg",
    ]),
    ("afife-vinas.jpg", [
        "Afife vinhas.jpg",
        "Carreço vinhas.jpg",
        "Afife pérgola.jpg",
        "Vinho verde Afife.jpg",
        "Afife Carreço vinha.jpg",
    ]),
    # Viana do Castelo
    ("viana-santa-luzia.jpg", [
        "Basílica de Santa Luzia.jpg",
        "Santa Luzia Viana do Castelo.jpg",
        "Santuario de Santa Luzia.jpg",
        "Santa Luzia Viana.jpg",
        "Basilica Santa Luzia Viana.jpg",
    ]),
    ("viana-praca.jpg", [
        "Praça da República Viana do Castelo.jpg",
        "Praca da Republica Viana.jpg",
        "Viana do Castelo praça.jpg",
        "Viana do Castelo centro.jpg",
        "Republic Square Viana.jpg",
    ]),
    ("viana-eiffel.jpg", [
        "Ponte Eiffel Viana do Castelo.jpg",
        "Puente Eiffel Viana.jpg",
        "Eiffel bridge Viana.jpg",
        "Ponte metalica Viana do Castelo.jpg",
        "Viana do Castelo ponte.jpg",
    ]),
    ("viana-gil-eannes.jpg", [
        "Gil Eannes.jpg",
        "Navio Gil Eannes.jpg",
        "Gil Eannes Viana do Castelo.jpg",
        "Buque Gil Eannes.jpg",
        "Hospital ship Gil Eannes.jpg",
    ]),
    ("viana-praia-norte.jpg", [
        "Praia Norte Viana do Castelo.jpg",
        "Praia Norte Viana.jpg",
        "North Beach Viana.jpg",
        "Piscinas Praia Norte Viana.jpg",
        "Praia do Norte Viana.jpg",
    ]),
    ("viana-cabedelo.jpg", [
        "Cabedelo Viana do Castelo.jpg",
        "Praia do Cabedelo.jpg",
        "Cabedelo Viana.jpg",
        "Cabedelo Portugal.jpg",
        "Praia Cabedelo.jpg",
    ]),
    # Ponte de Lima
    ("ponte-puente.jpg", [
        "Ponte de Lima bridge.jpg",
        "Puente de Ponte de Lima.jpg",
        "Ponte romana Ponte de Lima.jpg",
        "Roman bridge Ponte de Lima.jpg",
        "Ponte de Lima ponte.jpg",
    ]),
    ("ponte-plaza.jpg", [
        "Ponte de Lima praça.jpg",
        "Praça Ponte de Lima.jpg",
        "Ponte de Lima plaza.jpg",
        "Feira Ponte de Lima.jpg",
        "Ponte de Lima centro.jpg",
    ]),
    ("ponte-villa.jpg", [
        "Ponte de Lima.jpg",
        "Ponte de Lima Portugal.jpg",
        "Ponte de Lima villa.jpg",
        "Ponte de Lima vista.jpg",
        "Ponte Lima Portugal.jpg",
    ]),
    ("ponte-jardines.jpg", [
        "Festival de Jardins Ponte de Lima.jpg",
        "Jardins Ponte de Lima.jpg",
        "Ponte de Lima jardines.jpg",
        "Ponte de Lima gardens.jpg",
        "Margens do Lima Ponte de Lima.jpg",
    ]),
    ("ponte-ecovia.jpg", [
        "Ecovia do Lima.jpg",
        "Ecovia do Lima Ponte de Lima.jpg",
        "Ecovia Lima.jpg",
        "Ponte de Lima ecovia.jpg",
        "Ciclovia Lima.jpg",
    ]),
    ("ponte-bertiandos.jpg", [
        "Lagoas de Bertiandos.jpg",
        "Bertiandos.jpg",
        "Lagoas de Bertiandos e São Pedro de Arcos.jpg",
        "Bertiandos Ponte de Lima.jpg",
        "Protected landscape Bertiandos.jpg",
    ]),
]


def blocked(title: str) -> bool:
    """Rechaza títulos de sitios equivocados (España, Canarias, Algarve, etc.)."""
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
