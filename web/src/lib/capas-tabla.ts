import { COLOR_COMUNIDAD } from "@/lib/mapa-base";
import { climaMunicipios, type ClimaMunicipio } from "@/lib/clima";
import { marDeMunicipio, type MarMunicipio } from "@/lib/mar";
import { avionDeMunicipio, etiquetaPalmaCorta, type AvionMunicipio } from "@/lib/avion";
import { serviciosDeMunicipio, type ServiciosMunicipio } from "@/lib/servicios";
import { hospitalDeMunicipio, type HospitalMunicipio } from "@/lib/hospital";
import { precioDeMunicipio, type PrecioMunicipio } from "@/lib/precio";
import { hrefMunicipio, municipiosPuntos } from "@/lib/municipios-puntos";
import { comunidadDeZona, zonas, type ComunidadId } from "@/lib/zonas";

export type { ComunidadId };

export type CapaTablaId = "clima" | "mar" | "servicios" | "hospital" | "avion" | "precio";

export type ColumnaTabla = {
  id: string;
  capa: CapaTablaId;
  etiqueta: string;
  /** true = más alto primero al ordenar (sol); false = más bajo primero (lluvia, minutos). */
  mejorEsMayor: boolean;
  formato: (fila: FilaMunicipioTabla) => string;
  valor: (fila: FilaMunicipioTabla) => number | string | null;
};

export type FilaMunicipioTabla = {
  key: string;
  zonaId: string;
  zona: string;
  comunidad: ComunidadId;
  tramoId: string | null;
  nombre: string;
  etiqueta: string;
  href: string;
  clima: ClimaMunicipio | null;
  mar: MarMunicipio | null;
  servicios: ServiciosMunicipio | null;
  hospital: HospitalMunicipio | null;
  avion: AvionMunicipio | null;
  precio: PrecioMunicipio | null;
};

/** Galicia: oeste = Rías Baixas; norte = Ártabro + Mariña. El resto de CCAA no usa tramo. */
export const TRAMOS_GALICIA: { id: string; nombre: string; zonaIds: string[] }[] = [
  {
    id: "galicia-oeste",
    nombre: "Galicia oeste",
    zonaIds: [
      "baixo-mino",
      "val-minor",
      "vigo-e-ria",
      "o-morrazo",
      "pontevedra-e-sanxenxo",
      "o-salnes",
      "barbanza-e-noia",
    ],
  },
  {
    id: "galicia-norte",
    nombre: "Galicia norte",
    zonaIds: ["golfo-artabro-e-ferrol", "a-marina"],
  },
];

export const COLUMNAS_CAPA: Record<CapaTablaId, ColumnaTabla[]> = {
  clima: [
    {
      id: "solHoras",
      capa: "clima",
      etiqueta: "Sol",
      mejorEsMayor: true,
      formato: (f) => (f.clima ? `${f.clima.solHoras.toLocaleString("es-ES")} h` : "—"),
      valor: (f) => f.clima?.solHoras ?? null,
    },
    {
      id: "despejados",
      capa: "clima",
      etiqueta: "Despejados",
      mejorEsMayor: true,
      formato: (f) => (f.clima ? `${f.clima.despejados} días` : "—"),
      valor: (f) => f.clima?.despejados ?? null,
    },
    {
      id: "lluviaDias",
      capa: "clima",
      etiqueta: "Lluvia",
      mejorEsMayor: false,
      formato: (f) => (f.clima ? `${f.clima.lluviaDias} días` : "—"),
      valor: (f) => f.clima?.lluviaDias ?? null,
    },
  ],
  mar: [
    {
      id: "minCosta",
      capa: "mar",
      etiqueta: "Costa",
      mejorEsMayor: false,
      formato: (f) => (f.mar ? `${f.mar.minCosta} min` : "—"),
      valor: (f) => f.mar?.minCosta ?? null,
    },
    {
      id: "minBano",
      capa: "mar",
      etiqueta: "Baño",
      mejorEsMayor: false,
      formato: (f) => (f.mar ? `${f.mar.minBano} min` : "—"),
      valor: (f) => f.mar?.minBano ?? null,
    },
  ],
  servicios: [
    {
      id: "serviciosNota",
      capa: "servicios",
      etiqueta: "Nota",
      mejorEsMayor: true,
      formato: (f) => (f.servicios ? `${f.servicios.nota}/10` : "—"),
      valor: (f) => f.servicios?.nota ?? null,
    },
  ],
  hospital: [
    {
      id: "hospitalMin",
      capa: "hospital",
      etiqueta: "Hospital",
      mejorEsMayor: false,
      formato: (f) => (f.hospital ? `${f.hospital.hospitalMin} min` : "—"),
      valor: (f) => f.hospital?.hospitalMin ?? null,
    },
  ],
  avion: [
    {
      id: "aeropuertoMin",
      capa: "avion",
      etiqueta: "Aeropuerto",
      mejorEsMayor: false,
      formato: (f) => (f.avion ? `${f.avion.aeropuertoMin} min` : "—"),
      valor: (f) => f.avion?.aeropuertoMin ?? null,
    },
    {
      id: "palmaCercano",
      capa: "avion",
      etiqueta: "Palma",
      mejorEsMayor: true,
      formato: (f) => (f.avion ? etiquetaPalmaCorta(f.avion.palmaMasCercano) : "—"),
      valor: (f) => {
        if (!f.avion) return null;
        const orden = { "Todo el año": 3, "Casi todo el año": 2, Verano: 1, No: 0 } as const;
        return orden[f.avion.palmaMasCercano];
      },
    },
  ],
  precio: [
    {
      id: "precioM2",
      capa: "precio",
      etiqueta: "€/m²",
      mejorEsMayor: false,
      formato: (f) =>
        f.precio ? `${f.precio.precioM2.toLocaleString("es-ES")} €` : "—",
      valor: (f) => f.precio?.precioM2 ?? null,
    },
    {
      id: "A_3hab",
      capa: "precio",
      etiqueta: "3 hab",
      mejorEsMayor: false,
      formato: (f) =>
        f.precio?.A_3hab != null
          ? `${Math.round(f.precio.A_3hab).toLocaleString("es-ES")} €`
          : "—",
      valor: (f) => f.precio?.A_3hab ?? null,
    },
  ],
};

/** Columnas al pulsar “+ capa” (no caben en la vista corta). */
export const COLUMNAS_EXTRA_CAPA: Record<CapaTablaId, ColumnaTabla[]> = {
  clima: [
    {
      id: "lluviaMm",
      capa: "clima",
      etiqueta: "mm",
      mejorEsMayor: false,
      formato: (f) => (f.clima ? `${f.clima.lluviaMm.toLocaleString("es-ES")} mm` : "—"),
      valor: (f) => f.clima?.lluviaMm ?? null,
    },
    {
      id: "tempVerano",
      capa: "clima",
      etiqueta: "Verano",
      mejorEsMayor: true,
      formato: (f) => (f.clima ? `${f.clima.tempVerano.toLocaleString("es-ES")} °C` : "—"),
      valor: (f) => f.clima?.tempVerano ?? null,
    },
    {
      id: "tempInvierno",
      capa: "clima",
      etiqueta: "Invierno",
      mejorEsMayor: true,
      formato: (f) => (f.clima ? `${f.clima.tempInvierno.toLocaleString("es-ES")} °C` : "—"),
      valor: (f) => f.clima?.tempInvierno ?? null,
    },
    {
      id: "viento",
      capa: "clima",
      etiqueta: "Viento",
      mejorEsMayor: false,
      formato: (f) => f.clima?.viento ?? "—",
      valor: (f) => f.clima?.viento ?? null,
    },
    {
      id: "niebla",
      capa: "clima",
      etiqueta: "Niebla",
      mejorEsMayor: false,
      formato: (f) => f.clima?.niebla ?? "—",
      valor: (f) => f.clima?.niebla ?? null,
    },
  ],
  mar: [
    {
      id: "playaNom",
      capa: "mar",
      etiqueta: "Playa",
      mejorEsMayor: true,
      formato: (f) => f.mar?.playaCorta ?? "—",
      valor: (f) => f.mar?.playaCorta ?? null,
    },
  ],
  servicios: [
    {
      id: "serviciosDetalle",
      capa: "servicios",
      etiqueta: "Detalle",
      mejorEsMayor: true,
      formato: (f) => f.servicios?.notaTexto ?? "—",
      valor: (f) => f.servicios?.notaTexto ?? null,
    },
    {
      id: "fibra",
      capa: "servicios",
      etiqueta: "Fibra",
      mejorEsMayor: true,
      formato: (f) => f.servicios?.fibra ?? "—",
      valor: (f) => f.servicios?.fibra ?? null,
    },
  ],
  hospital: [
    {
      id: "hospitalNom",
      capa: "hospital",
      etiqueta: "Centro",
      mejorEsMayor: true,
      formato: (f) => f.hospital?.hospitalCorto ?? "—",
      valor: (f) => f.hospital?.hospitalCorto ?? null,
    },
  ],
  avion: [
    {
      id: "palmaMejor",
      capa: "avion",
      etiqueta: "Mejor Palma",
      mejorEsMayor: true,
      formato: (f) => f.avion?.palmaMejor ?? "—",
      valor: (f) => f.avion?.palmaMejor ?? null,
    },
    {
      id: "aeroCercano",
      capa: "avion",
      etiqueta: "Más cerca",
      mejorEsMayor: true,
      formato: (f) => f.avion?.aeroCercano ?? "—",
      valor: (f) => f.avion?.aeroCercano ?? null,
    },
  ],
  precio: [
    {
      id: "A_2hab",
      capa: "precio",
      etiqueta: "2 hab",
      mejorEsMayor: false,
      formato: (f) =>
        f.precio?.A_2hab != null
          ? `${Math.round(f.precio.A_2hab).toLocaleString("es-ES")} €`
          : "—",
      valor: (f) => f.precio?.A_2hab ?? null,
    },
  ],
};

export function columnasDeCapas(
  activas: Iterable<string>,
  expandida: ReadonlySet<string> = new Set(),
): ColumnaTabla[] {
  const out: ColumnaTabla[] = [];
  for (const id of ["clima", "mar", "servicios", "hospital", "avion", "precio"] as CapaTablaId[]) {
    if (![...activas].includes(id)) continue;
    out.push(...COLUMNAS_CAPA[id]);
    if (expandida.has(id)) out.push(...COLUMNAS_EXTRA_CAPA[id]);
  }
  return out;
}

export function capasConExtra(activas: Iterable<string>): CapaTablaId[] {
  return (["clima", "mar", "servicios", "hospital", "avion", "precio"] as CapaTablaId[]).filter(
    (id) => [...activas].includes(id) && COLUMNAS_EXTRA_CAPA[id].length > 0,
  );
}

function tramoDeZona(zonaId: string, comunidad: ComunidadId): string | null {
  if (comunidad !== "galicia") return null;
  return TRAMOS_GALICIA.find((t) => t.zonaIds.includes(zonaId))?.id ?? null;
}

export function filasMunicipioTabla(): FilaMunicipioTabla[] {
  return municipiosPuntos.map((m) => {
    const z = zonas.find((x) => x.id === m.zonaId);
    const comunidad = z ? comunidadDeZona(z) : "galicia";
    const clima =
      climaMunicipios.find((c) => c.zonaId === m.zonaId && c.nombre === m.nombre) ?? null;
    const mar = marDeMunicipio(m.zonaId, m.nombre) ?? null;
    const servicios = serviciosDeMunicipio(m.zonaId, m.nombre) ?? null;
    const hospital = hospitalDeMunicipio(m.zonaId, m.nombre) ?? null;
    const avion = avionDeMunicipio(m.zonaId, m.nombre) ?? null;
    const precio = precioDeMunicipio(m.zonaId, m.nombre) ?? null;
    return {
      key: `${m.zonaId}:${m.nombre}`,
      zonaId: m.zonaId,
      zona: (z?.zona ?? m.zonaId).replace(" (PT)", ""),
      comunidad,
      tramoId: tramoDeZona(m.zonaId, comunidad),
      nombre: m.nombre,
      etiqueta: m.etiqueta,
      href: hrefMunicipio(m),
      clima,
      mar,
      servicios,
      hospital,
      avion,
      precio,
    };
  });
}

export type NodoZonaTabla = {
  id: string;
  nombre: string;
  filas: FilaMunicipioTabla[];
};

export type NodoTramoTabla = {
  id: string;
  nombre: string;
  zonas: NodoZonaTabla[];
  nPueblos: number;
};

export type NodoComunidadTabla = {
  id: ComunidadId;
  nombre: string;
  color: string;
  /** Solo Galicia: oeste / norte. */
  tramos: NodoTramoTabla[] | null;
  /** Asturias, Cantabria, Portugal: zonas directas. */
  zonas: NodoZonaTabla[] | null;
  nPueblos: number;
};

export function arbolTablaMunicipios(filas: FilaMunicipioTabla[]): NodoComunidadTabla[] {
  return COLOR_COMUNIDAD.map((c) => {
    const id = c.id as ComunidadId;
    const deComunidad = filas.filter((f) => f.comunidad === id);

    if (id === "galicia") {
      const tramos = TRAMOS_GALICIA.map((t) => {
        const deTramo = deComunidad.filter((f) => f.tramoId === t.id);
        const zonasNodo: NodoZonaTabla[] = t.zonaIds
          .map((zonaId) => {
            const zFilas = deTramo.filter((f) => f.zonaId === zonaId);
            if (!zFilas.length) return null;
            return { id: zonaId, nombre: zFilas[0].zona, filas: zFilas };
          })
          .filter((x): x is NodoZonaTabla => Boolean(x));
        return {
          id: t.id,
          nombre: t.nombre,
          zonas: zonasNodo,
          nPueblos: deTramo.length,
        };
      });
      return {
        id,
        nombre: c.nombre,
        color: c.color,
        tramos,
        zonas: null,
        nPueblos: deComunidad.length,
      };
    }

    const zonaIds = [...new Set(deComunidad.map((f) => f.zonaId))];
    const ordenZona = zonas.filter((z) => zonaIds.includes(z.id)).map((z) => z.id);
    const zonasNodo: NodoZonaTabla[] = ordenZona.map((zonaId) => {
      const zFilas = deComunidad.filter((f) => f.zonaId === zonaId);
      return { id: zonaId, nombre: zFilas[0]?.zona ?? zonaId, filas: zFilas };
    });

    return {
      id,
      nombre: c.nombre,
      color: c.color,
      tramos: null,
      zonas: zonasNodo,
      nPueblos: deComunidad.length,
    };
  });
}

export type OrdenTabla = { columnaId: string; dir: "asc" | "desc" };

export function ordenarFilas(
  filas: FilaMunicipioTabla[],
  orden: OrdenTabla[] | null,
  columnas: ColumnaTabla[],
): FilaMunicipioTabla[] {
  if (!orden?.length) return filas;

  return [...filas].sort((a, b) => {
    for (const criterio of orden) {
      const col = columnas.find((c) => c.id === criterio.columnaId);
      if (!col) continue;
      const va = col.valor(a);
      const vb = col.valor(b);
      if (va == null && vb == null) continue;
      if (va == null) return 1;
      if (vb == null) return -1;
      let cmp = 0;
      if (typeof va === "number" && typeof vb === "number") cmp = va - vb;
      else cmp = String(va).localeCompare(String(vb), "es");
      if (cmp !== 0) {
        const sentido = criterio.dir === "asc" ? 1 : -1;
        return cmp * sentido;
      }
    }
    return a.etiqueta.localeCompare(b.etiqueta, "es");
  });
}

/**
 * Clic en otra columna: se añade como desempate (máx. 3).
 * Clic en una ya activa: invierte sentido; si ya estaba invertida, se quita de la cadena.
 * Así Sol + Despejados + Lluvia ordenan “mejores en conjunto” sin inventar una nota.
 */
export function siguienteOrden(
  actual: OrdenTabla[] | null,
  columna: ColumnaTabla,
): OrdenTabla[] | null {
  const lista = actual ? [...actual] : [];
  const i = lista.findIndex((o) => o.columnaId === columna.id);

  if (i >= 0) {
    const actualDir = lista[i].dir;
    const dirMejor = columna.mejorEsMayor ? "desc" : "asc";
    if (actualDir === dirMejor) {
      lista[i] = { columnaId: columna.id, dir: actualDir === "asc" ? "desc" : "asc" };
      return lista;
    }
    lista.splice(i, 1);
    return lista.length ? lista : null;
  }

  const dir: "asc" | "desc" = columna.mejorEsMayor ? "desc" : "asc";
  if (lista.length >= 3) lista.pop();
  lista.push({ columnaId: columna.id, dir });
  return lista;
}
