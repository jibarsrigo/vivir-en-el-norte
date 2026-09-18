"""Verifica unicidad de fotos Baixo Miño en RelatoMunicipio.tsx."""
from __future__ import annotations

import hashlib
import re
from pathlib import Path

text = Path("web/src/components/RelatoMunicipio.tsx").read_text(encoding="utf-8")
# Bloques: "slug": { ... } con fotos
pat = re.compile(
    r'\n  (?:"([^"]+)"|([a-z0-9-]+)): \{\n    escala:.*?(?=\n  (?:\"[^\"]+\"|[a-z0-9-]+): \{|\n\};)',
    re.S,
)
ok = True
for m in pat.finditer(text):
    slug = m.group(1) or m.group(2)
    body = m.group(0)
    srcs = re.findall(r"/fotos/baixo-mino/[^\s\"']+", body)
    hashes = []
    for s in srcs:
        f = Path("web/public") / s.lstrip("/")
        if not f.exists():
            hashes.append("MISSING")
            ok = False
        else:
            hashes.append(hashlib.sha256(f.read_bytes()).hexdigest()[:12])
    dups = len(hashes) - len(set(hashes))
    if len(srcs) != 6 or dups:
        ok = False
    print(f"{slug}: {len(srcs)} fotos, {len(set(hashes))} hashes, dups={dups}")

raise SystemExit(0 if ok else 1)
