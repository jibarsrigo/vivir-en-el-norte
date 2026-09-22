import Link from "next/link";
import { notFound } from "next/navigation";
import V1RelatoZona from "@/components/V1RelatoZona";
import {
  actualHrefZona,
  loadV1Zona,
  v1HrefMunicipio,
  v1MunicipiosDeZona,
  v1Zonas,
} from "@/lib/v1";

export function generateStaticParams() {
  return v1Zonas.map((z) => ({ id: z.zonaId }));
}

export default async function PaginaV1Zona({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const doc = loadV1Zona(id);
  if (!doc) notFound();
  const muns = v1MunicipiosDeZona(id);

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
        <span className="rounded bg-[var(--linea)]/40 px-1.5 py-0.5 text-xs">
          V1 · versión original archivada
        </span>
      </p>
      <h1 className="mt-2 font-[family-name:var(--font-serif)] text-4xl text-[var(--acento)]">
        {doc.nombre}
      </h1>
      <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
        <Link
          href={actualHrefZona(id)}
          className="font-semibold text-[var(--acento)] underline-offset-2 hover:underline"
        >
          Ver versión actual
        </Link>
        <Link href="/v1/" className="underline-offset-2 hover:underline text-[var(--tinta-suave)]">
          Índice V1
        </Link>
      </p>

      <V1RelatoZona blocks={doc.blocks} />

      <section className="mt-12 max-w-2xl">
        <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">
          Municipios (V1)
        </h2>
        <ul className="mt-3 space-y-1">
          {muns.map((m) => (
            <li key={m.slug}>
              <Link
                href={v1HrefMunicipio(id, m.slug)}
                className="underline-offset-2 hover:underline"
              >
                {m.nombre}
              </Link>
              {doc.escalas[m.nombre] ? (
                <span className="ml-2 text-sm text-[var(--tinta-suave)]">
                  {doc.escalas[m.nombre]}
                </span>
              ) : null}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-[var(--tinta-suave)]">
          Nota de archivo: la tabla de precios y el cierre comparativo de la página original eran
          widgets en vivo; aquí se conserva la prosa histórica y el listado V1 de municipios.
        </p>
      </section>
    </main>
  );
}
