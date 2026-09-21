/**
 * Capa Servicios: vida diaria en el municipio (tiendas, farmacia, centro de salud…).
 * No incluye hospital ni aeropuerto; la nota 1–10 es la de la ficha.
 * En el mapa: badge «S» + nota (color por tramo).
 */
import { municipiosFicha, zonaIdDeFicha, type FichaMunicipio } from "@/lib/municipios";

export type TramoServicios = "alto" | "medio" | "bajo";

export type ServiciosMunicipio = {
  zonaId: string;
  nombre: string;
  nota: number;
  /** Nota normalizada (Añade→Tiene; sin Falta → «No falta nada» si hay Tiene). */
  notaTexto: string;
  fibra: string;
  tramo: TramoServicios;
};

export function tramoServicios(nota: number): TramoServicios {
  if (nota >= 7) return "alto";
  if (nota >= 4) return "medio";
  return "bajo";
}

/** Añade→Tiene; si hay Tiene y no hay Falta, añade «No falta nada». */
export function normalizarServiciosNota(raw: string): string {
  let t = raw.replace(/\bAñade:/g, "Tiene:").trim();
  const tieneTiene = /\bTiene:/i.test(t);
  const tieneFalta = /\bFalta:/i.test(t);
  if (tieneTiene && !tieneFalta && !/No falta nada/i.test(t)) {
    t = `${t.replace(/\.\s*$/, "")}. No falta nada`;
  }
  if (/^Falta:\s*$/i.test(t) || /^Falta:\s*nada\b/i.test(t)) {
    t = "No falta nada";
  }
  return t;
}

function deFicha(f: FichaMunicipio): ServiciosMunicipio {
  return {
    zonaId: zonaIdDeFicha(f),
    nombre: f.municipio,
    nota: f.servicios,
    notaTexto: normalizarServiciosNota(f.serviciosNota),
    fibra: f.fibra,
    tramo: tramoServicios(f.servicios),
  };
}

export const serviciosMunicipios: ServiciosMunicipio[] = municipiosFicha.map(deFicha);

export function serviciosDeMunicipio(
  zonaId: string,
  nombre: string,
): ServiciosMunicipio | undefined {
  return serviciosMunicipios.find((s) => s.zonaId === zonaId && s.nombre === nombre);
}

/** Nota de ejemplo por tramo (para leyenda). */
export const NOTA_EJEMPLO_TRAMO: Record<TramoServicios, number> = {
  alto: 8,
  medio: 5,
  bajo: 2,
};

export const LEYENDA_SERVICIOS: { id: TramoServicios; etiqueta: string; detalle: string }[] = [
  { id: "alto", etiqueta: "7–10", detalle: "Buen abanico de servicios en el municipio" },
  { id: "medio", etiqueta: "4–6", detalle: "Servicios básicos; algo hay que buscar fuera" },
  { id: "bajo", etiqueta: "1–3", detalle: "Pocos servicios; depende del pueblo vecino" },
];

const COLOR_TRAMO: Record<TramoServicios, string> = {
  alto: "#2a6b4a",
  medio: "#6a8a5a",
  bajo: "#9aa39a",
};

/**
 * Badge «S» + nota 1–10. Color según tramo (alto / medio / bajo).
 * `nota` puede ser la real del pueblo o un ejemplo de leyenda.
 */
export function htmlIconoServicios(nota: number, tamano: "zona" | "pueblo" = "pueblo"): string {
  const n = Math.max(1, Math.min(10, nota));
  const tramo = tramoServicios(n);
  const color = COLOR_TRAMO[tramo];
  const etiqueta = Number.isInteger(n) ? String(n) : String(n);
  const clase =
    tamano === "zona"
      ? `atlas-servicios-ico atlas-servicios-zona atlas-servicios-${tramo}`
      : `atlas-servicios-ico atlas-servicios-pueblo atlas-servicios-${tramo}`;
  return `<div class="${clase}" style="background:${color}" title="Servicios ${etiqueta}/10"><span class="atlas-servicios-s">S</span><span class="atlas-servicios-n">${etiqueta}</span></div>`;
}

export function cuerpoServicios(s: ServiciosMunicipio): string {
  return `<span class="globo-clave">Servicios</span> ${s.nota}/10 · ${s.notaTexto}`;
}
