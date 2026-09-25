import type { RelatoMun } from "@/components/RelatoMunicipio";

/** Plantilla Nuevo2 Cudillero: 13 fotos por municipio. */
export const PLANTILLA_FOTOS = {
  cabecera: 1,
  como: 2,
  clima: 1,
  vivir: 1,
  historia: 2,
  mar: 4,
  casa: 2,
} as const;

export type SlotFoto = keyof typeof PLANTILLA_FOTOS;

export type ConteoFotos = Record<SlotFoto, number> & { total: number; faltan: number };

export type HuecoFoto = {
  slug: string;
  municipio: string;
  zonaId: string;
  zonaNombre: string;
  conteo: ConteoFotos;
  huecos: Partial<Record<SlotFoto, number>>;
  actuales: Partial<Record<SlotFoto, { src: string; pie: string }[]>>;
};

function countDisplayedComo(r: RelatoMun): number {
  const identidadSrc = (r.fotoIdentidad ?? r.fotosAbrir[0])?.src;
  return r.fotosAbrir.filter((f) => f.src !== identidadSrc).length;
}

export function conteoFotosRelato(r: RelatoMun | undefined): ConteoFotos {
  if (!r) {
    return {
      cabecera: 0,
      como: 0,
      clima: 0,
      vivir: 0,
      historia: 0,
      mar: 0,
      casa: 0,
      total: 0,
      faltan: Object.values(PLANTILLA_FOTOS).reduce((a, b) => a + b, 0),
    };
  }
  const cabecera = r.fotoIdentidad || r.fotosAbrir[0] ? 1 : 0;
  const como = countDisplayedComo(r);
  const historia = r.fotosHistoria?.length ?? 0;
  const mar = r.fotosFuera?.length ?? 0;
  const clima = r.fotosClima?.length ?? 0;
  const vivir = r.fotosVivir?.length ?? 0;
  const casa = r.fotosCasa?.length ?? 0;
  const total = cabecera + como + clima + vivir + historia + mar + casa;
  const objetivo = Object.values(PLANTILLA_FOTOS).reduce((a, b) => a + b, 0);
  return {
    cabecera,
    como,
    clima,
    vivir,
    historia,
    mar,
    casa,
    total,
    faltan: Math.max(0, objetivo - total),
  };
}

export function huecosDeRelato(r: RelatoMun | undefined): Partial<Record<SlotFoto, number>> {
  const c = conteoFotosRelato(r);
  const out: Partial<Record<SlotFoto, number>> = {};
  (Object.keys(PLANTILLA_FOTOS) as SlotFoto[]).forEach((slot) => {
    const need = PLANTILLA_FOTOS[slot] - c[slot];
    if (need > 0) out[slot] = need;
  });
  return out;
}

export function actualesDeRelato(
  r: RelatoMun | undefined,
): Partial<Record<SlotFoto, { src: string; pie: string }[]>> {
  if (!r) return {};
  const identidad = r.fotoIdentidad ?? r.fotosAbrir[0];
  const omit = identidad?.src;
  return {
    cabecera: identidad ? [{ src: identidad.src, pie: identidad.pie }] : [],
    como: r.fotosAbrir.filter((f) => f.src !== omit).map((f) => ({ src: f.src, pie: f.pie })),
    historia: (r.fotosHistoria ?? []).map((f) => ({ src: f.src, pie: f.pie })),
    mar: (r.fotosFuera ?? []).map((f) => ({ src: f.src, pie: f.pie })),
    clima: (r.fotosClima ?? []).map((f) => ({ src: f.src, pie: f.pie })),
    vivir: (r.fotosVivir ?? []).map((f) => ({ src: f.src, pie: f.pie })),
    casa: (r.fotosCasa ?? []).map((f) => ({ src: f.src, pie: f.pie })),
  };
}

/** Etiquetas de apartado para la UI de revisión. */
export const SLOT_ETIQUETA: Record<SlotFoto, string> = {
  cabecera: "Cabecera",
  como: "Cómo se vive",
  clima: "Frente a Mallorca · Clima",
  vivir: "Frente a Mallorca · Vivir",
  historia: "De dónde viene",
  mar: "Mar, río y camino",
  casa: "Casa",
};

export const SLOT_GUIA: Record<SlotFoto, string> = {
  cabecera: "Identidad reconocible del municipio (1).",
  como: "Vida cotidiana: puerto, plaza, calles, ritmo verano/invierno (2).",
  clima: "Humedad, gris, lluvia, verde cantábrico — no solo sol de postal (1).",
  vivir: "Escala y desplazamiento: cuestas, coche, servicios a pie (1).",
  historia: "Patrimonio, oficios, hechos locales con historia (2).",
  mar: "Playas, paseos, faros, costa o río del concejo (4).",
  casa: "Tipología de vivienda de cerca; si hay microzonas, contrastarlas (2).",
};
