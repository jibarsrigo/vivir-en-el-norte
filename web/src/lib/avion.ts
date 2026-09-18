import datos from "@/data/avion-municipios.json";
import { zonas } from "@/lib/zonas";

/** Minutos al aeropuerto más cercano (deseable ≤ 60). */
export type TramoAvion = "cerca" | "media" | "lejos";

/** Vuelo directo a Palma desde el aeropuerto más cercano. */
export type PalmaCategoria = "Todo el año" | "Casi todo el año" | "Verano" | "No";

export type AvionMunicipio = {
  zonaId: string;
  nombre: string;
  aeropuertoMin: number;
  /** Nombre corto del aeropuerto más cercano (p. ej. Vigo). */
  aeroCercano: string | null;
  palmaMasCercano: PalmaCategoria;
  palmaMejor: string;
  aeropuertos: string;
  tramo: TramoAvion;
};

type AvionFilaJson = {
  zonaId: string;
  nombre: string;
  aeropuertoMin: number;
  aeroCercano: string | null;
  palmaMasCercano: string;
  palmaMejor: string;
  aeropuertos: string;
};

export function tramoAvion(min: number): TramoAvion {
  if (min <= 30) return "cerca";
  if (min <= 60) return "media";
  return "lejos";
}

export function etiquetaPalmaCorta(p: PalmaCategoria): string {
  if (p === "Todo el año") return "Año";
  if (p === "Casi todo el año") return "Casi";
  if (p === "Verano") return "Verano";
  return "No";
}

function deFila(f: AvionFilaJson): AvionMunicipio {
  const palma = f.palmaMasCercano as PalmaCategoria;
  return {
    zonaId: f.zonaId,
    nombre: f.nombre,
    aeropuertoMin: f.aeropuertoMin,
    aeroCercano: f.aeroCercano,
    palmaMasCercano: palma,
    palmaMejor: f.palmaMejor,
    aeropuertos: f.aeropuertos,
    tramo: tramoAvion(f.aeropuertoMin),
  };
}

export const avionMunicipios: AvionMunicipio[] = (datos as AvionFilaJson[]).map(deFila);

export function avionDeMunicipio(zonaId: string, nombre: string): AvionMunicipio | undefined {
  return avionMunicipios.find((m) => m.zonaId === zonaId && m.nombre === nombre);
}

export const LEYENDA_AVION: { id: TramoAvion; etiqueta: string; detalle: string }[] = [
  { id: "cerca", etiqueta: "≤ 30 min", detalle: "Aeropuerto a media hora o menos" },
  { id: "media", etiqueta: "≤ 60 min", detalle: "Aeropuerto a una hora o menos" },
  { id: "lejos", etiqueta: "> 60 min", detalle: "Más de una hora al aeropuerto" },
];

const COLOR_TRAMO: Record<TramoAvion, string> = {
  cerca: "#2a4a7a",
  media: "#5a7a9e",
  lejos: "#9aa3ad",
};

/** Aeropuertos del estudio (coordenadas y Palma 2026). */
export type AeropuertoMapa = {
  codigo: string;
  nombre: string;
  lat: number;
  lon: number;
  palma: PalmaCategoria;
  palmaDetalle: string;
};

export const AEROPUERTOS_MAPA: AeropuertoMapa[] = [
  {
    codigo: "VGO",
    nombre: "Vigo",
    lat: 42.231,
    lon: -8.627,
    palma: "Verano",
    palmaDetalle: "Vueling ~4/sem jun-sep; Air Nostrum jul-ago",
  },
  {
    codigo: "SCQ",
    nombre: "Santiago",
    lat: 42.896,
    lon: -8.415,
    palma: "Casi todo el año",
    palmaDetalle: "Vueling todo el año salvo semanas de invierno; Ryanair estacional",
  },
  {
    codigo: "LCG",
    nombre: "A Coruña",
    lat: 43.302,
    lon: -8.377,
    palma: "Verano",
    palmaDetalle: "Vueling verano",
  },
  {
    codigo: "OVD",
    nombre: "Asturias",
    lat: 43.563,
    lon: -6.034,
    palma: "Verano",
    palmaDetalle: "Volotea mar-oct; Vueling jun-sep",
  },
  {
    codigo: "SDR",
    nombre: "Santander",
    lat: 43.427,
    lon: -3.82,
    palma: "Casi todo el año",
    palmaDetalle: "Vueling mar-nov, 2-4/sem",
  },
  {
    codigo: "BIO",
    nombre: "Bilbao",
    lat: 43.301,
    lon: -2.911,
    palma: "Todo el año",
    palmaDetalle: "Vueling y Air Europa, diario",
  },
  {
    codigo: "OPO",
    nombre: "Porto",
    lat: 41.248,
    lon: -8.681,
    palma: "Verano",
    palmaDetalle: "Ryanair mar-oct; easyJet verano",
  },
];

function svgAvion(tramo: TramoAvion): string {
  const c = COLOR_TRAMO[tramo];
  return `<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="${c}" d="M2.5 16.2c0-.6.4-1 1-1h7.2l2.2-5.4c.2-.5.8-.7 1.2-.4l1.1.7c.3.2.4.6.3 1L14.2 15h6.8l5.2-2.2c.4-.2.9 0 1.1.3l.6.9c.2.4 0 .9-.4 1.1L22.2 16.5l4.9 1.8c.4.1.6.6.4 1l-.5.9c-.2.4-.7.5-1.1.3l-5.4-2.1h-6.3l-1.4 4.8c-.1.4-.5.6-.9.5l-1.2-.3c-.4-.1-.6-.5-.5-.9l1.3-4.1H3.5c-.6 0-1-.4-1-1v-.2z"/></svg>`;
}

/** Icono de terminal: avión oscuro fijo (ubicación del aeropuerto). */
function svgAeropuerto(): string {
  return `<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="#1c2a32" d="M2.5 16.2c0-.6.4-1 1-1h7.2l2.2-5.4c.2-.5.8-.7 1.2-.4l1.1.7c.3.2.4.6.3 1L14.2 15h6.8l5.2-2.2c.4-.2.9 0 1.1.3l.6.9c.2.4 0 .9-.4 1.1L22.2 16.5l4.9 1.8c.4.1.6.6.4 1l-.5.9c-.2.4-.7.5-1.1.3l-5.4-2.1h-6.3l-1.4 4.8c-.1.4-.5.6-.9.5l-1.2-.3c-.4-.1-.6-.5-.5-.9l1.3-4.1H3.5c-.6 0-1-.4-1-1v-.2z"/></svg>`;
}

export function htmlIconoAvion(tramo: TramoAvion, tamano: "zona" | "pueblo"): string {
  const clase = tamano === "zona" ? "atlas-avion-ico atlas-avion-zona" : "atlas-avion-ico atlas-avion-pueblo";
  return `<div class="${clase}">${svgAvion(tramo)}</div>`;
}

export function htmlIconoAeropuerto(tamano: "zona" | "pueblo" = "zona"): string {
  const clase = tamano === "zona" ? "atlas-avion-ico atlas-avion-zona" : "atlas-avion-ico atlas-avion-pueblo";
  return `<div class="${clase}">${svgAeropuerto()}</div>`;
}

/** Marca fija en el mapa: icono + nombre del aeropuerto. */
export function htmlMarcaAeropuerto(nombre: string): string {
  return `<div class="atlas-aeropuerto-caja">${svgAeropuerto()}<span>${nombre}</span></div>`;
}

export function cuerpoAvion(m: AvionMunicipio): string {
  const aero = m.aeroCercano ? `${m.aeroCercano} ${m.aeropuertoMin} min` : `${m.aeropuertoMin} min`;
  return `${aero} · Palma ${m.palmaMasCercano.toLowerCase()} · mejor ${m.palmaMejor}`;
}

export function textoAvion(m: AvionMunicipio): string {
  return `<span class="globo-nom">${m.nombre}</span>: ${cuerpoAvion(m)}`;
}

export function textoAeropuerto(a: AeropuertoMapa): string {
  return `${a.nombre} (${a.codigo}): Palma ${a.palma.toLowerCase()} · ${a.palmaDetalle}`;
}

export type AvionZonaMapa = {
  zonaId: string;
  nombre: string;
  lat: number;
  lon: number;
  tramo: TramoAvion;
  aeropuertoMinMed: number;
  cuerpo: string;
  tooltip: string;
};

/** Un icono por zona (zoom bajo), sobre el centroide de la zona. */
export const AVION_ZONAS_MAPA: AvionZonaMapa[] = zonas
  .map((z) => {
    const filas = avionMunicipios.filter((m) => m.zonaId === z.id);
    if (!filas.length) return null;
    const n = filas.length;
    const aeropuertoMinMed = Math.round(filas.reduce((s, m) => s + m.aeropuertoMin, 0) / n);
    const min = Math.min(...filas.map((m) => m.aeropuertoMin));
    const max = Math.max(...filas.map((m) => m.aeropuertoMin));
    const nombre = z.zona.replace(" (PT)", "");
    const cuerpo = `aeropuerto ~${aeropuertoMinMed} min (${min}–${max}) · ${n} municipios`;
    return {
      zonaId: z.id,
      nombre,
      lat: z.lat,
      lon: z.lon,
      tramo: tramoAvion(aeropuertoMinMed),
      aeropuertoMinMed,
      cuerpo,
      tooltip: `<span class="globo-nom">${nombre}</span>: ${cuerpo}`,
    };
  })
  .filter((x): x is AvionZonaMapa => Boolean(x));
