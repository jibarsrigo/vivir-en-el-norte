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
  AEROPUERTOS_MAPA,
  htmlMarcaAeropuerto,
  textoAeropuerto,
} from "@/lib/avion";
import {
  HOSPITALES_MAPA,
  ZOOM_NOMBRE_HOSPITAL,
  htmlMarcaHospital,
  textoHospitalMapa,
  type HospitalMapa,
} from "@/lib/hospital";
import { iconosMapaPueblo, type IconoCapaMapa } from "@/lib/capas-mapa-pueblo";

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
  servicios = false,
  hospital = false,
  avion = false,
  precio = false,
}: {
  clima?: boolean;
  mar?: boolean;
  servicios?: boolean;
  hospital?: boolean;
  avion?: boolean;
  precio?: boolean;
}) {
  const caja = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const climaRef = useRef(clima);
  const marRef = useRef(mar);
  const serviciosRef = useRef(servicios);
  const hospitalRef = useRef(hospital);
  const avionRef = useRef(avion);
  const precioRef = useRef(precio);
  const pintarCapas = useRef<() => void>(() => {});
  climaRef.current = clima;
  marRef.current = mar;
  serviciosRef.current = servicios;
  hospitalRef.current = hospital;
  avionRef.current = avion;
  precioRef.current = precio;

  useEffect(() => {
    pintarCapas.current();
  }, [clima, mar, servicios, hospital, avion, precio]);

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
    map.createPane("avion");
    const paneAvion = map.getPane("avion");
    if (paneAvion) {
      paneAvion.style.zIndex = "480";
      paneAvion.style.pointerEvents = "auto";
    }
    map.createPane("hospital");
    const paneHospital = map.getPane("hospital");
    if (paneHospital) {
      paneHospital.style.zIndex = "475";
      paneHospital.style.pointerEvents = "auto";
    }
    map.createPane("capas");
    const paneCapas = map.getPane("capas");
    if (paneCapas) {
      paneCapas.style.zIndex = "490";
      paneCapas.style.pointerEvents = "auto";
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
    const avionAeropuertos: L.Marker[] = [];
    type HospitalMarca = { marker: L.Marker; hosp: HospitalMapa; conNombre: boolean };
    const hospitalMarcas: HospitalMarca[] = [];
    /** Una fila de iconos por pueblo (misma fuente que la ficha: iconosMapaPueblo). */
    type CapaGrupo = {
      marker: L.Marker;
      lat: number;
      lon: number;
      nombre: string;
      zonaId: string;
      /** Tamaño de icono en la pastilla. */
      ico: number;
      minZoom?: number;
      punto?: L.CircleMarker;
    };
    const capasPueblo: CapaGrupo[] = [];

    const ICO_GAP = 3;
    const ICO_PAD = 2;

    function tipCapasUnificado(
      nombre: string,
      lineas: { ico: string; cuerpo: string }[],
    ): string {
      const filas = lineas
        .map(
          (l) =>
            `<div class="globo-capa-fila">${l.ico}<span class="globo-capa-txt">${l.cuerpo}</span></div>`,
        )
        .join("");
      return `<div class="globo-capas"><div class="globo-nom">${nombre}</div>${filas}</div>`;
    }

    function pintarFilaCapas(c: CapaGrupo, iconos: IconoCapaMapa[]): boolean {
      if (!iconos.length) return false;
      const partes = iconos.map((i) => i.html);
      const lineas = iconos.map((i) => ({ ico: i.html, cuerpo: i.cuerpo }));
      const n = partes.length;
      const wIconos = iconos.reduce((s, i) => s + (i.ancho ?? c.ico), 0);
      const w = wIconos + (n - 1) * ICO_GAP + ICO_PAD * 2;
      const h = c.ico + ICO_PAD * 2;
      c.marker.setIcon(
        L.divIcon({
          className: "atlas-capas-marca",
          html: `<div class="atlas-capas-fila">${partes.join("")}</div>`,
          iconSize: [w, h],
          iconAnchor: [w / 2, -3],
        }),
      );
      c.marker.setTooltipContent(tipCapasUnificado(c.nombre, lineas));
      return true;
    }

    const aplicarEscalaNombres = () => {
      const inicio = map.getZoom();
      zoomTodo = zoomTrasClics(inicio, CLICS_HASTA_TODO);
      zoomPueblosMas = zoomTrasClics(inicio, CLICS_PUEBLOS_MAS);
      for (const n of nombres) {
        if (n.prioridad === 1) n.minZoom = zoomPueblosMas;
        if (n.sinColision && n.maxZoom != null) n.maxZoom = zoomTodo;
      }
      for (const c of capasPueblo) {
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
      const serviciosOn = serviciosRef.current;
      const hospitalOn = hospitalRef.current;
      const avionOn = avionRef.current;
      const precioOn = precioRef.current;
      map.getContainer().classList.toggle("mapa-con-clima", climaOn);
      map.getContainer().classList.toggle("mapa-con-mar", marOn);
      map.getContainer().classList.toggle("mapa-con-servicios", serviciosOn);
      map.getContainer().classList.toggle("mapa-con-hospital", hospitalOn);
      map.getContainer().classList.toggle("mapa-con-avion", avionOn);
      map.getContainer().classList.toggle("mapa-con-precio", precioOn);
      const zoom = map.getZoom();
      const activas = new Set<string>();
      if (climaOn) activas.add("clima");
      if (marOn) activas.add("mar");
      if (serviciosOn) activas.add("servicios");
      if (hospitalOn) activas.add("hospital");
      if (avionOn) activas.add("avion");
      if (precioOn) activas.add("precio");
      const alguna = activas.size > 0;

      for (const m of avionAeropuertos) {
        const el = m.getElement();
        if (el) el.style.display = avionOn ? "" : "none";
      }

      const conNombreHosp = zoom + 1e-6 >= ZOOM_NOMBRE_HOSPITAL;
      for (const hm of hospitalMarcas) {
        const el = hm.marker.getElement();
        if (!el) continue;
        el.style.display = hospitalOn ? "" : "none";
        if (!hospitalOn) continue;
        if (hm.conNombre === conNombreHosp) continue;
        hm.conNombre = conNombreHosp;
        const ancho = conNombreHosp
          ? Math.max(56, hm.hosp.nombre.length * 7.2 + 28)
          : 26;
        const alto = conNombreHosp ? 22 : 26;
        hm.marker.setIcon(
          L.divIcon({
            className: "atlas-hospital-marca atlas-hospital-sede",
            html: htmlMarcaHospital(hm.hosp.nombre, conNombreHosp, hm.hosp.tipo),
            iconSize: [ancho, alto],
            iconAnchor: [ancho / 2, alto / 2],
          }),
        );
      }

      const clave = (lat: number, lon: number) => `${lat},${lon}`;
      const capasVis = new Set<string>();

      // Mismos pueblos que muestran nombre (importantes / que caben).
      for (const c of capasPueblo) {
        const el = c.marker.getElement();
        if (!el) continue;
        let visible = false;
        if (alguna) {
          const nom = nombres.find((n) => n.lat === c.lat && n.lon === c.lon && n.prioridad >= 0);
          const nomEl = nom?.marker.getElement();
          const nombreOk = nom ? nomEl?.style.display !== "none" : zoom + 1e-6 >= (c.minZoom ?? zoomPueblosMas);
          const iconos = iconosMapaPueblo(c.zonaId, c.nombre, activas);
          if (nombreOk && pintarFilaCapas(c, iconos)) {
            visible = true;
            capasVis.add(clave(c.lat, c.lon));
          }
        }
        el.style.display = visible ? "" : "none";
      }

      for (const c of capasPueblo) {
        if (!c.punto) continue;
        const hide = capasVis.has(clave(c.lat, c.lon));
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

        for (const a of AEROPUERTOS_MAPA) {
          const ancho = Math.max(52, a.nombre.length * 7.2 + 28);
          const marca = L.marker([a.lat, a.lon], {
            interactive: true,
            keyboard: true,
            pane: "avion",
            zIndexOffset: 580,
            icon: L.divIcon({
              className: "atlas-avion-marca atlas-aeropuerto",
              html: htmlMarcaAeropuerto(a.nombre),
              iconSize: [ancho, 22],
              iconAnchor: [ancho / 2, 11],
            }),
          }).addTo(map);
          marca.bindTooltip(textoAeropuerto(a), {
            direction: "top",
            opacity: 1,
            className: "zona-globo",
          });
          const elAero = marca.getElement();
          if (elAero) elAero.style.display = "none";
          avionAeropuertos.push(marca);
        }

        for (const h of HOSPITALES_MAPA) {
          const marca = L.marker([h.lat, h.lon], {
            interactive: true,
            keyboard: true,
            pane: "hospital",
            zIndexOffset: 570,
            icon: L.divIcon({
              className: "atlas-hospital-marca atlas-hospital-sede",
              html: htmlMarcaHospital(h.nombre, false, h.tipo),
              iconSize: [26, 26],
              iconAnchor: [13, 13],
            }),
          }).addTo(map);
          marca.bindTooltip(textoHospitalMapa(h), {
            direction: "top",
            opacity: 1,
            className: "zona-globo",
          });
          const elHosp = marca.getElement();
          if (elHosp) elHosp.style.display = "none";
          hospitalMarcas.push({ marker: marca, hosp: h, conNombre: false });
        }

        for (const m of municipiosPuntos) {
          if (iconosMapaPueblo(m.zonaId, m.nombre, "todas").length === 0) continue;
          const href = hrefMunicipio(m);
          const marca = L.marker([m.lat, m.lon], {
            interactive: true,
            keyboard: true,
            pane: "capas",
            zIndexOffset: 500,
            icon: L.divIcon({
              className: "atlas-capas-marca",
              html: `<div class="atlas-capas-fila"></div>`,
              iconSize: [18, 18],
              iconAnchor: [9, -3],
            }),
          }).addTo(map);
          marca.bindTooltip("", { direction: "top", opacity: 1, className: "zona-globo" });
          marca.on("click", () => router.push(href));
          const el = marca.getElement();
          if (el) el.style.display = "none";
          capasPueblo.push({
            marker: marca,
            lat: m.lat,
            lon: m.lon,
            nombre: m.nombre,
            zonaId: m.zonaId,
            ico: 18,
            minZoom: prioridadNombre(m) === 0 ? ZOOM_MIN : zoomTrasClics(ZOOM_MIN, CLICS_PUEBLOS_MAS),
            punto: puntosPorClave.get(`${m.lat},${m.lon}`),
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
