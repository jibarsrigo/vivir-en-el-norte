import { LEYENDA_COSTA, htmlIconoCosta, htmlIconoPlaya } from "@/lib/mar";

function IconoCosta({ tramo }: { tramo: (typeof LEYENDA_COSTA)[number]["id"] }) {
  return (
    <span
      className="inline-flex shrink-0"
      dangerouslySetInnerHTML={{ __html: htmlIconoCosta(tramo, "pueblo") }}
    />
  );
}

export function LeyendaMar({ compacta = false }: { compacta?: boolean }) {
  if (compacta) {
    return (
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">
          Mar
        </p>
        <ul className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] text-[var(--tinta)]">
          {LEYENDA_COSTA.map((c) => (
            <li key={c.id} className="flex items-center gap-1">
              <IconoCosta tramo={c.id} />
              <span className="font-semibold leading-none">{c.etiqueta}</span>
            </li>
          ))}
          <li className="flex items-center gap-1">
            <span
              className="inline-flex shrink-0"
              dangerouslySetInnerHTML={{ __html: htmlIconoPlaya("pueblo") }}
            />
            <span className="font-semibold leading-none">Baño</span>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className="min-w-0">
      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">
        Mar
      </p>
      <ul className="mt-1.5 flex flex-wrap gap-x-3 gap-y-0.5 text-sm text-[var(--tinta)]">
        {LEYENDA_COSTA.map((c) => (
          <li key={c.id} className="flex items-center gap-1.5">
            <IconoCosta tramo={c.id} />
            <span className="leading-tight font-semibold">{c.etiqueta}</span>
          </li>
        ))}
      </ul>
      <p className="mt-1 flex items-start gap-1.5 text-[11px] leading-snug text-[var(--tinta-suave)]">
        <span
          className="mt-0.5 inline-flex shrink-0"
          dangerouslySetInnerHTML={{ __html: htmlIconoPlaya("pueblo") }}
        />
        <span>
          Icono de baño en el mapa (sin nombre; al pasar el ratón). Tabla: minutos a costa y a
          baño; con + mar, el nombre de la playa.
        </span>
      </p>
    </div>
  );
}
