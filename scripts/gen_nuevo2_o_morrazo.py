# -*- coding: utf-8 -*-
"""Generate NUEVO2 pages for O Morrazo from the approved immutable TXT."""
from __future__ import annotations

import json
import re
from pathlib import Path

TXT = Path(r"c:\Users\Jose\Downloads\Lote_O_Morrazo_Cursor_NUEVO2 (1).txt")
WEB = Path(r"c:\Users\Jose\Clone repo vivir en el norte\vivir-en-el-norte\web")
OUT = WEB / "src" / "app" / "nuevo2"
PARA_PATH = WEB / "src" / "lib" / "nuevo2-para-decidirte.ts"
SLUGS_PATH = WEB / "src" / "lib" / "nuevo2-municipios.ts"
PARSED_OUT = Path(
    r"c:\Users\Jose\Clone repo vivir en el norte\vivir-en-el-norte\output\_v1_tmp\omorrazo_parsed.json"
)

SLUG_MAP = {"CANGAS": "cangas", "MOAÑA": "moana", "BUEU": "bueu", "MARÍN": "marin"}

PRICES = {
    "cangas": dict(
        municipio="Cangas",
        a2="182.267 €",
        a3="252.369 €",
        b2="147.215 €",
        b3="203.837 €",
        m2="2.157 €/m²",
    ),
    "moana": dict(
        municipio="Moaña",
        a2="135.876 €",
        a3="188.136 €",
        b2="109.746 €",
        b3="151.956 €",
        m2="1.608 €/m²",
    ),
    "bueu": dict(
        municipio="Bueu",
        a2="161.226 €",
        a3="223.236 €",
        b2="130.221 €",
        b3="180.306 €",
        m2="1.908 €/m²",
    ),
    "marin": dict(
        municipio="Marín",
        a2="130.046 €",
        a3="180.063 €",
        b2="105.037 €",
        b3="145.436 €",
        m2="1.539 €/m²",
    ),
}

# Bold fragments for ConNegritas (same style as Baiona), only when present literally.
BOLD = {
    "cangas": {
        "como": [],  # filled after parse if times found
        "clima0": ["20 °C", "10 °C"],
        "casa_m2": ["2.157 €/m²"],
        "mar": [],
    },
    "moana": {
        "clima0": ["20 °C", "10 °C"],
        "casa_m2": ["1.608 €/m²"],
    },
    "bueu": {
        "clima0": ["20 °C", "10 °C"],
        "casa_m2": ["1.908 €/m²"],
    },
    "marin": {
        "clima0": ["20 °C", "10 °C"],
        "casa_m2": ["1.539 €/m²"],
    },
}

SECTION_HEADERS = {
    "CLIMA",
    "VIVIR",
    "CÓMO SE VIVE",
    "DE DÓNDE VIENE",
    "MAR, RÍO Y CAMINO",
    "CASA",
    "¿ENCAJA?",
    "ENCAJA SI",
    "NO ENCAJA SI",
    "QUÉ COMPROBAR",
    "PRECIO Y BANDAS",
    "ADVERTENCIA DE MICROZONA",
    "QUÉ CONVIENE REVISAR EN UNA VIVIENDA",
    "MERCADO Y REVENTA",
    "MÁS PUEBLOS DE O MORRAZO",
    "FRENTE A MALLORCA",
    "MAPA",
    "ZONA",
}


def unwrap(text: str) -> list[str]:
    lines = text.replace("\r\n", "\n").split("\n")
    paras: list[str] = []
    cur: list[str] = []

    def flush() -> None:
        nonlocal cur
        if cur:
            p = " ".join(x.strip() for x in cur if x.strip())
            p = re.sub(r" +", " ", p).strip()
            if p:
                paras.append(p)
            cur = []

    for ln in lines:
        if not ln.strip():
            flush()
        else:
            cur.append(ln.strip())
    flush()
    return paras


def section_after(body: str, start_markers: list[str], end_markers: list[str]) -> str:
    pos = -1
    start_len = 0
    for m in start_markers:
        i = body.find(m)
        if i != -1 and (pos == -1 or i < pos):
            pos = i
            start_len = len(m)
    if pos == -1:
        raise ValueError(f"start not found {start_markers}")
    start = pos + start_len
    end = len(body)
    for m in end_markers:
        i = body.find(m, start)
        if i != -1 and i < end:
            end = i
    return body[start:end]


def is_header_line(s: str) -> bool:
    return s in SECTION_HEADERS or (
        len(s) >= 6 and s == s.upper() and re.match(r"^[A-ZÁÉÍÓÚÑÜ¿/ ,]+$", s) is not None
    )


def extract_fotos(chunk: str) -> tuple[list[tuple[str, str]], str]:
    lines = chunk.replace("\r\n", "\n").split("\n")
    fotos: list[tuple[str, str]] = []
    out_lines: list[str] = []
    i = 0
    while i < len(lines):
        ln = lines[i].strip()
        if ln.startswith("FOTO "):
            rest = ln[5:].strip()
            pie = ""
            src = ""
            if re.search(r"\sPie:", rest):
                src, pie = re.split(r"\s+Pie:\s*", rest, maxsplit=1)
                pie = pie.strip()
                i += 1
                while i < len(lines):
                    s = lines[i].strip()
                    if (
                        not s
                        or s.startswith("FOTO ")
                        or s.startswith("Idealista:")
                        or is_header_line(s)
                        or s.startswith("Pie:")
                    ):
                        break
                    pie += " " + s
                    i += 1
            else:
                src = rest
                i += 1
                pie_parts: list[str] = []
                while i < len(lines):
                    s = lines[i].strip()
                    if s.startswith("Pie:"):
                        pie_parts.append(s[4:].strip())
                        i += 1
                        while i < len(lines):
                            nxt = lines[i].strip()
                            if (
                                not nxt
                                or nxt.startswith("FOTO ")
                                or nxt.startswith("Idealista:")
                                or is_header_line(nxt)
                            ):
                                break
                            pie_parts.append(nxt)
                            i += 1
                        break
                    if not s or s.startswith("FOTO "):
                        break
                    i += 1
                pie = " ".join(pie_parts)
            src = src.strip()
            pie = re.sub(r" +", " ", pie).strip()
            fotos.append((src, pie))
            continue
        out_lines.append(lines[i])
        i += 1
    return fotos, "\n".join(out_lines)


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"')


def ts_array(name: str, items: list[str]) -> str:
    lines = [f"const {name} = ["]
    for p in items:
        lines.append(f'  "{esc(p)}",')
    lines.append("] as const;")
    return "\n".join(lines)


def ts_foto(const_name: str, src: str, pie: str) -> str:
    return (
        f"const {const_name} = {{\n"
        f'  src: "{src}",\n'
        f'  pie: "{esc(pie)}",\n'
        f"}} as const;"
    )


def parse_all() -> dict:
    raw = TXT.read_text(encoding="utf-8")
    parts = re.split(
        r"={40,}\s*([A-ZÁÉÍÓÚÑ ]+)\s*[—\-–]\s*\n?GALICIA\s*={40,}",
        raw,
    )
    munis: dict[str, str] = {}
    for i in range(1, len(parts), 2):
        name = parts[i].strip()
        body = re.split(r"={40,}\s*\n?FIN DEL", parts[i + 1])[0]
        munis[name] = body
    if set(munis) != set(SLUG_MAP):
        raise SystemExit(f"unexpected munis: {list(munis.keys())!r} vs {list(SLUG_MAP.keys())!r}")

    parsed: dict = {}
    for uname, slug in SLUG_MAP.items():
        body = munis[uname]
        head = body.split("ZONA", 1)[0]
        m = re.search(
            r"FOTO PRINCIPAL\s+(\S+)\s+Pie:\s*(.+?)(?=\n\n|\nCompara)",
            head,
            re.S,
        )
        if not m:
            raise SystemExit(f"no identidad {slug}: {head[:240]!r}")
        id_src = m.group(1).strip()
        id_pie = re.sub(r"\s+", " ", m.group(2)).strip()

        zona = unwrap(
            section_after(body, ["\nZONA\n"], ["\nMAPA\n"])
        )
        como_raw = section_after(body, ["\nCÓMO SE VIVE\n"], ["\nFRENTE A MALLORCA\n"])
        fotos_como, como_txt = extract_fotos(como_raw)
        como = unwrap(como_txt)

        clima = unwrap(section_after(body, ["\nCLIMA\n"], ["\nVIVIR\n"]))
        vivir = unwrap(section_after(body, ["\nVIVIR\n"], ["\nDE DÓNDE VIENE\n"]))

        hist_raw = section_after(body, ["\nDE DÓNDE VIENE\n"], ["\nMAR, RÍO Y CAMINO\n"])
        fotos_hist, hist_txt = extract_fotos(hist_raw)
        hist = unwrap(hist_txt)

        mar_raw = section_after(body, ["\nMAR, RÍO Y CAMINO\n"], ["\nCASA\n"])
        fotos_mar, mar_txt = extract_fotos(mar_raw)
        mar = unwrap(mar_txt)

        casa_raw = section_after(
            body, ["\nCASA\n"], ["\nPRECIO Y BANDAS\n", "\nADVERTENCIA DE MICROZONA\n"]
        )
        casa_lines = [
            p for p in unwrap(casa_raw) if not p.startswith("Idealista:")
        ]

        adv = unwrap(
            section_after(
                body,
                ["\nADVERTENCIA DE MICROZONA\n"],
                ["\nQUÉ CONVIENE REVISAR EN UNA VIVIENDA\n"],
            )
        )
        rev = unwrap(
            section_after(
                body,
                ["\nQUÉ CONVIENE REVISAR EN UNA VIVIENDA\n"],
                ["\nMERCADO Y REVENTA\n"],
            )
        )
        merc = unwrap(section_after(body, ["\nMERCADO Y REVENTA\n"], ["\n¿ENCAJA?\n"]))
        encaja = unwrap(section_after(body, ["\nENCAJA SI\n"], ["\nNO ENCAJA SI\n"]))
        no = unwrap(section_after(body, ["\nNO ENCAJA SI\n"], ["\nQUÉ COMPROBAR\n"]))
        qc = unwrap(
            section_after(body, ["\nQUÉ COMPROBAR\n"], ["\nMÁS PUEBLOS DE O MORRAZO\n"])
        )

        parsed[slug] = dict(
            id_src=id_src,
            id_pie=id_pie,
            zona=zona,
            como=como,
            fotos_como=fotos_como,
            clima=clima,
            vivir=vivir,
            hist=hist,
            fotos_hist=fotos_hist,
            mar=mar,
            fotos_mar=fotos_mar,
            casa=casa_lines,
            adv=adv,
            rev=rev,
            merc=merc,
            encaja=encaja,
            no=no,
            qc=qc,
            credito="Wikimedia Commons (licencias indicadas en los archivos de origen).",
        )
    return parsed


def emit_paragraphs(arr_name: str, indices: str | None = None, bold: list[str] | None = None) -> str:
    """Emit JSX for mapping paragraphs. indices e.g. '.slice(0, 2)' or '[0]'."""
    if indices is None:
        return f"""{{({arr_name}).map((p) => (
          <p key={{p.slice(0, 64)}} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {{p}}
          </p>
        ))}}"""
    if bold:
        frags = ", ".join(json.dumps(f, ensure_ascii=False) for f in bold)
        return f"""<p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={{{arr_name}{indices}}} fragmentos={{[{frags}]}} />
        </p>"""
    return f"""<p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{{{arr_name}{indices}}}</p>"""


def interleave_hist(hist: list[str], fotos: list[tuple[str, str]], foto_consts: list[str]) -> str:
    """Place history photos after paragraphs that precede them in the TXT.

    Heuristic used by Baiona: first N paras, foto, next paras, foto, rest.
    For O Morrazo TXT the photos sit mid-section; we place:
    - Cangas: after para about Cerviño (index 2 ends before photo1), then after Facho intro
    Simpler reliable approach: emit all text first then photos — WRONG vs Baiona.
    Better: split hist text at foto insertion points by counting paragraphs before each FOTO in original.

    We store fotos_hist order and insert after roughly equal chunks, matching TXT order:
    For each municipality the parser already removed fotos; we need insertion indices.
    """
    # Default: insert photos evenly — but prefer explicit per-slug map.
    return ""  # filled by caller


# Explicit photo insertion points (paragraph index AFTER which to insert photo).
# Derived from approved TXT structure.
HIST_INSERT = {
    "cangas": [2, 3],
    "moana": [2, 4],
    "bueu": [2, 4],
    "marin": [4, 6],
}
MAR_INSERT = {
    "cangas": [2, 4],
    "moana": [3, 4],
    "bueu": [1, 3],
    "marin": [1, 2],
}


def emit_interleaved(
    arr: str,
    paras: list[str],
    foto_consts: list[str],
    insert_after: list[int],
) -> str:
    """insert_after[i] = last paragraph index (0-based) before foto i appears."""
    chunks: list[str] = []
    start = 0
    for fi, after in enumerate(insert_after):
        end = after + 1
        if end > start:
            if end - start == 1:
                chunks.append(
                    f'        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">{{{arr}[{start}]}}</p>'
                )
            else:
                chunks.append(
                    f"""        {{{arr}.slice({start}, {end}).map((p) => (
          <p key={{p.slice(0, 64)}} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {{p}}
          </p>
        ))}}"""
                )
        chunks.append(
            f'        <Foto src={{{foto_consts[fi]}.src}} pie={{{foto_consts[fi]}.pie}} />'
        )
        start = end
    if start < len(paras):
        chunks.append(
            f"""        {{{arr}.slice({start}).map((p) => (
          <p key={{p.slice(0, 64)}} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {{p}}
          </p>
        ))}}"""
        )
    return "\n".join(chunks)


def find_times_to_bold(text: str) -> list[str]:
    found = []
    for pat in [
        r"\d+–\d+ minutos",
        r"\d+-\d+ minutos",
        r"aproximadamente a \d+ minutos",
        r"unos \d+ minutos",
        r"\d+ minutos",
        r"\d+ km",
        r"\d+ °C",
    ]:
        for m in re.finditer(pat, text):
            frag = m.group(0)
            # Prefer specific fragments used in Baiona style - just the time part
            pass
    # Extract unique minute/temperature fragments carefully
    for m in re.finditer(r"aproximadamente a \d+ minutos", text):
        # bold just "N minutos" like Baiona
        inner = re.search(r"\d+ minutos", m.group(0))
        if inner and inner.group(0) not in found:
            found.append(inner.group(0))
    for m in re.finditer(r"unos \d+ minutos orientativos", text):
        inner = re.search(r"\d+ minutos", m.group(0))
        if inner and inner.group(0) not in found:
            found.append(inner.group(0))
    for m in re.finditer(r"aproximadamente a \d+–\d+ minutos", text):
        inner = re.search(r"\d+–\d+ minutos", m.group(0))
        if inner and inner.group(0) not in found:
            found.append(inner.group(0))
    for m in re.finditer(r"alrededor de \d+ km", text):
        if m.group(0) not in found:
            # baiona only bolds times; skip km unless needed
            pass
    return found


def generate_page(slug: str, data: dict) -> str:
    prices = PRICES[slug]
    title = prices["municipio"]
    # Photo consts
    foto_blocks = [
        ts_foto("FOTO_IDENTIDAD", data["id_src"], data["id_pie"]),
    ]
    como_consts = []
    for i, (src, pie) in enumerate(data["fotos_como"]):
        name = f"FOTO_COMO_{i+1}"
        como_consts.append(name)
        foto_blocks.append(ts_foto(name, src, pie))
    hist_consts = []
    for i, (src, pie) in enumerate(data["fotos_hist"]):
        name = f"FOTO_HIST_{i+1}"
        hist_consts.append(name)
        foto_blocks.append(ts_foto(name, src, pie))
    mar_consts = []
    for i, (src, pie) in enumerate(data["fotos_mar"]):
        name = f"FOTO_MAR_{i+1}"
        mar_consts.append(name)
        foto_blocks.append(ts_foto(name, src, pie))

    # Bold on last como para if times present — apply to each como para that has times
    como_jsx_parts = []
    for idx, p in enumerate(data["como"]):
        times = []
        for m in re.finditer(r"\d+–\d+ minutos|\d+ minutos", p):
            if m.group(0) not in times:
                times.append(m.group(0))
        # also "15 minutos" etc.
        if times:
            frags = ", ".join(json.dumps(t, ensure_ascii=False) for t in times)
            como_jsx_parts.append(
                f"""        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={{COMO_SE_VIVE_NUEVO2[{idx}]}} fragmentos={{[{frags}]}} />
        </p>"""
            )
        else:
            como_jsx_parts.append(
                f"""        <p key={{COMO_SE_VIVE_NUEVO2[{idx}].slice(0, 64)}} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          {{COMO_SE_VIVE_NUEVO2[{idx}]}}
        </p>"""
            )
    # photos at end of cómo (as in TXT / Baiona)
    for name in como_consts:
        como_jsx_parts.append(f"        <Foto src={{{name}.src}} pie={{{name}.pie}} />")
    como_jsx = "\n".join(como_jsx_parts)

    clima0_bold = []
    for frag in ["20 °C", "10 °C"]:
        if frag in data["clima"][0]:
            clima0_bold.append(frag)

    hist_jsx = emit_interleaved(
        "DE_DONDE_VIENE_NUEVO2",
        data["hist"],
        hist_consts,
        HIST_INSERT[slug][: len(hist_consts)],
    )
    mar_jsx = emit_interleaved(
        "MAR_RIO_CAMINO_NUEVO2",
        data["mar"],
        mar_consts,
        MAR_INSERT[slug][: len(mar_consts)],
    )

    # Casa: all but last, then last with m2 bold, then Idealista, table, rows
    casa_m2 = prices["m2"]
    casa_body_count = len(data["casa"])
    # last para should contain m2
    casa_map = f"""        {{CASA_NUEVO2.slice(0, {casa_body_count - 1}).map((p) => (
          <p key={{p.slice(0, 64)}} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {{p}}
          </p>
        ))}}
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas texto={{CASA_NUEVO2[{casa_body_count - 1}]}} fragmentos={{["{casa_m2}"]}} />
        </p>"""

    arrays = "\n\n".join(
        [
            ts_array("RESUMEN_ZONA_NUEVO2", data["zona"]),
            ts_array("COMO_SE_VIVE_NUEVO2", data["como"]),
            ts_array("CLIMA_NUEVO2", data["clima"]),
            ts_array("VIVIR_NUEVO2", data["vivir"]),
            ts_array("DE_DONDE_VIENE_NUEVO2", data["hist"]),
            ts_array("MAR_RIO_CAMINO_NUEVO2", data["mar"]),
            ts_array("CASA_NUEVO2", data["casa"]),
            ts_array("CASA_ADVERTENCIA_MICROZONA", data["adv"]),
            ts_array("CASA_QUE_CONVIENE_REVISAR", data["rev"]),
            ts_array("CASA_MERCADO_REVENTA", data["merc"]),
            ts_array("ENCAJA_SI_NUEVO2", data["encaja"]),
            ts_array("NO_ENCAJA_SI_NUEVO2", data["no"]),
            ts_array("QUE_COMPROBAR_NUEVO2", data["qc"]),
        ]
    )

    fotos_block = "\n\n".join(foto_blocks)

    page = f'''import Link from "next/link";
import {{ notFound }} from "next/navigation";
import type {{ ReactNode }} from "react";
import BloqueZonaFicha from "@/components/BloqueZonaFicha";
import CabeceraFichaMunicipio from "@/components/CabeceraFichaMunicipio";
import EnlaceIdealista from "@/components/EnlaceIdealista";
import Foto from "@/components/Foto";
import MapaMunicipioFicha from "@/components/MapaMunicipioFicha";
import {{ RELATO_MUNICIPIOS }} from "@/components/RelatoMunicipio";
import TablaComparativaZona from "@/components/TablaComparativaZona";
import {{ municipiosDeZonaFicha, municipioPorSlug, zonaIdDeFicha }} from "@/lib/municipios";
import {{ zonaPorId }} from "@/lib/zonas";
import DesplegableNuevo2 from "../cudillero/DesplegableNuevo2";

/**
 * NUEVO2 — {title} (O Morrazo).
 * Texto: Lote_O_Morrazo_Cursor_NUEVO2 (1).txt (APROBADO EDITORIALMENTE)
 */

{arrays}

const CASA_LEYENDA_COMPACTA =
  "A: ≤5 min de la costa · B: 5–30 min · 2 hab ≈65 m² · 3 hab ≈90 m². Estimaciones comparativas; conviene contrastarlas con la oferta del momento.";

const CASA_FILA_PRECIOS = {{
  municipio: "{prices["municipio"]}",
  a2: "{prices["a2"]}",
  a3: "{prices["a3"]}",
  b2: "{prices["b2"]}",
  b3: "{prices["b3"]}",
  m2: "{prices["m2"]}",
}} as const;

{fotos_block}

const CREDITO_FOTOS = "{esc(data["credito"])}";

function FilaCasaNuevo2({{
  etiqueta,
  cuerpo,
}}: {{
  etiqueta: string;
  cuerpo: readonly string[];
}}) {{
  return (
    <div className="border-b border-[var(--linea)] py-3 last:border-b-0">
      <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--tinta-suave)]">
        {{etiqueta}}
      </p>
      {{cuerpo.map((p) => (
        <p key={{p.slice(0, 64)}} className="mt-1.5 text-[15px] leading-relaxed text-[var(--tinta)]">
          {{p}}
        </p>
      ))}}
    </div>
  );
}}

function ConNegritas({{ texto, fragmentos }}: {{ texto: string; fragmentos: string[] }}) {{
  const nodos: ReactNode[] = [];
  let resto = texto;
  fragmentos.forEach((fragmento, idx) => {{
    const i = resto.indexOf(fragmento);
    if (i === -1) {{
      throw new Error(`Negrita: fragmento no encontrado — ${{fragmento.slice(0, 48)}}`);
    }}
    nodos.push(resto.slice(0, i));
    nodos.push(<strong key={{`${{idx}}-${{fragmento.slice(0, 24)}}`}}>{{fragmento}}</strong>);
    resto = resto.slice(i + fragmento.length);
  }});
  nodos.push(resto);
  return <>{{nodos}}</>;
}}

export default function Nuevo2{title.replace("ñ", "n").replace("í", "i")}Page() {{
  const ficha = municipioPorSlug("{slug}");
  if (!ficha) notFound();
  const zonaId = zonaIdDeFicha(ficha);
  const z = zonaPorId(zonaId);
  if (!z) notFound();

  const vecinos = municipiosDeZonaFicha(zonaId);
  const escalas = Object.fromEntries(
    vecinos.map((m) => {{
      const relato = RELATO_MUNICIPIOS[m.slug];
      return [m.municipio, relato?.escala ?? ""] as const;
    }}),
  );

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <CabeceraFichaMunicipio ficha={{ficha}} zonaId={{z.id}} zonaNombre={{z.zona}} />

      <BloqueZonaFicha zonaId={{z.id}} nombreZona={{z.zona}} resumen={{RESUMEN_ZONA_NUEVO2[0]}} />
      {{RESUMEN_ZONA_NUEVO2.slice(1).map((p) => (
        <p key={{p.slice(0, 64)}} className="mt-3 max-w-2xl text-[17px] leading-relaxed text-[var(--tinta)]">
          {{p}}
        </p>
      ))}}

      <MapaMunicipioFicha ficha={{ficha}} capasPortada={{Boolean(ficha.mapa)}} />

      <DesplegableNuevo2 titulo="Cómo se vive" varianteTarjetaV1>
{como_jsx}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Frente a Mallorca" varianteTarjetaV1>
        <h3 className="mt-1 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Clima
        </h3>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          <ConNegritas
            texto={{CLIMA_NUEVO2[0]}}
            fragmentos={{[{", ".join(json.dumps(x, ensure_ascii=False) for x in clima0_bold)}]}}
          />
        </p>
        {{CLIMA_NUEVO2.slice(1).map((p) => (
          <p key={{p.slice(0, 64)}} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {{p}}
          </p>
        ))}}
        <h3 className="mt-7 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Vivir
        </h3>
        {{VIVIR_NUEVO2.map((p) => (
          <p key={{p.slice(0, 64)}} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {{p}}
          </p>
        ))}}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="De dónde viene" varianteTarjetaV1>
{hist_jsx}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Mar, río y camino" varianteTarjetaV1>
{mar_jsx}
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="Casa" varianteTarjetaV1>
{casa_map}

        <EnlaceIdealista ambito="municipio" slug={{ficha.slug}} nombre={{ficha.municipio}} />

        <div className="mt-6 pt-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--tinta-suave)]">
            Precio y bandas
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-[var(--linea)] bg-white">
            <table className="min-w-[36rem] w-full text-left text-sm">
              <thead className="border-b border-[var(--linea)] bg-[var(--papel)] text-[var(--tinta-suave)]">
                <tr>
                  <th className="px-3 py-2 font-medium">Municipio</th>
                  <th className="px-3 py-2 font-medium">A · 2 hab</th>
                  <th className="px-3 py-2 font-medium">A · 3 hab</th>
                  <th className="px-3 py-2 font-medium">B · 2 hab</th>
                  <th className="px-3 py-2 font-medium">B · 3 hab</th>
                  <th className="px-3 py-2 font-medium">€/m²</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--linea)]">
                <tr>
                  <th className="px-3 py-2.5 font-medium text-[var(--acento)]">
                    {{CASA_FILA_PRECIOS.municipio}}
                  </th>
                  <td className="px-3 py-2.5 tabular-nums">{{CASA_FILA_PRECIOS.a2}}</td>
                  <td className="px-3 py-2.5 tabular-nums">{{CASA_FILA_PRECIOS.a3}}</td>
                  <td className="px-3 py-2.5 tabular-nums">{{CASA_FILA_PRECIOS.b2}}</td>
                  <td className="px-3 py-2.5 tabular-nums">{{CASA_FILA_PRECIOS.b3}}</td>
                  <td className="px-3 py-2.5 tabular-nums">{{CASA_FILA_PRECIOS.m2}}</td>
                </tr>
              </tbody>
            </table>
            <p className="px-3 py-2 text-xs leading-relaxed text-[var(--tinta-suave)]">
              {{CASA_LEYENDA_COMPACTA}}
            </p>
          </div>
        </div>
        <FilaCasaNuevo2 etiqueta="Advertencia de microzona" cuerpo={{CASA_ADVERTENCIA_MICROZONA}} />
        <FilaCasaNuevo2
          etiqueta="Qué conviene revisar en una vivienda"
          cuerpo={{CASA_QUE_CONVIENE_REVISAR}}
        />
        <FilaCasaNuevo2 etiqueta="Mercado y reventa" cuerpo={{CASA_MERCADO_REVENTA}} />
      </DesplegableNuevo2>

      <DesplegableNuevo2 titulo="¿Encaja?" varianteTarjetaV1>
        <h3 className="mt-1 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Encaja si
        </h3>
        {{ENCAJA_SI_NUEVO2.map((p) => (
          <p key={{p.slice(0, 64)}} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {{p}}
          </p>
        ))}}
        <h3 className="mt-7 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          No encaja si
        </h3>
        {{NO_ENCAJA_SI_NUEVO2.map((p) => (
          <p key={{p.slice(0, 64)}} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {{p}}
          </p>
        ))}}
        <h3 className="mt-7 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
          Qué comprobar
        </h3>
        {{QUE_COMPROBAR_NUEVO2.map((p) => (
          <p key={{p.slice(0, 64)}} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {{p}}
          </p>
        ))}}
      </DesplegableNuevo2>

      <section className="mt-12 max-w-3xl">
        <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">
          Más pueblos de{{" "}}
          <Link href={{`/zona/${{zonaId}}/`}} className="underline-offset-2 hover:underline">
            {{ficha.zona}}
          </Link>
        </h2>
        <TablaComparativaZona
          municipios={{vecinos}}
          zonaId={{zonaId}}
          slugActual={{ficha.slug}}
          escalas={{escalas}}
        />
      </section>

      <p className="mt-8 max-w-3xl text-sm text-[var(--tinta-suave)]">
        Crédito de las fotografías: {{CREDITO_FOTOS}}
      </p>
    </main>
  );
}}
'''
    # Fix component name - Moaña -> Moana, Marín -> Marin
    comp = {"cangas": "Cangas", "moana": "Moana", "bueu": "Bueu", "marin": "Marin"}[slug]
    page = page.replace(
        f"export default function Nuevo2{title.replace('ñ', 'n').replace('í', 'i')}Page()",
        f"export default function Nuevo2{comp}Page()",
    )
    # Cabecera uses ficha foto - check if CabeceraFichaMunicipio uses relato fotoIdentidad
    # Unused FOTO_IDENTIDAD is ok for parity with data; Cabecera pulls from RELATO.
    # Mark used or reference to avoid lint - Baiona doesn't define identidad const separately.
    # Remove unused FOTO_IDENTIDAD if eslint complains - keep for documentation? Better omit unused.
    # Actually remove FOTO_IDENTIDAD const to avoid unused var warning
    page = re.sub(
        r"const FOTO_IDENTIDAD = \{.*?\n\} as const;\n\n",
        "",
        page,
        count=1,
        flags=re.S,
    )
    return page


def update_slugs() -> None:
    text = SLUGS_PATH.read_text(encoding="utf-8")
    for slug in ("cangas", "moana", "bueu", "marin"):
        if f'"{slug}"' not in text:
            text = text.replace(
                '  "gondomar",\n]);',
                f'  "gondomar",\n  "{slug}",\n]);',
            )
    # If all four missing, do sequential - fix properly
    text = SLUGS_PATH.read_text(encoding="utf-8")
    if "cangas" not in text:
        text = text.replace(
            '  "gondomar",\n]);',
            '  "gondomar",\n  "cangas",\n  "moana",\n  "bueu",\n  "marin",\n]);',
        )
        SLUGS_PATH.write_text(text, encoding="utf-8")
        print("updated slugs")
    else:
        print("slugs already present or partial", text)


def update_para(parsed: dict) -> None:
    text = PARA_PATH.read_text(encoding="utf-8")
    if "cangas:" in text and "  cangas:" in text:
        # may already exist - check
        pass

    def block(slug: str, d: dict) -> str:
        def arr(key: str, items: list[str]) -> str:
            lines = [f"    {key}: ["]
            for p in items:
                lines.append(f'      "{esc(p)}",')
            lines.append("    ],")
            return "\n".join(lines)

        return (
            f"  {slug}: {{\n"
            + arr("encajaSi", d["encaja"])
            + "\n"
            + arr("encajaNo", d["no"])
            + "\n"
            + arr("queComprobar", d["qc"])
            + "\n"
            + "  },"
        )

    blocks = "\n".join(block(s, parsed[s]) for s in ("cangas", "moana", "bueu", "marin"))
    # Insert before closing of NUEVO2_PARA_DECIDIRTE
    if "\n  cangas:" in text:
        # replace existing o-morrazo entries if any - remove from cangas to marin if present
        text2 = re.sub(
            r"\n  cangas: \{.*?\n  \},\n(?=  [a-z]|\};)",
            "\n",
            text,
            count=1,
            flags=re.S,
        )
        # Also remove moana bueu marin if left
        for s in ("moana", "bueu", "marin"):
            pat = r"\n  " + s + r": \{.*?\n  \},\n"
            text2 = re.sub(pat, "\n", text2, count=1, flags=re.S)
        text = text2

    if not text.rstrip().endswith("};") and "NUEVO2_PARA_DECIDIRTE" in text:
        pass
    # Insert before the closing `};` of the const object — find gondomar block end
    needle = "  gondomar:"
    if needle not in text:
        raise SystemExit("gondomar block not found")
    # find end of gondomar entry
    idx = text.find(needle)
    # find matching closing of gondomar — next "  },\n};" or "  },\n\nexport"
    m = re.search(r"  gondomar: \{.*?\n  \},", text[idx:], re.S)
    if not m:
        raise SystemExit("cannot find gondomar end")
    end = idx + m.end()
    text = text[:end] + "\n" + blocks + text[end:]
    PARA_PATH.write_text(text, encoding="utf-8")
    print("updated para-decidirte")


def verify_hist_inserts(parsed: dict) -> None:
    for slug, d in parsed.items():
        hi = HIST_INSERT[slug][: len(d["fotos_hist"])]
        mi = MAR_INSERT[slug][: len(d["fotos_mar"])]
        assert hi[-1] < len(d["hist"]), (slug, hi, len(d["hist"]))
        assert mi[-1] < len(d["mar"]), (slug, mi, len(d["mar"]))
        print(slug, "hist paras", len(d["hist"]), "insert", hi, "mar", len(d["mar"]), mi)


def main() -> None:
    parsed = parse_all()
    PARSED_OUT.parent.mkdir(parents=True, exist_ok=True)
    # JSON-serialize fotos as lists
    dump = {}
    for k, v in parsed.items():
        dump[k] = {
            **v,
            "fotos_como": [list(x) for x in v["fotos_como"]],
            "fotos_hist": [list(x) for x in v["fotos_hist"]],
            "fotos_mar": [list(x) for x in v["fotos_mar"]],
        }
    PARSED_OUT.write_text(json.dumps(dump, ensure_ascii=False, indent=2), encoding="utf-8")
    verify_hist_inserts(parsed)

    for slug in ("cangas", "moana", "bueu", "marin"):
        page = generate_page(slug, parsed[slug])
        dest = OUT / slug / "page.tsx"
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_text(page, encoding="utf-8")
        print("wrote", dest, "chars", len(page))

    update_slugs()
    update_para(parsed)

    # Preflight banned phrases
    banned = [
        "utm_",
        "chatgpt.com",
        "capa estructurada",
        "capa climática",
        "Nuevo2 sitúa",
        "la documentación",
        "la fuente",
        "conviene mirar",
        "mejor elegir",
        "buscaría en",
    ]
    for slug in ("cangas", "moana", "bueu", "marin"):
        t = (OUT / slug / "page.tsx").read_text(encoding="utf-8")
        for b in banned:
            if b in t:
                print("PREFLIGHT HIT", slug, b)


if __name__ == "__main__":
    main()
