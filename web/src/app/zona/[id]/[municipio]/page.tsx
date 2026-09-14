import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import RelatoMunicipio from "@/components/RelatoMunicipio";
import { municipiosBaixoMino, municipioPorSlug } from "@/lib/municipios";
import { zonaPorId } from "@/lib/zonas";

export function generateStaticParams() {
  return municipiosBaixoMino.map((m) => ({ id: "baixo-mino", municipio: m.slug }));
}

export default async function PaginaMunicipio({
  params,
}: {
  params: Promise<{ id: string; municipio: string }>;
}) {
  const { id, municipio } = await params;
  if (id !== "baixo-mino") notFound();
  const z = zonaPorId(id);
  const ficha = municipioPorSlug(municipio);
  if (!z || !ficha) notFound();

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <p className="text-sm text-[var(--tinta-suave)]">
        <Link href="/" className="underline-offset-2 hover:underline">
          Vivir en el norte
        </Link>
        {" · "}
        <Link href={`/zona/${z.id}/`} className="underline-offset-2 hover:underline">
          {z.zona}
        </Link>
      </p>
      <h1 className="mt-2 font-[family-name:var(--font-serif)] text-4xl text-[var(--acento)]">
        {ficha.municipio}
      </h1>
      <p className="mt-2 text-[var(--tinta-suave)]">
        {ficha.provincia} · franja {ficha.franja} · {ficha.minCosta} min al mar
      </p>

      <figure className="mt-6 overflow-hidden rounded-xl border border-[var(--linea)] bg-white">
        <Image
          src={`/mapas/municipios/${ficha.mapa}`}
          alt={`Mapa de ${ficha.municipio}`}
          width={811}
          height={791}
          className="h-auto w-full"
        />
        <figcaption className="px-3 py-2 text-sm text-[var(--tinta-suave)]">{ficha.municipio}</figcaption>
      </figure>

      <RelatoMunicipio ficha={ficha} />
    </main>
  );
}
