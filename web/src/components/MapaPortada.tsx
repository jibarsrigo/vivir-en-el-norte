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
            const p = feat?.properties as { id?: string; clase?: string; portugal?: boolean };
            const z = zonas.find((x) => x.id === p.id);
            const color = COLOR_CLASE[p.clase ?? ""] ?? "#888";
            const calor = Boolean(z?.calorAprieta);
            return {
              color: calor ? "#c62828" : z?.activa ? "#0b3d5c" : color,
              weight: calor ? 3 : z?.activa ? 2.4 : 1.2,
              fillColor: color,
              fillOpacity: p.portugal ? 0.28 : 0.45,
              dashArray: p.portugal ? "4 4" : undefined,
            };
          },
          onEachFeature: (feat, layer) => {
            const id = (feat.properties as { id: string }).id;
            const z = zonas.find((x) => x.id === id);
            if (!z) return;
            const path = layer as L.Path;
            path.on("click", () => router.push(`/zona/${z.id}/`));
            path.on("mouseover", () => path.setStyle({ weight: 3.2, fillOpacity: 0.62 }));
            path.on("mouseout", () =>
              path.setStyle({
                weight: z.calorAprieta ? 3 : z.activa ? 2.4 : 1.2,
                fillOpacity: z.portugal ? 0.28 : 0.45,
              }),
            );

            const centro = (layer as L.Polygon).getBounds?.().getCenter?.();
            if (!centro) return;
            L.tooltip({ permanent: true, direction: "center", className: "zona-etiqueta", opacity: 1 })
              .setLatLng(centro)
              .setContent(z.zona.replace(" (PT)", ""))
              .addTo(map);
            if (z.calorAprieta) {
              L.marker(centro, {
                icon: L.divIcon({
                  className: "zona-calor",
                  html: "<span>El calor aprieta</span>",
                  iconSize: [118, 18],
                  iconAnchor: [59, -10],
                }),
                interactive: false,
                keyboard: false,
              }).addTo(map);
            }
          },
        });
        capa.addTo(map);
        map.fitBounds(capa.getBounds().pad(0.08));
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
  }, [router, zonas]);

  return <div ref={caja} className="mapa-leaflet min-h-[280px] sm:min-h-[420px]" />;
}
