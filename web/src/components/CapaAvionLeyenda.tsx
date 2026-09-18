import { LEYENDA_AVION, htmlIconoAeropuerto, htmlIconoAvion } from "@/lib/avion";

function IconoAvion({ tramo }: { tramo: (typeof LEYENDA_AVION)[number]["id"] }) {
  return (
    <span
      className="inline-flex shrink-0"
      dangerouslySetInnerHTML={{ __html: htmlIconoAvion(tramo, "pueblo") }}
    />
  );
}

export function LeyendaAvion({ compacta = false }: { compacta?: boolean }) {
  if (compacta) {
    return (
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">
          Avión
        </p>
        <ul className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] text-[var(--tinta)]">
          <li className="flex items-center gap-1">
            <span
              className="inline-flex shrink-0"
              dangerouslySetInnerHTML={{ __html: htmlIconoAeropuerto("pueblo") }}
            />
            <span className="font-semibold leading-none">Aeropuerto</span>
          </li>
          {LEYENDA_AVION.map((c) => (
            <li key={c.id} className="flex items-center gap-1">
              <IconoAvion tramo={c.id} />
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
        Avión
      </p>
      <ul className="mt-1.5 flex flex-wrap gap-x-3 gap-y-0.5 text-sm text-[var(--tinta)]">
        <li className="flex items-center gap-1.5">
          <span
            className="inline-flex shrink-0"
            dangerouslySetInnerHTML={{ __html: htmlIconoAeropuerto("pueblo") }}
          />
          <span className="leading-tight font-semibold">Aeropuerto</span>
        </li>
        {LEYENDA_AVION.map((c) => (
          <li key={c.id} className="flex items-center gap-1.5">
            <IconoAvion tramo={c.id} />
            <span className="leading-tight font-semibold">{c.etiqueta}</span>
          </li>
        ))}
      </ul>
      <p className="mt-1 text-[11px] leading-snug text-[var(--tinta-suave)]">
        En el mapa: ubicación de cada aeropuerto y, en el pueblo, minutos hasta el más cercano.
        Palma (vuelo directo) va en la tabla y en el globo al pasar el ratón.
      </p>
    </div>
  );
}
