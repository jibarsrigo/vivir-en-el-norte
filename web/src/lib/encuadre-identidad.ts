/**
 * Encuadre vertical del banner de «Para decidirte» (object-position Y %).
 * Criterio: priorizar casas + un poco de agua, o casas + verde/monte.
 * Clave = nombre del archivo sin «-identidad» (p. ej. a-guarda).
 */
export const ENCUADRE_IDENTIDAD_Y: Record<string, number> = {
  "a-guarda": 30,
  "a-pobra-do-caraminal": 36,
  "a-coruna": 48,
  "afife-carreco": 40,
  "baiona": 40,
  "barreiros": 40,
  "bergondo": 45,
  "cambados": 42,
  "cangas": 42,
  "castropol": 40,
  "cervo": 35,
  "colunga": 38,
  "comillas": 35,
  "cudillero": 35,
  "cudillero-pueblo": 35,
  "esposende": 45,
  "gondomar": 42,
  "laredo": 45,
  "liencres-pielagos": 45,
  "llanes": 48,
  "meano": 40,
  "moana": 42,
  "moledo": 42,
  "muros-de-nalon": 40,
  "nigran": 42,
  "noia": 42,
  "o-rosal": 45,
  "o-vicedo": 38,
  "oia": 38,
  "oleiros": 40,
  "porto-do-son": 40,
  "rianxo": 42,
  "ribadeo": 38,
  "ribadesella": 40,
  "salinas-castrillon": 38,
  "san-vicente": 40,
  "santander": 40,
  "santona": 42,
  "sanxenxo": 45,
  "suances": 42,
  "tui": 42,
  "vila-nova-de-cerveira": 40,
  "vilagarcia-de-arousa": 40,
  "vilanova-de-arousa": 42,
  "viveiro": 40,
};

/** object-position CSS para el banner polaroid a partir del src de la foto. */
export function objectPositionIdentidad(src: string | undefined | null): string {
  if (!src) return "50% 40%";
  const file = src.split("/").pop() ?? "";
  const base =
    file.replace(/-identidad\.(jpe?g|png|webp)$/i, "").replace(/\.(jpe?g|png|webp)$/i, "") ||
    "";
  const y = ENCUADRE_IDENTIDAD_Y[base] ?? 40;
  return `50% ${y}%`;
}
