import datosBaixoMino from "@/data/municipios-baixo-mino.json";
import datosValMinor from "@/data/municipios-val-minor.json";
import datosVigoERia from "@/data/municipios-vigo-e-ria.json";
import datosOMorrazo from "@/data/municipios-o-morrazo.json";
import datosPontevedraESanxenxo from "@/data/municipios-pontevedra-e-sanxenxo.json";
import datosOSalnes from "@/data/municipios-o-salnes.json";
import datosBarbanzaENoia from "@/data/municipios-barbanza-e-noia.json";
import datosGolfoArtabroEFerrol from "@/data/municipios-golfo-artabro-e-ferrol.json";
import datosAMarina from "@/data/municipios-a-marina.json";
import datosAsturiasOccidente from "@/data/municipios-asturias-occidente.json";
import datosAsturiasCentro from "@/data/municipios-asturias-centro.json";
import datosAsturiasOriente from "@/data/municipios-asturias-oriente.json";
import datosCantabriaOccidental from "@/data/municipios-cantabria-occidental.json";
import datosCantabriaOriental from "@/data/municipios-cantabria-oriental.json";
import datosAltoMinho from "@/data/municipios-alto-minho.json";
import datosLitoralNorte from "@/data/municipios-litoral-norte.json";

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

export const municipiosBaixoMino = datosBaixoMino as FichaMunicipio[];
export const municipiosValMinor = datosValMinor as FichaMunicipio[];
export const municipiosVigoERia = datosVigoERia as FichaMunicipio[];
export const municipiosOMorrazo = datosOMorrazo as FichaMunicipio[];
export const municipiosPontevedraESanxenxo = datosPontevedraESanxenxo as FichaMunicipio[];
export const municipiosOSalnes = datosOSalnes as FichaMunicipio[];
export const municipiosBarbanzaENoia = datosBarbanzaENoia as FichaMunicipio[];
export const municipiosGolfoArtabroEFerrol = datosGolfoArtabroEFerrol as FichaMunicipio[];
export const municipiosAMarina = datosAMarina as FichaMunicipio[];
export const municipiosAsturiasOccidente = datosAsturiasOccidente as FichaMunicipio[];
export const municipiosAsturiasCentro = datosAsturiasCentro as FichaMunicipio[];
export const municipiosAsturiasOriente = datosAsturiasOriente as FichaMunicipio[];
export const municipiosCantabriaOccidental = datosCantabriaOccidental as FichaMunicipio[];
export const municipiosCantabriaOriental = datosCantabriaOriental as FichaMunicipio[];
export const municipiosAltoMinho = datosAltoMinho as FichaMunicipio[];
export const municipiosLitoralNorte = datosLitoralNorte as FichaMunicipio[];

/** Todas las fichas publicadas (con página de municipio). */
export const municipiosFicha: FichaMunicipio[] = [
  ...municipiosBaixoMino,
  ...municipiosValMinor,
  ...municipiosVigoERia,
  ...municipiosOMorrazo,
  ...municipiosPontevedraESanxenxo,
  ...municipiosOSalnes,
  ...municipiosBarbanzaENoia,
  ...municipiosGolfoArtabroEFerrol,
  ...municipiosAMarina,
  ...municipiosAsturiasOccidente,
  ...municipiosAsturiasCentro,
  ...municipiosAsturiasOriente,
  ...municipiosCantabriaOccidental,
  ...municipiosCantabriaOriental,
  ...municipiosAltoMinho,
  ...municipiosLitoralNorte,
];

const ZONA_ID_POR_NOMBRE: Record<string, string> = {
  "Baixo Miño": "baixo-mino",
  "Val Miñor": "val-minor",
  "Vigo e ría": "vigo-e-ria",
  "O Morrazo": "o-morrazo",
  "Pontevedra e Sanxenxo": "pontevedra-e-sanxenxo",
  "O Salnés": "o-salnes",
  "Barbanza e Noia": "barbanza-e-noia",
  "Golfo Ártabro e Ferrol": "golfo-artabro-e-ferrol",
  "A Mariña": "a-marina",
  "Asturias Occidente": "asturias-occidente",
  "Asturias Centro": "asturias-centro",
  "Asturias Oriente": "asturias-oriente",
  "Cantabria Occidental": "cantabria-occidental",
  "Cantabria Oriental": "cantabria-oriental",
  "Alto Minho (PT)": "alto-minho",
  "Litoral Norte (PT)": "litoral-norte",
};

export function zonaIdDeFicha(ficha: FichaMunicipio): string {
  return ZONA_ID_POR_NOMBRE[ficha.zona] ?? ficha.zona;
}

export function municipiosDeZonaFicha(zonaId: string): FichaMunicipio[] {
  return municipiosFicha.filter((m) => zonaIdDeFicha(m) === zonaId);
}

export function municipioPorSlug(slug: string): FichaMunicipio | undefined {
  return municipiosFicha.find((m) => m.slug === slug);
}
