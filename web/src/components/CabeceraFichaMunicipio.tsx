import Image from "next/image";
import Link from "next/link";
import { RELATO_MUNICIPIOS } from "@/components/RelatoMunicipio";
import { objectPositionIdentidad } from "@/lib/encuadre-identidad";
import type { FichaMunicipio } from "@/lib/municipios";
import { rutaPublica } from "@/lib/ruta-publica";

/**
 * Cabecera de ficha: nombre + provincia + Comparar, con la misma
 * foto de identidad que «Para decidirte» (miniatura, no hero).
 */
export default function CabeceraFichaMunicipio({
  ficha,
  zonaId,
  zonaNombre,
}: {
  ficha: FichaMunicipio;
  zonaId: string;
  zonaNombre: string;
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
          {foto ? (
            <figure className="h-24 w-40 overflow-hidden rounded-lg border border-[var(--linea)] bg-white shadow-sm sm:h-32 sm:w-56">
              <Image
                src={rutaPublica(foto.src)}
                alt={foto.pie}
                width={224}
                height={128}
                className="h-full w-full object-cover"
                style={{ objectPosition: objectPositionIdentidad(foto.src) }}
                sizes="224px"
                priority
              />
            </figure>
          ) : null}
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
        </div>
      </div>
    </>
  );
}
