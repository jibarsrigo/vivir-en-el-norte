"use client";

import Image from "next/image";
import { useState } from "react";
import LightboxImagen, { PistaAmpliar } from "@/components/LightboxImagen";
import { objectPositionIdentidad } from "@/lib/encuadre-identidad";
import { rutaPublica } from "@/lib/ruta-publica";

type Props = {
  src: string;
  pie: string;
};

/**
 * Miniatura de identidad en cabecera de ficha: clic → vista ampliada.
 */
export default function FotoIdentidadCabecera({ src, pie }: Props) {
  const [abierta, setAbierta] = useState(false);

  return (
    <>
      <figure className="h-24 w-40 overflow-hidden rounded-lg border border-[var(--linea)] bg-white shadow-sm sm:h-32 sm:w-56">
        <button
          type="button"
          className="relative block h-full w-full cursor-zoom-in p-0 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--acento)]"
          onClick={() => setAbierta(true)}
          aria-label={`Ver ampliada: ${pie}`}
        >
          <Image
            src={rutaPublica(src)}
            alt={pie}
            width={224}
            height={128}
            className="h-full w-full object-cover"
            style={{ objectPosition: objectPositionIdentidad(src) }}
            sizes="224px"
            priority
          />
          <PistaAmpliar />
        </button>
      </figure>

      <LightboxImagen
        abierta={abierta}
        onCerrar={() => setAbierta(false)}
        src={src}
        alt={pie}
        pie={pie}
      />
    </>
  );
}
