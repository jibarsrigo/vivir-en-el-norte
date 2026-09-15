"use client";

import { useState } from "react";
import MapaPortadaCliente from "@/components/MapaPortadaCliente";
import { COLOR_COMUNIDAD } from "@/lib/mapa-base";

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
        <div className="grid gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">
              Territorio
            </p>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              {COLOR_COMUNIDAD.map((c) => (
                <li key={c.id} className="flex items-center gap-1.5">
                  <span className="inline-block h-3 w-3 rounded-sm" style={{ background: c.color }} />
                  {c.nombre}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-sm text-[var(--tinta-suave)]">
              Cada punto es un municipio. El cuadrado y la letra más grande, una capital.
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
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">
            Cómo se mira
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--tinta)]">
            Pulsa un nombre o un punto. Con + se acercan más pueblos, sin pisarse. Clima y
            servicios se pueden marcar juntos: cada uno tiene su leyenda debajo, para que no se
            pisen.
          </p>
        </div>
      </div>
    </section>
  );
}
