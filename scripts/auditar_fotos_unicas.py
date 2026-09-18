"""Audita unicidad de fotos por zona (SHA-256) y cuenta refs en Relato + relatos-*.ts."""
from __future__ import annotations

import hashlib
import re
import sys
from collections import defaultdict
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
WEB = RAIZ / "web"
FOTO_RE = re.compile(r"/fotos/[^\"'\s)]+\.(?:jpg|jpeg|png|webp)", re.I)

ZONAS = [
    "baixo-mino",
    "val-minor",
    "vigo-e-ria",
    "o-morrazo",
    "pontevedra-e-sanxenxo",
    "o-salnes",
    "barbanza-e-noia",
    "golfo-artabro-e-ferrol",
    "a-marina",
    "asturias-occidente",
    "asturias-centro",
    "asturias-oriente",
    "cantabria-occidental",
    "cantabria-oriental",
    "alto-minho",
    "litoral-norte",
]

RELATO_ZONA = {
    "baixo-mino": "RelatoBaixoMino.tsx",
    "val-minor": "RelatoValMinor.tsx",
    "vigo-e-ria": "RelatoVigoERia.tsx",
    "o-morrazo": "RelatoOMorrazo.tsx",
    "pontevedra-e-sanxenxo": "RelatoPontevedraESanxenxo.tsx",
    "o-salnes": "RelatoOSalnes.tsx",
    "barbanza-e-noia": "RelatoBarbanzaENoia.tsx",
    "golfo-artabro-e-ferrol": "RelatoGolfoArtabroEFerrol.tsx",
    "a-marina": "RelatoAMarina.tsx",
    "asturias-occidente": "RelatoAsturiasOccidente.tsx",
    "asturias-centro": "RelatoAsturiasCentro.tsx",
    "asturias-oriente": "RelatoAsturiasOriente.tsx",
    "cantabria-occidental": "RelatoCantabriaOccidental.tsx",
    "cantabria-oriental": "RelatoCantabriaOriental.tsx",
    "alto-minho": "RelatoAltoMinho.tsx",
    "litoral-norte": "RelatoLitoralNorte.tsx",
}


def sha12(p: Path) -> str:
    return hashlib.sha256(p.read_bytes()).hexdigest()[:12].upper()


def extract(text: str, zona: str) -> list[str]:
    return [m for m in FOTO_RE.findall(text) if f"/fotos/{zona}/" in m]


def auditar(zona: str) -> int:
    srcs: set[str] = set()
    relato_ts = WEB / "src" / "lib" / f"relatos-{zona}.ts"
    relato_zona = WEB / "src" / "components" / RELATO_ZONA[zona]
    if relato_ts.exists():
        srcs.update(extract(relato_ts.read_text(encoding="utf-8"), zona))
    if relato_zona.exists():
        srcs.update(extract(relato_zona.read_text(encoding="utf-8"), zona))
    # Baixo Miño: relatos municipales viven en RelatoMunicipio.tsx
    extra = WEB / "src" / "components" / "RelatoMunicipio.tsx"
    if extra.exists():
        srcs.update(extract(extra.read_text(encoding="utf-8"), zona))

    by_hash: dict[str, list[str]] = defaultdict(list)
    missing = []
    for src in sorted(srcs):
        f = WEB / "public" / src.lstrip("/").replace("/", "\\")
        if not f.exists():
            missing.append(src)
            continue
        by_hash[sha12(f)].append(src)

    dups = {h: v for h, v in by_hash.items() if len(v) > 1}
    zona_fotos = extract(relato_zona.read_text(encoding="utf-8"), zona) if relato_zona.exists() else []

    print(f"\n=== {zona} ===")
    print(f"zona Relato: {len(zona_fotos)} fotos | total refs: {len(srcs)} | hashes: {len(by_hash)} | dups: {len(dups)} | faltan: {len(missing)}")
    for h, lista in dups.items():
        print(f"  DUP {h}:")
        for s in lista:
            print(f"    {s}")
    for s in missing:
        print(f"  FALTA {s}")
    return len(dups) + len(missing) + (0 if len(zona_fotos) == 6 else 1)


def main() -> None:
    zonas = sys.argv[1:] or ZONAS
    code = 0
    for z in zonas:
        code += auditar(z)
    sys.exit(1 if code else 0)


if __name__ == "__main__":
    main()
