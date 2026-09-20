/**
 * Capa Hospital / Salud: minutos al hospital (público o privado más cercano útil).
 * En el mapa: marcas fijas de hospitales citados en las fichas (públicos + privados).
 * El icono del pueblo sigue siendo minutos al público de referencia (`hospitalMin`).
 */
import { municipiosFicha, zonaIdDeFicha, type FichaMunicipio } from "@/lib/municipios";

export type TramoHospital = "cerca" | "media" | "lejos";

export type TipoHospitalMapa = "publico" | "privado";

export type HospitalMunicipio = {
  zonaId: string;
  nombre: string;
  hospitalMin: number;
  hospitalPub: string;
  hospitalPriv: string | null;
  /** Nombre corto del hospital de referencia (último tramo de hospitalPub). */
  hospitalCorto: string;
  tramo: TramoHospital;
};

/** Hospital de referencia del estudio (ubicación fija en el atlas). */
export type HospitalMapa = {
  id: string;
  /** Etiqueta corta en el mapa. */
  nombre: string;
  /** Texto completo como en las fichas (último tramo de hospitalPub/Priv). */
  nombreLargo: string;
  ciudad: string;
  lat: number;
  lon: number;
  tipo: TipoHospitalMapa;
};

/**
 * Hospitales citados en las fichas (públicos + privados de `hospitalPriv`).
 * Coordenadas aproximadas (sede / campus); escala de atlas, no navegación.
 */
export const HOSPITALES_MAPA: HospitalMapa[] = [
  // —— Públicos ——
  {
    id: "cunqueiro",
    nombre: "Cunqueiro",
    nombreLargo: "Álvaro Cunqueiro (Vigo)",
    ciudad: "Vigo",
    lat: 42.189,
    lon: -8.715,
    tipo: "publico",
  },
  {
    id: "montecelo",
    nombre: "Montecelo",
    nombreLargo: "Montecelo (Pontevedra)",
    ciudad: "Pontevedra",
    lat: 42.427,
    lon: -8.636,
    tipo: "publico",
  },
  {
    id: "salnes",
    nombre: "O Salnés",
    nombreLargo: "Hospital do Salnés (Vilagarcía)",
    ciudad: "Vilagarcía de Arousa",
    lat: 42.598,
    lon: -8.755,
    tipo: "publico",
  },
  {
    id: "barbanza",
    nombre: "Barbanza",
    nombreLargo: "Hospital do Barbanza (Ribeira)",
    ciudad: "Ribeira",
    lat: 42.555,
    lon: -8.99,
    tipo: "publico",
  },
  {
    id: "chus",
    nombre: "CHUS",
    nombreLargo: "CHUS (Santiago)",
    ciudad: "Santiago de Compostela",
    lat: 42.875,
    lon: -8.561,
    tipo: "publico",
  },
  {
    id: "chuac",
    nombre: "CHUAC",
    nombreLargo: "CHUAC (A Coruña)",
    ciudad: "A Coruña",
    lat: 43.343,
    lon: -8.396,
    tipo: "publico",
  },
  {
    id: "marcide",
    nombre: "Marcide",
    nombreLargo: "Arquitecto Marcide (Ferrol)",
    ciudad: "Ferrol",
    lat: 43.489,
    lon: -8.219,
    tipo: "publico",
  },
  {
    id: "marina",
    nombre: "A Mariña",
    nombreLargo: "Hospital da Mariña (Burela)",
    ciudad: "Burela",
    lat: 43.661,
    lon: -7.359,
    tipo: "publico",
  },
  {
    id: "jarrio",
    nombre: "Jarrio",
    nombreLargo: "Jarrio (Coaña)",
    ciudad: "Coaña",
    lat: 43.508,
    lon: -6.785,
    tipo: "publico",
  },
  {
    id: "san-agustin",
    nombre: "San Agustín",
    nombreLargo: "San Agustín (Avilés)",
    ciudad: "Avilés",
    lat: 43.548,
    lon: -5.914,
    tipo: "publico",
  },
  {
    id: "cabuenes",
    nombre: "Cabueñes",
    nombreLargo: "Cabueñes (Gijón)",
    ciudad: "Gijón",
    lat: 43.528,
    lon: -5.618,
    tipo: "publico",
  },
  {
    id: "oriente",
    nombre: "Oriente",
    nombreLargo: "Hospital del Oriente (Arriondas)",
    ciudad: "Arriondas",
    lat: 43.389,
    lon: -5.185,
    tipo: "publico",
  },
  {
    id: "sierrallana",
    nombre: "Sierrallana",
    nombreLargo: "Sierrallana (Torrelavega)",
    ciudad: "Torrelavega",
    lat: 43.353,
    lon: -4.048,
    tipo: "publico",
  },
  {
    id: "valdecilla",
    nombre: "Valdecilla",
    nombreLargo: "Valdecilla (Santander)",
    ciudad: "Santander",
    lat: 43.456,
    lon: -3.829,
    tipo: "publico",
  },
  {
    id: "laredo",
    nombre: "Laredo",
    nombreLargo: "Hospital de Laredo",
    ciudad: "Laredo",
    lat: 43.414,
    lon: -3.425,
    tipo: "publico",
  },
  {
    id: "santa-luzia",
    nombre: "Santa Luzia",
    nombreLargo: "Santa Luzia (Viana)",
    ciudad: "Viana do Castelo",
    lat: 41.697,
    lon: -8.829,
    tipo: "publico",
  },
  {
    id: "bertiandos",
    nombre: "Bertiandos",
    nombreLargo: "Conde de Bertiandos (Ponte de Lima)",
    ciudad: "Ponte de Lima",
    lat: 41.767,
    lon: -8.583,
    tipo: "publico",
  },
  {
    id: "povoa",
    nombre: "Póvoa / VdC",
    nombreLargo: "Hospital Póvoa / Vila do Conde",
    ciudad: "Póvoa de Varzim",
    lat: 41.38,
    lon: -8.761,
    tipo: "publico",
  },
  // —— Privados (aparecen en hospitalPriv de las fichas) ——
  {
    id: "povisa",
    nombre: "Povisa",
    nombreLargo: "Povisa (Vigo)",
    ciudad: "Vigo",
    lat: 42.22,
    lon: -8.73,
    tipo: "privado",
  },
  {
    id: "quiron-pontevedra",
    nombre: "Quirón Po",
    nombreLargo: "Quirónsalud Miguel Domínguez (Pontevedra)",
    ciudad: "Pontevedra",
    lat: 42.433,
    lon: -8.648,
    tipo: "privado",
  },
  {
    id: "hm-rosaleda",
    nombre: "HM Rosaleda",
    nombreLargo: "HM Rosaleda (Santiago)",
    ciudad: "Santiago de Compostela",
    lat: 42.882,
    lon: -8.545,
    tipo: "privado",
  },
  {
    id: "hm-modelo",
    nombre: "HM Modelo",
    nombreLargo: "HM Modelo (A Coruña)",
    ciudad: "A Coruña",
    lat: 43.365,
    lon: -8.405,
    tipo: "privado",
  },
  {
    id: "cardona",
    nombre: "Cardona",
    nombreLargo: "Juan Cardona (Ferrol)",
    ciudad: "Ferrol",
    lat: 43.483,
    lon: -8.235,
    tipo: "privado",
  },
  {
    id: "jove",
    nombre: "Jove",
    nombreLargo: "Hospital de Jove (Gijón)",
    ciudad: "Gijón",
    lat: 43.552,
    lon: -5.702,
    tipo: "privado",
  },
  {
    id: "cma-oviedo",
    nombre: "CMA",
    nombreLargo: "Centro Médico de Asturias (Oviedo)",
    ciudad: "Oviedo",
    lat: 43.361,
    lon: -5.875,
    tipo: "privado",
  },
  {
    id: "santa-clotilde",
    nombre: "Sta. Clotilde",
    nombreLargo: "Santa Clotilde (Santander)",
    ciudad: "Santander",
    lat: 43.468,
    lon: -3.805,
    tipo: "privado",
  },
  {
    id: "mompia",
    nombre: "Mompía",
    nombreLargo: "Clínica Mompía (Bezana)",
    ciudad: "Santa Cruz de Bezana",
    lat: 43.4,
    lon: -3.855,
    tipo: "privado",
  },
  {
    id: "quiron-bilbao",
    nombre: "Quirón Bio",
    nombreLargo: "Quirónsalud / IMQ (Bilbao)",
    ciudad: "Bilbao",
    lat: 43.262,
    lon: -2.935,
    tipo: "privado",
  },
  {
    id: "trofa-braga",
    nombre: "Trofa Braga",
    nombreLargo: "Trofa Saúde (Braga)",
    ciudad: "Braga",
    lat: 41.551,
    lon: -8.422,
    tipo: "privado",
  },
  {
    id: "cuf-porto",
    nombre: "CUF Porto",
    nombreLargo: "CUF Porto",
    ciudad: "Porto",
    lat: 41.162,
    lon: -8.628,
    tipo: "privado",
  },
];

/** Alineado con la nota de cercanía de la tabla comparativa (ideal 20, peor 50). */
export function tramoHospital(min: number): TramoHospital {
  if (min <= 20) return "cerca";
  if (min <= 40) return "media";
  return "lejos";
}

export function hospitalCortoDe(hospitalPub: string): string {
  const partes = hospitalPub.split("·").map((p) => p.trim()).filter(Boolean);
  return partes[partes.length - 1] ?? hospitalPub;
}

function deFicha(f: FichaMunicipio): HospitalMunicipio {
  const priv = (f.hospitalPriv ?? "").trim();
  return {
    zonaId: zonaIdDeFicha(f),
    nombre: f.municipio,
    hospitalMin: f.hospitalMin,
    hospitalPub: f.hospitalPub,
    hospitalPriv: priv || null,
    hospitalCorto: hospitalCortoDe(f.hospitalPub),
    tramo: tramoHospital(f.hospitalMin),
  };
}

export const hospitalMunicipios: HospitalMunicipio[] = municipiosFicha.map(deFicha);

export function hospitalDeMunicipio(
  zonaId: string,
  nombre: string,
): HospitalMunicipio | undefined {
  return hospitalMunicipios.find((h) => h.zonaId === zonaId && h.nombre === nombre);
}

export const LEYENDA_HOSPITAL: { id: TramoHospital; etiqueta: string; detalle: string }[] = [
  { id: "cerca", etiqueta: "≤ 20 min", detalle: "Hospital a veinte minutos o menos" },
  { id: "media", etiqueta: "≤ 40 min", detalle: "Hospital a cuarenta minutos o menos" },
  { id: "lejos", etiqueta: "> 40 min", detalle: "Más de cuarenta minutos al hospital" },
];

const COLOR_TRAMO: Record<TramoHospital, string> = {
  cerca: "#b33a3a",
  media: "#c56a6a",
  lejos: "#b8a0a0",
};

const COLOR_PUBLICO = "#8b2a2a";
const COLOR_PRIVADO = "#6a5a8a";

/** Icono de minutos en el pueblo: cruz en círculo (no confundir con la sede). */
function svgHospital(tramo: TramoHospital): string {
  const c = COLOR_TRAMO[tramo];
  return `<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="13" fill="${c}"/><path fill="#fff" d="M14 8h4v6h6v4h-6v6h-4v-6H8v-4h6V8z"/></svg>`;
}

/**
 * Sede en el mapa: edificio con cruz.
 * Público = relleno rojo; privado = relleno violeta suave (misma silueta).
 */
function svgHospitalSede(tipo: TipoHospitalMapa = "publico"): string {
  const c = tipo === "privado" ? COLOR_PRIVADO : COLOR_PUBLICO;
  return `<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="${c}" d="M5 29V11l11-7 11 7v18H5z"/><path fill="#fff" d="M14 7.5h4v3.5h3.5v4H18V18.5h-4V15H10.5v-4H14V7.5z"/><rect x="9" y="20" width="3.5" height="4" rx=".4" fill="#fff" opacity=".85"/><rect x="14.25" y="20" width="3.5" height="4" rx=".4" fill="#fff" opacity=".85"/><rect x="19.5" y="20" width="3.5" height="4" rx=".4" fill="#fff" opacity=".85"/><path fill="#fff" opacity=".5" d="M13 29v-5h6v5H13z"/></svg>`;
}

export function htmlIconoHospital(tramo: TramoHospital, tamano: "zona" | "pueblo"): string {
  const clase =
    tamano === "zona"
      ? "atlas-hospital-ico atlas-hospital-zona"
      : "atlas-hospital-ico atlas-hospital-pueblo";
  return `<div class="${clase}">${svgHospital(tramo)}</div>`;
}

export function htmlIconoHospitalSede(
  tamano: "zona" | "pueblo" = "zona",
  tipo: TipoHospitalMapa = "publico",
): string {
  const clase =
    tamano === "zona"
      ? `atlas-hospital-sede-ico atlas-hospital-sede-zona atlas-hospital-${tipo}`
      : `atlas-hospital-sede-ico atlas-hospital-sede-pueblo atlas-hospital-${tipo}`;
  return `<div class="${clase}">${svgHospitalSede(tipo)}</div>`;
}

/**
 * Marca fija de sede. Por defecto solo el edificio (el nombre va en el tooltip).
 * Con `conNombre` (zoom alto) añade la etiqueta corta.
 */
export function htmlMarcaHospital(
  nombre: string,
  conNombre = false,
  tipo: TipoHospitalMapa = "publico",
): string {
  const pinCls =
    tipo === "privado" ? "atlas-hospital-pin atlas-hospital-pin-privado" : "atlas-hospital-pin";
  const cajaCls =
    tipo === "privado" ? "atlas-hospital-caja atlas-hospital-caja-privado" : "atlas-hospital-caja";
  if (!conNombre) {
    return `<div class="${pinCls}" title="${nombre}">${svgHospitalSede(tipo)}</div>`;
  }
  return `<div class="${cajaCls}">${svgHospitalSede(tipo)}<span>${nombre}</span></div>`;
}

export function cuerpoHospital(h: HospitalMunicipio): string {
  const priv = h.hospitalPriv
    ? ` · <span class="globo-clave">Priv.</span> ${hospitalCortoDe(h.hospitalPriv)}`
    : "";
  return `<span class="globo-clave">Hospital</span> ${h.hospitalMin} min · ${h.hospitalCorto}${priv}`;
}

export function textoHospitalMapa(h: HospitalMapa): string {
  const tipo = h.tipo === "privado" ? "privado" : "público";
  return `${h.nombreLargo} · ${tipo} · ${h.ciudad}`;
}

/** A partir de este zoom la marca de sede muestra también el nombre. */
export const ZOOM_NOMBRE_HOSPITAL = 8;
