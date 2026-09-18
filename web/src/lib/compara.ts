/**
 * Datos y helpers de Busca y compara (bandeja + mesa).
 */
import { municipioPorSlug, zonaIdDeFicha } from "@/lib/municipios";
import { RELATO_MUNICIPIOS } from "@/components/RelatoMunicipio";
import { zonas, mallorca } from "@/lib/zonas";
import { climaDeMunicipio } from "@/lib/clima";
import { marDeMunicipio } from "@/lib/mar";
import { avionDeMunicipio, etiquetaPalmaCorta } from "@/lib/avion";
import { hospitalCortoDe } from "@/lib/hospital";

export const TOPE_BANDEJA = 5;
export const LS_BANDEJA = "vivir-norte-compara-vs";

export type FilaCompara = {
  slug: string;
  nombre: string;
  zonaId: string;
  zonaNombre: string;
  escala: string;
  href: string;
  solHoras: number | null;
  despejados: number | null;
  lluviaDias: number | null;
  minCosta: number | null;
  minBano: number | null;
  playaCorta: string | null;
  franja: "A" | "B" | null;
  precioM2: number;
  A_3hab: number | null;
  servicios: number;
  hospitalMin: number;
  hospitalCorto: string;
  aeropuertoMin: number | null;
  aeroCercano: string | null;
  palma: string | null;
  /** Resumen del «encaja si» del relato. */
  encajaSiCorto: string;
  /** Resumen del «no encaja» del relato. */
  encajaNoCorto: string;
};

export const MALLORCA_REF = {
  solHoras: mallorca.solHoras,
  despejados: mallorca.despejados,
  lluviaDias: mallorca.lluviaDias,
};

function zonaNombreDe(zonaId: string, fichaZona: string): string {
  const z = zonas.find((x) => x.id === zonaId);
  return (z?.zona ?? fichaZona).replace(" (PT)", "");
}

function fraseEncajaCorta(
  textos: string[],
  prefijos: RegExp[],
  maxLen = 220,
): string {
  const t = (textos[0] ?? "").trim();
  if (!t) return "";
  let body = t;
  for (const re of prefijos) {
    const next = body.replace(re, "");
    if (next !== body) {
      body = next;
      break;
    }
  }
  if (body !== t && body.length > 0) {
    body = body.charAt(0).toUpperCase() + body.slice(1);
  }
  const frase = body.split(/(?<=[.!?])\s+/)[0] ?? body;
  return frase.length > maxLen ? `${frase.slice(0, maxLen - 1).trim()}…` : frase;
}

function encajaSiCortoDe(si: string[]): string {
  return fraseEncajaCorta(si, [
    /^También encaja\s+(si\s+|para\s+)/i,
    /^Encaja si\s+/i,
  ]);
}

function encajaNoCortoDe(no: string[]): string {
  return fraseEncajaCorta(no, [
    /^Tampoco (si\s+|encaja si\s+)/i,
    /^No encaja si\s+/i,
  ]);
}

export function filaCompara(slug: string): FilaCompara | undefined {
  const f = municipioPorSlug(slug);
  if (!f) return undefined;
  const zonaId = zonaIdDeFicha(f);
  const relato = RELATO_MUNICIPIOS[f.slug];
  const clima = climaDeMunicipio(zonaId, f.municipio);
  const mar = marDeMunicipio(zonaId, f.municipio);
  const avion = avionDeMunicipio(zonaId, f.municipio);

  return {
    slug: f.slug,
    nombre: f.municipio,
    zonaId,
    zonaNombre: zonaNombreDe(zonaId, f.zona),
    escala: relato?.escala ?? "",
    href: `/zona/${zonaId}/${f.slug}/`,
    solHoras: clima?.solHoras ?? f.solHoras ?? null,
    despejados: clima?.despejados ?? f.despejados ?? null,
    lluviaDias: clima?.lluviaDias ?? f.lluviaDias ?? null,
    minCosta: mar?.minCosta ?? f.minCosta ?? null,
    minBano: mar?.minBano ?? f.minBano ?? null,
    playaCorta: mar?.playaCorta ?? null,
    franja: mar?.franja ?? f.franja ?? null,
    precioM2: f.precioM2,
    A_3hab: f.A_3hab,
    servicios: f.servicios,
    hospitalMin: f.hospitalMin,
    hospitalCorto: hospitalCortoDe(f.hospitalPub),
    aeropuertoMin: avion?.aeropuertoMin ?? f.aeropuertoMin ?? null,
    aeroCercano: avion?.aeroCercano ?? null,
    palma: avion ? etiquetaPalmaCorta(avion.palmaMasCercano) : null,
    encajaSiCorto: relato ? encajaSiCortoDe(relato.encaja.si) : "",
    encajaNoCorto: relato ? encajaNoCortoDe(relato.encaja.no) : "",
  };
}

export function parseVs(raw: string | null | undefined): string[] {
  if (!raw?.trim()) return [];
  const seen = new Set<string>();
  const out: string[] = [];
  for (const p of raw.split(",")) {
    const s = p.trim();
    if (!s || seen.has(s)) continue;
    if (!municipioPorSlug(s)) continue;
    seen.add(s);
    out.push(s);
    if (out.length >= TOPE_BANDEJA) break;
  }
  return out;
}

export function serializeVs(slugs: string[]): string {
  return slugs.slice(0, TOPE_BANDEJA).join(",");
}

/** Añade slug al inicio; sin duplicados; tope 5. */
export function anadirABandeja(slugs: string[], slug: string): string[] {
  if (!municipioPorSlug(slug)) return slugs;
  const rest = slugs.filter((s) => s !== slug);
  return [slug, ...rest].slice(0, TOPE_BANDEJA);
}

export function quitarDeBandeja(slugs: string[], slug: string): string[] {
  return slugs.filter((s) => s !== slug);
}

export type SentidoFila = "mayor" | "menor" | "neutro";

export type FilaMesaDef = {
  id: string;
  etiqueta: string;
  sentido: SentidoFila;
  valor: (f: FilaCompara) => number | string | null;
  formato: (f: FilaCompara) => string;
};

export const FILAS_MESA: FilaMesaDef[] = [
  {
    id: "sol",
    etiqueta: "Sol",
    sentido: "mayor",
    valor: (f) => f.solHoras,
    formato: (f) =>
      f.solHoras != null ? `${f.solHoras.toLocaleString("es-ES")} h` : "—",
  },
  {
    id: "despejados",
    etiqueta: "Despejados",
    sentido: "mayor",
    valor: (f) => f.despejados,
    formato: (f) => (f.despejados != null ? `${f.despejados} días` : "—"),
  },
  {
    id: "lluvia",
    etiqueta: "Lluvia",
    sentido: "menor",
    valor: (f) => f.lluviaDias,
    formato: (f) => (f.lluviaDias != null ? `${f.lluviaDias} días` : "—"),
  },
  {
    id: "vs-mallorca",
    etiqueta: "vs Mallorca",
    sentido: "neutro",
    valor: () => null,
    formato: (f) => {
      if (f.solHoras == null || f.despejados == null) return "—";
      const sol = Math.round((f.solHoras / MALLORCA_REF.solHoras) * 100);
      const desp = Math.round((f.despejados / MALLORCA_REF.despejados) * 100);
      return `${sol}% sol · ${desp}% despejados`;
    },
  },
  {
    id: "mar",
    etiqueta: "Baño",
    sentido: "menor",
    valor: (f) => f.minBano ?? f.minCosta,
    formato: (f) => {
      if (f.minBano == null && f.minCosta == null) return "—";
      const min = f.minBano ?? f.minCosta!;
      const playa = f.playaCorta ? ` · playa ${f.playaCorta}` : "";
      const donde =
        f.franja === "A"
          ? " · en el municipio"
          : f.franja === "B"
            ? " · fuera del municipio"
            : "";
      return `Baño a ${min} min${playa}${donde}`;
    },
  },
  {
    id: "precio",
    etiqueta: "Precio",
    sentido: "menor",
    valor: (f) => f.precioM2,
    formato: (f) => {
      const m2 = `${f.precioM2.toLocaleString("es-ES")} €/m²`;
      if (f.A_3hab != null) {
        return `${m2} · 3 hab ~${Math.round(f.A_3hab).toLocaleString("es-ES")} €`;
      }
      return m2;
    },
  },
  {
    id: "servicios",
    etiqueta: "Servicios",
    sentido: "mayor",
    valor: (f) => f.servicios,
    formato: (f) => `${f.servicios}/10`,
  },
  {
    id: "hospital",
    etiqueta: "Hospital",
    sentido: "menor",
    valor: (f) => f.hospitalMin,
    formato: (f) => `${f.hospitalMin} min · ${f.hospitalCorto}`,
  },
  {
    id: "avion",
    etiqueta: "Aeropuerto",
    sentido: "menor",
    valor: (f) => f.aeropuertoMin,
    formato: (f) => {
      if (f.aeropuertoMin == null) return "—";
      const aero = f.aeroCercano ? ` · ${f.aeroCercano}` : "";
      const palma = f.palma ? ` · Palma ${f.palma}` : "";
      return `${f.aeropuertoMin} min${aero}${palma}`;
    },
  },
];

/** Índice del mejor valor numérico de la fila (o -1 si no aplica). */
export function indiceMejor(
  filas: FilaCompara[],
  def: FilaMesaDef,
): number {
  if (def.sentido === "neutro" || filas.length < 2) return -1;
  let best = -1;
  let bestVal: number | null = null;
  filas.forEach((f, i) => {
    const v = def.valor(f);
    if (typeof v !== "number" || Number.isNaN(v)) return;
    if (
      bestVal == null ||
      (def.sentido === "mayor" ? v > bestVal : v < bestVal)
    ) {
      bestVal = v;
      best = i;
    }
  });
  // Si todos iguales, no marcar
  if (best < 0) return -1;
  const vals = filas
    .map((f) => def.valor(f))
    .filter((v): v is number => typeof v === "number");
  if (vals.length >= 2 && vals.every((v) => v === vals[0])) return -1;
  return best;
}

/** Índice del peor valor numérico (simétrico a indiceMejor). */
export function indicePeor(
  filas: FilaCompara[],
  def: FilaMesaDef,
): number {
  if (def.sentido === "neutro" || filas.length < 2) return -1;
  let worst = -1;
  let worstVal: number | null = null;
  filas.forEach((f, i) => {
    const v = def.valor(f);
    if (typeof v !== "number" || Number.isNaN(v)) return;
    if (
      worstVal == null ||
      (def.sentido === "mayor" ? v < worstVal : v > worstVal)
    ) {
      worstVal = v;
      worst = i;
    }
  });
  if (worst < 0) return -1;
  const vals = filas
    .map((f) => def.valor(f))
    .filter((v): v is number => typeof v === "number");
  if (vals.length >= 2 && vals.every((v) => v === vals[0])) return -1;
  const mejor = indiceMejor(filas, def);
  if (mejor === worst) return -1;
  return worst;
}

type DiffContraste = {
  id: string;
  /** Texto corto para la frase: «hospital», «sol»… */
  etiqueta: string;
  winner: number;
  loser: number;
  detalle: string;
  peso: number;
};

const CRITERIOS_FRASE: {
  id: string;
  etiqueta: string;
  sentido: SentidoFila;
  valor: (f: FilaCompara) => number | null;
  umbral: number;
  detalle: (mejor: number, peor: number, fMejor: FilaCompara, fPeor: FilaCompara) => string;
}[] = [
  {
    id: "hospital",
    etiqueta: "hospital",
    sentido: "menor",
    valor: (f) => f.hospitalMin,
    umbral: 10,
    detalle: (a, b) => `${a} vs ${b} min`,
  },
  {
    id: "avion",
    etiqueta: "vuelo",
    sentido: "menor",
    valor: (f) => f.aeropuertoMin,
    umbral: 15,
    detalle: (a, b) => `${a} vs ${b} min`,
  },
  {
    id: "sol",
    etiqueta: "sol",
    sentido: "mayor",
    valor: (f) => f.solHoras,
    umbral: 150,
    detalle: (a, b) => `${a.toLocaleString("es-ES")} vs ${b.toLocaleString("es-ES")} h`,
  },
  {
    id: "precio",
    etiqueta: "precio",
    sentido: "menor",
    valor: (f) => f.precioM2,
    umbral: 200,
    detalle: (a, b) =>
      `${a.toLocaleString("es-ES")} vs ${b.toLocaleString("es-ES")} €/m²`,
  },
  {
    id: "mar",
    etiqueta: "baño cerca",
    sentido: "menor",
    valor: (f) => f.minBano ?? f.minCosta,
    umbral: 10,
    detalle: (a, b) => `${a} vs ${b} min`,
  },
  {
    id: "servicios",
    etiqueta: "servicios",
    sentido: "mayor",
    valor: (f) => f.servicios,
    umbral: 2,
    detalle: (a, b) => `${a}/10 vs ${b}/10`,
  },
];

function nombreCorto(f: FilaCompara): string {
  // Quitar paréntesis largos: «Liencres (Piélagos)» → «Liencres»
  return f.nombre.replace(/\s*\([^)]*\)\s*/g, "").trim() || f.nombre;
}

/**
 * Frase de contraste (ganadores + tipologías).
 * Ya no se muestra en la mesa: duplicaba el resaltado de filas, la escala bajo
 * cada nombre y la fila Encaja. Se conserva por si se retoma un resumen distinto.
 */
export function fraseContraste(filas: FilaCompara[]): string | null {
  if (filas.length < 2) return null;

  const diffs: DiffContraste[] = [];

  for (const c of CRITERIOS_FRASE) {
    let best = -1;
    let worst = -1;
    let bestVal: number | null = null;
    let worstVal: number | null = null;
    filas.forEach((f, i) => {
      const v = c.valor(f);
      if (v == null || Number.isNaN(v)) return;
      if (
        bestVal == null ||
        (c.sentido === "mayor" ? v > bestVal : v < bestVal)
      ) {
        bestVal = v;
        best = i;
      }
      if (
        worstVal == null ||
        (c.sentido === "mayor" ? v < worstVal : v > worstVal)
      ) {
        worstVal = v;
        worst = i;
      }
    });
    if (best < 0 || worst < 0 || best === worst || bestVal == null || worstVal == null) {
      continue;
    }
    const delta = Math.abs(bestVal - worstVal);
    if (delta < c.umbral) continue;
    diffs.push({
      id: c.id,
      etiqueta: c.etiqueta,
      winner: best,
      loser: worst,
      detalle: c.detalle(bestVal, worstVal, filas[best], filas[worst]),
      peso: delta / c.umbral,
    });
  }

  diffs.sort((x, y) => y.peso - x.peso);
  const top = diffs.slice(0, 4);

  // Escala = tipología de vivir (villa, ciudad, pueblo…). Si difieren, se nombra pueblo a pueblo.
  const conEscala = filas.filter((f) => f.escala);
  const escalasUnicas = new Set(conEscala.map((f) => f.escala));
  const notaEscala =
    escalasUnicas.size >= 2
      ? `no son el mismo tipo de sitio: ${conEscala
          .map((f) => `${nombreCorto(f)} (${f.escala.toLowerCase()})`)
          .join("; ")}`
      : null;

  if (!top.length && !notaEscala) return null;

  // Agrupar por ganador: «X gana hospital y sol; Y gana precio.»
  const porGanador = new Map<number, DiffContraste[]>();
  for (const d of top) {
    const list = porGanador.get(d.winner) ?? [];
    list.push(d);
    porGanador.set(d.winner, list);
  }

  const partes: string[] = [];
  for (const [idx, list] of [...porGanador.entries()].sort(
    (a, b) => b[1].length - a[1].length || a[0] - b[0],
  )) {
    const nom = nombreCorto(filas[idx]);
    const criterios = list.map((d) => d.etiqueta);
    if (criterios.length === 1) {
      const d = list[0];
      partes.push(`${nom} gana ${criterios[0]} (${d.detalle})`);
    } else if (criterios.length > 1) {
      const ultimo = criterios[criterios.length - 1];
      const resto = criterios.slice(0, -1).join(", ");
      partes.push(`${nom} gana ${resto} y ${ultimo}`);
    }
  }

  if (notaEscala) partes.push(notaEscala);

  if (!partes.length) return null;
  if (partes.length === 1) {
    const p = partes[0];
    return p.endsWith(".") ? p : `${p.charAt(0).toUpperCase()}${p.slice(1)}.`;
  }
  const cuerpo = partes.join("; ");
  return `${cuerpo.charAt(0).toUpperCase()}${cuerpo.slice(1)}.`;
}
