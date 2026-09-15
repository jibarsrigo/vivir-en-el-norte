"use client";

import { useSearchParams } from "next/navigation";
import { municipioPorSlug } from "@/lib/municipios";

export default function NotaCompara() {
  const con = useSearchParams().get("con");
  const ficha = con ? municipioPorSlug(con) : undefined;

  return (
    <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--tinta)]">
      {ficha
        ? `Se podrá comparar ${ficha.municipio} con otro pueblo: clima y servicios, uno al lado del otro.`
        : "Se podrán marcar dos pueblos —Foz y Viveiro, por ejemplo— y ver el clima y los servicios uno al lado del otro."}{" "}
      Lo definimos en un siguiente paso.
    </p>
  );
}
