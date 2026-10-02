"use client";

import Image from "next/image";
import { useState } from "react";
import LightboxImagen, { PistaAmpliar } from "@/components/LightboxImagen";
import { rutaPublica } from "@/lib/ruta-publica";

export default function Foto({
  src,
  pie,
  alt,
}: {
  src: string;
  pie: string;
  alt?: string;
}) {
  const [abierta, setAbierta] = useState(false);
  const textoAlt = alt ?? pie;

  return (
    <>
      <figure className="my-6 overflow-hidden rounded-xl border border-[var(--linea)] bg-white">
        <button
          type="button"
          className="relative block w-full cursor-zoom-in p-0 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--acento)]"
          onClick={() => setAbierta(true)}
          aria-label={`Ver ampliada: ${pie}`}
        >
          <Image
            src={rutaPublica(src)}
            alt={textoAlt}
            width={1280}
            height={850}
            className="h-auto w-full"
          />
          <PistaAmpliar />
        </button>
        <figcaption className="px-3 py-1.5 text-sm text-[var(--tinta-suave)]">{pie}</figcaption>
      </figure>

      <LightboxImagen
        abierta={abierta}
        onCerrar={() => setAbierta(false)}
        src={src}
        alt={textoAlt}
        pie={pie}
      />
    </>
  );
}
