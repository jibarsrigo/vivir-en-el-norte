"use client";

import DesplegableNuevo2 from "@/components/DesplegableNuevo2";

/**
 * Encaja de zona con el mismo desplegable y etiquetas que la ficha de municipio
 * (¿Encaja? → Encaja si / No encaja si / Qué comprobar).
 */
export default function EncajaZona({
  si,
  no,
  veredicto,
}: {
  si: string[];
  no: string[];
  veredicto: string;
}) {
  return (
    <DesplegableNuevo2 titulo="¿Encaja?" varianteTarjetaV1>
      <h3 className="mt-1 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
        Encaja si
      </h3>
      {si.map((t) => (
        <p key={t.slice(0, 48)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          {t}
        </p>
      ))}
      <h3 className="mt-7 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
        No encaja si
      </h3>
      {no.map((t) => (
        <p key={t.slice(0, 48)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          {t}
        </p>
      ))}
      <h3 className="mt-7 text-base font-semibold uppercase tracking-wide text-[var(--acento)]">
        Qué comprobar
      </h3>
      <p className="mt-3 max-w-2xl text-[17px] leading-relaxed font-medium">{veredicto}</p>
    </DesplegableNuevo2>
  );
}
