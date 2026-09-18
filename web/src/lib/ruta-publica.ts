/**
 * Prefijo de assets en GitHub Pages (`NEXT_PUBLIC_BASE=/vivir-en-el-norte`).
 * next/image con `unoptimized` no siempre aplica basePath a src absolutos.
 */
export function rutaPublica(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE || "";
  if (!path.startsWith("/") || !base) return path;
  if (path === base || path.startsWith(`${base}/`)) return path;
  return `${base}${path}`;
}
