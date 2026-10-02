import Link from "next/link";
import { notFound } from "next/navigation";
import FichaCapa2026 from "@/components/FichaCapa2026";
import FotoIdentidadCabecera from "@/components/FotoIdentidadCabecera";
import MapaMunicipioFicha from "@/components/MapaMunicipioFicha";
import V2BloqueZonaFicha from "@/components/V2BloqueZonaFicha";
import V2RelatoMunicipio from "@/components/V2RelatoMunicipio";
import {
  actualHrefMunicipio,
  loadV2Municipio,
  v2HrefZona,
  v2Municipios,
} from "@/lib/v2";

export function generateStaticParams() {
  return v2Municipios.map((m) => ({
    id: m.zonaId,
    municipio: m.slug,
  }));
}

export default async function PaginaV2Municipio({
  params,
}: {
  params: Promise<{ id: string; municipio: string }>;
}) {
  const { id, municipio } = await params;
  const doc = loadV2Municipio(municipio);
  if (!doc || doc.zonaId !== id) notFound();

  const ficha = doc.ficha;
  const relato = doc.relato;
  const foto = relato.fotoIdentidad ?? relato.fotosAbrir[0];

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <p className="text-sm text-[var(--tinta-suave)]">
        <Link href="/" className="underline-offset-2 hover:underline">
          Inicio
        </Link>
        {" · "}
        <Link href="/v2/" className="underline-offset-2 hover:underline">
          V2
        </Link>
        {" · "}
        <Link href={v2HrefZona(id)} className="underline-offset-2 hover:underline">
          {doc.zonaNombre}
        </Link>
        {" · "}
        <span className="rounded bg-[var(--linea)]/40 px-1.5 py-0.5 text-xs">
          V2 · CURRENT congelado
        </span>
      </p>

      <div className="mt-2 flex items-start gap-3 sm:gap-4">
        <div className="shrink-0">
          {foto ? <FotoIdentidadCabecera src={foto.src} pie={foto.pie} /> : null}
          <p className="mt-6">
            <Link
              href={`/compara/?con=${ficha.slug}`}
              className="inline-flex w-fit items-center rounded-lg border border-[var(--linea)] bg-white px-3 py-1.5 font-[family-name:var(--font-serif)] text-sm font-semibold text-[var(--acento)] no-underline shadow-sm hover:bg-[var(--papel)]"
            >
              Comparar con…
            </Link>
          </p>
        </div>

        <div className="min-w-0 flex-1">
          <h1 className="font-[family-name:var(--font-serif)] text-3xl text-[var(--acento)] sm:text-4xl">
            {ficha.municipio}
          </h1>
          <p className="mt-1 text-[var(--tinta-suave)] sm:mt-2">{ficha.provincia}</p>
          <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <Link
              href={actualHrefMunicipio(id, municipio)}
              className="font-semibold text-[var(--acento)] underline-offset-2 hover:underline"
            >
              Ver versión actual
            </Link>
            <Link
              href={v2HrefZona(id)}
              className="underline-offset-2 hover:underline text-[var(--tinta-suave)]"
            >
              Zona V2
            </Link>
          </p>
        </div>
      </div>

      <V2BloqueZonaFicha
        zonaId={id}
        nombreZona={doc.zonaNombre}
        resumen={doc.resumenZona}
      />

      <MapaMunicipioFicha ficha={ficha} capasPortada={Boolean(ficha.mapa)} />

      <FichaCapa2026 ficha={ficha} />

      <V2RelatoMunicipio
        relato={relato}
        ficha={ficha}
        zonaId={id}
        vecinos={doc.fichasZona}
        escalas={doc.escalasZona}
        idealistaUrl={doc.idealistaUrl}
      />
    </main>
  );
}
