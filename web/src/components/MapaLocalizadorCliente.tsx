"use client";

import dynamic from "next/dynamic";

const Mapa = dynamic(() => import("./MapaLocalizador"), {
  ssr: false,
  loading: () => <div className="mapa-leaflet h-full w-full" />,
});

export default function MapaLocalizadorCliente({
  zonaId,
  nombre,
}: {
  zonaId: string;
  nombre: string;
}) {
  return <Mapa zonaId={zonaId} nombre={nombre} />;
}
