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
  CLICS_HASTA_TODO,
  CLICS_PUEBLOS_MAS,
  VISTA_NORTE,
  ZOOM_MAX,
  ZOOM_MIN,
  ZOOM_PASO,
  colorProvincia,
  zoomTrasClics,
  dirMunicipio,
  etiquetaCorta,
  hrefMunicipio,
  prioridadNombre,
  type DirEtiqueta,
} from "@/lib/mapa-base";
import { municipiosPuntos } from "@/lib/municipios-puntos";
import {
  cieloDeClase,
  climaDeMunicipio,
  CLIMA_ZONAS_MAPA,
  htmlIconoCielo,
  textoClima,
} from "@/lib/clima";
import {
  htmlIconoCosta,
  htmlIconoPlaya,
  marDeMunicipio,
  MAR_ZONAS_MAPA,
  textoMar,
} from "@/lib/mar";

type Rect = { x: number; y: number; w: number; h: number };

function choca(a: Rect, b: Rect, hueco = 4): boolean {
  return !(a.x + a.w + hueco < b.x || b.x + b.w + hueco < a.x || a.y + a.h + hueco < b.y || b.y + b.h + hueco < a.y);
}

function areaSolape(a: Rect, b: Rect): number {
  const x = Math.max(0, Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x));
  const y = Math.max(0, Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y));
  return x * y;
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

function opuesta(dir: DirEtiqueta): DirEtiqueta {
  if (dir === "left") return "right";
  if (dir === "right") return "left";
  if (dir === "top") return "bottom";
  return "top";
}

function ordenDirs(pref: DirEtiqueta): DirEtiqueta[] {
  const lados: DirEtiqueta[] = ["left", "right", "top", "bottom"];
  return [pref, opuesta(pref), ...lados.filter((d) => d !== pref && d !== opuesta(pref))];
}

type SitioNombre = { dir: DirEtiqueta; desfase: number; ancho: number; alto: number };

function aplicarSitio(el: HTMLElement, sitio: SitioNombre) {
  const [ax, ay] = anclaDir(sitio.ancho, sitio.alto, sitio.dir, sitio.desfase);
  el.style.marginLeft = `${-ax}px`;
  el.style.marginTop = `${-ay}px`;
  el.style.width = `${sitio.ancho}px`;
  el.style.height = `${sitio.alto}px`;
  el.style.display = "";
}

function buscarSitio(
  pt: L.Point,
  n: { ancho: number; alto: number; dir: DirEtiqueta; desfase: number; prioridad: number },
  ocupados: Rect[],
  hueco: number,
  compacto: boolean,
): SitioNombre | null {
  const ancho = compacto ? Math.max(22, Math.round(n.ancho * 0.82)) : n.ancho;
  const alto = compacto ? Math.max(12, n.alto - 2) : n.alto;
  const desfases =
    n.prioridad <= -3
      ? [Math.max(12, n.desfase), 16, 22, 8]
      : compacto
        ? [4, 8, 14, 20, 28]
        : [5, 10, 16, 22];
  for (const dir of ordenDirs(n.dir)) {
    for (const desfase of desfases) {
      const rect = rectDir(pt, ancho, alto, dir, desfase);
      if (!ocupados.some((o) => choca(rect, o, hueco))) {
        return { dir, desfase, ancho, alto };
      }
    }
  }
  return null;
}

function sitioMenosPisa(
  pt: L.Point,
  n: { ancho: number; alto: number; dir: DirEtiqueta; desfase: number },
  ocupados: Rect[],
): SitioNombre {
  const ancho = Math.max(22, Math.round(n.ancho * 0.82));
  const alto = Math.max(12, n.alto - 2);
  let mejor: SitioNombre = { dir: n.dir, desfase: n.desfase || 6, ancho, alto };
  let min = Number.POSITIVE_INFINITY;
  for (const dir of ordenDirs(n.dir)) {
    for (const desfase of [6, 12, 18, 26]) {
      const rect = rectDir(pt, ancho, alto, dir, desfase);
      const pisa = ocupados.reduce((s, o) => s + areaSolape(rect, o), 0);
      if (pisa < min) {
        min = pisa;
        mejor = { dir, desfase, ancho, alto };
      }
    }
  }
  return mejor;
}

const CAPITALES_NOM = new Set(CAPITALES.map((c) => c.nombre));

export default function MapaPortada({
  clima = false,
  mar = false,
}: {
  clima?: boolean;
  mar?: boolean;
}) {
  const caja = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const climaRef = useRef(clima);
  const marRef = useRef(mar);
  const pintarCapas = useRef<() => void>(() => {});
  climaRef.current = clima;
  marRef.current = mar;

  useEffect(() => {
    pintarCapas.current();
  }, [clima, mar]);

  useEffect(() => {
    if (!caja.current) return;
    const map = L.map(caja.current, {
      zoomControl: true,
      attributionControl: true,
      scrollWheelZoom: false,
      zoomSnap: ZOOM_PASO,
      zoomDelta: ZOOM_PASO,
      minZoom: ZOOM_MIN,
      maxZoom: ZOOM_MAX,
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
    map.createPane("clima");
    const paneClima = map.getPane("clima");
    if (paneClima) {
      paneClima.style.zIndex = "460";
      paneClima.style.pointerEvents = "auto";
    }
    map.createPane("mar");
    const paneMar = map.getPane("mar");
    if (paneMar) {
      paneMar.style.zIndex = "470";
      paneMar.style.pointerEvents = "auto";
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
      /** Punto del pueblo: radio según si el nombre está visible. */
      punto?: L.CircleMarker;
    };
    const nombres: MarcaNombre[] = [];
    let zoomTodo = zoomTrasClics(ZOOM_MIN, CLICS_HASTA_TODO);
    let zoomPueblosMas = zoomTrasClics(ZOOM_MIN, CLICS_PUEBLOS_MAS);

    const RADIO_CON_NOMBRE = 3.6;
    const RADIO_SIN_NOMBRE = 2.0;
    const radioHover = (base: number) => Math.max(base * 1.45, base + 1.2);
    const climaZona: L.Marker[] = [];
    const climaPueblo: {
      marker: L.Marker;
      lat: number;
      lon: number;
      minZoom: number;
      punto?: L.CircleMarker;
    }[] = [];
    const marZona: L.Marker[] = [];
    const marPueblo: {
      marker: L.Marker;
      lat: number;
      lon: number;
      minZoom: number;
      punto?: L.CircleMarker;
    }[] = [];
    /** Icono de playa (sin etiqueta de nombre; el nombre va en el tooltip). */
    const marPlaya: {
      marker: L.Marker;
      lat: number;
      lon: number;
      minZoom: number;
      punto?: L.CircleMarker;
    }[] = [];

    const aplicarEscalaNombres = () => {
      const inicio = map.getZoom();
      zoomTodo = zoomTrasClics(inicio, CLICS_HASTA_TODO);
      zoomPueblosMas = zoomTrasClics(inicio, CLICS_PUEBLOS_MAS);
      for (const n of nombres) {
        if (n.prioridad === 1) n.minZoom = zoomPueblosMas;
        if (n.sinColision && n.maxZoom != null) n.maxZoom = zoomTodo;
      }
      for (const c of climaPueblo) {
        const n = nombres.find((x) => x.lat === c.lat && x.lon === c.lon && x.prioridad >= 0);
        c.minZoom = n?.minZoom ?? zoomPueblosMas;
      }
    };

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
      const todos = zoom + 1e-6 >= zoomTodo;
      map.getContainer().classList.toggle("mapa-nombres-todos", todos);
      const ocupados: Rect[] = [];
      const orden = [...nombres].sort((a, b) => a.prioridad - b.prioridad);
      const pendientes: typeof nombres = [];
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
        if (!todos) {
          const sitio = { dir: n.dir, desfase: n.desfase, ancho: n.ancho, alto: n.alto };
          const rect = rectDir(pt, sitio.ancho, sitio.alto, sitio.dir, sitio.desfase);
          if (ocupados.some((o) => choca(rect, o))) {
            el.style.display = "none";
          } else {
            aplicarSitio(el, sitio);
            ocupados.push(rect);
          }
          continue;
        }
        const sitio = buscarSitio(pt, n, ocupados, 1, false) ?? buscarSitio(pt, n, ocupados, 1, true);
        if (sitio) {
          aplicarSitio(el, sitio);
          ocupados.push(rectDir(pt, sitio.ancho, sitio.alto, sitio.dir, sitio.desfase));
        } else {
          pendientes.push(n);
        }
      }
      for (const n of pendientes) {
        const el = n.marker.getElement();
        if (!el) continue;
        const pt = map.latLngToContainerPoint([n.lat, n.lon]);
        const sitio = sitioMenosPisa(pt, n, ocupados);
        aplicarSitio(el, sitio);
        ocupados.push(rectDir(pt, sitio.ancho, sitio.alto, sitio.dir, sitio.desfase));
      }
      for (const n of nombres) {
        if (!n.punto) continue;
        const el = n.marker.getElement();
        const conNombre = Boolean(el && el.style.display !== "none");
        const base = conNombre ? RADIO_CON_NOMBRE : RADIO_SIN_NOMBRE;
        n.punto.setStyle({ radius: base });
        (n.punto as L.CircleMarker & { _radioBase?: number })._radioBase = base;
      }
      actualizarCapas();
    };

    const actualizarCapas = () => {
      const climaOn = climaRef.current;
      const marOn = marRef.current;
      map.getContainer().classList.toggle("mapa-con-clima", climaOn);
      map.getContainer().classList.toggle("mapa-con-mar", marOn);
      const zoom = map.getZoom();
      const aPueblos = zoom + 1e-6 >= zoomPueblosMas;

      for (const m of climaZona) {
        const el = m.getElement();
        if (el) el.style.display = climaOn && !aPueblos ? "" : "none";
      }
      for (const m of marZona) {
        const el = m.getElement();
        if (el) el.style.display = marOn && !aPueblos ? "" : "none";
      }

      for (const c of climaPueblo) {
        const el = c.marker.getElement();
        if (!el) continue;
        let visible = false;
        if (climaOn && aPueblos) {
          const nom = nombres.find((n) => n.lat === c.lat && n.lon === c.lon && n.prioridad >= 0);
          const nomEl = nom?.marker.getElement();
          visible = nom ? nomEl?.style.display !== "none" : zoom + 1e-6 >= c.minZoom;
        }
        el.style.display = visible ? "" : "none";
      }

      for (const c of marPueblo) {
        const el = c.marker.getElement();
        if (!el) continue;
        let visible = false;
        if (marOn && aPueblos) {
          const nom = nombres.find((n) => n.lat === c.lat && n.lon === c.lon && n.prioridad >= 0);
          const nomEl = nom?.marker.getElement();
          visible = nom ? nomEl?.style.display !== "none" : zoom + 1e-6 >= c.minZoom;
        }
        el.style.display = visible ? "" : "none";
      }

      for (const c of marPlaya) {
        const el = c.marker.getElement();
        if (!el) continue;
        let visible = false;
        if (marOn && aPueblos) {
          const nom = nombres.find((n) => n.lat === c.lat && n.lon === c.lon && n.prioridad >= 0);
          const nomEl = nom?.marker.getElement();
          visible = nom ? nomEl?.style.display !== "none" : zoom + 1e-6 >= c.minZoom;
        }
        el.style.display = visible ? "" : "none";
      }

      const clave = (lat: number, lon: number) => `${lat},${lon}`;
      const climaVis = new Set(
        climaPueblo
          .filter((c) => c.marker.getElement()?.style.display !== "none")
          .map((c) => clave(c.lat, c.lon)),
      );
      const marVis = new Set(
        [...marPueblo, ...marPlaya]
          .filter((c) => c.marker.getElement()?.style.display !== "none")
          .map((c) => clave(c.lat, c.lon)),
      );

      for (const c of [...climaPueblo, ...marPueblo, ...marPlaya]) {
        if (!c.punto) continue;
        const hide = climaVis.has(clave(c.lat, c.lon)) || marVis.has(clave(c.lat, c.lon));
        c.punto.setStyle(hide ? { opacity: 0, fillOpacity: 0 } : { opacity: 1, fillOpacity: 1 });
      }
    };

    pintarCapas.current = actualizarCapas;

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
            ZOOM_MIN,
            zoomTodo,
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
            ZOOM_MIN,
            zoomTodo,
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
            ZOOM_MIN,
            undefined,
            false,
            22,
            12,
          );
        }

        const pueblos = municipiosPuntos.filter((m) => !CAPITALES_NOM.has(m.etiqueta) && !CAPITALES_NOM.has(m.nombre));
        const puntosPorClave = new Map<string, L.CircleMarker>();
        for (const m of pueblos) {
          const href = hrefMunicipio(m);
          const punto = L.circleMarker([m.lat, m.lon], {
            radius: RADIO_CON_NOMBRE,
            color: "#fff",
            weight: 1.1,
            fillColor: "#1c2a32",
            fillOpacity: 1,
            pane: "pueblos",
          }).addTo(map);
          const puntoExt = punto as L.CircleMarker & { _radioBase?: number };
          puntoExt._radioBase = RADIO_CON_NOMBRE;
          punto.bindTooltip(m.nombre, { direction: "top", opacity: 1, className: "zona-globo" });
          punto.on("click", () => router.push(href));
          punto.on("mouseover", () =>
            punto.setStyle({ radius: radioHover(puntoExt._radioBase ?? RADIO_CON_NOMBRE) }),
          );
          punto.on("mouseout", () =>
            punto.setStyle({ radius: puntoExt._radioBase ?? RADIO_CON_NOMBRE }),
          );
          puntosPorClave.set(`${m.lat},${m.lon}`, punto);

          const dir = dirMunicipio(m);
          const etiqueta = etiquetaCorta(m);
          const prio = prioridadNombre(m);
          const ancho = Math.max(28, etiqueta.length * 7 + 8);
          const desfase = 6;
          const marca = L.marker([m.lat, m.lon], {
            interactive: false,
            keyboard: false,
            zIndexOffset: 700,
            icon: L.divIcon({
              className: "atlas-nombre",
              html: `<a href="${base}${href}">${etiqueta}</a>`,
              iconSize: [ancho, 16],
              iconAnchor: anclaDir(ancho, 16, dir, desfase),
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
            minZoom: prio === 0 ? ZOOM_MIN : zoomTrasClics(ZOOM_MIN, CLICS_PUEBLOS_MAS),
            desfase,
            punto,
          });
        }

        for (const t of CLIMA_ZONAS_MAPA) {
          const cielo = cieloDeClase(t.clase);
          const marca = L.marker([t.lat, t.lon], {
            interactive: true,
            keyboard: true,
            pane: "clima",
            zIndexOffset: 550,
            icon: L.divIcon({
              className: "atlas-clima-marca",
              html: htmlIconoCielo(cielo, "zona"),
              iconSize: [24, 24],
              // Izquierda del centroide de la zona (Mar a la derecha).
              iconAnchor: [24, 12],
            }),
          }).addTo(map);
          marca.bindTooltip(
            textoClima({
              nombre: `${t.nombre} (${t.nMunicipios} municipios)`,
              solHoras: t.solHoras,
              despejados: t.despejados,
              lluviaDias: t.lluviaDias,
              tempVerano: t.tempVerano,
              viento: t.viento,
              niebla: t.niebla,
            }),
            {
              direction: "top",
              opacity: 1,
              className: "zona-globo",
            },
          );
          marca.on("click", () => router.push(`/zona/${t.zonaId}/`));
          const elZona = marca.getElement();
          if (elZona) elZona.style.display = "none";
          climaZona.push(marca);
        }

        for (const m of municipiosPuntos) {
          const dato = climaDeMunicipio(m.zonaId, m.nombre);
          if (!dato) continue;
          const href = hrefMunicipio(m);
          const marca = L.marker([m.lat, m.lon], {
            interactive: true,
            keyboard: true,
            pane: "clima",
            zIndexOffset: 480,
            icon: L.divIcon({
              className: "atlas-clima-marca",
              html: htmlIconoCielo(cieloDeClase(dato.clase), "pueblo"),
              iconSize: [18, 18],
              iconAnchor: [18, 9],
            }),
          }).addTo(map);
          marca.bindTooltip(textoClima({ nombre: m.nombre, ...dato }), {
            direction: "top",
            opacity: 1,
            className: "zona-globo",
          });
          marca.on("click", () => router.push(href));
          const elPueblo = marca.getElement();
          if (elPueblo) elPueblo.style.display = "none";
          climaPueblo.push({
            marker: marca,
            lat: m.lat,
            lon: m.lon,
            minZoom: prioridadNombre(m) === 0 ? ZOOM_MIN : zoomTrasClics(ZOOM_MIN, CLICS_PUEBLOS_MAS),
            punto: puntosPorClave.get(`${m.lat},${m.lon}`),
          });
        }

        for (const t of MAR_ZONAS_MAPA) {
          const marca = L.marker([t.lat, t.lon], {
            interactive: true,
            keyboard: true,
            pane: "mar",
            zIndexOffset: 560,
            icon: L.divIcon({
              className: "atlas-mar-marca",
              html: htmlIconoCosta(t.tramo, "zona"),
              iconSize: [24, 24],
              // Derecha del centroide (Clima a la izquierda).
              iconAnchor: [0, 12],
            }),
          }).addTo(map);
          marca.bindTooltip(t.tooltip, {
            direction: "top",
            opacity: 1,
            className: "zona-globo",
          });
          marca.on("click", () => router.push(`/zona/${t.zonaId}/`));
          const elZona = marca.getElement();
          if (elZona) elZona.style.display = "none";
          marZona.push(marca);
        }

        for (const m of municipiosPuntos) {
          const dato = marDeMunicipio(m.zonaId, m.nombre);
          if (!dato) continue;
          const href = hrefMunicipio(m);
          const minZ = prioridadNombre(m) === 0 ? ZOOM_MIN : zoomTrasClics(ZOOM_MIN, CLICS_PUEBLOS_MAS);
          const punto = puntosPorClave.get(`${m.lat},${m.lon}`);

          // Costa: a la derecha del punto (Clima queda a la izquierda).
          const marcaCosta = L.marker([m.lat, m.lon], {
            interactive: true,
            keyboard: true,
            pane: "mar",
            zIndexOffset: 490,
            icon: L.divIcon({
              className: "atlas-mar-marca",
              html: htmlIconoCosta(dato.tramo, "pueblo"),
              iconSize: [18, 18],
              iconAnchor: [0, 9],
            }),
          }).addTo(map);
          marcaCosta.bindTooltip(textoMar(dato), {
            direction: "top",
            opacity: 1,
            className: "zona-globo",
          });
          marcaCosta.on("click", () => router.push(href));
          const elCosta = marcaCosta.getElement();
          if (elCosta) elCosta.style.display = "none";
          marPueblo.push({
            marker: marcaCosta,
            lat: m.lat,
            lon: m.lon,
            minZoom: minZ,
            punto,
          });

          // Playa: más a la derecha y un poco abajo.
          const marcaPlaya = L.marker([m.lat, m.lon], {
            interactive: true,
            keyboard: true,
            pane: "mar",
            zIndexOffset: 495,
            icon: L.divIcon({
              className: "atlas-mar-marca",
              html: htmlIconoPlaya("pueblo"),
              iconSize: [18, 18],
              iconAnchor: [-14, 18],
            }),
          }).addTo(map);
          marcaPlaya.bindTooltip(
            `${dato.nombre}: playa ${dato.minBano} min · ${dato.playaBano}`,
            {
              direction: "top",
              opacity: 1,
              className: "zona-globo",
            },
          );
          marcaPlaya.on("click", () => router.push(href));
          const elPlaya = marcaPlaya.getElement();
          if (elPlaya) elPlaya.style.display = "none";
          marPlaya.push({
            marker: marcaPlaya,
            lat: m.lat,
            lon: m.lon,
            minZoom: minZ,
            punto,
          });
        }

        encuadrar();
        aplicarEscalaNombres();
        actualizarNombres();
        map.on("zoomend moveend", actualizarNombres);
      })
      .catch(() => undefined);

    return () => {
      muerto = true;
      pintarCapas.current = () => {};
      ro.disconnect();
      map.off("zoomend moveend");
      map.remove();
    };
  }, [router]);

  return <div ref={caja} className="mapa-leaflet mapa-atlas h-full w-full" />;
}
