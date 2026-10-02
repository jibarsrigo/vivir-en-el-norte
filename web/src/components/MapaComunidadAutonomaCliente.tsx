"use client";

import dynamic from "next/dynamic";
import type { ComunidadId } from "@/lib/zonas";

const Mapa = dynamic(() => import("./MapaComunidadAutonoma"), {
  ssr: false,
  loading: () => <div className="mapa-leaflet h-full w-full" />,
});

export default function MapaComunidadAutonomaCliente({
  comunidadId,
  clima = false,
  mar = false,
  servicios = false,
  hospital = false,
  avion = false,
  precio = false,
}: {
  comunidadId: ComunidadId;
  clima?: boolean;
  mar?: boolean;
  servicios?: boolean;
  hospital?: boolean;
  avion?: boolean;
  precio?: boolean;
}) {
  return (
    <Mapa
      comunidadId={comunidadId}
      clima={clima}
      mar={mar}
      servicios={servicios}
      hospital={hospital}
      avion={avion}
      precio={precio}
    />
  );
}
