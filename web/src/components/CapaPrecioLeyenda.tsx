import { LEYENDA_PRECIO, htmlIconoPrecio } from "@/lib/precio";

function Icono({ tramo }: { tramo: (typeof LEYENDA_PRECIO)[number]["id"] }) {
  return (
    <span
      className="inline-flex shrink-0"
      dangerouslySetInnerHTML={{ __html: htmlIconoPrecio(tramo, "pueblo") }}
    />
  );
}

export function LeyendaPrecio({ compacta = false }: { compacta?: boolean }) {
  if (compacta) {
    return (
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">
          Precio
        </p>
        <ul className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] text-[var(--tinta)]">
          {LEYENDA_PRECIO.map((c) => (
            <li key={c.id} className="flex items-center gap-1">
              <Icono tramo={c.id} />
              <span className="font-semibold leading-none">{c.etiqueta}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="min-w-0">
      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">
        Precio
      </p>
      <ul className="mt-1.5 flex flex-wrap gap-x-3 gap-y-0.5 text-sm text-[var(--tinta)]">
        {LEYENDA_PRECIO.map((c) => (
          <li key={c.id} className="flex items-center gap-1.5">
            <Icono tramo={c.id} />
            <span className="leading-tight font-semibold">{c.etiqueta}</span>
          </li>
        ))}
      </ul>
      <p className="mt-1 text-[11px] leading-snug text-[var(--tinta-suave)]">
        Metro cuadrado y, si hay dato, casa de 3 habitaciones en franja asequible. Detalle en tabla y
        globo.
      </p>
    </div>
  );
}
