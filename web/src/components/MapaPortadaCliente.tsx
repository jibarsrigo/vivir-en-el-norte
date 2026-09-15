"use client";

import dynamic from "next/dynamic";

const Mapa = dynamic(() => import("./MapaPortada"), {
  ssr: false,
  loading: () => <div className="mapa-leaflet mapa-atlas h-full min-h-[280px] w-full" />,
});

export default function MapaPortadaCliente() {
  return <Mapa />;
}
