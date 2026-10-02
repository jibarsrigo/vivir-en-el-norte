"use client";

import Image from "next/image";
import { useEffect, useId, type ReactNode } from "react";
import { rutaPublica } from "@/lib/ruta-publica";

type Props = {
  abierta: boolean;
  onCerrar: () => void;
  src: string;
  alt: string;
  pie: string;
  /** Ancho/alto intrínsecos del PNG/JPEG (Next Image). */
  width?: number;
  height?: number;
};

/**
 * Vista ampliada a pantalla casi completa. Compartido por fotos de relato,
 * identidad de cabecera y mapa de municipio.
 */
export default function LightboxImagen({
  abierta,
  onCerrar,
  src,
  alt,
  pie,
  width = 1280,
  height = 850,
}: Props) {
  const tituloId = useId();

  useEffect(() => {
    if (!abierta) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCerrar();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [abierta, onCerrar]);

  if (!abierta) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={tituloId}
      onClick={onCerrar}
    >
      <div
        className="relative flex max-h-[96vh] w-full max-w-6xl flex-col overflow-hidden rounded-xl bg-white shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="absolute right-2 top-2 z-10 rounded-md bg-white/90 px-2.5 py-1 text-sm font-medium text-[var(--acento)] shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--acento)]"
          onClick={onCerrar}
        >
          Cerrar
        </button>
        <div className="min-h-0 flex-1 overflow-auto">
          <Image
            src={rutaPublica(src)}
            alt={alt}
            width={width}
            height={height}
            className="mx-auto h-auto max-h-[85vh] w-auto max-w-full object-contain"
            sizes="(max-width: 1152px) 100vw, 1152px"
            priority
          />
        </div>
        <p id={tituloId} className="shrink-0 px-4 py-3 text-sm text-[var(--tinta-suave)]">
          {pie}
        </p>
      </div>
    </div>
  );
}

/** Pista visual de que la imagen se puede ampliar. */
export function PistaAmpliar({ children }: { children?: ReactNode }) {
  return (
    <span className="pointer-events-none absolute bottom-2 right-2 rounded-md bg-black/55 px-2 py-0.5 text-xs font-medium text-white opacity-90 shadow-sm">
      {children ?? "Ampliar"}
    </span>
  );
}
