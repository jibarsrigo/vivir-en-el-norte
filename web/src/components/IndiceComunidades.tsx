"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import EnlaceBuscaCompara from "@/components/EnlaceBuscaCompara";
import {
  arbolTablaMunicipios,
  filasMunicipioTabla,
  type ComunidadId,
  type NodoZonaTabla,
} from "@/lib/capas-tabla";

function ListaZonas({ zonas }: { zonas: NodoZonaTabla[] }) {
  return (
    <div className="space-y-5">
      {zonas.map((z) => (
        <div key={z.id}>
          <Link
            href={`/zona/${z.id}/`}
            className="font-semibold text-[var(--acento)] underline-offset-2 hover:underline"
          >
            {z.nombre}
          </Link>
          <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
            {z.filas.map((f) => (
              <li key={f.key}>
                <Link
                  href={f.href}
                  className="text-[15px] text-[var(--tinta)] underline-offset-2 hover:underline"
                >
                  {f.etiqueta}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

type Props = {
  embebido?: boolean;
  comunidad?: ComunidadId | null;
  tramo?: string | null;
  onToggleComunidad?: (id: ComunidadId) => void;
  onToggleTramo?: (id: string) => void;
};

/** Misma jerarquía que la tabla con capas: CCAA → (Galicia oeste/norte) → zona → pueblos. */
export default function IndiceComunidades({
  embebido = false,
  comunidad: comunidadCtrl,
  tramo: tramoCtrl,
  onToggleComunidad,
  onToggleTramo,
}: Props) {
  const arbol = useMemo(() => arbolTablaMunicipios(filasMunicipioTabla()), []);
  const [comunidadLocal, setComunidadLocal] = useState<ComunidadId | null>(null);
  const [tramoLocal, setTramoLocal] = useState<string | null>(null);

  const controlado = onToggleComunidad != null;
  const comunidad = controlado ? (comunidadCtrl ?? null) : comunidadLocal;
  const tramo = controlado ? (tramoCtrl ?? null) : tramoLocal;

  function toggleComunidad(id: ComunidadId) {
    if (onToggleComunidad) {
      onToggleComunidad(id);
      return;
    }
    setComunidadLocal((prev) => (prev === id ? null : id));
    setTramoLocal(null);
  }

  function toggleTramo(id: string) {
    if (onToggleTramo) {
      onToggleTramo(id);
      return;
    }
    setTramoLocal((prev) => (prev === id ? null : id));
  }

  const cuerpo = (
    <>
      {embebido ? null : (
        <div className="flex items-center justify-between gap-3 border-b border-[var(--linea)] px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">
            Por comunidad
          </p>
          <EnlaceBuscaCompara />
        </div>
      )}
      <ul className="divide-y divide-[var(--linea)]">
        {arbol.map((c) => {
          const abierta = comunidad === c.id;
          return (
            <li key={c.id}>
              <button
                type="button"
                aria-expanded={abierta}
                onClick={() => toggleComunidad(c.id)}
                className="flex w-full min-h-[3.25rem] items-center gap-3 px-4 py-3 text-left"
              >
                <span
                  className="inline-block h-3 w-3 shrink-0 rounded-sm border border-white shadow-[0_0_0_1px_rgb(28_42_50/0.25)]"
                  style={{ background: c.color }}
                  aria-hidden
                />
                <span className="font-[family-name:var(--font-serif)] text-xl text-[var(--acento)]">
                  {c.nombre}
                </span>
                <span className="ml-auto text-sm text-[var(--tinta-suave)]">
                  {c.nPueblos} pueblos
                </span>
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded border border-[var(--linea)] text-lg leading-none text-[var(--tinta)]"
                  aria-hidden
                >
                  {abierta ? "−" : "+"}
                </span>
              </button>

              {abierta ? (
                <div className="space-y-3 border-t border-[var(--linea)] bg-[var(--papel)]/50 px-4 py-4">
                  {c.tramos ? (
                    <ul className="space-y-2">
                      {c.tramos.map((t) => {
                        const tramoAbierto = tramo === t.id;
                        return (
                          <li
                            key={t.id}
                            className="overflow-hidden rounded-md border border-[var(--linea)] bg-white"
                          >
                            <button
                              type="button"
                              aria-expanded={tramoAbierto}
                              onClick={() => toggleTramo(t.id)}
                              className="flex w-full items-center gap-2 px-3 py-2.5 text-left"
                            >
                              <span className="font-semibold text-[var(--acento)]">{t.nombre}</span>
                              <span className="ml-auto text-sm text-[var(--tinta-suave)]">
                                {t.nPueblos} pueblos
                              </span>
                              <span className="text-lg leading-none" aria-hidden>
                                {tramoAbierto ? "−" : "+"}
                              </span>
                            </button>
                            {tramoAbierto ? (
                              <div className="border-t border-[var(--linea)] px-3 py-3">
                                <ListaZonas zonas={t.zonas} />
                              </div>
                            ) : null}
                          </li>
                        );
                      })}
                    </ul>
                  ) : c.zonas ? (
                    <ListaZonas zonas={c.zonas} />
                  ) : null}
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </>
  );

  if (embebido) return cuerpo;

  return (
    <section className="mt-4 overflow-hidden rounded-xl border border-[var(--linea)] bg-white">
      {cuerpo}
    </section>
  );
}
