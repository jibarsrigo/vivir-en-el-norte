import Link from "next/link";
import { notFound } from "next/navigation";
import BloqueZonaFicha from "@/components/BloqueZonaFicha";
import FichaCapa2026 from "@/components/FichaCapa2026";
import MapaMunicipioFicha from "@/components/MapaMunicipioFicha";
import RelatoMunicipio from "@/components/RelatoMunicipio";
import { municipiosFicha, municipioPorSlug, zonaIdDeFicha } from "@/lib/municipios";
import { resumenZona } from "@/lib/zona-resumen";
import { zonaPorId } from "@/lib/zonas";

export function generateStaticParams() {
  return municipiosFicha.map((m) => ({
    id: zonaIdDeFicha(m),
    municipio: m.slug,
  }));
}

export default async function PaginaMunicipio({
  params,
}: {
  params: Promise<{ id: string; municipio: string }>;
}) {
  const { id, municipio } = await params;
  const z = zonaPorId(id);
  const ficha = municipioPorSlug(municipio);
  if (!z || !ficha || zonaIdDeFicha(ficha) !== id) notFound();

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <p className="text-sm text-[var(--tinta-suave)]">
        <Link href="/" className="underline-offset-2 hover:underline">
          Inicio
        </Link>
        {" · "}
        <Link href={`/zona/${z.id}/`} className="underline-offset-2 hover:underline">
          {z.zona}
        </Link>
      </p>
      <h1 className="mt-2 font-[family-name:var(--font-serif)] text-4xl text-[var(--acento)]">
        {ficha.municipio}
      </h1>
      <p className="mt-2 text-[var(--tinta-suave)]">{ficha.provincia}</p>
      <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
        <Link
          href={`/compara/?con=${ficha.slug}`}
          className="text-sm font-semibold text-[var(--acento)] underline-offset-2 hover:underline"
        >
          Comparar con…
        </Link>
        <Link
          href={`/v1/zona/${z.id}/${ficha.slug}/`}
          className="text-sm text-[var(--tinta-suave)] underline-offset-2 hover:underline"
        >
          V1
        </Link>
      </p>

      <BloqueZonaFicha zonaId={z.id} nombreZona={z.zona} resumen={resumenZona(z.id)} />

      {/* Mapa arriba + pastilla de capas (= portada con todas las capas de mapa). */}
      <MapaMunicipioFicha ficha={ficha} capasPortada={Boolean(ficha.mapa)} />

      <FichaCapa2026 ficha={ficha} />

      <RelatoMunicipio ficha={ficha} zonaId={z.id} />
    </main>
  );
}
