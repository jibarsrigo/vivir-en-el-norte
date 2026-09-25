import type { Metadata } from "next";
import Link from "next/link";
import { CANDIDATAS_ASTURIAS_CENTRO } from "@/data/fotos-candidatas-asturias-centro";
import { CANDIDATAS_BAIXO_MINO } from "@/data/fotos-candidatas-baixo-mino";
import { SLOT_ETIQUETA, type SlotFoto } from "@/lib/fotos-plantilla-municipio";
import {
  municipiosAsturiasCentro,
  municipiosBaixoMino,
} from "@/lib/municipios";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Fotos nuevas (revisión)",
  robots: { index: false, follow: false },
};

type Foto = {
  slot: SlotFoto;
  src: string;
  pie: string;
};

function grupos(
  fichas: { slug: string; municipio: string }[],
  candidatas: Record<string, { slot: SlotFoto; src: string; pie: string }[]>,
): { municipio: string; fotos: Foto[] }[] {
  return fichas
    .map((f) => ({
      municipio: f.municipio,
      fotos: (candidatas[f.slug] ?? []).map((c) => ({
        slot: c.slot,
        src: c.src,
        pie: c.pie,
      })),
    }))
    .filter((g) => g.fotos.length > 0);
}

/** Solo foto + leyenda, para revisar si encajan antes de colocarlas. */
export default function FotosCandidatasPage() {
  const bloques = [
    ...grupos(municipiosBaixoMino, CANDIDATAS_BAIXO_MINO),
    ...grupos(municipiosAsturiasCentro, CANDIDATAS_ASTURIAS_CENTRO),
  ];

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <p className="text-sm text-[var(--tinta-suave)]">
        <Link href="/" className="underline-offset-2 hover:underline">
          Inicio
        </Link>
      </p>

      <h1 className="mt-4 font-[family-name:var(--font-serif)] text-3xl text-[var(--acento)]">
        Fotos nuevas
      </h1>
      <p className="mt-2 text-[17px] text-[var(--tinta-suave)]">
        Todas las buscadas para incorporar. Mira si la imagen corresponde a la
        leyenda.
      </p>

      {bloques.map((bloque) => (
        <section key={bloque.municipio} className="mt-12">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">
            {bloque.municipio}
          </h2>
          <ul className="mt-6 space-y-10">
            {bloque.fotos.map((foto) => (
              <li key={foto.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={foto.src}
                  alt={foto.pie}
                  className="w-full object-cover"
                />
                <p className="mt-2 text-[16px] leading-snug">{foto.pie}</p>
                <p className="mt-0.5 text-sm text-[var(--tinta-suave)]">
                  Para: {SLOT_ETIQUETA[foto.slot]}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
