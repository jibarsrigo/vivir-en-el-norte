import { PUEBLOS_MAPA } from "@/lib/pueblos-mapa";
import { hrefMunicipio, type MunicipioPunto } from "@/lib/municipios-puntos";

export const COLOR_MAR = "#d6e9f5";

export const COLOR_COMUNIDAD: { id: string; nombre: string; color: string }[] = [
  { id: "galicia", nombre: "Galicia", color: "#f0dc9a" },
  { id: "asturias", nombre: "Asturias", color: "#cfe4b5" },
  { id: "cantabria", nombre: "Cantabria", color: "#d8cfe9" },
  { id: "portugal", nombre: "Portugal", color: "#f3d2b0" },
];

export const COLOR_RESTO = "#ececec";

export type DirEtiqueta = "left" | "right" | "top" | "bottom";

export const CAPITALES: {
  nombre: string;
  lat: number;
  lon: number;
  dir: DirEtiqueta;
  zonaId?: string;
}[] = [
  { nombre: "Santiago", lat: 42.88, lon: -8.545, dir: "left" },
  { nombre: "Lugo", lat: 43.01, lon: -7.556, dir: "right" },
  { nombre: "Ourense", lat: 42.336, lon: -7.864, dir: "right" },
  { nombre: "Oviedo", lat: 43.362, lon: -5.849, dir: "bottom" },
  { nombre: "Santander", lat: 43.462, lon: -3.81, dir: "top", zonaId: "cantabria-occidental" },
  { nombre: "Braga", lat: 41.551, lon: -8.428, dir: "right" },
  { nombre: "Porto", lat: 41.158, lon: -8.629, dir: "left" },
  { nombre: "Bilbao", lat: 43.263, lon: -2.935, dir: "bottom" },
];

export const ETIQUETAS_TIERRA = [
  { texto: "GALICIA", lat: 42.68, lon: -7.85, clase: "ccaa-galicia" },
  { texto: "ASTURIAS", lat: 42.95, lon: -6.05, clase: "ccaa-asturias" },
  { texto: "CANTABRIA", lat: 42.95, lon: -4.15, clase: "ccaa-cantabria" },
  { texto: "PORTUGAL", lat: 41.42, lon: -7.55, clase: "ccaa-portugal" },
];

export const ETIQUETAS_MAR = [
  { texto: "Mar Cantábrico", lat: 43.88, lon: -5.35 },
  { texto: "Océano Atlántico", lat: 43.55, lon: -9.25 },
];

/** Recorte: margen corto al sur de Oporto y al este de Bilbao. */
export const VISTA_NORTE: [[number, number], [number, number]] = [
  [41.08, -9.82],
  [43.98, -2.68],
];

/** Un clic de + en el mapa. */
export const ZOOM_PASO = 0.5;
export const ZOOM_MIN = 6;
export const ZOOM_MAX = 11;
/** A los 2 clics el resto de municipios puede poner nombre, sin pisarse. */
export const CLICS_PUEBLOS_MAS = 2;
/** A los 4 clics ya están todos los nombres. Más + solo acerca. */
export const CLICS_HASTA_TODO = 4;

export function zoomTrasClics(inicio: number, clics: number): number {
  return Math.min(ZOOM_MAX, inicio + clics * ZOOM_PASO);
}

export function colorProvincia(region?: string, admin?: string): string {
  if (admin === "Portugal") return "#f3d2b0";
  if (region === "Galicia") return "#f0dc9a";
  if (region === "Asturias") return "#cfe4b5";
  if (region === "Cantabria") return "#d8cfe9";
  return COLOR_RESTO;
}

export function dirMunicipio(m: MunicipioPunto): DirEtiqueta {
  const conocido = PUEBLOS_MAPA.find(
    (p) =>
      p.zonaId === m.zonaId &&
      (p.nombre === m.etiqueta || m.nombre.startsWith(p.nombre) || m.etiqueta.startsWith(p.nombre)),
  );
  if (conocido) return conocido.dir;
  if (m.lat >= 43.2) return "top";
  if (m.lon <= -8.55) return "left";
  return "right";
}

export function prioridadNombre(m: MunicipioPunto): 0 | 1 {
  const conocido = PUEBLOS_MAPA.some(
    (p) =>
      p.zonaId === m.zonaId &&
      (p.nombre === m.etiqueta || m.nombre.startsWith(p.nombre) || m.etiqueta.startsWith(p.nombre)),
  );
  return conocido ? 0 : 1;
}

const ETIQUETA_ATLAS: Record<string, string> = {
  "A Illa de Arousa": "A Illa",
  "Vilanova de Arousa": "Vilanova",
  "Vilagarcía de Arousa": "Vilagarcía",
  "A Pobra do Caramiñal": "A Pobra",
  "San Vicente de la Barquera": "San Vicente",
  "Tapia de Casariego": "Tapia",
  "Muros de Nalón": "Muros",
  "Soto del Barco": "Soto",
  "Ribamontán al Mar": "Ribamontán",
  "Castro-Urdiales": "Castro",
  "Vila Nova de Cerveira": "Cerveira",
  "Vila Praia de Âncora": "Âncora",
  "Viana do Castelo": "Viana",
  "Póvoa de Varzim": "Póvoa",
  "Afife-Carreço": "Afife",
};

export function etiquetaCorta(m: MunicipioPunto): string {
  const conocido = PUEBLOS_MAPA.find(
    (p) =>
      p.zonaId === m.zonaId &&
      (p.nombre === m.etiqueta || m.nombre.startsWith(p.nombre) || m.etiqueta.startsWith(p.nombre)),
  );
  const base = conocido?.nombre ?? m.etiqueta;
  return ETIQUETA_ATLAS[base] ?? ETIQUETA_ATLAS[m.etiqueta] ?? base;
}

export { hrefMunicipio };
