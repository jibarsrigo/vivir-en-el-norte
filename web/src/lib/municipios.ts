import datos from "@/data/municipios-baixo-mino.json";

export type FichaMunicipio = {
  n: number;
  zona: string;
  municipio: string;
  slug: string;
  provincia: string;
  pais: string;
  lat: number;
  lon: number;
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
  minCosta: number;
  playaBano: string;
  minBano: number;
  tempAgua: string;
  franja: "A" | "B";
  servicios: number;
  serviciosNota: string;
  fibra: string;
  comunicaciones: string;
  comunicacionesNota10: number;
  hospitalPub: string;
  hospitalPriv: string;
  hospitalMin: number;
  aeropuertos: string;
  aeropuertoMin: number;
  palmaMasCercano: string;
  palmaMejor: string;
  precioM2: number;
  A_2hab: number | null;
  A_3hab: number | null;
  B_2hab: number | null;
  B_3hab: number | null;
  obraNueva: string;
  mapa: string;
};

export const municipiosBaixoMino = datos as FichaMunicipio[];

export function municipioPorSlug(slug: string): FichaMunicipio | undefined {
  return municipiosBaixoMino.find((m) => m.slug === slug);
}
