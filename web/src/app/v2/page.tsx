import Link from "next/link";
import {
  v2HrefMunicipio,
  v2HrefZona,
  v2Manifest,
  v2MunicipiosDeZona,
  v2Zonas,
} from "@/lib/v2";
import { comunidadDeZona, zonaPorId, type ComunidadId } from "@/lib/zonas";

const COMUNIDADES: { id: ComunidadId; nombre: string }[] = [
  { id: "galicia", nombre: "Galicia" },
  { id: "asturias", nombre: "Asturias" },
  { id: "cantabria", nombre: "Cantabria" },
  { id: "portugal", nombre: "Portugal" },
];

function comunidadDeZonaId(zonaId: string): ComunidadId {
  const z = zonaPorId(zonaId);
  return z ? comunidadDeZona(z) : "galicia";
}

export default function PaginaV2Indice() {
  const { counts, sourceTag, sourceCommit } = v2Manifest;

  const porComunidad = COMUNIDADES.map((c) => {
    const zonas = v2Zonas.filter((z) => comunidadDeZonaId(z.zonaId) === c.id);
    const nMunicipios = zonas.reduce(
      (acc, z) => acc + v2MunicipiosDeZona(z.zonaId).length,
      0,
    );
    return { ...c, zonas, nMunicipios };
  }).filter((c) => c.zonas.length > 0);

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 pb-20">
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
        {counts.zonas} zonas / {counts.municipios} municipios · fuente {sourceTag} (
        <code className="text-xs">{sourceCommit.slice(0, 7)}</code>)
      </p>
      <p className="mt-4">
        <Link href="/" className="text-sm font-semibold text-[var(--acento)] underline-offset-2 hover:underline">
          Volver a la versión actual
        </Link>
      </p>

      <div className="mt-10 space-y-12">
        {porComunidad.map((c) => (
          <section key={c.id}>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl text-[var(--acento)]">
              {c.nombre}
              <span className="ml-2 text-base font-normal text-[var(--tinta-suave)]">
                ({c.nMunicipios})
              </span>
            </h2>
            <ol className="mt-4 list-none space-y-5 p-0">
              {c.zonas.map((z) => {
                const muns = v2MunicipiosDeZona(z.zonaId);
                return (
                  <li key={z.zonaId}>
                    <h3 className="font-[family-name:var(--font-serif)] text-xl text-[var(--acento)]">
                      <Link
                        href={v2HrefZona(z.zonaId)}
                        className="underline-offset-2 hover:underline"
                      >
                        {z.nombre}
                      </Link>
                      <span className="ml-2 text-sm font-normal text-[var(--tinta-suave)]">
                        ({muns.length})
                      </span>
                    </h3>
                    <p className="mt-1 text-[15px] leading-relaxed">
                      {muns.map((m, i) => (
                        <span key={m.slug}>
                          {i > 0 ? " · " : null}
                          <Link
                            href={v2HrefMunicipio(z.zonaId, m.slug)}
                            className="underline-offset-2 hover:underline"
                          >
                            {m.nombre}
                          </Link>
                        </span>
                      ))}
                    </p>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>
    </main>
  );
}
