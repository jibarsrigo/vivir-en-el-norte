"use client";

import Image from "next/image";
import { useState } from "react";
import type { FichaMunicipio } from "@/lib/municipios";
import { zonaIdDeFicha } from "@/lib/municipios";
import {
  iconosMapaPueblo,
  type IconoCapaMapa,
} from "@/lib/capas-mapa-pueblo";
import { rutaPublica } from "@/lib/ruta-publica";

/**
 * Mapa estático del municipio. Con `capasPortada`, muestra exactamente
 * los mismos iconos que el mapa de inicio con todas las capas de mapa activas
 * (fuente: `iconosMapaPueblo`). Un clic en la pastilla abre el mismo globo
 * unificado que en la portada (todas las capas a la vez).
 */
export default function MapaMunicipioFicha({
  ficha,
  capasPortada = false,
}: {
  ficha: FichaMunicipio;
  capasPortada?: boolean;
}) {
  if (!ficha.mapa) return null;

  const zonaId = zonaIdDeFicha(ficha);
  const capas = capasPortada
    ? iconosMapaPueblo(zonaId, ficha.municipio, "todas")
    : [];

  return (
    <figure className="mt-6 max-w-xl overflow-hidden rounded-xl border border-[var(--linea)] bg-white">
      <div className="relative">
        <Image
          src={rutaPublica(`/mapas/municipios/${ficha.mapa}`)}
          alt={`Mapa de ${ficha.municipio}`}
          width={811}
          height={791}
          className="h-auto w-full"
          priority
        />
        {capas.length > 0 ? (
          <CapasSobreMapa capas={capas} nombre={ficha.municipio} />
        ) : null}
      </div>
      <figcaption className="px-3 py-2 text-sm text-[var(--tinta-suave)]">
        Situación de {ficha.municipio}
        {capas.length > 0 ? " - Clic sobre iconos para ver detalles." : ""}
      </figcaption>
    </figure>
  );
}

function CapasSobreMapa({
  capas,
  nombre,
}: {
  capas: IconoCapaMapa[];
  nombre: string;
}) {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="pointer-events-auto absolute left-[34%] top-[46%] -translate-x-1/2 -translate-y-full">
        <button
          type="button"
          className="mapa-muni-grupo"
          aria-expanded={abierto}
          aria-label={`Capas de ${nombre}: clima, mar, servicios, hospital, avión y precio. Clic para ver detalles.`}
          onClick={() => setAbierto((v) => !v)}
        >
          <span
            className="atlas-capas-fila mapa-muni-capas shadow-sm"
            dangerouslySetInnerHTML={{
              __html: capas.map((c) => c.html).join(""),
            }}
          />
        </button>
        {abierto ? (
          <div
            className="mapa-muni-globo globo-capas mt-1.5 max-w-[18rem] rounded-lg border border-[var(--linea)] bg-white px-2.5 py-2 text-left text-xs leading-snug text-[var(--tinta)] shadow-md"
            role="status"
          >
            <div className="globo-nom font-semibold text-[var(--acento)]">{nombre}</div>
            {capas.map((c) => (
              <div key={c.key} className="globo-capa-fila mt-1.5 flex items-start gap-1.5">
                <span
                  className="shrink-0"
                  dangerouslySetInnerHTML={{ __html: c.html }}
                />
                <span className="globo-capa-txt min-w-0">{c.cuerpo}</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
