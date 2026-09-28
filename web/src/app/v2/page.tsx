import Link from "next/link";
import {
  v2HrefMunicipio,
  v2HrefZona,
  v2Manifest,
  v2MunicipiosDeZona,
  v2Zonas,
} from "@/lib/v2";

export default function PaginaV2Indice() {
  const { counts, sourceTag, sourceCommit } = v2Manifest;
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <p className="text-sm text-[var(--tinta-suave)]">
        <Link href="/" className="underline-offset-2 hover:underline">
          Inicio
        </Link>
        {" · "}
        <span>V2</span>
      </p>
      <h1 className="mt-2 font-[family-name:var(--font-serif)] text-4xl text-[var(--acento)]">
        V2 · CURRENT congelado
      </h1>
      <p className="mt-3 max-w-2xl text-[17px] leading-relaxed text-[var(--tinta-suave)]">
        Archivo de la versión CURRENT tal como estaba al crear V2, antes del cutover a NUEVO2. Se
        conserva para consulta y comparación. No se actualiza al seguir desarrollando NUEVO2.
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
        {v2Zonas.map((z) => {
          const muns = v2MunicipiosDeZona(z.zonaId);
          return (
            <section key={z.zonaId}>
              <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">
                <Link href={v2HrefZona(z.zonaId)} className="underline-offset-2 hover:underline">
                  {z.nombre}
                </Link>
              </h2>
              <ul className="mt-2 columns-1 gap-x-8 sm:columns-2 md:columns-3">
                {muns.map((m) => (
                  <li key={m.slug} className="break-inside-avoid py-0.5 text-[15px]">
                    <Link
                      href={v2HrefMunicipio(z.zonaId, m.slug)}
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
