"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { esZonaLeida, marcarZonaLeida } from "@/lib/zona-leida";

type Props = {
  zonaId: string;
  nombreZona: string;
  resumen?: string;
};

export default function BloqueZonaFicha({ zonaId, nombreZona, resumen }: Props) {
  const [leida, setLeida] = useState(false);

  useEffect(() => {
    setLeida(esZonaLeida(zonaId));
  }, [zonaId]);

  const alAbrirZona = () => {
    marcarZonaLeida(zonaId);
    setLeida(true);
  };

  return (
    <aside
      className={`mt-6 max-w-2xl rounded-xl border px-4 py-4 ${
        leida
          ? "border-[var(--linea)] bg-[var(--papel)]"
          : "border-[var(--acento)]/25 bg-white shadow-[0_1px_0_rgb(28_42_50/6%)]"
      }`}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--tinta-suave)]">
          Zona
        </p>
        {leida ? (
          <p className="text-xs font-medium text-[var(--tinta-suave)]">Ya leíste esta zona</p>
        ) : null}
      </div>
      <h2 className="mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-0.5 font-[family-name:var(--font-serif)] text-xl text-[var(--acento)]">
        <span>{nombreZona}</span>
        <Link
          href={`/zona/${zonaId}/`}
          onClick={alAbrirZona}
          className="font-[family-name:var(--font-sans)] text-xs font-semibold tracking-wide text-[var(--acento)] underline-offset-2 hover:underline"
        >
          Detalles
        </Link>
      </h2>
      {resumen ? (
        <p className="mt-2 text-[15px] leading-relaxed text-[var(--tinta)]">{resumen}</p>
      ) : (
        <p className="mt-2 text-[15px] leading-relaxed text-[var(--tinta-suave)]">
          El relato completo de la zona (clima, escala, qué hay alrededor) está en su página.
        </p>
      )}
    </aside>
  );
}
