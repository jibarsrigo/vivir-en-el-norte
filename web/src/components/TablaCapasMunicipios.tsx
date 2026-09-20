"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import EnlaceBuscaCompara from "@/components/EnlaceBuscaCompara";
import {
  COLUMNAS_EXTRA_CAPA,
  arbolTablaMunicipios,
  columnasDeCapas,
  filasMunicipioTabla,
  ordenarFilas,
  siguienteOrden,
  type CapaTablaId,
  type ColumnaTabla,
  type ComunidadId,
  type NodoZonaTabla,
  type OrdenTabla,
} from "@/lib/capas-tabla";

const ETIQUETA_CAPA: Record<CapaTablaId, string> = {
  clima: "Clima",
  mar: "Mar",
  servicios: "Servicios",
  hospital: "Hospital",
  avion: "Avión",
  precio: "Precio",
};

const ORDEN_CAPAS: CapaTablaId[] = [
  "clima",
  "mar",
  "servicios",
  "hospital",
  "avion",
  "precio",
];

type GrupoCapa = {
  capa: CapaTablaId;
  columnas: ColumnaTabla[];
  tieneExtra: boolean;
};

function gruposDeColumnas(columnas: ColumnaTabla[]): GrupoCapa[] {
  return ORDEN_CAPAS.flatMap((capa) => {
    const cols = columnas.filter((c) => c.capa === capa);
    if (!cols.length) return [];
    return [
      {
        capa,
        columnas: cols,
        tieneExtra: COLUMNAS_EXTRA_CAPA[capa].length > 0,
      },
    ];
  });
}

function CabeceraColumna({
  etiqueta,
  prioridad,
  dir,
  onClick,
  claseCapa,
}: {
  etiqueta: string;
  prioridad: number | null;
  dir?: "asc" | "desc";
  onClick: () => void;
  claseCapa: string;
}) {
  const activa = prioridad != null;
  return (
    <th className={`tabla-col-capa py-2 font-semibold ${claseCapa}`}>
      <button
        type="button"
        onClick={onClick}
        className={
          "inline-flex items-center gap-1 uppercase tracking-wide hover:text-[var(--acento)] " +
          (activa ? "text-[var(--acento)]" : "text-[var(--tinta-suave)]")
        }
      >
        {etiqueta}
        {activa ? (
          <span aria-hidden className="text-[10px] font-bold tabular-nums">
            {prioridad}
            {dir === "asc" ? "↑" : "↓"}
          </span>
        ) : null}
      </button>
    </th>
  );
}

function TablaFilas({
  filas,
  columnas,
  orden,
  onOrden,
  mostrarZona,
  expandida,
  onToggleExtra,
}: {
  filas: ReturnType<typeof filasMunicipioTabla>;
  columnas: ReturnType<typeof columnasDeCapas>;
  orden: OrdenTabla[] | null;
  onOrden: (colId: string) => void;
  mostrarZona: boolean;
  expandida: ReadonlySet<string>;
  onToggleExtra: (capa: CapaTablaId) => void;
}) {
  const grupos = gruposDeColumnas(columnas);
  const conCapas = grupos.length > 0;
  const nColsCapa = grupos.reduce((n, g) => n + g.columnas.length, 0);
  /* Nombre (~9.5rem) + columnas de capa (~4.75rem c/u) → scroll horizontal en móvil */
  const minTablaRem = conCapas ? Math.max(28, 9.5 + nColsCapa * 4.75 + (mostrarZona ? 7.5 : 0)) : undefined;
  const fijas = conCapas
    ? "tabla-fijas border-b border-[var(--linea)] py-2 pr-3 align-bottom font-semibold uppercase tracking-wide text-[var(--tinta-suave)]"
    : "border-b border-[var(--linea)] py-2 pr-3 font-semibold uppercase tracking-wide text-[var(--tinta-suave)]";

  return (
    <div className="overflow-x-auto">
      <table
        className={
          "tabla-capas w-full border-collapse text-left text-sm " +
          (conCapas ? "tabla-capas--capas" : "")
        }
        style={minTablaRem != null ? { minWidth: `${minTablaRem}rem` } : undefined}
      >
        <thead>
          <tr>
            <th rowSpan={conCapas ? 2 : 1} className={`${fijas} tabla-col-nombre`}>
              <span className="sr-only">Pueblo</span>
            </th>
            {mostrarZona ? (
              <th rowSpan={conCapas ? 2 : 1} className={`${fijas} tabla-col-zona`}>
                Zona
              </th>
            ) : null}
            {grupos.map((g) => (
              <th
                key={g.capa}
                colSpan={g.columnas.length}
                className={`tabla-grupo-capa capa-${g.capa} text-left`}
              >
                <div className="flex items-center gap-1.5">
                  <span>{ETIQUETA_CAPA[g.capa]}</span>
                  {g.tieneExtra ? (
                    <button
                      type="button"
                      onClick={() => onToggleExtra(g.capa)}
                      aria-expanded={expandida.has(g.capa)}
                      title={
                        expandida.has(g.capa)
                          ? `Menos ${ETIQUETA_CAPA[g.capa]}`
                          : `Más ${ETIQUETA_CAPA[g.capa]}`
                      }
                      className="inline-flex items-baseline gap-0.5 rounded px-0.5 text-[var(--acento)] hover:bg-white/50"
                    >
                      <span className="text-[11px] font-bold leading-none" aria-hidden>
                        {expandida.has(g.capa) ? "−" : "+"}
                      </span>
                      <span className="text-[8px] font-semibold lowercase leading-none text-[var(--tinta-suave)]">
                        {g.capa}
                      </span>
                    </button>
                  ) : null}
                </div>
              </th>
            ))}
          </tr>
          {conCapas ? (
            <tr>
              {grupos.flatMap((g) =>
                g.columnas.map((c) => {
                  const criterio = orden?.find((o) => o.columnaId === c.id);
                  const prioridad = criterio && orden ? orden.indexOf(criterio) + 1 : null;
                  return (
                    <CabeceraColumna
                      key={c.id}
                      etiqueta={c.etiqueta}
                      prioridad={prioridad}
                      dir={criterio?.dir}
                      onClick={() => onOrden(c.id)}
                      claseCapa={`capa-${g.capa}`}
                    />
                  );
                }),
              )}
            </tr>
          ) : null}
        </thead>
        <tbody>
          {filas.map((f) => (
            <tr key={f.key} className="border-b border-[var(--linea)]/70">
              <td className="tabla-fijas tabla-col-nombre py-2 pr-3 font-medium text-[var(--acento)]">
                <Link href={f.href} className="underline-offset-2 hover:underline">
                  {f.etiqueta}
                </Link>
              </td>
              {mostrarZona ? (
                <td className="tabla-fijas tabla-col-zona py-2 pr-3 text-[var(--tinta-suave)]">
                  {f.zona}
                </td>
              ) : null}
              {grupos.flatMap((g) =>
                g.columnas.map((c) => (
                  <td
                    key={c.id}
                    className={
                      `tabla-celda-capa capa-${g.capa} py-2 text-[var(--tinta)] ` +
                      (c.id === "serviciosDetalle"
                        ? "tabla-celda-detalle min-w-[14rem] max-w-[28rem] whitespace-normal leading-snug"
                        : "tabular-nums")
                    }
                  >
                    {c.formato(f)}
                  </td>
                )),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BarraOrden({
  columnas,
  orden,
  onQuitar,
  onQuitarTodo,
}: {
  columnas: ReturnType<typeof columnasDeCapas>;
  orden: OrdenTabla[] | null;
  onQuitar: (colId: string) => void;
  onQuitarTodo: () => void;
}) {
  const resumen =
    orden
      ?.map((o) => {
        const col = columnas.find((c) => c.id === o.columnaId);
        return col ? { ...o, etiqueta: col.etiqueta, capa: col.capa } : null;
      })
      .filter(Boolean) ?? [];

  if (!columnas.length) return null;

  return (
    <div className="mb-3">
      <p className="text-xs text-[var(--tinta-suave)]">
        Pulsa una cabecera para ordenar. Varias = desempate (1.ª, 2.ª…). No filtra: solo reordena.
      </p>
      {resumen.length ? (
        <ul className="mt-2 flex flex-wrap items-center gap-2">
          {resumen.map((o, i) =>
            o ? (
              <li key={o.columnaId}>
                <button
                  type="button"
                  onClick={() => onQuitar(o.columnaId)}
                  className={`inline-flex items-center gap-1 rounded-full border border-[var(--linea)] px-2.5 py-0.5 text-xs font-semibold text-[var(--acento)] capa-${o.capa}`}
                  title="Quitar este criterio"
                >
                  <span className="tabular-nums text-[var(--tinta-suave)]">{i + 1}.</span>
                  <span className="text-[9px] font-semibold uppercase text-[var(--tinta-suave)]">
                    {ETIQUETA_CAPA[o.capa]}
                  </span>
                  {o.etiqueta}
                  {o.dir === "asc" ? " ↑" : " ↓"}
                  <span aria-hidden className="ml-0.5 text-[var(--tinta-suave)]">
                    ×
                  </span>
                </button>
              </li>
            ) : null,
          )}
          <li>
            <button
              type="button"
              onClick={onQuitarTodo}
              className="text-xs font-semibold text-[var(--tinta-suave)] underline-offset-2 hover:underline"
            >
              Quitar todo
            </button>
          </li>
        </ul>
      ) : null}
    </div>
  );
}

function BloqueZonas({
  zonas,
  columnas,
  orden,
  onOrden,
  onQuitarCriterio,
  onQuitarTodo,
  expandida,
  onToggleExtra,
}: {
  zonas: NodoZonaTabla[];
  columnas: ReturnType<typeof columnasDeCapas>;
  orden: OrdenTabla[] | null;
  onOrden: (colId: string) => void;
  onQuitarCriterio: (colId: string) => void;
  onQuitarTodo: () => void;
  expandida: ReadonlySet<string>;
  onToggleExtra: (capa: CapaTablaId) => void;
}) {
  const todas = zonas.flatMap((z) => z.filas);
  const ordenadas = ordenarFilas(todas, orden, columnas);

  return (
    <div>
      <BarraOrden
        columnas={columnas}
        orden={orden}
        onQuitar={onQuitarCriterio}
        onQuitarTodo={onQuitarTodo}
      />
      {orden?.length ? (
        <TablaFilas
          filas={ordenadas}
          columnas={columnas}
          orden={orden}
          onOrden={onOrden}
          mostrarZona
          expandida={expandida}
          onToggleExtra={onToggleExtra}
        />
      ) : (
        <div className="space-y-5">
          {zonas.map((z) => (
            <div key={z.id}>
              <p className="mb-2 font-semibold text-[var(--acento)]">{z.nombre}</p>
              <TablaFilas
                filas={z.filas}
                columnas={columnas}
                orden={orden}
                onOrden={onOrden}
                mostrarZona={false}
                expandida={expandida}
                onToggleExtra={onToggleExtra}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function TablaCapasMunicipios({
  capasActivas,
  embebido = false,
  comunidad: comunidadCtrl,
  tramo: tramoCtrl,
  onToggleComunidad,
  onToggleTramo,
}: {
  capasActivas: ReadonlySet<string>;
  embebido?: boolean;
  comunidad?: ComunidadId | null;
  tramo?: string | null;
  onToggleComunidad?: (id: ComunidadId) => void;
  onToggleTramo?: (id: string) => void;
}) {
  const [expandida, setExpandida] = useState<ReadonlySet<string>>(() => new Set());
  const expandidaActiva = useMemo(() => {
    const next = new Set<string>();
    for (const id of expandida) if (capasActivas.has(id)) next.add(id);
    return next;
  }, [expandida, capasActivas]);
  const columnas = useMemo(
    () => columnasDeCapas(capasActivas, expandidaActiva),
    [capasActivas, expandidaActiva],
  );
  const arbol = useMemo(() => arbolTablaMunicipios(filasMunicipioTabla()), []);
  const [comunidadLocal, setComunidadLocal] = useState<ComunidadId | null>(null);
  const [tramoLocal, setTramoLocal] = useState<string | null>(null);
  const [orden, setOrden] = useState<OrdenTabla[] | null>(null);

  const controlado = onToggleComunidad != null;
  const comunidad = controlado ? (comunidadCtrl ?? null) : comunidadLocal;
  const tramo = controlado ? (tramoCtrl ?? null) : tramoLocal;
  const ordenActivo = columnas.length ? orden : null;

  function toggleComunidad(id: ComunidadId) {
    setOrden(null);
    if (onToggleComunidad) {
      onToggleComunidad(id);
      return;
    }
    setComunidadLocal((prev) => (prev === id ? null : id));
    setTramoLocal(null);
  }

  function toggleTramo(id: string) {
    setOrden(null);
    if (onToggleTramo) {
      onToggleTramo(id);
      return;
    }
    setTramoLocal((prev) => (prev === id ? null : id));
  }

  function onOrden(colId: string) {
    const col = columnas.find((c) => c.id === colId);
    if (!col) return;
    setOrden((prev) => siguienteOrden(prev, col));
  }

  function quitarCriterio(colId: string) {
    setOrden((prev) => {
      if (!prev?.length) return null;
      const next = prev.filter((o) => o.columnaId !== colId);
      return next.length ? next : null;
    });
  }

  function onToggleExtra(capa: CapaTablaId) {
    setExpandida((prev) => {
      const next = new Set(prev);
      if (next.has(capa)) next.delete(capa);
      else next.add(capa);
      return next;
    });
  }

  const propsBloque = {
    columnas,
    orden: ordenActivo,
    onOrden,
    onQuitarCriterio: quitarCriterio,
    onQuitarTodo: () => setOrden(null),
    expandida: expandidaActiva,
    onToggleExtra,
  };

  const cuerpo = (
    <>
      {embebido ? null : (
        <div className="flex items-center justify-between gap-3 border-b border-[var(--linea)] px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">
            Por comunidad
          </p>
          <EnlaceBuscaCompara />
        </div>
      )}

      <ul className="divide-y divide-[var(--linea)]">
        {arbol.map((c) => {
          const abierta = comunidad === c.id;
          return (
            <li key={c.id}>
              <button
                type="button"
                aria-expanded={abierta}
                onClick={() => toggleComunidad(c.id)}
                className="flex w-full min-h-[3.25rem] items-center gap-3 px-4 py-3 text-left"
              >
                <span
                  className="inline-block h-3 w-3 shrink-0 rounded-sm border border-white shadow-[0_0_0_1px_rgb(28_42_50/0.25)]"
                  style={{ background: c.color }}
                  aria-hidden
                />
                <span className="font-[family-name:var(--font-serif)] text-xl text-[var(--acento)]">
                  {c.nombre}
                </span>
                <span className="ml-auto text-sm text-[var(--tinta-suave)]">
                  {c.nPueblos} pueblos
                </span>
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded border border-[var(--linea)] text-lg leading-none text-[var(--tinta)]"
                  aria-hidden
                >
                  {abierta ? "−" : "+"}
                </span>
              </button>

              {abierta ? (
                <div className="space-y-3 border-t border-[var(--linea)] bg-[var(--papel)]/50 px-4 py-4">
                  {c.tramos ? (
                    <ul className="space-y-2">
                      {c.tramos.map((t) => {
                        const tramoAbierto = tramo === t.id;
                        return (
                          <li
                            key={t.id}
                            className="overflow-hidden rounded-md border border-[var(--linea)] bg-white"
                          >
                            <button
                              type="button"
                              aria-expanded={tramoAbierto}
                              onClick={() => toggleTramo(t.id)}
                              className="flex w-full items-center gap-2 px-3 py-2.5 text-left"
                            >
                              <span className="font-semibold text-[var(--acento)]">{t.nombre}</span>
                              <span className="ml-auto text-sm text-[var(--tinta-suave)]">
                                {t.nPueblos} pueblos
                              </span>
                              <span className="text-lg leading-none" aria-hidden>
                                {tramoAbierto ? "−" : "+"}
                              </span>
                            </button>
                            {tramoAbierto ? (
                              <div className="border-t border-[var(--linea)] px-3 py-3">
                                <BloqueZonas zonas={t.zonas} {...propsBloque} />
                              </div>
                            ) : null}
                          </li>
                        );
                      })}
                    </ul>
                  ) : c.zonas ? (
                    <BloqueZonas zonas={c.zonas} {...propsBloque} />
                  ) : null}
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </>
  );

  if (embebido) return cuerpo;

  return (
    <section className="mt-4 overflow-hidden rounded-xl border border-[var(--linea)] bg-white">
      {cuerpo}
    </section>
  );
}
