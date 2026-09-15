"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { TESELA_CLARA } from "@/lib/teselas";
import { COLOR_CLASE } from "@/lib/zonas";
import type { MunicipioPunto } from "@/lib/municipios-puntos";

type Props = {
  zonaId: string;
  lat: number;
  lon: number;
  pueblos: MunicipioPunto[];
};

export default function MapaZonaDetalle({ zonaId, lat, lon, pueblos }: Props) {
  const caja = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!caja.current) return;
    const map = L.map(caja.current, {
      zoomControl: true,
      attributionControl: true,
      scrollWheelZoom: false,
      dragging: true,
      zoomSnap: 0.25,
    }).setView([lat, lon], 10);

    L.tileLayer(TESELA_CLARA.url, { attribution: TESELA_CLARA.attribution }).addTo(map);

    let muerto = false;
    let limites: L.LatLngBounds | null = null;
    const encuadrar = () => {
      if (!limites || !caja.current || caja.current.clientHeight < 40) return;
      map.invalidateSize();
      map.fitBounds(limites, { padding: [36, 44], maxZoom: 12, animate: false });
    };
    const ro = new ResizeObserver(encuadrar);
    ro.observe(caja.current);

    fetch(`${process.env.NEXT_PUBLIC_BASE || ""}/data/zonas.geojson`, { cache: "no-store" })
      .then((r) => r.json())
      .then((geo) => {
        if (muerto) return;
        let foco: L.Layer | null = null;
        const capa = L.geoJSON(geo, {
          style: (feat) => {
            const p = feat?.properties as { id?: string; clase?: string };
            const esta = p.id === zonaId;
            const color = COLOR_CLASE[p.clase ?? ""] ?? "#888";
            return {
              color: esta ? "#0b3d5c" : "#8a97a0",
              weight: esta ? 2.4 : 0.8,
              fillColor: esta ? color : "#c5cdd2",
              fillOpacity: esta ? 0.42 : 0.1,
            };
          },
          onEachFeature: (feat, layer) => {
            const p = feat.properties as { id: string };
            if (p.id === zonaId) foco = layer;
          },
        });
        capa.addTo(map);
        limites = (foco as L.Polygon | null)?.getBounds?.() ?? capa.getBounds();

        for (const pueblo of pueblos) {
          const dir = pueblo.lon <= lon ? "left" : "right";
          const ancho = Math.max(40, pueblo.etiqueta.length * 7.2 + 18);
          const html =
            dir === "left"
              ? `<span class="nombre">${pueblo.etiqueta}</span><span class="punto"></span>`
              : `<span class="punto"></span><span class="nombre">${pueblo.etiqueta}</span>`;
          L.marker([pueblo.lat, pueblo.lon], {
            interactive: false,
            keyboard: false,
            zIndexOffset: 600,
            icon: L.divIcon({
              className: `municipio-zona municipio-zona-${dir}`,
              html,
              iconSize: [ancho, 16],
              iconAnchor: dir === "left" ? [ancho - 5, 8] : [5, 8],
            }),
          }).addTo(map);
        }

        encuadrar();
      })
      .catch(() => undefined);

    return () => {
      muerto = true;
      ro.disconnect();
      map.remove();
    };
  }, [zonaId, lat, lon, pueblos]);

  return <div ref={caja} className="mapa-leaflet h-full w-full" />;
}
