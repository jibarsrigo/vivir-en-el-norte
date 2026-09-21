export function euros(n: number | null | undefined): string {
  if (n == null) return "—";
  return `${n.toLocaleString("es-ES")} €`;
}

export function eurosM2(n: number | null | undefined): string {
  if (n == null) return "—";
  return `${n.toLocaleString("es-ES")} €/m²`;
}
