"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { filaCompara } from "@/lib/compara";
import { rutaPublica } from "@/lib/ruta-publica";

/**
 * Página oculta de pruebas de layout foto + «Para decidirte».
 * Solo A Guarda. URL: /probar-foto-decidirte/
 */

function Accordion({
  id,
  titulo,
  abierto,
  onToggle,
  children,
  tituloClase,
  panelClase,
  masClase,
}: {
  id: string;
  titulo: string;
  abierto: boolean;
  onToggle: () => void;
  children: ReactNode;
  tituloClase?: string;
  panelClase?: string;
  masClase?: string;
}) {
  return (
    <div className="mt-2 first:mt-0">
      <button
        type="button"
        aria-expanded={abierto}
        aria-controls={id}
        onClick={onToggle}
        className="flex w-full items-center gap-2 text-left"
      >
        <span
          className={
            tituloClase ??
            "text-xs font-semibold uppercase tracking-wide text-[var(--tinta-suave)]"
          }
        >
          {titulo}
        </span>
        <span
          className={
            masClase ??
            "ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded border border-[var(--linea)] text-base leading-none text-[var(--tinta)]"
          }
          aria-hidden
        >
          {abierto ? "−" : "+"}
        </span>
      </button>
      {abierto ? (
        <div id={id} className={panelClase ?? "mt-1.5"}>
          {children}
        </div>
      ) : null}
    </div>
  );
}

function useAcordeones(prefix: string) {
  const [abiertos, setAbiertos] = useState<ReadonlySet<string>>(() => new Set());
  function toggle(key: string) {
    setAbiertos((prev) => {
      const next = new Set(prev);
      const k = `${prefix}:${key}`;
      if (next.has(k)) next.delete(k);
      else next.add(k);
      return next;
    });
  }
  function abierto(key: string) {
    return abiertos.has(`${prefix}:${key}`);
  }
  return { toggle, abierto };
}

function ContenidoAcordeones({
  prefix,
  f,
  tituloClase,
  panelClase,
  masClase,
}: {
  prefix: string;
  f: NonNullable<ReturnType<typeof filaCompara>>;
  tituloClase?: string;
  panelClase?: string;
  masClase?: string;
}) {
  const { toggle, abierto } = useAcordeones(prefix);
  return (
    <>
      {(f.frenteClima.length > 0 || f.frenteVivir.length > 0) && (
        <Accordion
          id={`${prefix}-frente`}
          titulo="Frente a Mallorca"
          abierto={abierto("frente")}
          onToggle={() => toggle("frente")}
          tituloClase={tituloClase}
          panelClase={panelClase}
          masClase={masClase}
        >
          {f.frenteClima[0] ? (
            <p className="text-[15px] leading-relaxed text-[var(--tinta)]">{f.frenteClima[0]}</p>
          ) : null}
        </Accordion>
      )}
      {f.encajaSi.length > 0 && (
        <Accordion
          id={`${prefix}-si`}
          titulo="Encaja si"
          abierto={abierto("si")}
          onToggle={() => toggle("si")}
          tituloClase={tituloClase}
          panelClase={panelClase}
          masClase={masClase}
        >
          <p className="text-[15px] leading-relaxed text-[var(--tinta)]">{f.encajaSi[0]}</p>
        </Accordion>
      )}
      {f.encajaNo.length > 0 && (
        <Accordion
          id={`${prefix}-no`}
          titulo="Mejor no si"
          abierto={abierto("no")}
          onToggle={() => toggle("no")}
          tituloClase={tituloClase}
          panelClase={panelClase}
          masClase={masClase}
        >
          <p className="text-[15px] leading-relaxed text-[var(--tinta)]">{f.encajaNo[0]}</p>
        </Accordion>
      )}
      {f.encajaVeredicto ? (
        <Accordion
          id={`${prefix}-ver`}
          titulo="Veredicto"
          abierto={abierto("ver")}
          onToggle={() => toggle("ver")}
          tituloClase={tituloClase}
          panelClase={panelClase}
          masClase={masClase}
        >
          <p className="text-[15px] leading-relaxed text-[var(--tinta)]">
            {f.encajaVeredicto.replace(/^Veredicto:\s*/i, "")}
          </p>
        </Accordion>
      ) : null}
    </>
  );
}

function Tarjeta({
  titulo,
  nota,
  children,
}: {
  titulo: string;
  nota: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-xl border border-[var(--linea)] bg-[var(--fondo)] p-4">
      <h2 className="font-[family-name:var(--font-serif)] text-lg text-[var(--acento)]">
        {titulo}
      </h2>
      <p className="mt-1 text-sm text-[var(--tinta-suave)]">{nota}</p>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function MarcoCard({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-xl rounded-lg border border-[var(--linea)] bg-white px-4 py-3">
      {children}
    </div>
  );
}

export default function ProbarFotoDecidirteCliente() {
  const f = filaCompara("a-guarda");
  if (!f?.fotoIdentidad) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-8">
        <p>No hay ficha o foto de A Guarda.</p>
      </main>
    );
  }

  const foto = f.fotoIdentidad;
  const escala = f.escala;
  const src = rutaPublica(foto.src);

  const pill =
    "rounded border border-[var(--linea)] bg-white px-1.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-[var(--tinta-suave)]";
  const masBlanco =
    "ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded border border-[var(--linea)] bg-white text-base leading-none text-[var(--tinta)]";
  const panelTrans =
    "mt-1.5 rounded border border-[var(--linea)] px-2.5 py-2 [background-color:rgba(255,255,255,0.88)]";

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <p className="text-sm text-[var(--tinta-suave)]">
        Página oculta de pruebas · solo A Guarda ·{" "}
        <Link href="/compara/?vs=a-guarda" className="underline-offset-2 hover:underline">
          Compara
        </Link>
        {" · "}
        <Link href="/" className="underline-offset-2 hover:underline">
          Inicio
        </Link>
      </p>
      <h1 className="mt-2 font-[family-name:var(--font-serif)] text-3xl text-[var(--acento)]">
        Probar foto en Para decidirte
      </h1>
      <p className="mt-2 text-[var(--tinta-suave)]">
        Varias formas de integrar la foto de identidad. Elige la que más te convenza.
      </p>

      <div className="mt-8 space-y-8">
        {/* A — actual */}
        <Tarjeta
          titulo="A · Miniatura (formato actual)"
          nota="Nombre arriba · foto pequeña · escala en la leyenda · apartados debajo."
        >
          <MarcoCard>
            <Link
              href={f.href}
              className="font-semibold text-[var(--acento)] underline-offset-2 hover:underline"
            >
              {f.nombre}
            </Link>
            <figure className="mt-2.5 w-44 overflow-hidden rounded border border-[var(--linea)]">
              <Image
                src={src}
                alt={escala}
                width={176}
                height={96}
                className="h-24 w-full object-cover object-[50%_30%]"
                unoptimized
              />
              <figcaption className="px-1.5 py-1 text-[10px] leading-snug text-[var(--tinta-suave)]">
                {escala}
              </figcaption>
            </figure>
            <ContenidoAcordeones prefix="a" f={f} />
          </MarcoCard>
        </Tarjeta>

        {/* B — lateral */}
        <Tarjeta
          titulo="B · Foto lateral"
          nota="Columna estrecha a la izquierda a la altura de los apartados; texto a la derecha."
        >
          <MarcoCard>
            <Link
              href={f.href}
              className="font-semibold text-[var(--acento)] underline-offset-2 hover:underline"
            >
              {f.nombre}
            </Link>
            <div className="mt-2.5 flex gap-3">
              <figure className="relative w-28 shrink-0 self-stretch overflow-hidden rounded border border-[var(--linea)]">
                <Image
                  src={src}
                  alt={escala}
                  fill
                  className="object-cover object-[50%_30%]"
                  sizes="112px"
                  unoptimized
                />
              </figure>
              <div className="min-w-0 flex-1">
                <p className="mb-1 text-[10px] text-[var(--tinta-suave)]">{escala}</p>
                <ContenidoAcordeones prefix="b" f={f} />
              </div>
            </div>
          </MarcoCard>
        </Tarjeta>

        {/* C — banda superior */}
        <Tarjeta
          titulo="C · Banda superior"
          nota="Foto a todo el ancho, baja; nombre y escala encima; apartados debajo en blanco."
        >
          <MarcoCard>
            <figure className="overflow-hidden rounded border border-[var(--linea)]">
              <div className="relative h-24">
                <Image
                  src={src}
                  alt={escala}
                  fill
                  className="object-cover object-[50%_30%]"
                  sizes="36rem"
                  unoptimized
                />
              </div>
              <figcaption className="border-t border-[var(--linea)] px-3 py-2">
                <Link
                  href={f.href}
                  className="font-semibold text-[var(--acento)] underline-offset-2 hover:underline"
                >
                  {f.nombre}
                </Link>
                <span className="mt-0.5 block text-xs text-[var(--tinta-suave)]">{escala}</span>
              </figcaption>
            </figure>
            <ContenidoAcordeones prefix="c" f={f} />
          </MarcoCard>
        </Tarjeta>

        {/* D — fondo + pills */}
        <Tarjeta
          titulo="D · Foto de fondo + títulos en blanco"
          nota="La foto llena el bloque; cada título lleva marco blanco. Panel abierto semitransparente."
        >
          <MarcoCard>
            <Link
              href={f.href}
              className="font-semibold text-[var(--acento)] underline-offset-2 hover:underline"
            >
              {f.nombre}
            </Link>
            <div className="relative mt-2.5 overflow-hidden rounded border border-[var(--linea)]">
              <Image
                src={src}
                alt={escala}
                fill
                className="object-cover object-[50%_30%]"
                sizes="36rem"
                unoptimized
              />
              <div className="relative z-[1] px-3 py-2.5">
                <span className="mb-2 inline-block rounded border border-[var(--linea)] bg-white px-1.5 py-0.5 text-[10px] text-[var(--tinta-suave)]">
                  {escala}
                </span>
                <ContenidoAcordeones
                  prefix="d"
                  f={f}
                  tituloClase={pill}
                  masClase={masBlanco}
                  panelClase={panelTrans}
                />
              </div>
            </div>
          </MarcoCard>
        </Tarjeta>

        {/* E — foto derecha */}
        <Tarjeta
          titulo="E · Foto a la derecha"
          nota="Apartados a la izquierda; foto estrecha a la derecha."
        >
          <MarcoCard>
            <Link
              href={f.href}
              className="font-semibold text-[var(--acento)] underline-offset-2 hover:underline"
            >
              {f.nombre}
            </Link>
            <div className="mt-2.5 flex gap-3">
              <div className="min-w-0 flex-1">
                <p className="mb-1 text-[10px] text-[var(--tinta-suave)]">{escala}</p>
                <ContenidoAcordeones prefix="e" f={f} />
              </div>
              <figure className="relative w-28 shrink-0 self-stretch overflow-hidden rounded border border-[var(--linea)]">
                <Image
                  src={src}
                  alt={escala}
                  fill
                  className="object-cover object-[50%_30%]"
                  sizes="112px"
                  unoptimized
                />
              </figure>
            </div>
          </MarcoCard>
        </Tarjeta>

        {/* F — marca de agua */}
        <Tarjeta
          titulo="F · Foto suave de fondo de toda la tarjeta"
          nota="Foto muy tenue detrás de todo el panel; texto opaco encima."
        >
          <div className="relative max-w-xl overflow-hidden rounded-lg border border-[var(--linea)]">
            <Image
              src={src}
              alt=""
              fill
              className="object-cover object-[50%_30%] opacity-[0.18]"
              sizes="36rem"
              unoptimized
              aria-hidden
            />
            <div className="relative z-[1] bg-white/70 px-4 py-3 backdrop-blur-[1px]">
              <Link
                href={f.href}
                className="font-semibold text-[var(--acento)] underline-offset-2 hover:underline"
              >
                {f.nombre}
              </Link>
              <p className="mt-0.5 text-xs text-[var(--tinta-suave)]">{escala}</p>
              <ContenidoAcordeones prefix="f" f={f} />
            </div>
          </div>
        </Tarjeta>

        {/* G — miniatura + nombre en la misma fila */}
        <Tarjeta
          titulo="G · Miniatura junto al nombre"
          nota="Foto pequeña a la izquierda del nombre; escala y apartados debajo."
        >
          <MarcoCard>
            <div className="flex items-start gap-3">
              <figure className="h-14 w-20 shrink-0 overflow-hidden rounded border border-[var(--linea)]">
                <Image
                  src={src}
                  alt={escala}
                  width={80}
                  height={56}
                  className="h-full w-full object-cover object-[50%_30%]"
                  unoptimized
                />
              </figure>
              <div>
                <Link
                  href={f.href}
                  className="font-semibold text-[var(--acento)] underline-offset-2 hover:underline"
                >
                  {f.nombre}
                </Link>
                <p className="mt-0.5 text-xs text-[var(--tinta-suave)]">{escala}</p>
              </div>
            </div>
            <ContenidoAcordeones prefix="g" f={f} />
          </MarcoCard>
        </Tarjeta>

        {/* H — G + tamaño A */}
        <Tarjeta
          titulo="H · G con tamaño de A"
          nota="Foto tamaño A a la izquierda; nombre y escala a la derecha (como G)."
        >
          <MarcoCard>
            <div className="flex items-center gap-3">
              <figure className="h-24 w-44 shrink-0 overflow-hidden rounded border border-[var(--linea)]">
                <Image
                  src={src}
                  alt={escala}
                  width={176}
                  height={96}
                  className="h-full w-full object-cover object-[50%_30%]"
                  unoptimized
                />
              </figure>
              <div className="min-w-0">
                <Link
                  href={f.href}
                  className="font-semibold text-[var(--acento)] underline-offset-2 hover:underline"
                >
                  {f.nombre}
                </Link>
                <p className="mt-0.5 text-xs text-[var(--tinta-suave)]">{escala}</p>
              </div>
            </div>
            <ContenidoAcordeones prefix="h" f={f} />
          </MarcoCard>
        </Tarjeta>
      </div>
    </main>
  );
}
