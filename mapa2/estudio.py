"""Convierte docs/estudio_zonas.md en un PDF A4 paginado (output/mapa_2_0_estudio.pdf).

Uso:  python -m mapa2.estudio
"""
from __future__ import annotations

import re
from pathlib import Path

import markdown
import pymupdf

RAIZ = Path(__file__).resolve().parent.parent
ORIGEN = RAIZ / "docs" / "estudio_zonas.md"
DESTINO = RAIZ / "output" / "mapa_2_0_estudio.pdf"

CSS = """
body { font-family: sans-serif; font-size: 10.2pt; line-height: 1.36; color: #1a1a1a; }
h1 { font-size: 20pt; color: #0b3d5c; margin: 0 0 6pt 0; }
h2 { font-size: 14pt; color: #0b3d5c; margin: 14pt 0 6pt 0; }
h3 { font-size: 11pt; color: #b3541e; margin: 9pt 0 3pt 0; }
h4 { font-size: 13pt; color: #0b3d5c; margin: 8pt 0 4pt 0; border-bottom: 0.5pt solid #b9c7d2; }
img { width: 100%; }
p { margin: 0 0 5pt 0; text-align: justify; }
ul, ol { margin: 0 0 5pt 0; }
li { margin: 0 0 1.5pt 0; }
table { border-collapse: collapse; width: 100%; margin: 3pt 0 7pt 0; font-size: 8.4pt; }
th { color: #0b3d5c; text-align: left; padding: 2.5pt 4pt; border: 0.5pt solid #b9c7d2; border-bottom: 1.2pt solid #0b3d5c; }
td { padding: 2.5pt 4pt; border: 0.5pt solid #d2dbe3; vertical-align: top; }
hr { border: 0; border-top: 0.6pt solid #b9c7d2; margin: 8pt 0; }
strong { color: #0b3d5c; }
code { font-family: monospace; font-size: 8.8pt; }
"""

A4 = pymupdf.paper_rect("a4")
MARGEN = 42  # puntos (~1,5 cm)


def html_desde_markdown(texto: str) -> str:
    html = markdown.markdown(texto, extensions=["tables"])
    # Las reglas horizontales del markdown sobran: cada zona empieza en página nueva.
    html = re.sub(r"<hr\s*/?>", "", html)
    # Cada zona empieza en página nueva, con su mapa arriba del título.
    html = re.sub(r'<p><img alt="([^"]*)" src="\.\./output/(mapas_zonas/[^"]+)"\s*/?></p>',
                  r'<p style="page-break-before: always; margin: 0 0 4pt 0"><img alt="\1" src="output/\2" /></p>', html)
    html = re.sub(r'<p><img alt="([^"]*)" src="\.\./output/(mapas_municipios/[^"]+)"\s*/?></p>',
                  r'<p style="margin: 2pt 0 4pt 0"><img alt="\1" src="output/\2" /></p>', html)
    html = re.sub(r"<h2>(Cierre|Pendiente)", r'<h2 style="page-break-before: always">\1', html)
    html = re.sub(r"<h2>(\d+\. )", r'<h2 style="margin-top: 2pt">\1', html)
    # Cada municipio empieza en página nueva.
    html = re.sub(r"<h4>(\d+\s*·)", r'<h4 style="page-break-before: always">\1', html)
    return html


def generar(origen: Path = ORIGEN, destino: Path = DESTINO) -> Path:
    html = html_desde_markdown(origen.read_text(encoding="utf-8"))
    story = pymupdf.Story(html=html, user_css=CSS, archive=pymupdf.Archive(str(RAIZ)))
    destino.parent.mkdir(parents=True, exist_ok=True)
    escritor = pymupdf.DocumentWriter(str(destino))
    zona = A4 + (MARGEN, MARGEN, -MARGEN, -MARGEN - 14)
    pagina = 0
    mas = True
    while mas:
        pagina += 1
        dev = escritor.begin_page(A4)
        mas, _ = story.place(zona)
        story.draw(dev)
        # Pie de página con numeración.
        pie = pymupdf.Story(
            html=f'<p style="font-size:7.5pt;color:#6b7a88;text-align:right">MAPA 2.0 · Estudio detallado por zonas · pág. {pagina}</p>'
        )
        pie.place(pymupdf.Rect(MARGEN, A4.height - MARGEN, A4.width - MARGEN, A4.height - 8))
        pie.draw(dev)
        escritor.end_page()
    escritor.close()

    # Marcadores (índice) por zona para navegar en el móvil.
    doc = pymupdf.open(str(destino))
    toc = []
    for num, pag in enumerate(doc, start=1):
        for bloque in pag.get_text("dict")["blocks"]:
            for linea in bloque.get("lines", []):
                for span in linea["spans"]:
                    if span["size"] >= 13.5 and span["text"].strip():
                        toc.append([1, span["text"].strip(), num])
                        break
                    if 12.4 <= span["size"] < 13.5 and span["text"].strip():
                        toc.append([2, span["text"].strip(), num])
                        break
    # Eliminar duplicados consecutivos (títulos partidos en varios spans).
    limpio = []
    for e in toc:
        if not limpio or limpio[-1][2] != e[2]:
            limpio.append(e)
    doc.set_toc(limpio)
    doc.saveIncr()
    n = doc.page_count
    doc.close()
    print(f"{destino.relative_to(RAIZ)} · {n} páginas")
    return destino


if __name__ == "__main__":
    generar()
