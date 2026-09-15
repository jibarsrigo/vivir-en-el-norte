import datos from "@/data/zonas.json";

export type Lluvia = {
  oct_mar: string;
  peor: string;
  peor_n: string;
  verano: string;
};

export type Zona = {
  id: string;
  zona: string;
  provincia: string;
  pais: string;
  activa: boolean;
  portugal: boolean;
  solHoras: number;
  solDias: number;
  despejados: number;
  cubiertos: number;
  lluviaDias: number;
  lluviaMm: number;
  lluvia: Lluvia;
  viento: string;
  niebla: string;
  clase: string;
  tempVerano: number;
  calorAprieta: string | null;
  lat: number;
  lon: number;
  municipios: string[];
};

export type DatosZonas = {
  mallorca: {
    despejados: number;
    solHoras: number;
    lluviaDias: number;
    lluvia: Lluvia;
    viento: string;
    niebla: string;
  };
  zonas: Zona[];
};

export const datosZonas = datos as DatosZonas;
export const zonas = datosZonas.zonas;
export const mallorca = datosZonas.mallorca;

export function zonaPorId(id: string): Zona | undefined {
  return zonas.find((z) => z.id === id);
}

export type ComunidadId = "galicia" | "asturias" | "cantabria" | "portugal";

export function comunidadDeZona(z: Zona): ComunidadId {
  if (z.pais === "Portugal" || z.portugal) return "portugal";
  if (z.provincia === "Asturias") return "asturias";
  if (z.provincia === "Cantabria") return "cantabria";
  return "galicia";
}

export const COLOR_CLASE: Record<string, string> = {
  "Más favorable": "#2e9e44",
  Favorable: "#8fc43f",
  Intermedio: "#e0a020",
  "Más húmedo / nublado": "#d65a2c",
};
