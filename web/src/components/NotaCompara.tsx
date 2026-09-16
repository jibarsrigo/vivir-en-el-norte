"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { municipioPorSlug } from "@/lib/municipios";
import EnlaceIdealista from "@/components/EnlaceIdealista";

export default function NotaCompara() {
  const con = useSearchParams().get("con");
  const ficha = con ? municipioPorSlug(con) : undefined;

  return (
    <div className="mt-4 max-w-2xl space-y-6 text-lg leading-relaxed text-[var(--tinta)]">
      <p>
        {ficha
          ? `Aquí se podrá comparar ${ficha.municipio} con otro pueblo: clima, mar y servicios, uno al lado del otro.`
          : "Aquí se podrán marcar dos pueblos —Foz y Viveiro, por ejemplo— y ver clima, mar y servicios uno al lado del otro."}{" "}
        La comparación la definimos en un siguiente paso.
      </p>
      <section>
        <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">
          Mercado
        </h2>
        <p className="mt-2">
          Mientras tanto, en cada ficha de Baixo Miño (sección Casa) hay un enlace a la búsqueda de
          Idealista de ese pueblo. También desde la{" "}
          <Link href="/zona/baixo-mino/" className="font-semibold text-[var(--acento)] underline-offset-2 hover:underline">
            zona Baixo Miño
          </Link>
          .
        </p>
        {ficha ? (
          <EnlaceIdealista ambito="municipio" slug={ficha.slug} nombre={ficha.municipio} />
        ) : (
          <EnlaceIdealista ambito="zona" zonaId="baixo-mino" nombre="Baixo Miño" />
        )}
      </section>
    </div>
  );
}
