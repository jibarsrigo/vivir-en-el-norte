"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { COLOR_CLASE } from "@/lib/zonas";

type Props = { zonaId: string; nombre: string };

export default function MapaLocalizador({ zonaId, nombre }: Props) {
  const caja = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!caja.current) return;
    const map = L.map(caja.current, {
      zoomControl: true,
      attributionControl: true,
      scrollWheelZoom: false,
      dragging: true,
    }).setView([42.7, -6.4], 7);

    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png", {
      attribution: "&copy; OpenStreetMap · CARTO",
    }).addTo(map);

    let muerto = false;
    fetch(`${process.env.NEXT_PUBLIC_BASE || ""}/data/zonas.geojson`)
      .then((r) => r.json())
      .then((geo) => {
        if (muerto) return;
        const capa = L.geoJSON(geo, {
          style: (feat) => {
            const p = feat?.properties as { id?: string; clase?: string };
            const esta = p.id === zonaId;
            const color = COLOR_CLASE[p.clase ?? ""] ?? "#888";
            return {
              color: esta ? "#0b3d5c" : "#8a97a0",
              weight: esta ? 2.6 : 0.9,
              fillColor: esta ? color : "#c5cdd2",
              fillOpacity: esta ? 0.72 : 0.14,
            };
          },
          onEachFeature: (feat, layer) => {
            const id = (feat.properties as { id: string }).id;
            if (id !== zonaId) return;
            const centro = (layer as L.Polygon).getBounds?.().getCenter?.();
            if (centro) {
              L.tooltip({ permanent: true, direction: "center", className: "zona-etiqueta", opacity: 1 })
                .setLatLng(centro)
                .setContent(nombre.replace(" (PT)", ""))
                .addTo(map);
            }
          },
        });
        capa.addTo(map);
        map.fitBounds(capa.getBounds().pad(0.06));
        setTimeout(() => map.invalidateSize(), 80);
      })
      .catch(() => undefined);

    const onResize = () => map.invalidateSize();
    window.addEventListener("resize", onResize);
    return () => {
      muerto = true;
      window.removeEventListener("resize", onResize);
      map.remove();
    };
  }, [zonaId, nombre]);

  return <div ref={caja} className="mapa-leaflet h-full min-h-[240px] w-full" />;
}
