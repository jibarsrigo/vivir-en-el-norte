# -*- coding: utf-8 -*-
"""
Busca en Wikimedia Commons candidatas a foto de identidad por pueblo.
Criterio: casas/casco + mar/ría/monte en el mismo encuadre.

Uso:
  python scripts/buscar_fotos_identidad.py
  python scripts/buscar_fotos_identidad.py --zona baixo-mino
  python scripts/buscar_fotos_identidad.py --descargar   # descarga elegidas en FOTOS_ELEGIDAS
"""
from __future__ import annotations

import argparse
import json
import time
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
UA = "VivirEnElNorte/1.0 (identity photo curator; local)"

# slug → (zonaId, nombre búsqueda, consultas extra)
PUEBLOS: list[tuple[str, str, str, list[str]]] = [
    # Baixo Miño
    ("a-guarda", "baixo-mino", "A Guarda", ["A Guarda Galicia vista", "A Guarda puerto casas", "A Guarda paseo"]),
    ("oia", "baixo-mino", "Oia Pontevedra", ["Oia Galicia costa casas", "Oia monasterio pueblo", "Oia Galicia vista"]),
    ("o-rosal", "baixo-mino", "O Rosal", ["O Rosal Galicia", "O Rosal valle", "O Calvario Rosal"]),
    ("tomino", "baixo-mino", "Tomiño", ["Tomiño Galicia", "Goian Tomiño", "Tomiño Miño"]),
    ("tui", "baixo-mino", "Tui", ["Tui Galicia vista", "Tui catedral río", "Tui casco"]),
    # Val Miñor
    ("baiona", "val-minor", "Baiona", ["Baiona Galicia vista", "Baiona puerto casas", "Bayona Pontevedra panorama"]),
    ("nigran", "val-minor", "Nigrán", ["Nigrán Panxón vista", "Panxón Galicia casas", "Nigrán Galicia costa"]),
    ("gondomar", "val-minor", "Gondomar", ["Gondomar Galicia", "Gondomar valle", "Gondomar villa"]),
]


def api(params: dict) -> dict:
    params = {**params, "format": "json"}
    url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=40) as r:
        return json.loads(r.read().decode("utf-8"))


def search(query: str, limit: int = 8) -> list[str]:
    data = api(
        {
            "action": "query",
            "list": "search",
            "srsearch": query,
            "srnamespace": 6,
            "srlimit": limit,
        }
    )
    return [s["title"].replace("File:", "") for s in data.get("query", {}).get("search", [])]


def image_url(title: str) -> str | None:
    data = api(
        {
            "action": "query",
            "titles": f"File:{title}",
            "prop": "imageinfo",
            "iiprop": "url|size|mime",
        }
    )
    for p in (data.get("query") or {}).get("pages", {}).values():
        info = (p.get("imageinfo") or [None])[0]
        if info and info.get("mime", "").startswith("image/"):
            return info.get("url")
    return None


def download(url: str, dest: Path) -> int:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as r:
        data = r.read()
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_bytes(data)
    return len(data)


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--zona", default="")
    ap.add_argument("--descargar", action="store_true")
    args = ap.parse_args()

    rows = [p for p in PUEBLOS if not args.zona or p[1] == args.zona]
    out_dir = ROOT / "output" / "identidad_candidatas"
    out_dir.mkdir(parents=True, exist_ok=True)
    report: list[dict] = []

    for slug, zona, nombre, queries in rows:
        seen: set[str] = set()
        hits: list[str] = []
        for q in queries:
            for title in search(q):
                if title in seen:
                    continue
                seen.add(title)
                hits.append(title)
            time.sleep(0.35)
        print(f"\n=== {nombre} ({slug}) ===")
        for i, t in enumerate(hits[:10], 1):
            print(f"  {i}. {t}")
        report.append({"slug": slug, "zona": zona, "nombre": nombre, "candidatas": hits[:12]})

    (out_dir / "candidatas.json").write_text(
        json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(f"\nGuardado {out_dir / 'candidatas.json'}")

    # Descargas curadas a mano (File Commons → destino). Ampliar tras revisar.
    FOTOS_ELEGIDAS: list[tuple[str, str, str, str]] = [
        # slug, zona, commons filename, pie
        (
            "baiona",
            "val-minor",
            "Baiona - Vista desde el Monte Boi.jpg",
            "Baiona: casas del casco, puerto y monte Boi — así se vive junto a la ría",
        ),
        (
            "cudillero",
            "asturias-centro",
            "Cudillero - Asturias.jpg",
            "Cudillero: casas colgadas sobre el puerto",
        ),
    ]

    if args.descargar:
        for slug, zona, commons, _pie in FOTOS_ELEGIDAS:
            url = image_url(commons)
            if not url:
                # try search
                found = None
                for t in search(commons.replace(".jpg", "").replace("-", " "), 5):
                    u = image_url(t)
                    if u:
                        found = (t, u)
                        break
                if not found:
                    print(f"FAIL {slug}: no url for {commons}")
                    continue
                commons, url = found
            dest = ROOT / "web" / "public" / "fotos" / zona / f"{slug}-identidad.jpg"
            n = download(url, dest)
            print(f"OK {dest.name} ({n // 1024} KB) ← {commons}")
            time.sleep(0.4)


if __name__ == "__main__":
    main()
