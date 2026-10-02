"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  VISTA_NORTE,
  colorProvincia,
  dirMunicipio,
  etiquetaCorta,
  hrefMunicipio,
  type DirEtiqueta,
} from "@/lib/mapa-base";
import {
  colorPastelComunidad,
  geojsonEsComunidad,
  municipiosPuntosComunidad,
} from "@/lib/mapa-comunidad";
import { TESELA_CLARA } from "@/lib/teselas";
import { iconosMapaPueblo, type IconoCapaMapa } from "@/lib/capas-mapa-pueblo";
import {
  AEROPUERTOS_MAPA,
  htmlMarcaAeropuerto,
  textoAeropuerto,
} from "@/lib/avion";
import {
  HOSPITALES_MAPA,
  htmlMarcaHospital,
  textoHospitalMapa,
} from "@/lib/hospital";
import type { ComunidadId } from "@/lib/zonas";

type Rect = { x: number; y: number; w: number; h: number };

function choca(a: Rect, b: Rect, hueco = 3): boolean {
  return !(
    a.x + a.w + hueco < b.x ||
    b.x + b.w + hueco < a.x ||
    a.y + a.h + hueco < b.y ||
    b.y + b.h + hueco < a.y
  );
}

function anclaDir(ancho: number, alto: number, dir: DirEtiqueta, desfase = 0): [number, number] {
  if (dir === "left") return [ancho + desfase, alto / 2];
  if (dir === "right") return [-desfase, alto / 2];
  if (dir === "top") return [ancho / 2, alto + desfase];
  return [ancho / 2, -desfase];
}

function rectDir(pt: L.Point, ancho: number, alto: number, dir: DirEtiqueta, desfase = 0): Rect {
  if (dir === "left") return { x: pt.x - ancho - desfase, y: pt.y - alto / 2, w: ancho, h: alto };
  if (dir === "right") return { x: pt.x + desfase, y: pt.y - alto / 2, w: ancho, h: alto };
  if (dir === "top") return { x: pt.x - ancho / 2, y: pt.y - alto - desfase, w: ancho, h: alto };
  return { x: pt.x - ancho / 2, y: pt.y + desfase, w: ancho, h: alto };
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
  n: { ancho: number; alto: number; dir: DirEtiqueta; desfase: number },
  ocupados: Rect[],
): SitioNombre | null {
  for (const dir of ordenDirs(n.dir)) {
    for (const desfase of [5, 10, 16, 22, 28]) {
      const ancho = Math.max(24, n.ancho);
      const alto = n.alto;
      const rect = rectDir(pt, ancho, alto, dir, desfase);
      if (!ocupados.some((o) => choca(rect, o))) {
        return { dir, desfase, ancho, alto };
      }
    }
  }
  return null;
}

type Props = {
  comunidadId: ComunidadId;
  clima?: boolean;
  mar?: boolean;
  servicios?: boolean;
  hospital?: boolean;
  avion?: boolean;
  precio?: boolean;
};

/**
 * Mapa del norte: CCAA resaltada en pastel + municipios de esa CCAA (sin zonas).
 * Las capas (clima, mar…) usan la misma pastilla que el mapa de portada.
 */
export default function MapaComunidadAutonoma({
  comunidadId,
  clima = false,
  mar = false,
  servicios = false,
  hospital = false,
  avion = false,
  precio = false,
}: Props) {
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
      dragging: true,
      zoomSnap: 0.25,
    });

    L.tileLayer(TESELA_CLARA.url, { attribution: TESELA_CLARA.attribution }).addTo(map);
    map.createPane("capas");
    const paneCapas = map.getPane("capas");
    if (paneCapas) {
      paneCapas.style.zIndex = "490";
      paneCapas.style.pointerEvents = "auto";
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

    const limitesNorte = L.latLngBounds(VISTA_NORTE[0], VISTA_NORTE[1]);
    let muerto = false;
    let yaEncuadrado = false;
    const pastel = colorPastelComunidad(comunidadId);
    const pueblos = municipiosPuntosComunidad(comunidadId);

    type MarcaNombre = {
      marker: L.Marker;
      lat: number;
      lon: number;
      ancho: number;
      alto: number;
      dir: DirEtiqueta;
      desfase: number;
    };
    const nombres: MarcaNombre[] = [];

    type CapaGrupo = {
      marker: L.Marker;
      lat: number;
      lon: number;
      nombre: string;
      zonaId: string;
      ico: number;
      punto?: L.CircleMarker;
    };
    const capasPueblo: CapaGrupo[] = [];
    const avionAeropuertos: L.Marker[] = [];
    const hospitalMarcas: L.Marker[] = [];

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
      for (const m of hospitalMarcas) {
        const el = m.getElement();
        if (el) el.style.display = hospitalOn ? "" : "none";
      }

      const capasVis = new Set<string>();
      for (const c of capasPueblo) {
        const el = c.marker.getElement();
        if (!el) continue;
        let visible = false;
        if (alguna) {
          const iconos = iconosMapaPueblo(c.zonaId, c.nombre, activas);
          if (pintarFilaCapas(c, iconos)) {
            visible = true;
            capasVis.add(`${c.lat},${c.lon}`);
          }
        }
        el.style.display = visible ? "" : "none";
      }

      for (const c of capasPueblo) {
        if (!c.punto) continue;
        const hide = capasVis.has(`${c.lat},${c.lon}`);
        c.punto.setStyle(hide ? { opacity: 0, fillOpacity: 0 } : { opacity: 1, fillOpacity: 1 });
      }
    };
    pintarCapas.current = actualizarCapas;

    const actualizarNombres = () => {
      const ocupados: Rect[] = [];
      for (const n of nombres) {
        const el = n.marker.getElement();
        if (!el) continue;
        const pt = map.latLngToContainerPoint([n.lat, n.lon]);
        const sitio =
          buscarSitio(pt, n, ocupados) ?? {
            dir: n.dir,
            desfase: n.desfase,
            ancho: n.ancho,
            alto: n.alto,
          };
        aplicarSitio(el, sitio);
        ocupados.push(rectDir(pt, sitio.ancho, sitio.alto, sitio.dir, sitio.desfase));
      }
      actualizarCapas();
    };

    const encuadrar = () => {
      if (!caja.current || caja.current.clientHeight < 40) return;
      map.invalidateSize();
      if (!yaEncuadrado) {
        map.fitBounds(limitesNorte, { padding: [12, 16], animate: false });
        yaEncuadrado = true;
        actualizarNombres();
      }
    };
    const ro = new ResizeObserver(encuadrar);
    ro.observe(caja.current);
    encuadrar();

    const base = process.env.NEXT_PUBLIC_BASE || "";

    fetch(`${base}/data/provincias_norte.geojson`, { cache: "no-store" })
      .then((r) => r.json())
      .then((geo) => {
        if (muerto) return;
        L.geoJSON(geo, {
          interactive: false,
          style: (feat) => {
            const p = feat?.properties as { region?: string; admin?: string };
            const es = geojsonEsComunidad(p, comunidadId);
            return {
              color: es ? "#fff" : "#d8dde0",
              weight: es ? 1 : 0.7,
              fillColor: es ? pastel : colorProvincia(p.region, p.admin),
              fillOpacity: es ? 0.92 : 0.2,
            };
          },
        }).addTo(map);

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
          hospitalMarcas.push(marca);
        }

        for (const m of pueblos) {
          const href = hrefMunicipio(m);
          const punto = L.circleMarker([m.lat, m.lon], {
            radius: 3.5,
            color: "#fff",
            weight: 1.1,
            fillColor: "#1c2a32",
            fillOpacity: 1,
          })
            .addTo(map)
            .on("click", () => router.push(href));

          const dir = dirMunicipio(m);
          const etiqueta = etiquetaCorta(m);
          const ancho = Math.max(28, etiqueta.length * 7 + 8);
          const alto = 16;
          const desfase = 6;
          const marca = L.marker([m.lat, m.lon], {
            interactive: true,
            keyboard: true,
            zIndexOffset: 700,
            icon: L.divIcon({
              className: "atlas-nombre",
              html: `<a href="${base}${href}">${etiqueta}</a>`,
              iconSize: [ancho, alto],
              iconAnchor: anclaDir(ancho, alto, dir, desfase),
            }),
          }).addTo(map);

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
          enganchar();
          nombres.push({ marker: marca, lat: m.lat, lon: m.lon, ancho, alto, dir, desfase });

          if (iconosMapaPueblo(m.zonaId, m.nombre, "todas").length === 0) continue;
          const capaMarca = L.marker([m.lat, m.lon], {
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
          capaMarca.bindTooltip("", { direction: "top", opacity: 1, className: "zona-globo" });
          capaMarca.on("click", () => router.push(href));
          const elCapa = capaMarca.getElement();
          if (elCapa) elCapa.style.display = "none";
          capasPueblo.push({
            marker: capaMarca,
            lat: m.lat,
            lon: m.lon,
            nombre: m.nombre,
            zonaId: m.zonaId,
            ico: 18,
            punto,
          });
        }

        encuadrar();
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
  }, [comunidadId, router]);

  return <div ref={caja} className="mapa-leaflet h-full w-full" />;
}
