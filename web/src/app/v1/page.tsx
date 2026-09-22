import Link from "next/link";
import {
  v1HrefMunicipio,
  v1HrefZona,
  v1Manifest,
  v1MunicipiosDeZona,
  v1Zonas,
} from "@/lib/v1";

export default function PaginaV1Indice() {
  const { counts, sourceTag, sourceCommit } = v1Manifest;
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <p className="text-sm text-[var(--tinta-suave)]">
        <Link href="/" className="underline-offset-2 hover:underline">
          Inicio
        </Link>
        {" · "}
        <span>V1</span>
      </p>
      <h1 className="mt-2 font-[family-name:var(--font-serif)] text-4xl text-[var(--acento)]">
        V1 · versión original
      </h1>
      <p className="mt-3 max-w-2xl text-[17px] leading-relaxed text-[var(--tinta-suave)]">
        Archivo de la versión anterior a la revisión 2026. Se conserva para consulta y comparación.
        No forma parte de la experiencia principal; los textos aquí no se actualizan con la capa
        factual vigente.
      </p>
      <p className="mt-2 text-sm text-[var(--tinta-suave)]">
        {counts.zonas} zonas / {counts.municipios} lugares · fuente {sourceTag} (
        <code className="text-xs">{sourceCommit.slice(0, 7)}</code>)
      </p>
      <p className="mt-4">
        <Link href="/" className="text-sm font-semibold text-[var(--acento)] underline-offset-2 hover:underline">
          Volver a la versión actual
        </Link>
      </p>

      <div className="mt-10 space-y-8">
        {v1Zonas.map((z) => {
          const muns = v1MunicipiosDeZona(z.zonaId);
          return (
            <section key={z.zonaId}>
              <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">
                <Link href={v1HrefZona(z.zonaId)} className="underline-offset-2 hover:underline">
                  {z.nombre}
                </Link>
              </h2>
              <ul className="mt-2 columns-1 gap-x-8 sm:columns-2 md:columns-3">
                {muns.map((m) => (
                  <li key={m.slug} className="break-inside-avoid py-0.5 text-[15px]">
                    <Link
                      href={v1HrefMunicipio(z.zonaId, m.slug)}
                      className="underline-offset-2 hover:underline"
                    >
                      {m.nombre}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </main>
  );
}
