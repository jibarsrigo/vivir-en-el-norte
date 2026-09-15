"use client";

import { useState } from "react";
import MapaPortadaCliente from "@/components/MapaPortadaCliente";

function Chip({
  pressed,
  onClick,
  children,
}: {
  pressed: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={
        "rounded-full border px-3 py-1.5 text-sm font-semibold shadow-sm backdrop-blur " +
        (pressed
          ? "border-[var(--acento)] bg-[var(--acento)] text-white"
          : "border-[var(--linea)] bg-white/95 text-[var(--tinta)]")
      }
    >
      {children}
    </button>
  );
}

export default function MapaPortadaBloque() {
  const [clima, setClima] = useState(false);
  const [servicios, setServicios] = useState(false);

  return (
    <section className="mt-8 overflow-hidden rounded-xl border border-[var(--linea)] bg-white shadow-sm">
      <div className="relative h-[360px] sm:h-[460px] lg:h-[540px]">
        <MapaPortadaCliente />
        <div className="pointer-events-none absolute right-3 top-3 z-[1100] flex flex-wrap justify-end gap-2">
          <div className="pointer-events-auto flex flex-wrap justify-end gap-2">
            <Chip pressed={clima} onClick={() => setClima((v) => !v)}>
              Clima
            </Chip>
            <Chip pressed={servicios} onClick={() => setServicios((v) => !v)}>
              Servicios
            </Chip>
          </div>
        </div>
      </div>
      <div className="grid gap-4 border-t border-[var(--linea)] p-4 sm:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">
            Mapa
          </p>
          <ul className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-[var(--tinta)]">
            <li className="flex items-center gap-1.5">
              <span className="inline-block h-2.5 w-2.5 rounded-full border border-white bg-[#1c2a32] shadow-[0_0_0_1px_#1c2a32]" />
              Municipio
            </li>
            <li className="flex items-center gap-1.5">
              <span className="inline-block h-2.5 w-2.5 border-2 border-[#1a2228] bg-white shadow-[0_0_0_1px_#fff]" />
              Capital
            </li>
          </ul>
          <p className="mt-2 text-sm text-[var(--tinta-suave)]">
            Pulsa un nombre o un punto. Con + salen más pueblos, sin pisarse.
          </p>
        </div>
        {clima ? (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">
              Clima
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--tinta)]">
              Esta capa irá encima del territorio, sin quitarlo. La dibujamos a continuación.
            </p>
          </div>
        ) : null}
        {servicios ? (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">
              Servicios
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--tinta)]">
              Hospital, fibra y el resto, como iconos. Se puede ver a la vez que el clima.
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
