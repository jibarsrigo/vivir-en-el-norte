import Link from "next/link";
import FotoIdentidadCabecera from "@/components/FotoIdentidadCabecera";
import { RELATO_MUNICIPIOS } from "@/components/RelatoMunicipio";
import type { FichaMunicipio } from "@/lib/municipios";

/**
 * Cabecera de ficha: nombre + provincia + Comparar, con la misma
 * foto de identidad que «Para decidirte» (miniatura, no hero).
 */
export default function CabeceraFichaMunicipio({
  ficha,
  zonaId,
  zonaNombre,
  titulo,
  comparaHref,
}: {
  ficha: FichaMunicipio;
  zonaId: string;
  zonaNombre: string;
  /** Título público opcional (p. ej. Nuevo2 Soto / San Juan). */
  titulo?: string;
  /** Href opcional de «Comparar con…» (p. ej. bandeja con vecinos de zona). */
  comparaHref?: string;
}) {
  const relato = RELATO_MUNICIPIOS[ficha.slug];
  const foto = relato?.fotoIdentidad ?? relato?.fotosAbrir[0];

  return (
    <>
      <p className="text-sm text-[var(--tinta-suave)]">
        <Link href="/" className="underline-offset-2 hover:underline">
          Inicio
        </Link>
        {" · "}
        <Link href={`/zona/${zonaId}/`} className="underline-offset-2 hover:underline">
          {zonaNombre}
        </Link>
      </p>

      <div className="mt-2 flex items-start gap-3 sm:gap-4">
        <div className="shrink-0">
          {foto ? <FotoIdentidadCabecera src={foto.src} pie={foto.pie} /> : null}
          <p className="mt-6">
            <Link
              href={comparaHref ?? `/compara/?con=${ficha.slug}`}
              className="inline-flex w-fit items-center rounded-lg border border-[var(--linea)] bg-white px-3 py-1.5 font-[family-name:var(--font-serif)] text-sm font-semibold text-[var(--acento)] no-underline shadow-sm hover:bg-[var(--papel)]"
            >
              Comparar con…
            </Link>
          </p>
        </div>

        <div className="min-w-0 flex-1">
          <h1 className="font-[family-name:var(--font-serif)] text-3xl text-[var(--acento)] sm:text-4xl">
            {titulo ?? ficha.municipio}
          </h1>
          <p className="mt-1 text-[var(--tinta-suave)] sm:mt-2">{ficha.provincia}</p>
        </div>
      </div>
    </>
  );
}
