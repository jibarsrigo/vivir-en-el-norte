import { LEYENDA_CIELO, htmlIconoCielo } from "@/lib/clima";

function Icono({
  cielo,
  tamano,
}: {
  cielo: (typeof LEYENDA_CIELO)[number]["id"];
  tamano: "zona" | "pueblo";
}) {
  return (
    <span
      className="inline-flex shrink-0"
      dangerouslySetInnerHTML={{ __html: htmlIconoCielo(cielo, tamano) }}
    />
  );
}

export function LeyendaClima({ compacta = false }: { compacta?: boolean }) {
  if (compacta) {
    return (
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">
          Clima
        </p>
        <ul className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] text-[var(--tinta)]">
          {LEYENDA_CIELO.map((c) => (
            <li key={c.id} className="flex items-center gap-1">
              <Icono cielo={c.id} tamano="pueblo" />
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
        Clima
      </p>
      <ul className="mt-1.5 grid grid-cols-2 gap-x-3 gap-y-0.5 text-sm text-[var(--tinta)]">
        {LEYENDA_CIELO.map((c) => (
          <li key={c.id} className="flex items-center gap-1.5">
            <Icono cielo={c.id} tamano="pueblo" />
            <span className="leading-tight font-semibold">{c.etiqueta}</span>
          </li>
        ))}
      </ul>
      <p className="mt-1 text-[11px] leading-snug text-[var(--tinta-suave)]">
        Sol ≥2.400 h ≤120 lluvia · Sol y nubes ≥2.200 h ≤130 · Nubes ≥1.850 h · Lluvia
        &lt;1.850 h
      </p>
    </div>
  );
}
