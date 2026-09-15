"use client";

import { useState } from "react";
import MapaPortadaCliente from "@/components/MapaPortadaCliente";

const CAPAS = [
  {
    id: "clima",
    etiqueta: "Clima",
    nota: "Esta capa irá encima del territorio, sin quitarlo. La dibujamos a continuación.",
  },
  {
    id: "mar",
    etiqueta: "Mar",
    nota: "Franja A o B, minutos al baño y el agua en verano.",
  },
  {
    id: "servicios",
    etiqueta: "Servicios",
    nota: "Servicios, fibra y el coche de cada día, como iconos. Se puede ver a la vez que las otras capas.",
  },
  {
    id: "hospital",
    etiqueta: "Hospital",
    nota: "Minutos al hospital, público o privado.",
  },
  {
    id: "avion",
    etiqueta: "Avión",
    nota: "Minutos al aeropuerto y si hay vuelo a Palma.",
  },
  {
    id: "precio",
    etiqueta: "Precio",
    nota: "El metro cuadrado y una casa de 2 o 3 habitaciones.",
  },
] as const;

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
  const [activas, setActivas] = useState<ReadonlySet<string>>(new Set());

  function toggle(id: string) {
    setActivas((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  const leyendas = CAPAS.filter((c) => activas.has(c.id));

  return (
    <section className="mt-8 overflow-hidden rounded-xl border border-[var(--linea)] bg-white shadow-sm">
      <div className="relative h-[360px] sm:h-[460px] lg:h-[540px]">
        <MapaPortadaCliente />
        <div className="pointer-events-none absolute inset-x-3 top-3 z-[1100] flex flex-wrap justify-end gap-2">
          <div className="pointer-events-auto flex max-w-full flex-wrap justify-end gap-2">
            {CAPAS.map((c) => (
              <Chip key={c.id} pressed={activas.has(c.id)} onClick={() => toggle(c.id)}>
                {c.etiqueta}
              </Chip>
            ))}
          </div>
        </div>
      </div>
      <div className="grid gap-4 border-t border-[var(--linea)] p-4 sm:grid-cols-2 lg:grid-cols-3">
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
            Pulsa un nombre o un punto. Con + salen más pueblos; a la cuarta vez ya están
            todos. Más + solo acerca.
          </p>
        </div>
        {leyendas.map((c) => (
          <div key={c.id}>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">
              {c.etiqueta}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--tinta)]">{c.nota}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
