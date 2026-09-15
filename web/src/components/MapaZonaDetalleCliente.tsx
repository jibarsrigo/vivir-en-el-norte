"use client";

import dynamic from "next/dynamic";
import type { MunicipioPunto } from "@/lib/municipios-puntos";

const Mapa = dynamic(() => import("./MapaZonaDetalle"), {
  ssr: false,
  loading: () => <div className="mapa-leaflet h-full w-full" />,
});

export default function MapaZonaDetalleCliente({
  zonaId,
  lat,
  lon,
  pueblos,
}: {
  zonaId: string;
  lat: number;
  lon: number;
  pueblos: MunicipioPunto[];
}) {
  return <Mapa zonaId={zonaId} lat={lat} lon={lon} pueblos={pueblos} />;
}
