/** Idealista congelado: URL embebida en el snapshot V2 (no lee lib/idealista en vivo). */
export default function V2EnlaceIdealista({
  url,
  nombre,
}: {
  url?: string | null;
  nombre: string;
}) {
  if (!url) return null;

  const etiqueta = `Ver casas en venta en ${nombre}`;

  return (
    <p className="mt-4 max-w-2xl text-[17px] leading-relaxed">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-[var(--acento)] underline-offset-2 hover:underline"
      >
        {etiqueta}
      </a>
      <span className="text-[var(--tinta-suave)]"> — en Idealista (se abre en otra pestaña).</span>
    </p>
  );
}
