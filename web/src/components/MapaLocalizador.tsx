"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { VISTA_NORTE } from "@/lib/mapa-base";
import { TESELA_CLARA } from "@/lib/teselas";
import { COLOR_CLASE } from "@/lib/zonas";

type Props = { zonaId: string; nombre: string };

/**
 * Localizador: el norte entero, con la zona actual resaltada.
 * No hace zoom a la zona (eso es el mapa de detalle).
 */
export default function MapaLocalizador({ zonaId, nombre }: Props) {
  const caja = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!caja.current) return;
    const map = L.map(caja.current, {
      zoomControl: true,
      attributionControl: true,
      scrollWheelZoom: false,
      dragging: true,
      zoomSnap: 0.25,
    });

    L.tileLayer(TESELA_CLARA.url, { attribution: TESELA_CLARA.attribution }).addTo(map);

    const limitesNorte = L.latLngBounds(VISTA_NORTE[0], VISTA_NORTE[1]);
    let muerto = false;
    let yaEncuadrado = false;

    const encuadrar = () => {
      if (!caja.current || caja.current.clientHeight < 40) return;
      map.invalidateSize();
      if (!yaEncuadrado) {
        map.fitBounds(limitesNorte, {
          padding: [12, 16],
          animate: false,
        });
        yaEncuadrado = true;
      }
    };
    const ro = new ResizeObserver(encuadrar);
    ro.observe(caja.current);
    encuadrar();

    fetch(`${process.env.NEXT_PUBLIC_BASE || ""}/data/zonas.geojson`, { cache: "no-store" })
      .then((r) => r.json())
      .then((geo) => {
        if (muerto) return;
        L.geoJSON(geo, {
          style: (feat) => {
            const p = feat?.properties as { id?: string; clase?: string };
            const esta = p.id === zonaId;
            const color = COLOR_CLASE[p.clase ?? ""] ?? "#888";
            return {
              color: esta ? "#0b3d5c" : "#6a7a84",
              weight: esta ? 2.6 : 1,
              fillColor: esta ? color : color,
              fillOpacity: esta ? 0.82 : 0.28,
            };
          },
          onEachFeature: (feat, layer) => {
            const p = feat.properties as { id: string; lat?: number; lon?: number };
            if (p.id !== zonaId) return;
            const centro =
              p.lat != null && p.lon != null
                ? L.latLng(p.lat, p.lon)
                : (layer as L.Polygon).getBounds?.().getCenter?.();
            if (centro) {
              L.tooltip({ permanent: true, direction: "center", className: "zona-etiqueta", opacity: 1 })
                .setLatLng(centro)
                .setContent(nombre.replace(" (PT)", ""))
                .addTo(map);
            }
          },
        }).addTo(map);
        encuadrar();
      })
      .catch(() => undefined);

    return () => {
      muerto = true;
      ro.disconnect();
      map.remove();
    };
  }, [zonaId, nombre]);

  return <div ref={caja} className="mapa-leaflet h-full w-full" />;
}
