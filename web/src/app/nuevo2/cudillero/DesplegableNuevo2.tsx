"use client";

import { useId, useRef, useState, type ReactNode } from "react";

type Props = {
  titulo: string;
  /**
   * Tarjeta al estilo V1 FichaCapa2026 → SeccionDetalles
   * (Datos para decidir / desplegables junto a Primer vistazo).
   */
  varianteTarjetaV1?: boolean;
  children: ReactNode;
};

/**
 * Desplegable exclusivo de NUEVO2 Cudillero.
 * Variantes visuales por prop; el contenido editorial lo aporta la página.
 */
export default function DesplegableNuevo2({
  titulo,
  varianteTarjetaV1 = false,
  children,
}: Props) {
  const [abierto, setAbierto] = useState(false);
  const panelId = useId();
  const cabeceraRef = useRef<HTMLButtonElement>(null);

  function cerrar() {
    setAbierto(false);
    requestAnimationFrame(() => {
      cabeceraRef.current?.focus({ preventScroll: true });
      cabeceraRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }

  const botonCerrar = (
    <div className="mt-6 flex justify-end">
      <button
        type="button"
        className="cursor-pointer rounded-md px-2 py-1.5 text-sm font-medium text-[var(--acento)] underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--acento)]"
        onClick={cerrar}
      >
        Cerrar
      </button>
    </div>
  );

  if (varianteTarjetaV1) {
    return (
      <div className="mt-4 rounded-xl border border-[var(--linea)] bg-white">
        <h2 className="m-0">
          <button
            ref={cabeceraRef}
            type="button"
            className="flex w-full min-h-11 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-left font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]"
            aria-expanded={abierto}
            aria-controls={panelId}
            onClick={() => setAbierto((v) => !v)}
          >
            <span>{titulo}</span>
            <span
              aria-hidden="true"
              className={`inline-block shrink-0 text-base leading-none text-[var(--tinta-suave)] transition-transform duration-200 ${
                abierto ? "rotate-180" : "rotate-0"
              }`}
            >
              ▾
            </span>
          </button>
        </h2>
        <div
          id={panelId}
          hidden={!abierto}
          className="border-t border-[var(--linea)] px-4 pb-3 pt-0"
        >
          {children}
          {botonCerrar}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <h2 className="m-0">
        <button
          ref={cabeceraRef}
          type="button"
          className="flex w-full min-h-11 cursor-pointer items-center justify-between gap-3 bg-transparent py-0 text-left font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]"
          aria-expanded={abierto}
          aria-controls={panelId}
          onClick={() => setAbierto((v) => !v)}
        >
          <span>{titulo}</span>
          <span
            aria-hidden="true"
            className={`inline-block shrink-0 text-base leading-none text-[var(--tinta-suave)] transition-transform duration-200 ${
              abierto ? "rotate-180" : "rotate-0"
            }`}
          >
            ▾
          </span>
        </button>
      </h2>
      <div id={panelId} hidden={!abierto}>
        {children}
        {botonCerrar}
      </div>
    </div>
  );
}
