"""Descarga fotos Wikimedia Commons únicas para cumplir el estándar de fichas.

Uso: python scripts/completar_fotos_estandar.py [zonaId ...]
Sin args: todas las pendientes (val-minor, baixo-mino, vigo-e-ria, o-morrazo, pontevedra-e-sanxenxo).
"""
from __future__ import annotations

import hashlib
import json
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
FOTOS = RAIZ / "web" / "public" / "fotos"
UA = "VivirEnElNorte/1.0 (local build; photo uniqueness for zone pages)"

# Hashes conocidos de stand-ins genéricos (O Morrazo / Pontevedra / Salnés antiguos).
STANDIN = {
    "4BF4B9D0B9F6",
    "5407D14B34A3",
    "70660F472907",
    "72DFAF5048AB",
    "B91E79EFC2F7",
    "C4C467C7FFB2",
    "C88EB36B07CE",
    "9926C8D2BC9C",
    # Vigo e ría dups
    "FEC7C9D0FE43",
    "B512453E3330",
    "9A1893A2EAF1",
    "8B8613484CFC",
    "95475A11CF96",
}

# dest relativo a web/public/fotos/{zona}/ → preferred Commons title + queries
PLAN: dict[str, list[dict]] = {
    "val-minor": [
        {
            "dest": "gondomar-morgadans.jpg",
            "preferred": "Gondomar, Pontevedra.jpg",
            "queries": ["Gondomar Pontevedra", "Morgadáns Gondomar", "Chaín Gondomar Galicia"],
        },
    ],
    "baixo-mino": [
        {
            "dest": "zona-tui-catedral.jpg",
            "preferred": "Tui cathedral.jpg",
            "queries": ["Catedral de Tui", "Catedral de Santa María de Tuy", "Tui casco histórico"],
        },
        {
            "dest": "zona-goian-forte.jpg",
            "preferred": "Fortaleza de San Lourenzo.jpg",
            "queries": ["Fortaleza San Lourenzo Goián", "Goián Tomiño forte", "San Lourenzo Tomiño"],
        },
    ],
    "vigo-e-ria": [
        {
            "dest": "redondela-paseo.jpg",
            "preferred": "Praia de Cesantes.jpg",
            "queries": ["paseo Cesantes Redondela", "Cesantes arena", "ensenada Cesantes"],
        },
        {
            "dest": "redondela-penide.jpg",
            "preferred": "Monte Penide.jpg",
            "queries": ["Monte Penide Redondela", "Penide Galicia", "Redondela mirador"],
        },
        {
            "dest": "redondela-viaduto.jpg",
            "preferred": "Viaducto de Redondela.jpg",
            "queries": ["Viaducto de Madrid Redondela", "Viaducto Redondela hierro", "Redondela railway viaduct"],
        },
        {
            "dest": "soutomaior-castelo.jpg",
            "preferred": "Castillo de Soutomaior.jpg",
            "queries": ["Castelo de Soutomaior", "Castillo Soutomaior", "Soutomaior castle"],
        },
        {
            "dest": "soutomaior-torres.jpg",
            "preferred": "Castelo de Soutomaior 02.jpg",
            "queries": ["Soutomaior torres", "Castelo Soutomaior torre", "Soutomaior fortaleza"],
        },
        {
            "dest": "soutomaior-camelias.jpg",
            "preferred": "Xardíns do Castelo de Soutomaior.jpg",
            "queries": ["camelias Soutomaior", "jardines castillo Soutomaior", "Soutomaior garden"],
        },
        {
            "dest": "soutomaior-verdugo.jpg",
            "preferred": "Río Verdugo.jpg",
            "queries": ["río Verdugo Arcade", "Verdugo Pontesampaio", "río Verdugo Galicia"],
        },
        {
            "dest": "vilaboa-cotorredondo.jpg",
            "preferred": "Mirador de Cotorredondo.jpg",
            "queries": ["Cotorredondo Vilaboa", "mirador Cotorredondo", "Cotorredondo Galicia"],
        },
        {
            "dest": "zona-rande.jpg",
            "preferred": "Ponte de Rande.jpg",
            "queries": ["Ponte de Rande", "Puente de Rande Vigo", "Rande bridge"],
        },
    ],
    "o-morrazo": [
        {
            "dest": "cangas-villa.jpg",
            "preferred": "Cangas do Morrazo.jpg",
            "queries": ["Cangas do Morrazo porto", "Cangas villa Galicia", "Cangas ría Vigo"],
        },
        {
            "dest": "cangas-rodeira.jpg",
            "preferred": "Praia de Rodeira.jpg",
            "queries": ["Praia de Rodeira Cangas", "Rodeira playa", "Rodeira Cangas"],
        },
        {
            "dest": "cangas-hio-cruceiro.jpg",
            "preferred": "Cruceiro de Hío.jpg",
            "queries": ["Cruceiro do Hío", "Cruceiro de Hio Cangas", "Hío cruceiro"],
        },
        {
            "dest": "cangas-facho.jpg",
            "preferred": "Monte do Facho de Donón.jpg",
            "queries": ["Monte Facho Donón", "Facho de Donón", "Donón castro"],
        },
        {
            "dest": "cangas-cabo-home.jpg",
            "preferred": "Cabo Home.jpg",
            "queries": ["Cabo Home Cangas", "Costa da Vela Cabo Home", "Cabo Home faro"],
        },
        {
            "dest": "cangas-aldan.jpg",
            "preferred": "Ría de Aldán.jpg",
            "queries": ["Ría de Aldán", "Aldán Cangas playa", "Aldan Galicia"],
        },
        {
            "dest": "moana-villa.jpg",
            "preferred": "Moaña.jpg",
            "queries": ["Moaña concello", "Moaña ría de Vigo", "Casa consistorial Moaña"],
        },
        {
            "dest": "moana-xunqueira.jpg",
            "preferred": "Praia da Xunqueira.jpg",
            "queries": ["Praia da Xunqueira Moaña", "Xunqueira Moaña", "playa Xunqueira"],
        },
        {
            "dest": "moana-san-martino.jpg",
            "preferred": "Igrexa de San Martiño de Moaña.jpg",
            "queries": ["San Martiño Moaña", "iglesia Moaña", "San Martino Moaña"],
        },
        {
            "dest": "moana-fisgon.jpg",
            "preferred": "O Fisgón Moaña.jpg",
            "queries": ["Fisgón Moaña", "escultura Fisgón", "Moaña puerto escultura"],
        },
        {
            "dest": "moana-domaio.jpg",
            "preferred": "Domaio.jpg",
            "queries": ["Domaio Moaña", "Domaio Rande", "Domaio Galicia"],
        },
        {
            "dest": "moana-tiran.jpg",
            "preferred": "Tirán.jpg",
            "queries": ["Tirán Moaña", "iglesia Tirán", "Tiran Galicia"],
        },
        {
            "dest": "bueu-villa.jpg",
            "preferred": "Bueu.jpg",
            "queries": ["Bueu Galicia", "Bueu villa", "Bueu concello"],
        },
        {
            "dest": "bueu-puerto.jpg",
            "preferred": "Porto de Bueu.jpg",
            "queries": ["porto de Bueu", "puerto Bueu", "Bueu harbour"],
        },
        {
            "dest": "bueu-masso.jpg",
            "preferred": "Museo Massó.jpg",
            "queries": ["Museo Massó Bueu", "Massó Bueu", "Museo Masso"],
        },
        {
            "dest": "bueu-ons.jpg",
            "preferred": "Illa de Ons.jpg",
            "queries": ["Illa de Ons", "Isla de Ons", "Ons Bueu"],
        },
        {
            "dest": "bueu-cabo-udra.jpg",
            "preferred": "Cabo Udra.jpg",
            "queries": ["Cabo Udra Bueu", "Udra batería", "Cabo Udra"],
        },
        {
            "dest": "bueu-beluso.jpg",
            "preferred": "Beluso.jpg",
            "queries": ["Beluso Bueu", "porto Beluso", "Beluso playa"],
        },
        {
            "dest": "marin-villa.jpg",
            "preferred": "Marín Galicia.jpg",
            "queries": ["Marín Pontevedra", "Marín villa", "Marín ría"],
        },
        {
            "dest": "marin-escuela-naval.jpg",
            "preferred": "Escuela Naval Militar de Marín.jpg",
            "queries": ["Escuela Naval Marín", "ENM Marín", "Escuela Naval Militar"],
        },
        {
            "dest": "marin-mogor-laberinto.jpg",
            "preferred": "Labirinto de Mogor.jpg",
            "queries": ["Laberinto de Mogor", "petroglifo Mogor", "Mogor Marín"],
        },
        {
            "dest": "marin-danza-espadas.jpg",
            "preferred": "Danza das Espadas de Marín.jpg",
            "queries": ["Danza das Espadas Marín", "San Miguel Marín danza", "Marín fiesta"],
        },
        {
            "dest": "marin-portocelo.jpg",
            "preferred": "Praia de Portocelo.jpg",
            "queries": ["Portocelo Marín", "Praia Portocelo", "Portocelo playa"],
        },
        {
            "dest": "marin-aguete.jpg",
            "preferred": "Praia de Aguete.jpg",
            "queries": ["Aguete Marín", "Praia de Aguete", "Aguete porto"],
        },
        {
            "dest": "zona-morrazo-costa.jpg",
            "preferred": "Costa da Vela.jpg",
            "queries": ["Costa da Vela", "Morrazo costa", "Cabo Home panorama"],
        },
    ],
    "pontevedra-e-sanxenxo": [
        {
            "dest": "pontevedra-casco.jpg",
            "preferred": "Pontevedra casco histórico.jpg",
            "queries": ["Pontevedra Praza da Ferrería", "Pontevedra casco", "Pontevedra old town"],
        },
        {
            "dest": "pontevedra-peregrina.jpg",
            "preferred": "Santuario da Virxe da Peregrina.jpg",
            "queries": ["Virxe Peregrina Pontevedra", "Iglesia de la Peregrina", "Peregrina Pontevedra"],
        },
        {
            "dest": "pontevedra-santa-maria.jpg",
            "preferred": "Basílica de Santa María a Maior de Pontevedra.jpg",
            "queries": ["Santa María a Maior Pontevedra", "Basílica Santa María Pontevedra"],
        },
        {
            "dest": "pontevedra-museo.jpg",
            "preferred": "Museo de Pontevedra.jpg",
            "queries": ["Museo de Pontevedra", "Museo Provincial Pontevedra", "Pontevedra museum"],
        },
        {
            "dest": "pontevedra-lerez.jpg",
            "preferred": "Río Lérez.jpg",
            "queries": ["río Lérez Pontevedra", "Illa das Esculturas", "Lérez river"],
        },
        {
            "dest": "pontevedra-alameda.jpg",
            "preferred": "Alameda de Pontevedra.jpg",
            "queries": ["Alameda Pontevedra", "Alameda do Doutor Lourenzo", "Pontevedra Alameda"],
        },
        {
            "dest": "poio-combarro.jpg",
            "preferred": "Combarro.jpg",
            "queries": ["Combarro hórreos", "Combarro Galicia", "Combarro Poio"],
        },
        {
            "dest": "poio-raxo.jpg",
            "preferred": "Raxó.jpg",
            "queries": ["Raxó Poio", "Raxo playa", "Raxó Galicia"],
        },
        {
            "dest": "poio-mosteiro.jpg",
            "preferred": "Mosteiro de San Xoán de Poio.jpg",
            "queries": ["Mosteiro San Xoán Poio", "Monasterio de Poio", "San Juan de Poio"],
        },
        {
            "dest": "poio-horreos.jpg",
            "preferred": "Hórreos de Combarro.jpg",
            "queries": ["hórreos Combarro", "horreos Combarro ría", "Combarro graneros"],
        },
        {
            "dest": "poio-lourido.jpg",
            "preferred": "Praia de Lourido.jpg",
            "queries": ["Lourido Poio", "Praia Lourido", "Lourido playa"],
        },
        {
            "dest": "poio-castrove.jpg",
            "preferred": "Monte Castrove.jpg",
            "queries": ["Monte Castrove", "Castrove Poio", "Castrove mirador"],
        },
        {
            "dest": "sanxenxo-silgar.jpg",
            "preferred": "Praia de Silgar.jpg",
            "queries": ["Silgar Sanxenxo", "Praia de Silgar", "Silgar playa"],
        },
        {
            "dest": "sanxenxo-portonovo.jpg",
            "preferred": "Portonovo.jpg",
            "queries": ["Portonovo Sanxenxo", "Portonovo puerto", "Portonovo Galicia"],
        },
        {
            "dest": "sanxenxo-lanzada-ermida.jpg",
            "preferred": "Ermida da Lanzada.jpg",
            "queries": ["Ermida da Lanzada", "Ermita de la Lanzada", "A Lanzada ermita"],
        },
        {
            "dest": "sanxenxo-lanzada-castro.jpg",
            "preferred": "Castro da Lanzada.jpg",
            "queries": ["Castro da Lanzada", "necrópolis Lanzada", "A Lanzada castro"],
        },
        {
            "dest": "sanxenxo-lanzada.jpg",
            "preferred": "Praia da Lanzada.jpg",
            "queries": ["Praia da Lanzada", "A Lanzada playa", "Lanzada Sanxenxo"],
        },
        {
            "dest": "sanxenxo-canelas.jpg",
            "preferred": "Praia de Canelas.jpg",
            "queries": ["Canelas Portonovo", "Praia de Canelas", "Canelas Sanxenxo"],
        },
        {
            "dest": "grove-villa.jpg",
            "preferred": "O Grove.jpg",
            "queries": ["O Grove Galicia", "O Grove villa", "El Grove puerto"],
        },
        {
            "dest": "grove-porto.jpg",
            "preferred": "Porto de O Grove.jpg",
            "queries": ["porto O Grove", "puerto O Grove bateas", "O Grove harbour"],
        },
        {
            "dest": "grove-toxa.jpg",
            "preferred": "Illa da Toxa.jpg",
            "queries": ["Illa da Toxa", "La Toja", "A Toxa puente"],
        },
        {
            "dest": "grove-capela.jpg",
            "preferred": "Capela das Conchas.jpg",
            "queries": ["Capela das Conchas Toxa", "capilla conchas Toja", "San Caralampio Toxa"],
        },
        {
            "dest": "grove-siradella.jpg",
            "preferred": "Monte Siradella.jpg",
            "queries": ["Monte Siradella", "Siradella O Grove", "mirador Siradella"],
        },
        {
            "dest": "grove-con-negro.jpg",
            "preferred": "Praia de Area da Cruz.jpg",
            "queries": ["Con Negro O Grove", "costa O Grove Atlántico", "O Grove playa atlántica"],
        },
        {
            "dest": "zona-lanzada-istmo.jpg",
            "preferred": "Istmo da Lanzada.jpg",
            "queries": ["istmo A Lanzada", "Lanzada dunas", "A Lanzada panorama"],
        },
        {
            "dest": "zona-combarro-ria.jpg",
            "preferred": "Combarro desde a ría.jpg",
            "queries": ["Combarro ría de Pontevedra", "Combarro vista", "hórreos Combarro mar"],
        },
        {
            "dest": "zona-pontevedra-ferraria.jpg",
            "preferred": "Praza da Ferrería.jpg",
            "queries": ["Praza da Ferrería Pontevedra", "Plaza de la Herrería", "Ferrería Pontevedra"],
        },
        {
            "dest": "zona-grove-bateas.jpg",
            "preferred": "Bateas en O Grove.jpg",
            "queries": ["bateas O Grove", "mejillón O Grove", "ría Arousa O Grove"],
        },
    ],
}


def sha12(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()[:12].upper()


def http_json(url: str) -> dict:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.loads(r.read().decode("utf-8"))


def commons_url(file_title: str) -> str | None:
    if file_title.lower().endswith(".pdf"):
        return None
    api = (
        "https://commons.wikimedia.org/w/api.php?action=query&titles="
        + urllib.parse.quote("File:" + file_title)
        + "&prop=imageinfo&iiprop=url|mime&iiurlwidth=1400&format=json"
    )
    data = http_json(api)
    for p in (data.get("query") or {}).get("pages", {}).values():
        info = (p.get("imageinfo") or [None])[0]
        if not info:
            continue
        mime = (info.get("mime") or "").lower()
        if "pdf" in mime or not mime.startswith("image/"):
            return None
        return info.get("thumburl") or info.get("url")
    return None


def search_commons(query: str) -> list[str]:
    api = (
        "https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch="
        + urllib.parse.quote(query)
        + "&srnamespace=6&srlimit=8&format=json"
    )
    data = http_json(api)
    return [s["title"].removeprefix("File:") for s in (data.get("query") or {}).get("search", [])]


def resolve(preferred: str, queries: list[str]) -> tuple[str, str] | None:
    try:
        url = commons_url(preferred)
        if url:
            return preferred, url
    except Exception as e:  # noqa: BLE001
        print(f"    preferred fail: {e}")
    for q in queries:
        time.sleep(1.6)
        try:
            hits = search_commons(q)
        except Exception as e:  # noqa: BLE001
            print(f"    search fail ({q}): {e}")
            if "429" in str(e):
                time.sleep(12)
            continue
        for title in hits:
            time.sleep(1.0)
            try:
                url = commons_url(title)
            except Exception as e:  # noqa: BLE001
                if "429" in str(e):
                    time.sleep(12)
                continue
            if url:
                return title, url
    return None


def load_used(zona: str) -> dict[str, str]:
    """hash -> filename already good in zone folder."""
    used: dict[str, str] = {}
    d = FOTOS / zona
    if not d.exists():
        return used
    for f in d.glob("*.jpg"):
        h = sha12(f.read_bytes())
        if h not in STANDIN:
            used[h] = f.name
    return used


def hash_counts(out: Path) -> dict[str, list[str]]:
    counts: dict[str, list[str]] = {}
    for f in out.glob("*.jpg"):
        h = sha12(f.read_bytes())
        counts.setdefault(h, []).append(f.name)
    return counts


def download_zona(zona: str) -> tuple[int, int, int]:
    items = PLAN.get(zona, [])
    out = FOTOS / zona
    out.mkdir(parents=True, exist_ok=True)
    used = load_used(zona)
    ok = skip = fail = 0
    for item in items:
        dest = out / item["dest"]
        counts = hash_counts(out)
        if dest.exists():
            h = sha12(dest.read_bytes())
            if h not in STANDIN and len(counts.get(h, [])) == 1:
                used[h] = item["dest"]
                print(f"  {item['dest']} ... ya OK")
                skip += 1
                continue
        print(f"  {item['dest']} ...", end=" ", flush=True)
        try:
            found = resolve(item["preferred"], item["queries"])
            if not found:
                print("NO ENCONTRADA")
                fail += 1
                time.sleep(2.5)
                continue
            title, url = found
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=120) as r:
                buf = r.read()
            if not (len(buf) > 100 and buf[0] == 0xFF and buf[1] == 0xD8):
                print(f"no-jpeg <- {title}")
                fail += 1
                continue
            h = sha12(buf)
            if h in STANDIN:
                print(f"stand-in <- {title}")
                fail += 1
            elif h in used and used[h] != item["dest"]:
                print(f"DUP de {used[h]} <- {title}")
                fail += 1
            else:
                dest.write_bytes(buf)
                used[h] = item["dest"]
                print(f"OK {len(buf)//1024}KB {h} <- {title}")
                ok += 1
        except Exception as e:  # noqa: BLE001
            print(f"ERROR {e}")
            fail += 1
            if "429" in str(e):
                time.sleep(15)
        time.sleep(3.0)
    return ok, skip, fail


def main() -> None:
    zonas = sys.argv[1:] or list(PLAN.keys())
    total_ok = total_fail = 0
    for z in zonas:
        print(f"\n=== {z} ===")
        if z not in PLAN:
            print("  (sin plan)")
            continue
        ok, skip, fail = download_zona(z)
        print(f"  resumen: OK {ok}, skip {skip}, fail {fail}")
        total_ok += ok
        total_fail += fail
    print(f"\nTOTAL OK {total_ok}, fail {total_fail}")
    sys.exit(1 if total_fail else 0)


if __name__ == "__main__":
    main()
