"use client";

import { useEffect } from "react";
import { marcarZonaLeida } from "@/lib/zona-leida";

/** Al abrir la página de zona, marca el bloque de zona como ya leído en las fichas. */
export default function MarcarZonaLeida({ zonaId }: { zonaId: string }) {
  useEffect(() => {
    marcarZonaLeida(zonaId);
  }, [zonaId]);
  return null;
}
