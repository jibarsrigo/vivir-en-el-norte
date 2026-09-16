import datos from "@/data/clima-municipios.json";
import { zonas, type Zona } from "@/lib/zonas";

export type Cielo = "sol" | "sol-nubes" | "nubes" | "lluvia";

export type ClimaMunicipio = {
  zonaId: string;
  nombre: string;
  solHoras: number;
  despejados: number;
  cubiertos: number;
  lluviaDias: number;
  lluviaMm: number;
  tempVerano: number;
  tempInvierno: number;
  humedad: number;
  viento: string;
  niebla: string;
  clase: string;
};

export const climaMunicipios = datos as ClimaMunicipio[];

export const CIELO_DE_CLASE: Record<string, Cielo> = {
  "Más favorable": "sol",
  Favorable: "sol-nubes",
  Intermedio: "nubes",
  "Más húmedo / nublado": "lluvia",
};

export function cieloDeClase(clase: string): Cielo {
  return CIELO_DE_CLASE[clase] ?? "nubes";
}

export const LEYENDA_CIELO: { id: Cielo; etiqueta: string; detalle: string }[] = [
  { id: "sol", etiqueta: "Sol", detalle: "2.400 h de sol o más, y 120 días de lluvia o menos" },
  { id: "sol-nubes", etiqueta: "Sol y nubes", detalle: "2.200 h de sol o más, y 130 días de lluvia o menos" },
  { id: "nubes", etiqueta: "Nubes", detalle: "1.850 h de sol o más" },
  { id: "lluvia", etiqueta: "Lluvia", detalle: "menos de 1.850 h de sol" },
];

/** Cinco iconos de telediario: un tramo de costa, no 16 zonas (se pisan). */
const DEFS_TRAMO: { id: string; nombre: string; ids: string[]; lat: number; lon: number }[] = [
  {
    id: "portugal",
    nombre: "Portugal",
    ids: ["alto-minho", "litoral-norte"],
    lat: 41.48,
    lon: -7.92,
  },
  {
    id: "rias-baixas",
    nombre: "Rías Baixas",
    ids: [
      "baixo-mino",
      "val-minor",
      "vigo-e-ria",
      "o-morrazo",
      "pontevedra-e-sanxenxo",
      "o-salnes",
      "barbanza-e-noia",
    ],
    lat: 42.42,
    lon: -7.42,
  },
  {
    id: "galicia-norte",
    nombre: "Galicia norte",
    ids: ["golfo-artabro-e-ferrol", "a-marina"],
    lat: 43.14,
    lon: -7.28,
  },
  {
    id: "asturias",
    nombre: "Asturias",
    ids: ["asturias-occidente", "asturias-centro", "asturias-oriente"],
    lat: 43.06,
    lon: -5.88,
  },
  {
    id: "cantabria",
    nombre: "Cantabria",
    ids: ["cantabria-occidental", "cantabria-oriental"],
    lat: 43.08,
    lon: -3.82,
  },
];

function claseDeSolLluvia(sol: number, lluvia: number): string {
  if (sol >= 2400 && lluvia <= 120) return "Más favorable";
  if (sol >= 2200 && lluvia <= 130) return "Favorable";
  if (sol >= 1850) return "Intermedio";
  return "Más húmedo / nublado";
}

function moda(vals: string[]): string {
  const n = new Map<string, number>();
  for (const v of vals) n.set(v, (n.get(v) ?? 0) + 1);
  return [...n.entries()].sort((a, b) => b[1] - a[1])[0][0];
}

export type TramoClima = {
  id: string;
  nombre: string;
  lat: number;
  lon: number;
  zonas: string[];
  solHoras: number;
  despejados: number;
  lluviaDias: number;
  tempVerano: number;
  viento: string;
  niebla: string;
  clase: string;
};

export const TRAMOS_CLIMA: TramoClima[] = DEFS_TRAMO.map((d) => {
  const zs = d.ids.map((id) => zonas.find((z) => z.id === id)).filter((z): z is Zona => Boolean(z));
  const n = zs.length || 1;
  const solHoras = Math.round(zs.reduce((s, z) => s + z.solHoras, 0) / n);
  const lluviaDias = Math.round(zs.reduce((s, z) => s + z.lluviaDias, 0) / n);
  return {
    id: d.id,
    nombre: d.nombre,
    lat: d.lat,
    lon: d.lon,
    zonas: zs.map((z) => z.zona.replace(" (PT)", "")),
    solHoras,
    despejados: Math.round(zs.reduce((s, z) => s + z.despejados, 0) / n),
    lluviaDias,
    tempVerano: Math.round((zs.reduce((s, z) => s + z.tempVerano, 0) / n) * 10) / 10,
    viento: moda(zs.map((z) => z.viento)),
    niebla: moda(zs.map((z) => z.niebla)),
    clase: claseDeSolLluvia(solHoras, lluviaDias),
  };
});

function svgSol(): string {
  return `<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="6.5" fill="#f0c419"/><g stroke="#f0c419" stroke-width="2" stroke-linecap="round"><path d="M16 3.5v4M16 24.5v4M3.5 16h4M24.5 16h4M7.2 7.2l2.6 2.6M22.2 22.2l2.6 2.6M7.2 24.8l2.6-2.6M22.2 9.8l2.6-2.6"/></g></svg>`;
}

function svgSolNubes(): string {
  return `<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="20.5" cy="11" r="5" fill="#f0c419"/><g stroke="#f0c419" stroke-width="1.7" stroke-linecap="round"><path d="M20.5 3.2v2.6M27.8 11h2.4M25.8 5.4l1.6-1.6"/></g><path fill="#f4f7fa" stroke="#8a9aa4" stroke-width="1.1" d="M9.5 22.8c-2.6 0-4.6-1.9-4.6-4.2 0-2 1.4-3.7 3.4-4.1.5-2.2 2.5-3.8 4.9-3.8 2.1 0 3.9 1.2 4.7 2.9 0.6-0.3 1.3-0.5 2.1-0.5 2.3 0 4.1 1.7 4.1 3.8 0 2.2-1.8 3.9-4.1 3.9H9.5z"/></svg>`;
}

function svgNubes(): string {
  return `<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="#cfd8de" stroke="#8a9aa4" stroke-width="1.1" d="M8.8 22.2c-2.8 0-5-2.1-5-4.6 0-2.2 1.6-4.1 3.8-4.5.6-2.5 2.8-4.3 5.5-4.3 2.4 0 4.4 1.3 5.3 3.3.7-.4 1.5-.6 2.4-.6 2.6 0 4.7 1.9 4.7 4.3 0 2.5-2.1 4.4-4.7 4.4H8.8z"/></svg>`;
}

function svgLluvia(): string {
  return `<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="#b7c4cc" stroke="#7b8b96" stroke-width="1.1" d="M8.6 18.6c-2.6 0-4.7-1.9-4.7-4.3 0-2.1 1.5-3.8 3.6-4.2.5-2.3 2.6-4 5.1-4 2.2 0 4.1 1.2 5 3 .6-.3 1.4-.5 2.2-.5 2.4 0 4.3 1.8 4.3 4 0 2.3-1.9 4.1-4.3 4.1H8.6z"/><g stroke="#4a90c4" stroke-width="1.7" stroke-linecap="round"><path d="M11 21.2v4.2M16 22v4.4M21 21.2v4.2"/></g></svg>`;
}

const SVG_CIELO: Record<Cielo, string> = {
  sol: svgSol(),
  "sol-nubes": svgSolNubes(),
  nubes: svgNubes(),
  lluvia: svgLluvia(),
};

export function htmlIconoCielo(cielo: Cielo, tamano: "zona" | "pueblo"): string {
  const clase = tamano === "zona" ? "atlas-clima atlas-clima-zona" : "atlas-clima atlas-clima-pueblo";
  return `<div class="${clase}">${SVG_CIELO[cielo]}</div>`;
}

export function climaDeMunicipio(zonaId: string, nombre: string): ClimaMunicipio | undefined {
  return climaMunicipios.find((c) => c.zonaId === zonaId && c.nombre === nombre);
}

export function textoClima(c: {
  nombre: string;
  solHoras: number;
  despejados: number;
  lluviaDias: number;
  tempVerano: number;
  viento: string;
  niebla: string;
}): string {
  return `${c.nombre}: ${c.solHoras.toLocaleString("es-ES")} h de sol · ${c.despejados} despejados · ${c.lluviaDias} días de lluvia · verano ${c.tempVerano.toLocaleString("es-ES")} °C · viento ${c.viento.toLowerCase()} · niebla ${c.niebla.toLowerCase()}`;
}

/** Un icono por zona del atlas (zoom bajo), sobre el centroide de la zona. */
export type ZonaClimaMapa = {
  zonaId: string;
  nombre: string;
  lat: number;
  lon: number;
  solHoras: number;
  despejados: number;
  lluviaDias: number;
  tempVerano: number;
  viento: string;
  niebla: string;
  clase: string;
  nMunicipios: number;
};

export const CLIMA_ZONAS_MAPA: ZonaClimaMapa[] = zonas.map((z) => ({
  zonaId: z.id,
  nombre: z.zona.replace(" (PT)", ""),
  lat: z.lat,
  lon: z.lon,
  solHoras: z.solHoras,
  despejados: z.despejados,
  lluviaDias: z.lluviaDias,
  tempVerano: z.tempVerano,
  viento: z.viento,
  niebla: z.niebla,
  clase: z.clase,
  nMunicipios: z.municipios.length,
}));

export const zonasClima = zonas;
