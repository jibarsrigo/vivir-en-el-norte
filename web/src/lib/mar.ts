import datos from "@/data/mar-municipios.json";
import { zonas } from "@/lib/zonas";

/** Tramo visual de distancia a la costa (coche). */
export type TramoCosta = "cerca" | "media" | "lejos";

export type MarMunicipio = {
  zonaId: string;
  nombre: string;
  minCosta: number;
  minBano: number;
  playaBano: string;
  /** Primera playa del texto, para mapa/tabla. */
  playaCorta: string;
  tramo: TramoCosta;
  franja: "A" | "B";
};

type MarFilaJson = {
  zonaId: string;
  nombre: string;
  minCosta: number;
  minBano: number;
  playaBano: string;
  franja: "A" | "B";
};

export function tramoCosta(minCosta: number): TramoCosta {
  if (minCosta <= 5) return "cerca";
  if (minCosta <= 30) return "media";
  return "lejos";
}

export function playaCortaDe(playaBano: string): string {
  const primero = playaBano.split("/")[0]?.trim() ?? playaBano;
  const sinParen = primero.replace(/\s*\([^)]*\)\s*/g, " ").trim();
  return sinParen.length > 28 ? `${sinParen.slice(0, 26)}…` : sinParen;
}

function deFila(f: MarFilaJson): MarMunicipio {
  return {
    zonaId: f.zonaId,
    nombre: f.nombre,
    minCosta: f.minCosta,
    minBano: f.minBano,
    playaBano: f.playaBano,
    playaCorta: playaCortaDe(f.playaBano),
    tramo: tramoCosta(f.minCosta),
    franja: f.franja,
  };
}

export const marMunicipios: MarMunicipio[] = (datos as MarFilaJson[]).map(deFila);

export function marDeMunicipio(zonaId: string, nombre: string): MarMunicipio | undefined {
  return marMunicipios.find((m) => m.zonaId === zonaId && m.nombre === nombre);
}

export const LEYENDA_COSTA: { id: TramoCosta; etiqueta: string; detalle: string }[] = [
  { id: "cerca", etiqueta: "≤ 5 min", detalle: "Costa a cinco minutos o menos" },
  { id: "media", etiqueta: "≤ 30 min", detalle: "Costa a media hora o menos" },
  { id: "lejos", etiqueta: "> 30 min", detalle: "Más de media hora a la costa" },
];

function svgCostaCerca(): string {
  return `<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="#3d8ec9" d="M2 22c3.5-3 7-4.5 11-4.5S20.5 19 24 22c2.2 1.9 4.2 2.8 6 2.8V28H2v-6z"/><path fill="none" stroke="#1a5f8a" stroke-width="1.6" stroke-linecap="round" d="M3 18.5c2.8-2.2 5.8-3.3 9-3.3s6.2 1.1 9 3.3"/><circle cx="22" cy="10" r="3.2" fill="#f0c419"/></svg>`;
}

function svgCostaMedia(): string {
  return `<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="#7eb6d9" d="M2 24c3.5-2.4 7-3.6 11-3.6s7.5 1.2 11 3.6c2 1.4 4 2.1 6 2.1V28H2v-4z"/><path fill="none" stroke="#4a7f9e" stroke-width="1.5" stroke-linecap="round" d="M4 20c2.5-1.6 5.2-2.4 8-2.4s5.5.8 8 2.4"/><path fill="#c5d4a8" d="M2 22h28v6H2z" opacity=".35"/><circle cx="10" cy="11" r="2.6" fill="#e8c84a"/></svg>`;
}

function svgCostaLejos(): string {
  return `<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="#b8c4cc" d="M2 25c4-1.8 8-2.6 12-2.6s8 .8 12 2.6c1.5.7 3 1.1 4 1.1V28H2v-3z"/><path fill="#d5ddd4" d="M4 14l6 8H4V14zm12 2l8 10h-8V16z"/><circle cx="24" cy="9" r="2.2" fill="#d4c56a" opacity=".85"/></svg>`;
}

function svgPlaya(): string {
  return `<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="#e8a54b" d="M16 6v14"/><path fill="none" stroke="#e8a54b" stroke-width="2" stroke-linecap="round" d="M16 8c4 2 6 5 6 8"/><path fill="#3d8ec9" d="M2 24c4-2 8-3 14-3s10 1 14 3v4H2v-4z"/><circle cx="16" cy="5" r="2" fill="#c45c2a"/></svg>`;
}

const SVG_COSTA: Record<TramoCosta, string> = {
  cerca: svgCostaCerca(),
  media: svgCostaMedia(),
  lejos: svgCostaLejos(),
};

export function htmlIconoCosta(tramo: TramoCosta, tamano: "zona" | "pueblo"): string {
  const clase = tamano === "zona" ? "atlas-mar-ico atlas-mar-zona" : "atlas-mar-ico atlas-mar-pueblo";
  return `<div class="${clase}">${SVG_COSTA[tramo]}</div>`;
}

export function htmlIconoPlaya(tamano: "zona" | "pueblo" = "pueblo"): string {
  const clase = tamano === "zona" ? "atlas-mar-ico atlas-mar-zona" : "atlas-mar-ico atlas-mar-pueblo";
  return `<div class="${clase}">${svgPlaya()}</div>`;
}

export function textoMar(m: MarMunicipio): string {
  return `${m.nombre}: costa ${m.minCosta} min · playa ${m.minBano} min · ${m.playaBano}`;
}

export type MarZonaMapa = {
  zonaId: string;
  nombre: string;
  lat: number;
  lon: number;
  tramo: TramoCosta;
  minCostaMed: number;
  tooltip: string;
};

/** Un icono por zona (zoom bajo), sobre el centroide de la zona. */
export const MAR_ZONAS_MAPA: MarZonaMapa[] = zonas
  .map((z) => {
    const filas = marMunicipios.filter((m) => m.zonaId === z.id);
    if (!filas.length) return null;
    const n = filas.length;
    const minCostaMed = Math.round(filas.reduce((s, m) => s + m.minCosta, 0) / n);
    const minBanoMed = Math.round(filas.reduce((s, m) => s + m.minBano, 0) / n);
    const costaMin = Math.min(...filas.map((m) => m.minCosta));
    const costaMax = Math.max(...filas.map((m) => m.minCosta));
    const nombre = z.zona.replace(" (PT)", "");
    return {
      zonaId: z.id,
      nombre,
      lat: z.lat,
      lon: z.lon,
      tramo: tramoCosta(minCostaMed),
      minCostaMed,
      tooltip: `${nombre}: costa ${costaMin}–${costaMax} min (media ${minCostaMed}) · playa ~${minBanoMed} min · ${n} municipios`,
    };
  })
  .filter((x): x is MarZonaMapa => Boolean(x));
