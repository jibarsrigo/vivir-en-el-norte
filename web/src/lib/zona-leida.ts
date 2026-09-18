const PREFIJO = "ven-zona-leida:";

export function claveZonaLeida(zonaId: string): string {
  return `${PREFIJO}${zonaId}`;
}

export function esZonaLeida(zonaId: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(claveZonaLeida(zonaId)) === "1";
  } catch {
    return false;
  }
}

export function marcarZonaLeida(zonaId: string): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(claveZonaLeida(zonaId), "1");
  } catch {
    /* ignore */
  }
}
