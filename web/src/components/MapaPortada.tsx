"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  CAPITALES,
  COLOR_MAR,
  ETIQUETAS_MAR,
  ETIQUETAS_TIERRA,
  VISTA_NORTE,
  colorProvincia,
  dirMunicipio,
  etiquetaCorta,
  hrefMunicipio,
  prioridadNombre,
  type DirEtiqueta,
} from "@/lib/mapa-base";
import { municipiosPuntos } from "@/lib/municipios-puntos";

type Rect = { x: number; y: number; w: number; h: number };

function choca(a: Rect, b: Rect, hueco = 4): boolean {
  return !(a.x + a.w + hueco < b.x || b.x + b.w + hueco < a.x || a.y + a.h + hueco < b.y || b.y + b.h + hueco < a.y);
}

function rectDir(pt: L.Point, ancho: number, alto: number, dir: DirEtiqueta, desfase = 0): Rect {
  if (dir === "left") return { x: pt.x - ancho - desfase, y: pt.y - alto / 2, w: ancho, h: alto };
  if (dir === "right") return { x: pt.x + desfase, y: pt.y - alto / 2, w: ancho, h: alto };
  if (dir === "top") return { x: pt.x - ancho / 2, y: pt.y - alto - desfase, w: ancho, h: alto };
  return { x: pt.x - ancho / 2, y: pt.y + desfase, w: ancho, h: alto };
}

function anclaDir(ancho: number, alto: number, dir: DirEtiqueta, desfase = 0): [number, number] {
  if (dir === "left") return [ancho + desfase, alto / 2];
  if (dir === "right") return [-desfase, alto / 2];
  if (dir === "top") return [ancho / 2, alto + desfase];
  return [ancho / 2, -desfase];
}

const CAPITALES_NOM = new Set(CAPITALES.map((c) => c.nombre));

export default function MapaPortada() {
  const caja = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!caja.current) return;
    const map = L.map(caja.current, {
      zoomControl: true,
      attributionControl: true,
      scrollWheelZoom: false,
      zoomSnap: 0.25,
      zoomDelta: 0.5,
      minZoom: 6,
      maxZoom: 11,
    });
    map.getContainer().style.background = COLOR_MAR;
    map.attributionControl.setPrefix(false);
    map.attributionControl.addAttribution("Límites · Natural Earth");
    map.createPane("pueblos");
    const panePueblos = map.getPane("pueblos");
    if (panePueblos) {
      panePueblos.style.zIndex = "450";
      panePueblos.style.pointerEvents = "auto";
    }

    let muerto = false;
    let yaEncuadrado = false;
    const limites = L.latLngBounds(VISTA_NORTE[0], VISTA_NORTE[1]);
    map.setMaxBounds(limites.pad(0.15));

    const encuadrar = () => {
      if (!caja.current || caja.current.clientHeight < 40) return;
      map.invalidateSize();
      if (!yaEncuadrado) {
        map.fitBounds(limites, {
          paddingTopLeft: [8, 22],
          paddingBottomRight: [4, 4],
          animate: false,
        });
        map.panBy([22, -28], { animate: false });
        yaEncuadrado = true;
      }
    };
    const ro = new ResizeObserver(encuadrar);
    ro.observe(caja.current);

    type MarcaNombre = {
      marker: L.Marker;
      lat: number;
      lon: number;
      ancho: number;
      alto: number;
      dir: DirEtiqueta;
      prioridad: number;
      minZoom: number;
      maxZoom?: number;
      sinColision?: boolean;
      desfase: number;
    };
    const nombres: MarcaNombre[] = [];

    const colocarNombre = (
      lat: number,
      lon: number,
      html: string,
      clase: string,
      ancho: number,
      dir: DirEtiqueta,
      prioridad: number,
      minZoom: number,
      maxZoom?: number,
      sinColision?: boolean,
      alto = 18,
      desfase = 0,
    ) => {
      const marker = L.marker([lat, lon], {
        interactive: false,
        keyboard: false,
        zIndexOffset: 400 - prioridad * 20,
        icon: L.divIcon({
          className: clase,
          html,
          iconSize: [ancho, alto],
          iconAnchor: anclaDir(ancho, alto, dir, desfase),
        }),
      }).addTo(map);
      nombres.push({ marker, lat, lon, ancho, alto, dir, prioridad, minZoom, maxZoom, sinColision, desfase });
    };

    const actualizarNombres = () => {
      const zoom = map.getZoom();
      const ocupados: Rect[] = [];
      const orden = [...nombres].sort((a, b) => a.prioridad - b.prioridad);
      for (const n of orden) {
        const el = n.marker.getElement();
        if (!el) continue;
        const fuera = zoom < n.minZoom || (n.maxZoom != null && zoom >= n.maxZoom);
        if (fuera) {
          el.style.display = "none";
          continue;
        }
        if (n.sinColision) {
          el.style.display = "";
          continue;
        }
        const pt = map.latLngToContainerPoint([n.lat, n.lon]);
        const rect = rectDir(pt, n.ancho, n.alto, n.dir, n.desfase);
        if (ocupados.some((o) => choca(rect, o))) {
          el.style.display = "none";
        } else {
          el.style.display = "";
          ocupados.push(rect);
        }
      }
    };

    const base = process.env.NEXT_PUBLIC_BASE || "";
    Promise.all([
      fetch(`${base}/data/provincias_norte.geojson`, { cache: "no-store" }).then((r) => r.json()),
      fetch(`${base}/data/paises_norte.geojson`, { cache: "no-store" }).then((r) => r.json()),
    ])
      .then(([geo, paises]) => {
        if (muerto) return;
        L.geoJSON(geo, {
          interactive: false,
          style: (feat) => {
            const p = feat?.properties as { region?: string; admin?: string };
            return {
              color: "#fff",
              weight: 0.9,
              fillColor: colorProvincia(p.region, p.admin),
              fillOpacity: 1,
            };
          },
        }).addTo(map);

        const portugal = (paises.features as { properties?: { ADMIN?: string }; geometry?: { coordinates?: number[][][] } }[]).find(
          (f) => f.properties?.ADMIN === "Portugal",
        );
        const anillo = portugal?.geometry?.coordinates?.[0];
        if (anillo) {
          const borde = anillo
            .filter(([, lat]) => lat > 40.72)
            .map(([lon, lat]) => [lat, lon] as [number, number]);
          L.polyline(borde, {
            color: "#6b3f24",
            weight: 2.4,
            fill: false,
            interactive: false,
            lineJoin: "round",
            lineCap: "round",
          }).addTo(map);
        }

        for (const e of ETIQUETAS_TIERRA) {
          const ancho = e.texto.length * 11 + 8;
          colocarNombre(
            e.lat,
            e.lon,
            `<span>${e.texto}</span>`,
            `atlas-ccaa ${e.clase}`,
            ancho,
            "bottom",
            -2,
            6,
            8.8,
            true,
          );
        }
        for (const e of ETIQUETAS_MAR) {
          const ancho = e.texto.length * 8 + 10;
          colocarNombre(
            e.lat,
            e.lon,
            `<span>${e.texto}</span>`,
            "atlas-mar",
            ancho,
            "bottom",
            -1,
            6,
            8.2,
            true,
          );
        }

        for (const c of CAPITALES) {
          const zonaId = c.zonaId;
          const marcaCap = L.marker([c.lat, c.lon], {
            interactive: Boolean(zonaId),
            keyboard: Boolean(zonaId),
            zIndexOffset: 500,
            icon: L.divIcon({
              className: zonaId ? "atlas-capital atlas-capital-clic" : "atlas-capital",
              html: "<i></i>",
              iconSize: [11, 11],
              iconAnchor: [5, 5],
            }),
          }).addTo(map);
          if (zonaId) marcaCap.on("click", () => router.push(`/zona/${zonaId}/`));
          const ancho = Math.max(44, c.nombre.length * 8.6 + 8);
          colocarNombre(
            c.lat,
            c.lon,
            `<span>${c.nombre}</span>`,
            "atlas-capital-nom",
            ancho,
            c.dir,
            -3,
            6,
            undefined,
            false,
            22,
            12,
          );
        }

        const pueblos = municipiosPuntos.filter((m) => !CAPITALES_NOM.has(m.etiqueta) && !CAPITALES_NOM.has(m.nombre));
        for (const m of pueblos) {
          const href = hrefMunicipio(m);
          const punto = L.circleMarker([m.lat, m.lon], {
            radius: 3.6,
            color: "#fff",
            weight: 1.1,
            fillColor: "#1c2a32",
            fillOpacity: 1,
            pane: "pueblos",
          }).addTo(map);
          punto.bindTooltip(m.nombre, { direction: "top", opacity: 1, className: "zona-globo" });
          punto.on("click", () => router.push(href));
          punto.on("mouseover", () => punto.setStyle({ radius: 5.2 }));
          punto.on("mouseout", () => punto.setStyle({ radius: 3.6 }));

          const dir = dirMunicipio(m);
          const etiqueta = etiquetaCorta(m);
          const prio = prioridadNombre(m);
          const ancho = Math.max(28, etiqueta.length * 7 + 8);
          const marca = L.marker([m.lat, m.lon], {
            interactive: false,
            keyboard: false,
            zIndexOffset: 700,
            icon: L.divIcon({
              className: "atlas-nombre",
              html: `<a href="${base}${href}">${etiqueta}</a>`,
              iconSize: [ancho, 16],
              iconAnchor: anclaDir(ancho, 16, dir),
            }),
          });
          const enganchar = () => {
            const a = marca.getElement()?.querySelector("a");
            if (!a || (a as HTMLAnchorElement).dataset.ok) return;
            (a as HTMLAnchorElement).dataset.ok = "1";
            L.DomEvent.on(a, "click", (ev) => {
              L.DomEvent.stopPropagation(ev);
              L.DomEvent.preventDefault(ev);
              router.push(href);
            });
          };
          marca.on("add", enganchar);
          marca.addTo(map);
          enganchar();
          nombres.push({
            marker: marca,
            lat: m.lat,
            lon: m.lon,
            ancho,
            alto: 16,
            dir,
            prioridad: prio,
            minZoom: prio === 0 ? 6 : 8,
            desfase: 0,
          });
        }

        encuadrar();
        actualizarNombres();
        map.on("zoomend moveend", actualizarNombres);
      })
      .catch(() => undefined);

    return () => {
      muerto = true;
      ro.disconnect();
      map.off("zoomend moveend");
      map.remove();
    };
  }, [router]);

  return <div ref={caja} className="mapa-leaflet mapa-atlas h-full w-full" />;
}
