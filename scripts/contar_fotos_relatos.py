"""Cuenta fotos por prefijo en relatos-*.ts."""
from __future__ import annotations

import re
from collections import defaultdict
from pathlib import Path

FOTO = re.compile(r"/fotos/[^/]+/([^\"']+\.(?:jpg|jpeg|png|webp))", re.I)

for p in sorted(Path("web/src/lib").glob("relatos-*.ts")):
    text = p.read_text(encoding="utf-8")
    by: dict[str, int] = defaultdict(int)
    for fn in FOTO.findall(text):
        by[fn.split("-")[0]] += 1
    print(p.name, "total", len(FOTO.findall(text)), dict(by))
