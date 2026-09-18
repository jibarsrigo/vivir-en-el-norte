"""Lista municipios publicados y su campo mapa."""
from __future__ import annotations

import json
import glob
from pathlib import Path

raiz = Path(__file__).resolve().parent.parent
for p in sorted((raiz / "web/src/data").glob("municipios-*.json")):
    if "puntos" in p.name:
        continue
    data = json.loads(p.read_text(encoding="utf-8"))
    print("---", p.name)
    for m in data:
        print(f"  {m['n']:02d} {m['municipio']} mapa={m.get('mapa')!r}")
