import datos from "@/data/municipios-puntos.json";
import { municipiosFicha } from "@/lib/municipios";

export type MunicipioPunto = {
  zonaId: string;
  nombre: string;
  etiqueta: string;
  lat: number;
  lon: number;
};

export const municipiosPuntos = datos as MunicipioPunto[];

export function municipiosDeZona(zonaId: string): MunicipioPunto[] {
  return municipiosPuntos.filter((m) => m.zonaId === zonaId);
}

export function hrefMunicipio(m: MunicipioPunto): string {
  const ficha = municipiosFicha.find((x) => x.municipio === m.nombre);
  if (ficha) return `/${ficha.slug}/`;
  return `/zona/${m.zonaId}/`;
}
