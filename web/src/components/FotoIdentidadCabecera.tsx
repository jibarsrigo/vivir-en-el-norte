"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
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
  const tituloId = useId();

  useEffect(() => {
    if (!abierta) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbierta(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [abierta]);

  return (
    <>
      <figure className="h-24 w-40 overflow-hidden rounded-lg border border-[var(--linea)] bg-white shadow-sm sm:h-32 sm:w-56">
        <button
          type="button"
          className="block h-full w-full cursor-zoom-in p-0 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--acento)]"
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
        </button>
      </figure>

      {abierta ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={tituloId}
          onClick={() => setAbierta(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-auto rounded-xl bg-white shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-2 top-2 z-10 rounded-md bg-white/90 px-2.5 py-1 text-sm font-medium text-[var(--acento)] shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--acento)]"
              onClick={() => setAbierta(false)}
            >
              Cerrar
            </button>
            <Image
              src={rutaPublica(src)}
              alt={pie}
              width={1280}
              height={850}
              className="h-auto w-full"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
            <p id={tituloId} className="px-4 py-3 text-sm text-[var(--tinta-suave)]">
              {pie}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
