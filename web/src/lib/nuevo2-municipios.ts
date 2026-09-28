/** Slugs con ficha Nuevo2 montada (rutas bajo /nuevo2/). */
export const NUEVO2_MUNICIPIO_SLUGS = new Set([
  "cudillero",
  "candas-carreno",
  "gijon",
  "soto-del-barco",
  "salinas-castrillon",
  "luanco-gozon",
  "muros-de-nalon",
  "oia",
  "o-rosal",
  "tomino",
  "a-guarda",
  "tui",
  "baiona",
  "nigran",
  "gondomar",
  "cangas",
  "moana",
  "bueu",
  "marin",
  "pontevedra",
  "poio",
  "sanxenxo",
  "o-grove",
  "vigo",
  "redondela",
  "soutomaior",
  "vilaboa",
]);

/** Enlace a ficha: Nuevo2 si existe; si no, ruta current de zona. */
export function hrefFichaMunicipio(zonaId: string, slug: string): string {
  if (NUEVO2_MUNICIPIO_SLUGS.has(slug)) return `/nuevo2/${slug}/`;
  return `/zona/${zonaId}/${slug}/`;
}
