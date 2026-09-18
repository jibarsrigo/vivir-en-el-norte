"""Recorta el panel del mapa (sin ficha Mancor ni leyenda) y actualiza JSON.

Uso:
  python scripts/preparar_mapas_web.py
"""
from __future__ import annotations

import json
import sys
from pathlib import Path

from PIL import Image

RAIZ = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(RAIZ))

from mapa2.osm import slug  # noqa: E402

SRC = RAIZ / "output" / "mapas_municipios"
DST = RAIZ / "web" / "public" / "mapas" / "municipios"
DATA = RAIZ / "web" / "src" / "data"

# Panel izquierdo en mapa2.mapas_municipio: add_axes([0.005, 0.20, 0.55, 0.79])
X0, Y0, W, H = 0.005, 0.20, 0.55, 0.79


def crop_map(src: Path, dst: Path) -> None:
    img = Image.open(src)
    left = int(round(X0 * img.width))
    top = int(round((1 - Y0 - H) * img.height))
    right = left + int(round(W * img.width))
    bottom = top + int(round(H * img.height))
    dst.parent.mkdir(parents=True, exist_ok=True)
    img.crop((left, top, right, bottom)).save(dst, format="PNG")
    print(f"  crop {dst.relative_to(RAIZ)} ({right - left}x{bottom - top})")


def nombre_mapa(m: dict) -> str:
    """Nombre de fichero = NN + slug OSM (guiones bajos), no el slug URL del JSON."""
    return f"{int(m['n']):02d}_{slug(m['municipio'])}.png"


def actualizar_json() -> None:
    for p in sorted(DATA.glob("municipios-*.json")):
        if "puntos" in p.name:
            continue
        data = json.loads(p.read_text(encoding="utf-8"))
        changed = False
        for m in data:
            nombre = nombre_mapa(m)
            if (DST / nombre).exists() and m.get("mapa") != nombre:
                m["mapa"] = nombre
                changed = True
                print(f"  json {p.name}: {m['municipio']} -> {nombre}")
        if changed:
            p.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def main() -> None:
    DST.mkdir(parents=True, exist_ok=True)
    for src in sorted(SRC.glob("*.png")):
        crop_map(src, DST / src.name)
    actualizar_json()


if __name__ == "__main__":
    main()
