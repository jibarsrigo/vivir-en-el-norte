import Link from "next/link";
import TablaComparativaZona from "@/components/TablaComparativaZona";
import type { FichaMunicipio } from "@/lib/municipios";

/**
 * Cierre homogéneo de página de zona: tabla de notas 1–10 + escala de cada pueblo.
 */
export default function MunicipiosZonaFin({
  zonaId,
  municipios,
  escalas,
}: {
  zonaId: string;
  municipios: FichaMunicipio[];
  /** Etiqueta de escala por nombre de municipio (Villa, Isla, …). */
  escalas: Record<string, string>;
}) {
  return (
    <section className="mt-12 max-w-3xl">
      <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">
        Municipios
      </h2>
      <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
        Las notas permiten comparar de un vistazo. Debajo de cada nombre, la escala dice si la vida
        diaria es de villa, ciudad, isla o casas entre viñas.
      </p>
      <TablaComparativaZona
        municipios={municipios}
        zonaId={zonaId}
        escalas={escalas}
      />
      <ul className="mt-4 divide-y divide-[var(--linea)] overflow-hidden rounded-xl border border-[var(--linea)] bg-white">
        {municipios.map((m) => (
          <li key={m.slug}>
            <Link
              href={`/zona/${zonaId}/${m.slug}/`}
              className="flex min-h-[4.5rem] touch-manipulation flex-col gap-1 px-4 py-4 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <span className="font-[family-name:var(--font-serif)] text-xl text-[var(--acento)]">
                {m.municipio}
              </span>
              <span className="text-sm text-[var(--tinta-suave)]">
                {escalas[m.municipio] ?? ""}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
