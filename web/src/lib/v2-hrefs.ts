/** Pure V2 route helpers — safe for client components (no fs). */

export function v2HrefMunicipio(zonaId: string, slug: string): string {
  return `/v2/zona/${zonaId}/${slug}/`;
}

export function v2HrefZona(zonaId: string): string {
  return `/v2/zona/${zonaId}/`;
}

export function actualHrefMunicipio(zonaId: string, slug: string): string {
  return `/${slug}/`;
}

export function actualHrefZona(zonaId: string): string {
  return `/zona/${zonaId}/`;
}
