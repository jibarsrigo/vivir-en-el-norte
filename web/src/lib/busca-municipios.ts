/**
 * Índice y búsqueda de municipios para Busca y compara.
 * Solo pueblos/ciudades (fichas); la zona filtra pero no es un resultado seleccionable.
 */
import {
  municipiosFicha,
  zonaIdDeFicha,
  type FichaMunicipio,
} from "@/lib/municipios";
import { RELATO_MUNICIPIOS } from "@/components/RelatoMunicipio";
import { zonas } from "@/lib/zonas";

export type HitBuscaMunicipio = {
  slug: string;
  nombre: string;
  zonaId: string;
  /** Nombre de zona sin « (PT) ». */
  zonaNombre: string;
  escala: string;
  href: string;
  hospitalMin: number;
  precioM2: number;
  servicios: number;
};

function sinAcentos(s: string): string {
  return s.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
}

function zonaNombreDe(zonaId: string, fichaZona: string): string {
  const z = zonas.find((x) => x.id === zonaId);
  return (z?.zona ?? fichaZona).replace(" (PT)", "");
}

function deFicha(f: FichaMunicipio): HitBuscaMunicipio {
  const zonaId = zonaIdDeFicha(f);
  const relato = RELATO_MUNICIPIOS[f.slug];
  return {
    slug: f.slug,
    nombre: f.municipio,
    zonaId,
    zonaNombre: zonaNombreDe(zonaId, f.zona),
    escala: relato?.escala ?? "",
    href: `/zona/${zonaId}/${f.slug}/`,
    hospitalMin: f.hospitalMin,
    precioM2: f.precioM2,
    servicios: f.servicios,
  };
}

export const INDICE_BUSCA_MUNICIPIOS: HitBuscaMunicipio[] = municipiosFicha.map(deFicha);

export function hitPorSlug(slug: string): HitBuscaMunicipio | undefined {
  return INDICE_BUSCA_MUNICIPIOS.find((h) => h.slug === slug);
}

type Ranked = HitBuscaMunicipio & { score: number };

/**
 * Busca municipios por nombre, zona o escala.
 * Query vacía → []; mínimo útil ~1–2 caracteres (el UI decide cuándo llamar).
 */
export function buscarMunicipios(query: string, limite = 12): HitBuscaMunicipio[] {
  const q = sinAcentos(query.trim());
  if (!q) return [];

  const ranked: Ranked[] = [];
  for (const h of INDICE_BUSCA_MUNICIPIOS) {
    const nom = sinAcentos(h.nombre);
    const zona = sinAcentos(h.zonaNombre);
    const escala = sinAcentos(h.escala);
    const slug = sinAcentos(h.slug.replace(/-/g, " "));

    let score = 0;
    if (nom === q || slug === q) score = 100;
    else if (nom.startsWith(q) || slug.startsWith(q)) score = 80;
    else if (nom.includes(q) || slug.includes(q)) score = 60;
    else if (zona.includes(q)) score = 40;
    else if (escala.includes(q)) score = 30;
    else continue;

    // Preferir coincidencia de nombre frente a zona/escala con mismo score relativo
    if (nom.includes(q)) score += 5;
    ranked.push({ ...h, score });
  }

  ranked.sort((a, b) => b.score - a.score || a.nombre.localeCompare(b.nombre, "es"));
  return ranked.slice(0, limite).map(({ score: _s, ...h }) => h);
}
