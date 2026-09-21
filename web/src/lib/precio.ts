/**
 * Capa Precio: €/m² y franja asequible de 3 habitaciones (Idealista / ficha).
 */
import { municipiosFicha, zonaIdDeFicha, type FichaMunicipio } from "@/lib/municipios";

export type TramoPrecio = "asequible" | "media" | "cara";

export type PrecioMunicipio = {
  zonaId: string;
  nombre: string;
  precioM2: number;
  A_3hab: number | null;
  A_2hab: number | null;
  tramo: TramoPrecio;
};

/** Bandas absolutas del atlas (m² Idealista aproximado). */
export function tramoPrecio(precioM2: number): TramoPrecio {
  if (precioM2 <= 1500) return "asequible";
  if (precioM2 <= 2200) return "media";
  return "cara";
}

function euro(n: number): string {
  return `${Math.round(n).toLocaleString("es-ES")} €`;
}

function deFicha(f: FichaMunicipio): PrecioMunicipio | null {
  if (f.precioM2 == null) return null;
  return {
    zonaId: zonaIdDeFicha(f),
    nombre: f.municipio,
    precioM2: f.precioM2,
    A_3hab: f.A_3hab,
    A_2hab: f.A_2hab,
    tramo: tramoPrecio(f.precioM2),
  };
}

export const precioMunicipios: PrecioMunicipio[] = municipiosFicha
  .map(deFicha)
  .filter((p): p is PrecioMunicipio => p != null);

export function precioDeMunicipio(zonaId: string, nombre: string): PrecioMunicipio | undefined {
  return precioMunicipios.find((p) => p.zonaId === zonaId && p.nombre === nombre);
}

export const LEYENDA_PRECIO: { id: TramoPrecio; etiqueta: string; detalle: string }[] = [
  { id: "asequible", etiqueta: "≤ 1.500 €/m²", detalle: "Franja asequible del atlas" },
  { id: "media", etiqueta: "≤ 2.200 €/m²", detalle: "Franja media" },
  { id: "cara", etiqueta: "> 2.200 €/m²", detalle: "Franja cara del mercado atlántico" },
];

const COLOR_TRAMO: Record<TramoPrecio, string> = {
  asequible: "#2a6b4a",
  media: "#b8860b",
  cara: "#8a5a4a",
};

function svgPrecio(tramo: TramoPrecio): string {
  const c = COLOR_TRAMO[tramo];
  return `<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="12" fill="${c}"/><path fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" d="M21 11.2c-1.1-2-3-3.2-5.3-3.2-3.6 0-6.2 2.7-6.2 6.5s2.6 6.5 6.2 6.5c2.3 0 4.2-1.2 5.3-3.2"/><path fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" d="M9.5 14.2h8.5M9.5 18h8.5"/></svg>`;
}

export function htmlIconoPrecio(tramo: TramoPrecio, tamano: "zona" | "pueblo"): string {
  const clase =
    tamano === "zona" ? "atlas-precio-ico atlas-precio-zona" : "atlas-precio-ico atlas-precio-pueblo";
  return `<div class="${clase}">${svgPrecio(tramo)}</div>`;
}

export function cuerpoPrecio(p: PrecioMunicipio): string {
  const m2 = `<span class="globo-clave">m²</span> ${euro(p.precioM2)}`;
  if (p.A_3hab != null) {
    return `${m2} · <span class="globo-clave">3 hab</span> ~${euro(p.A_3hab)}`;
  }
  if (p.A_2hab != null) {
    return `${m2} · <span class="globo-clave">2 hab</span> ~${euro(p.A_2hab)}`;
  }
  return m2;
}
