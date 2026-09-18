"use client";

import { useState } from "react";
import MapaPortadaCliente from "@/components/MapaPortadaCliente";
import { LeyendaMapa } from "@/components/CapaMapaLeyenda";
import { LeyendaClima } from "@/components/CapaClimaLeyenda";
import { LeyendaMar } from "@/components/CapaMarLeyenda";
import { LeyendaServicios } from "@/components/CapaServiciosLeyenda";
import { LeyendaHospital } from "@/components/CapaHospitalLeyenda";
import { LeyendaAvion } from "@/components/CapaAvionLeyenda";
import { LeyendaPrecio } from "@/components/CapaPrecioLeyenda";
import TablaCapasMunicipios from "@/components/TablaCapasMunicipios";
import { type ComunidadId } from "@/lib/capas-tabla";

const CAPAS = [
  {
    id: "clima",
    etiqueta: "Clima",
    nota: "Sol, despejados y lluvia frente a Mallorca.",
  },
  {
    id: "mar",
    etiqueta: "Mar",
    nota: "Minutos a la costa y a la playa de baño.",
  },
  {
    id: "servicios",
    etiqueta: "Servicios",
    nota: "Nota 1–10 de vida diaria (tiendas, farmacia, centro de salud…).",
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

function ChipsCapas({
  activas,
  onToggle,
  className = "",
}: {
  activas: ReadonlySet<string>;
  onToggle: (id: string) => void;
  className?: string;
}) {
  return (
    <div className={`flex max-w-full flex-wrap gap-2 ${className}`.trim()}>
      {CAPAS.map((c) => (
        <Chip key={c.id} pressed={activas.has(c.id)} onClick={() => onToggle(c.id)}>
          {c.etiqueta}
        </Chip>
      ))}
    </div>
  );
}

export default function MapaPortadaBloque() {
  const [activas, setActivas] = useState<ReadonlySet<string>>(new Set());
  const [comunidad, setComunidad] = useState<ComunidadId | null>(null);
  const [tramo, setTramo] = useState<string | null>(null);

  function toggle(id: string) {
    setActivas((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleComunidad(id: ComunidadId) {
    setComunidad((prev) => (prev === id ? null : id));
    setTramo(null);
  }

  function toggleTramo(id: string) {
    setTramo((prev) => (prev === id ? null : id));
  }

  const leyendas = CAPAS.filter((c) => activas.has(c.id));
  const acordeon = {
    comunidad,
    tramo,
    onToggleComunidad: toggleComunidad,
    onToggleTramo: toggleTramo,
  };

  return (
    <>
      <section className="mt-8 overflow-hidden rounded-xl border border-[var(--linea)] bg-white shadow-sm">
        <div className="relative h-[360px] sm:h-[460px] lg:h-[540px]">
          <MapaPortadaCliente
            clima={activas.has("clima")}
            mar={activas.has("mar")}
            servicios={activas.has("servicios")}
            hospital={activas.has("hospital")}
            avion={activas.has("avion")}
            precio={activas.has("precio")}
          />
          <div className="pointer-events-none absolute inset-x-3 top-3 z-[1100] flex flex-wrap justify-end gap-2">
            <div className="pointer-events-auto">
              <ChipsCapas activas={activas} onToggle={toggle} className="justify-end" />
            </div>
          </div>
        </div>
        <div className="grid h-[8.75rem] grid-cols-2 content-start gap-x-3 gap-y-1 overflow-hidden border-t border-[var(--linea)] p-4 sm:grid-cols-3 lg:grid-cols-4">
          <LeyendaMapa />
          {leyendas.map((c) =>
            c.id === "clima" ? (
              <LeyendaClima key={c.id} compacta />
            ) : c.id === "mar" ? (
              <LeyendaMar key={c.id} compacta />
            ) : c.id === "servicios" ? (
              <LeyendaServicios key={c.id} compacta />
            ) : c.id === "hospital" ? (
              <LeyendaHospital key={c.id} compacta />
            ) : c.id === "avion" ? (
              <LeyendaAvion key={c.id} compacta />
            ) : c.id === "precio" ? (
              <LeyendaPrecio key={c.id} compacta />
            ) : (
              <div key={c.id} className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">
                  {c.etiqueta}
                </p>
                <p className="mt-0.5 line-clamp-1 text-[11px] leading-snug text-[var(--tinta)]">
                  {c.nota}
                </p>
              </div>
            ),
          )}
        </div>
      </section>

      <section className="mt-4 overflow-hidden rounded-xl border border-[var(--linea)] bg-white">
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 border-b border-[var(--linea)] px-4 py-3">
          <p className="shrink-0 text-xs font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">
            Por comunidad
          </p>
          <ChipsCapas activas={activas} onToggle={toggle} className="justify-end" />
        </div>

        <TablaCapasMunicipios capasActivas={activas} embebido {...acordeon} />
      </section>
    </>
  );
}
