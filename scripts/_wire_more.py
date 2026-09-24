# -*- coding: utf-8 -*-
from pathlib import Path

def insert_before_fotos(path: str, slug: str, src: str, pie: str, next_slug: str | None = None):
    p = Path(path)
    t = p.read_text(encoding="utf-8")
    start = t.find(f"  {slug}: {{")
    if start < 0:
        print(f"FAIL no slug {slug}")
        return
    end = t.find(f"\n  {next_slug}: {{", start) if next_slug else len(t)
    if end < 0:
        end = len(t)
    section = t[start:end]
    if f"{slug}-identidad" in section or "fotoIdentidad" in section and "identidad.jpg" in section:
        # more precise
        if "fotoIdentidad" in section:
            print(f"SKIP {slug} already has fotoIdentidad")
            return
    marker = "\n    fotosAbrir: ["
    pos = section.find(marker)
    if pos < 0:
        print(f"FAIL no fotosAbrir in {slug}")
        return
    block = (
        "\n    fotoIdentidad: {\n"
        f'      src: "{src}",\n'
        f'      pie: "{pie}",\n'
        "    },"
    )
    new_section = section[:pos] + block + section[pos:]
    t = t[:start] + new_section + t[end:]
    p.write_text(t, encoding="utf-8")
    print(f"OK {slug}")

insert_before_fotos(
    "web/src/lib/relatos-a-marina.ts",
    "viveiro",
    "/fotos/a-marina/viveiro-identidad.jpg",
    "Viveiro: casas blancas en la r\u00eda, playa y monte alrededor \u2014 as\u00ed se vive en A Mari\u00f1a",
    "xove",
)
insert_before_fotos(
    "web/src/lib/relatos-a-marina.ts",
    "ribadeo",
    "/fotos/a-marina/ribadeo-identidad.jpg",
    "Ribadeo: casas sobre el puerto y la r\u00eda del Eo, con el monte detr\u00e1s",
    None,
)
insert_before_fotos(
    "web/src/lib/relatos-o-morrazo.ts",
    "cangas",
    "/fotos/o-morrazo/cangas-identidad.jpg",
    "Cangas: casas del casco junto a la r\u00eda de Vigo, con el monte del Morrazo detr\u00e1s",
    "moana",
)
