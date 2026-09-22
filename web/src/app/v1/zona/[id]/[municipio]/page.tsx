import Link from "next/link";
import { notFound } from "next/navigation";
import V1RelatoMunicipio from "@/components/V1RelatoMunicipio";
import {
  actualHrefMunicipio,
  loadV1Municipio,
  v1HrefZona,
  v1Municipios,
} from "@/lib/v1";

export function generateStaticParams() {
  return v1Municipios.map((m) => ({
    id: m.zonaId,
    municipio: m.slug,
  }));
}

export default async function PaginaV1Municipio({
  params,
}: {
  params: Promise<{ id: string; municipio: string }>;
}) {
  const { id, municipio } = await params;
  const doc = loadV1Municipio(municipio);
  if (!doc || doc.zonaId !== id) notFound();

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <p className="text-sm text-[var(--tinta-suave)]">
        <Link href="/" className="underline-offset-2 hover:underline">
          Inicio
        </Link>
        {" · "}
        <Link href="/v1/" className="underline-offset-2 hover:underline">
          V1
        </Link>
        {" · "}
        <Link href={v1HrefZona(id)} className="underline-offset-2 hover:underline">
          {doc.zonaNombre}
        </Link>
        {" · "}
        <span className="rounded bg-[var(--linea)]/40 px-1.5 py-0.5 text-xs">
          V1 · versión original archivada
        </span>
      </p>
      <h1 className="mt-2 font-[family-name:var(--font-serif)] text-4xl text-[var(--acento)]">
        {doc.nombre}
      </h1>
      {doc.provincia ? (
        <p className="mt-2 text-[var(--tinta-suave)]">{doc.provincia}</p>
      ) : null}
      <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
        <Link
          href={actualHrefMunicipio(id, municipio)}
          className="font-semibold text-[var(--acento)] underline-offset-2 hover:underline"
        >
          Ver versión actual
        </Link>
        <Link
          href={v1HrefZona(id)}
          className="underline-offset-2 hover:underline text-[var(--tinta-suave)]"
        >
          Zona V1
        </Link>
      </p>

      <V1RelatoMunicipio relato={doc.relato} />
    </main>
  );
}
