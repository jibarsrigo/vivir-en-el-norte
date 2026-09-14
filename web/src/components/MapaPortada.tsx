"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { COLOR_CLASE, type Zona } from "@/lib/zonas";

type Props = { zonas: Zona[] };

export default function MapaPortada({ zonas }: Props) {
  const caja = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!caja.current) return;
    const map = L.map(caja.current, {
      zoomControl: true,
      attributionControl: true,
      scrollWheelZoom: false,
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
            const p = feat?.properties as { clase?: string; portugal?: boolean; activa?: boolean };
            const color = COLOR_CLASE[p.clase ?? ""] ?? "#888";
            return {
              color: p.activa ? "#0b3d5c" : color,
              weight: p.activa ? 2.4 : 1.2,
              fillColor: color,
              fillOpacity: p.portugal ? 0.28 : 0.45,
              dashArray: p.portugal ? "4 4" : undefined,
            };
          },
          onEachFeature: (feat, layer) => {
            const id = (feat.properties as { id: string }).id;
            const z = zonas.find((x) => x.id === id);
            if (!z) return;
            const centro = (layer as L.Polygon).getBounds?.().getCenter?.();
            if (centro) {
              L.tooltip({ permanent: true, direction: "center", className: "zona-etiqueta", opacity: 1 })
                .setLatLng(centro)
                .setContent(z.zona.replace(" (PT)", ""))
                .addTo(map);
            }
            layer.on("click", () => router.push(`/zona/${z.id}/`));
            layer.on("mouseover", () => (layer as L.Path).setStyle({ weight: 3, fillOpacity: 0.6 }));
            layer.on("mouseout", () =>
              (layer as L.Path).setStyle({
                weight: z.activa ? 2.4 : 1.2,
                fillOpacity: z.portugal ? 0.28 : 0.45,
              }),
            );
          },
        });
        capa.addTo(map);
        map.fitBounds(capa.getBounds().pad(0.08));
      })
      .catch(() => undefined);

    const onResize = () => map.invalidateSize();
    window.addEventListener("resize", onResize);
    return () => {
      muerto = true;
      window.removeEventListener("resize", onResize);
      map.remove();
    };
  }, [router, zonas]);

  return <div ref={caja} className="mapa-leaflet min-h-[280px] sm:min-h-[420px]" />;
}
