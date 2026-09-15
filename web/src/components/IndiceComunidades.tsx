"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { COLOR_COMUNIDAD } from "@/lib/mapa-base";
import { hrefMunicipio, municipiosPuntos } from "@/lib/municipios-puntos";
import { comunidadDeZona, zonas, type ComunidadId } from "@/lib/zonas";

type FilaComunidad = {
  id: ComunidadId;
  nombre: string;
  color: string;
  tramos: {
    id: string;
    zona: string;
    pueblos: { nombre: string; href: string }[];
  }[];
};

function filasComunidad(): FilaComunidad[] {
  return COLOR_COMUNIDAD.map((c) => {
    const id = c.id as ComunidadId;
    const tramos = zonas
      .filter((z) => comunidadDeZona(z) === id)
      .map((z) => ({
        id: z.id,
        zona: z.zona.replace(" (PT)", ""),
        pueblos: municipiosPuntos
          .filter((m) => m.zonaId === z.id)
          .map((m) => ({ nombre: m.etiqueta, href: hrefMunicipio(m) })),
      }));
    return { id, nombre: c.nombre, color: c.color, tramos };
  });
}

export default function IndiceComunidades() {
  const filas = useMemo(filasComunidad, []);
  const [abierta, setAbierta] = useState<ComunidadId | null>(null);

  return (
    <section className="mt-4 overflow-hidden rounded-xl border border-[var(--linea)] bg-white">
      <div className="flex items-center justify-between gap-3 border-b border-[var(--linea)] px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">
          Por comunidad
        </p>
        <Link
          href="/compara/"
          className="text-sm font-semibold text-[var(--acento)] underline-offset-2 hover:underline"
        >
          Compara pueblos
        </Link>
      </div>
      <ul className="divide-y divide-[var(--linea)]">
        {filas.map((c) => {
          const nPueblos = c.tramos.reduce((n, t) => n + t.pueblos.length, 0);
          const abiertaEsta = abierta === c.id;
          return (
            <li key={c.id}>
              <button
                type="button"
                aria-expanded={abiertaEsta}
                onClick={() => setAbierta(abiertaEsta ? null : c.id)}
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
                  {nPueblos} pueblos
                </span>
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded border border-[var(--linea)] text-lg leading-none text-[var(--tinta)]"
                  aria-hidden
                >
                  {abiertaEsta ? "−" : "+"}
                </span>
              </button>
              {abiertaEsta ? (
                <div className="space-y-5 border-t border-[var(--linea)] bg-[var(--papel)]/50 px-4 py-4">
                  {c.tramos.map((t) => (
                    <div key={t.id}>
                      <Link
                        href={`/zona/${t.id}/`}
                        className="font-semibold text-[var(--acento)] underline-offset-2 hover:underline"
                      >
                        {t.zona}
                      </Link>
                      <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                        {t.pueblos.map((p) => (
                          <li key={p.nombre}>
                            <Link
                              href={p.href}
                              className="text-[15px] text-[var(--tinta)] underline-offset-2 hover:underline"
                            >
                              {p.nombre}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
