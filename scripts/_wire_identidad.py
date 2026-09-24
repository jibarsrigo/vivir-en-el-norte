# -*- coding: utf-8 -*-
from pathlib import Path

# Tui
p = Path("web/src/components/RelatoMunicipio.tsx")
t = p.read_text(encoding="utf-8")
idx = t.find("  tui: {")
sec_end = t.find("\n};", idx)
section = t[idx:sec_end]
if "tui-identidad" in section:
    print("Tui already wired")
else:
    needle = '    fotosAbrir: [\n      { src: "/fotos/baixo-mino/tui-catedral-casco.jpg"'
    block = (
        '    fotoIdentidad: {\n'
        '      src: "/fotos/baixo-mino/tui-identidad.jpg",\n'
        '      pie: "Tui: casas del casco y catedral sobre el Mino, con el monte detras — ciudad pequena de rio",\n'
        '    },\n'
        '    fotosAbrir: [\n'
        '      { src: "/fotos/baixo-mino/tui-catedral-casco.jpg"'
    )
    # fix accents properly
    block = (
        '    fotoIdentidad: {\n'
        '      src: "/fotos/baixo-mino/tui-identidad.jpg",\n'
        '      pie: "Tui: casas del casco y catedral sobre el Mi\u00f1o, con el monte detr\u00e1s \u2014 ciudad peque\u00f1a de r\u00edo",\n'
        '    },\n'
        '    fotosAbrir: [\n'
        '      { src: "/fotos/baixo-mino/tui-catedral-casco.jpg"'
    )
    pos = t.find(needle, idx)
    if pos < 0 or pos > sec_end:
        print("FAIL Tui needle", pos, sec_end)
    else:
        t = t[:pos] + block + t[pos + len(needle):]
        p.write_text(t, encoding="utf-8")
        print("OK Tui")

# Ribadesella
p2 = Path("web/src/lib/relatos-asturias-oriente.ts")
t2 = p2.read_text(encoding="utf-8")
idx2 = t2.find("  ribadesella: {")
sec2 = t2.find("\n  llanes: {", idx2)
section2 = t2[idx2:sec2]
if "ribadesella-identidad" in section2:
    print("Ribadesella already wired")
else:
    marker = "    fotosAbrir: [\n      { src: \"/fotos/asturias-oriente/ribadesella-puerto.jpg\""
    insert = (
        '    fotoIdentidad: {\n'
        '      src: "/fotos/asturias-oriente/ribadesella-identidad.jpg",\n'
        '      pie: "Ribadesella: casas junto a la desembocadura del Sella, con los Picos al fondo",\n'
        '    },\n'
        '    fotosAbrir: [\n'
        '      { src: "/fotos/asturias-oriente/ribadesella-puerto.jpg"'
    )
    pos = t2.find(marker, idx2)
    if pos < 0 or pos > sec2:
        print("FAIL Ribadesella", pos)
    else:
        t2 = t2[:pos] + insert + t2[pos + len(marker):]
        p2.write_text(t2, encoding="utf-8")
        print("OK Ribadesella")

# Verify Llanes still there
print("llanes-identidad in oriente:", "llanes-identidad" in p2.read_text(encoding="utf-8") if p2.exists() else "n/a")
print("castropol:", "castropol-identidad" in Path("web/src/lib/relatos-asturias-occidente.ts").read_text(encoding="utf-8"))
print("tui check:", "tui-identidad" in Path("web/src/components/RelatoMunicipio.tsx").read_text(encoding="utf-8"))
