/**
 * Enlaces a búsquedas de Idealista (no anuncios concretos).
 * Rutas comprobadas para Baixo Miño; ampliar el mapa al añadir fichas.
 */

const VENTA = "https://www.idealista.com/venta-viviendas";

/** Slug Idealista por slug interno de ficha. */
const MUNICIPIO_PATH: Record<string, string> = {
  "a-guarda": "a-guarda-pontevedra",
  oia: "oia-pontevedra",
  "o-rosal": "o-rosal-pontevedra",
  tomino: "tomino-pontevedra",
  tui: "tui-pontevedra",
};

const ZONA_PATH: Record<string, string> = {
  "baixo-mino": "pontevedra/baixo-mino",
};

export function urlIdealistaMunicipio(slug: string): string | null {
  const path = MUNICIPIO_PATH[slug];
  return path ? `${VENTA}/${path}/` : null;
}

export function urlIdealistaZona(zonaId: string): string | null {
  const path = ZONA_PATH[zonaId];
  return path ? `${VENTA}/${path}/` : null;
}
