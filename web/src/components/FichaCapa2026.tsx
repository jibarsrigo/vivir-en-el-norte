import type { ReactNode } from "react";
import TablaPrecios from "@/components/TablaPrecios";
import type { FichaMunicipio } from "@/lib/municipios";

/** Texto útil: string no vacío tras trim; null/undefined/"" → ausente. */
function texto(v: string | null | undefined): string | null {
  if (v == null) return null;
  const t = String(v).trim();
  return t.length ? t : null;
}

function formatoServicios(n: number): string {
  if (Number.isInteger(n)) return String(n);
  return n.toLocaleString("es-ES", {
    maximumFractionDigits: 1,
    minimumFractionDigits: 1,
  });
}

function Chip({
  etiqueta,
  valor,
  detalle,
}: {
  etiqueta: string;
  valor: string;
  detalle?: string | null;
}) {
  return (
    <div className="rounded-xl border border-[var(--linea)] bg-white px-3 py-2.5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--tinta-suave)]">
        {etiqueta}
      </p>
      <p className="mt-1 text-[15px] font-medium leading-snug text-[var(--tinta)]">{valor}</p>
      {detalle ? (
        <p className="mt-1 text-[13px] leading-snug text-[var(--tinta-suave)]">{detalle}</p>
      ) : null}
    </div>
  );
}

function Fila({ etiqueta, cuerpo }: { etiqueta: string; cuerpo: string }) {
  return (
    <div className="border-b border-[var(--linea)] py-3 last:border-b-0">
      <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--tinta-suave)]">
        {etiqueta}
      </p>
      <p className="mt-1.5 text-[15px] leading-relaxed text-[var(--tinta)]">{cuerpo}</p>
    </div>
  );
}

function SeccionDetalles({
  titulo,
  children,
}: {
  titulo: string;
  children: ReactNode;
}) {
  return (
    <details className="group rounded-xl border border-[var(--linea)] bg-white open:bg-white">
      <summary className="cursor-pointer list-none px-4 py-3 font-[family-name:var(--font-serif)] text-lg text-[var(--acento)] marker:content-none [&::-webkit-details-marker]:hidden">
        <span className="flex items-center justify-between gap-3">
          <span>{titulo}</span>
          <span
            className="text-sm font-sans font-semibold text-[var(--tinta-suave)] group-open:hidden"
            aria-hidden="true"
          >
            +
          </span>
          <span
            className="hidden text-sm font-sans font-semibold text-[var(--tinta-suave)] group-open:inline"
            aria-hidden="true"
          >
            −
          </span>
        </span>
      </summary>
      <div className="border-t border-[var(--linea)] px-4 pb-3 pt-0">{children}</div>
    </details>
  );
}

/**
 * Capa factual 2026 (CURSOR_13A/13B): datos estructurados v15 entre mapa y relato.
 * Incluye CASA + TablaPrecios. No usa históricos como equivalentes de la capa 2026.
 */
export default function FichaCapa2026({ ficha }: { ficha: FichaMunicipio }) {
  const precio =
    ficha.precioM2 == null
      ? "Precio: n.d."
      : `${ficha.precioM2.toLocaleString("es-ES")} €/m² aprox.`;

  const playa = texto(ficha.playaCotidiana);
  const playaModo = texto(ficha.playaCotidianaModo);
  const hospitalPractico = texto(ficha.hospitalPractico2026);
  const coche = texto(ficha.dependenciaCocheTexto);
  const autonomia = texto(ficha.autonomiaCotidiana);

  const radioCotidiano = texto(ficha.radioCotidiano);
  const radioSalida = texto(ficha.radioSalida);
  const paseo = texto(ficha.paseoCotidiano);
  const topo = texto(ficha.paseoPendienteTopografia);
  const estacionalidad = texto(ficha.estacionalidad2026);
  const peaje = texto(ficha.peajeRealidad);

  const primaria = texto(ficha.sanidadPrimaria2026);
  const urgencias = texto(ficha.urgenciasPAC2026);
  const hospitalRef = texto(ficha.hospitalReferencia2026);

  const transporte = texto(ficha.transporteRelevante2026);
  const aeropuerto = texto(ficha.aeropuertoPractico2026);
  const palma = texto(ficha.palmaDirecta2026);

  const microzona = texto(ficha.microzonaPrecio);
  const advertenciaMicro = texto(ficha.advertenciaMicrozona);
  const casaQueBuscar = texto(ficha.casaQueBuscar);
  const mercadoReventa = texto(ficha.mercadoReventa);

  const hayDiaADia = Boolean(
    radioCotidiano ||
      radioSalida ||
      paseo ||
      topo ||
      playa ||
      playaModo ||
      estacionalidad ||
      peaje,
  );
  const haySanidad = Boolean(primaria || urgencias || hospitalPractico || hospitalRef);
  const hayConexiones = Boolean(transporte || aeropuerto || palma);

  return (
    <section
      className="mt-8 max-w-4xl"
      aria-labelledby="ficha-capa-2026-titulo"
    >
      <h2
        id="ficha-capa-2026-titulo"
        className="font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]"
      >
        Datos para decidir
      </h2>
      <p className="mt-1 text-sm text-[var(--tinta-suave)]">
        Capa factual 2026 del municipio. No sustituye el relato.
      </p>

      <h3 className="mt-5 text-sm font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">
        Primer vistazo
      </h3>
      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <Chip etiqueta="Precio" valor={precio} />
        <Chip
          etiqueta="Servicios"
          valor={`${formatoServicios(ficha.servicios)} / 10`}
          detalle="Nota de vida diaria en el municipio (tiendas, farmacia, centro de salud…)."
        />
        {autonomia ? <Chip etiqueta="Autonomía cotidiana" valor={autonomia} /> : null}
        {playa ? (
          <Chip etiqueta="Mar / playa cotidiana" valor={playa} detalle={playaModo} />
        ) : null}
        {hospitalPractico ? (
          <Chip etiqueta="Hospital práctico" valor={hospitalPractico} />
        ) : null}
        {coche ? (
          <div className="rounded-xl border border-[var(--linea)] bg-white px-3 py-2.5 sm:col-span-2 lg:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--tinta-suave)]">
              Coche
            </p>
            <p className="mt-1.5 text-[15px] leading-relaxed text-[var(--tinta)]">{coche}</p>
          </div>
        ) : null}
      </div>

      <div className="mt-4 space-y-3">
        {hayDiaADia ? (
          <SeccionDetalles titulo="Día a día">
            {radioCotidiano ? (
              <Fila etiqueta="Radio cotidiano" cuerpo={radioCotidiano} />
            ) : null}
            {radioSalida ? <Fila etiqueta="Radio de salida" cuerpo={radioSalida} /> : null}
            {playa ? <Fila etiqueta="Mar / playa cotidiana" cuerpo={playa} /> : null}
            {playaModo ? (
              <Fila etiqueta="Cómo se vive el mar" cuerpo={playaModo} />
            ) : null}
            {paseo ? <Fila etiqueta="Paseo cotidiano" cuerpo={paseo} /> : null}
            {topo ? <Fila etiqueta="Pendiente / topografía" cuerpo={topo} /> : null}
            {estacionalidad ? (
              <Fila etiqueta="Estacionalidad" cuerpo={estacionalidad} />
            ) : null}
            {peaje ? <Fila etiqueta="Realidad práctica" cuerpo={peaje} /> : null}
          </SeccionDetalles>
        ) : null}

        {haySanidad ? (
          <SeccionDetalles titulo="Sanidad">
            {primaria ? <Fila etiqueta="Atención primaria" cuerpo={primaria} /> : null}
            {urgencias ? <Fila etiqueta="Urgencias / PAC" cuerpo={urgencias} /> : null}
            {hospitalPractico ? (
              <Fila etiqueta="Hospital práctico" cuerpo={hospitalPractico} />
            ) : null}
            {hospitalRef ? (
              <Fila etiqueta="Hospital de referencia" cuerpo={hospitalRef} />
            ) : null}
          </SeccionDetalles>
        ) : null}

        {hayConexiones ? (
          <SeccionDetalles titulo="Conexiones">
            {transporte ? (
              <Fila etiqueta="Transporte relevante" cuerpo={transporte} />
            ) : null}
            {aeropuerto ? (
              <Fila etiqueta="Aeropuerto práctico" cuerpo={aeropuerto} />
            ) : null}
            {palma ? <Fila etiqueta="Enlace con Palma" cuerpo={palma} /> : null}
          </SeccionDetalles>
        ) : null}

        <SeccionDetalles titulo="Casa">
          <div className="pt-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--tinta-suave)]">
              Precio y bandas
            </p>
            <p className="mt-1 text-[13px] leading-snug text-[var(--tinta-suave)]">
              Referencia municipal o de submercado; una vivienda concreta puede separarse de la
              media.
            </p>
            <TablaPrecios filas={[ficha]} />
          </div>
          {microzona ? (
            <Fila etiqueta="Microzona de precio" cuerpo={microzona} />
          ) : null}
          {advertenciaMicro ? (
            <Fila etiqueta="Advertencia de microzona" cuerpo={advertenciaMicro} />
          ) : null}
          {casaQueBuscar ? (
            <Fila
              etiqueta="Qué conviene revisar en una vivienda"
              cuerpo={casaQueBuscar}
            />
          ) : null}
          {mercadoReventa ? (
            <Fila etiqueta="Mercado y reventa" cuerpo={mercadoReventa} />
          ) : null}
        </SeccionDetalles>
      </div>
    </section>
  );
}
