"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
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
  const tituloId = useId();
  const textoAlt = alt ?? pie;

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
      <figure className="my-6 overflow-hidden rounded-xl border border-[var(--linea)] bg-white">
        <button
          type="button"
          className="block w-full cursor-zoom-in p-0 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--acento)]"
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
        </button>
        <figcaption className="px-3 py-1.5 text-sm text-[var(--tinta-suave)]">{pie}</figcaption>
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
              alt={textoAlt}
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
