/**
 * Iconos de capas en el mapa (portada y ficha de municipio).
 * Fuente única: lo que se pinta al activar capas en el atlas.
 * Si mañana una capa muestra 2 iconos o cambian las capas del mapa, se edita solo aquí.
 */
import {
  cieloDeClase,
  climaDeMunicipio,
  cuerpoClima,
  htmlIconoCielo,
} from "@/lib/clima";
import { cuerpoMar, htmlIconoCosta, marDeMunicipio } from "@/lib/mar";
import { avionDeMunicipio, cuerpoAvion, htmlIconoAvion } from "@/lib/avion";
import { cuerpoServicios, htmlIconoServicios, serviciosDeMunicipio } from "@/lib/servicios";
import { cuerpoHospital, htmlIconoHospital, hospitalDeMunicipio } from "@/lib/hospital";
import { cuerpoPrecio, htmlIconoPrecio, precioDeMunicipio } from "@/lib/precio";

/** Capas del chip de portada que aportan icono(s) sobre el mapa. */
export const CAPAS_ICONO_MAPA = [
  "clima",
  "mar",
  "servicios",
  "hospital",
  "avion",
  "precio",
] as const;
export type CapaIconoMapaId = (typeof CAPAS_ICONO_MAPA)[number];

export type IconoCapaMapa = {
  /** Clave estable por icono (una capa puede aportar varios). */
  key: string;
  capa: CapaIconoMapaId;
  etiqueta: string;
  html: string;
  /** Texto plano para tooltip / detalle al clic. */
  cuerpo: string;
  /** Ancho en la pastilla del mapa (px). Por defecto 18. */
  ancho?: number;
};

function plain(htmlOrText: string): string {
  return htmlOrText.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

/**
 * Iconos que vería este municipio en el mapa de inicio
 * con el conjunto de capas indicado (`"todas"` = todas las que pintan en mapa).
 */
export function iconosMapaPueblo(
  zonaId: string,
  nombre: string,
  activas: ReadonlySet<string> | "todas" = "todas",
): IconoCapaMapa[] {
  const on = (id: CapaIconoMapaId) =>
    activas === "todas" || activas.has(id);

  const out: IconoCapaMapa[] = [];

  if (on("clima")) {
    const clima = climaDeMunicipio(zonaId, nombre);
    if (clima) {
      out.push({
        key: "clima",
        capa: "clima",
        etiqueta: "Clima",
        html: htmlIconoCielo(cieloDeClase(clima.clase), "pueblo"),
        cuerpo: plain(cuerpoClima(clima)),
      });
    }
  }

  if (on("mar")) {
    const mar = marDeMunicipio(zonaId, nombre);
    if (mar) {
      out.push({
        key: "mar",
        capa: "mar",
        etiqueta: "Mar",
        html: htmlIconoCosta(mar.tramo, "pueblo"),
        cuerpo: plain(cuerpoMar(mar)),
      });
    }
  }

  if (on("servicios")) {
    const servicios = serviciosDeMunicipio(zonaId, nombre);
    if (servicios) {
      out.push({
        key: "servicios",
        capa: "servicios",
        etiqueta: "Servicios",
        html: htmlIconoServicios(servicios.nota, "pueblo"),
        cuerpo: plain(cuerpoServicios(servicios)),
        ancho: servicios.nota >= 10 ? 26 : 22,
      });
    }
  }

  if (on("hospital")) {
    const hospital = hospitalDeMunicipio(zonaId, nombre);
    if (hospital) {
      out.push({
        key: "hospital",
        capa: "hospital",
        etiqueta: "Hospital",
        html: htmlIconoHospital(hospital.tramo, "pueblo"),
        cuerpo: plain(cuerpoHospital(hospital)),
      });
    }
  }

  if (on("avion")) {
    const avion = avionDeMunicipio(zonaId, nombre);
    if (avion) {
      out.push({
        key: "avion",
        capa: "avion",
        etiqueta: "Avión",
        html: htmlIconoAvion(avion.tramo, "pueblo"),
        cuerpo: plain(cuerpoAvion(avion)),
      });
    }
  }

  if (on("precio")) {
    const precio = precioDeMunicipio(zonaId, nombre);
    if (precio) {
      out.push({
        key: "precio",
        capa: "precio",
        etiqueta: "Precio",
        html: htmlIconoPrecio(precio.tramo, "pueblo"),
        cuerpo: plain(cuerpoPrecio(precio)),
      });
    }
  }

  return out;
}

/** Set con todas las capas que hoy dibujan icono en el mapa. */
export function setTodasCapasIconoMapa(): Set<string> {
  return new Set(CAPAS_ICONO_MAPA);
}
