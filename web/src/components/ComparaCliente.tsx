"use client";

import {
  useCallback,
  useDeferredValue,
  useEffect,
  useId,
  useRef,
  useState,
  startTransition,
  type ReactNode,
} from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { buscarMunicipios, type HitBuscaMunicipio } from "@/lib/busca-municipios";
import {
  FILAS_MESA,
  LS_BANDEJA,
  MALLORCA_REF,
  TOPE_BANDEJA,
  anadirABandeja,
  filaCompara,
  indiceMejor,
  parseVs,
  quitarDeBandeja,
  serializeVs,
  type FilaCompara,
} from "@/lib/compara";
import { rutaPublica } from "@/lib/ruta-publica";

function leerLocal(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return parseVs(window.localStorage.getItem(LS_BANDEJA));
  } catch {
    return [];
  }
}

function escribirLocal(slugs: string[]) {
  try {
    window.localStorage.setItem(LS_BANDEJA, serializeVs(slugs));
  } catch {
    /* ignore */
  }
}

function CifrasHit({ hit }: { hit: HitBuscaMunicipio }) {
  const precio =
    hit.precioM2 == null ? "—" : `${hit.precioM2.toLocaleString("es-ES")} €/m²`;
  return (
    <span className="text-[13px] text-[var(--tinta-suave)]">
      Hospital {hit.hospitalMin} min · {precio} · S{hit.servicios}
    </span>
  );
}

function BloqueEncajaColapsable({
  id,
  titulo,
  abierto,
  onToggle,
  children,
}: {
  id: string;
  titulo: string;
  abierto: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <div className="mt-2">
      <button
        type="button"
        aria-expanded={abierto}
        aria-controls={id}
        onClick={onToggle}
        className="flex w-full items-center gap-2 text-left"
      >
        <span className="text-xs font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">
          {titulo}
        </span>
        <span
          className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded border border-[var(--linea)] text-base leading-none text-[var(--tinta)]"
          aria-hidden
        >
          {abierto ? "−" : "+"}
        </span>
      </button>
      {abierto ? (
        <div id={id} className="mt-1.5">
          {children}
        </div>
      ) : null}
    </div>
  );
}

function BloqueParaDecidirte({ filas }: { filas: FilaCompara[] }) {
  const [abiertos, setAbiertos] = useState<ReadonlySet<string>>(() => new Set());

  function toggle(key: string) {
    setAbiertos((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  return (
    <div className="mt-8">
      <h3 className="font-[family-name:var(--font-serif)] text-xl text-[var(--acento)]">
        Para decidirte
      </h3>
      <p className="mt-1 text-sm text-[var(--tinta-suave)]">
        Pulsa + para leer el texto.
      </p>
      <ul className="mt-4 space-y-3">
        {filas.map((f) => {
          const hayFrente = f.frenteClima.length > 0 || f.frenteVivir.length > 0;
          const escalaTexto = f.escala || f.fotoIdentidad?.pie || "";

          return (
            <li
              key={f.slug}
              className="rounded-lg border border-[var(--linea)] bg-white px-4 py-3"
            >
              {f.fotoIdentidad ? (
                <div className="flex items-center gap-3">
                  <figure className="h-24 w-44 max-w-[45%] shrink-0 overflow-hidden rounded border border-[var(--linea)] bg-[var(--fondo)]">
                    <Image
                      src={rutaPublica(f.fotoIdentidad.src)}
                      alt={escalaTexto || f.nombre}
                      width={176}
                      height={96}
                      className="h-full w-full object-cover"
                      sizes="176px"
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
                    {escalaTexto ? (
                      <p className="mt-0.5 text-xs text-[var(--tinta-suave)]">{escalaTexto}</p>
                    ) : null}
                  </div>
                </div>
              ) : (
                <>
                  <Link
                    href={f.href}
                    className="font-semibold text-[var(--acento)] underline-offset-2 hover:underline"
                  >
                    {f.nombre}
                  </Link>
                  {escalaTexto ? (
                    <p className="mt-0.5 text-xs text-[var(--tinta-suave)]">{escalaTexto}</p>
                  ) : null}
                </>
              )}

              {hayFrente ? (
                <BloqueEncajaColapsable
                  id={`frente-mallorca-${f.slug}`}
                  titulo="Frente a Mallorca"
                  abierto={abiertos.has(`${f.slug}:frente`)}
                  onToggle={() => toggle(`${f.slug}:frente`)}
                >
                  {f.frenteClima.length > 0 ? (
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">
                        Clima
                      </p>
                      {f.frenteClima.map((p, i) => (
                        <p
                          key={`clima-${i}`}
                          className="mt-1.5 text-[15px] leading-relaxed text-[var(--tinta)]"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  ) : null}
                  {f.frenteVivir.length > 0 ? (
                    <div className={f.frenteClima.length ? "mt-4" : undefined}>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">
                        Vivir
                      </p>
                      {f.frenteVivir.map((p, i) => (
                        <p
                          key={`vivir-${i}`}
                          className="mt-1.5 text-[15px] leading-relaxed text-[var(--tinta)]"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  ) : null}
                </BloqueEncajaColapsable>
              ) : null}

              {f.encajaSi.length > 0 ? (
                <BloqueEncajaColapsable
                  id={`encaja-si-${f.slug}`}
                  titulo="Encaja si"
                  abierto={abiertos.has(`${f.slug}:si`)}
                  onToggle={() => toggle(`${f.slug}:si`)}
                >
                  {f.encajaSi.map((p, i) => (
                    <p
                      key={`si-${i}`}
                      className="mt-1.5 text-[15px] leading-relaxed text-[var(--tinta)] first:mt-0"
                    >
                      {p}
                    </p>
                  ))}
                </BloqueEncajaColapsable>
              ) : null}

              {f.encajaNo.length > 0 ? (
                <BloqueEncajaColapsable
                  id={`encaja-no-${f.slug}`}
                  titulo="Mejor no si"
                  abierto={abiertos.has(`${f.slug}:no`)}
                  onToggle={() => toggle(`${f.slug}:no`)}
                >
                  {f.encajaNo.map((p, i) => (
                    <p
                      key={`no-${i}`}
                      className="mt-1.5 text-[15px] leading-relaxed text-[var(--tinta)] first:mt-0"
                    >
                      {p}
                    </p>
                  ))}
                </BloqueEncajaColapsable>
              ) : null}

              {f.encajaVeredicto ? (
                <BloqueEncajaColapsable
                  id={`encaja-veredicto-${f.slug}`}
                  titulo="Veredicto"
                  abierto={abiertos.has(`${f.slug}:veredicto`)}
                  onToggle={() => toggle(`${f.slug}:veredicto`)}
                >
                  <p className="text-[15px] leading-relaxed text-[var(--tinta)]">
                    {f.encajaVeredicto.replace(/^Veredicto:\s*/i, "")}
                  </p>
                </BloqueEncajaColapsable>
              ) : null}

              {!hayFrente &&
              !f.encajaSi.length &&
              !f.encajaNo.length &&
              !f.encajaVeredicto ? (
                <p className="mt-2 text-sm text-[var(--tinta-suave)]">Sin balance en el relato.</p>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function MesaCompara({ filas }: { filas: FilaCompara[] }) {
  if (filas.length === 0) return null;

  return (
    <section className="mt-10">
      <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">
        Tabla comparativa
      </h2>
      <p className="mt-1 max-w-3xl text-sm text-[var(--tinta-suave)]">
        Misma fila, pueblos distintos: clima, baño, precio, servicios, hospital y vuelo. El tono
        suave marca el valor más favorable de cada criterio.
      </p>
      <div className="mt-4 overflow-x-auto rounded-lg border border-[var(--linea)] bg-white">
        <table className="min-w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-[var(--linea)]">
              <th className="sticky left-0 z-[1] bg-white px-3 py-2.5 font-semibold text-[var(--tinta-suave)]">
                Criterio
              </th>
              {filas.map((f) => (
                <th
                  key={f.slug}
                  className="min-w-[10rem] px-3 py-2.5 font-semibold text-[var(--tinta)]"
                >
                  <Link
                    href={f.href}
                    className="text-[var(--acento)] underline-offset-2 hover:underline"
                  >
                    {f.nombre}
                  </Link>
                  {f.escala ? (
                    <span className="mt-0.5 block text-xs font-normal leading-snug text-[var(--tinta-suave)]">
                      {f.escala}
                    </span>
                  ) : null}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {FILAS_MESA.map((def) => {
              const mejor = indiceMejor(filas, def);
              return (
                <tr key={def.id} className="border-b border-[var(--linea)] last:border-0">
                  <th className="sticky left-0 z-[1] bg-white px-3 py-2.5 align-top text-xs font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">
                    {def.etiqueta}
                    {def.id === "lluvia-oct-mar" ? (
                      <span className="mt-0.5 block text-[9px] font-normal normal-case leading-snug tracking-normal text-[var(--tinta-suave)]">
                        (Octubre-Marzo)
                      </span>
                    ) : null}
                  </th>
                  {filas.map((f, i) => (
                    <td
                      key={f.slug}
                      className={
                        "px-3 py-2.5 align-top leading-snug text-[var(--tinta)] " +
                        (mejor === i ? "bg-[var(--acento)]/[0.07]" : "")
                      }
                    >
                      {def.formato(f)}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="border-t border-[var(--linea)] bg-[#f5f6f7] px-3 py-3 sm:px-4">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-1.5 [&_dd]:m-0 [&_dt]:m-0">
            <div className="min-w-0 text-[11px] leading-snug">
              <dt className="inline font-semibold text-[var(--tinta)]">Sol / Despejados</dt>
              <dd className="inline text-[var(--tinta-suave)]">
                {" "}
                — Horas de sol y días de cielo claro al año.
              </dd>
            </div>
            <div className="min-w-0 text-[11px] leading-snug">
              <dt className="inline font-semibold text-[var(--tinta)]">Lluvia</dt>
              <dd className="inline text-[var(--tinta-suave)]">
                {" "}
                — Días al año; debajo, días/mes de octubre a marzo.
              </dd>
            </div>
            <div className="min-w-0 text-[11px] leading-snug">
              <dt className="inline font-semibold text-[var(--tinta)]">vs Mallorca</dt>
              <dd className="inline text-[var(--tinta-suave)]">
                {" "}
                — % de sol y despejados frente a la isla.
              </dd>
            </div>
            <div className="min-w-0 text-[11px] leading-snug">
              <dt className="inline font-semibold text-[var(--tinta)]">Baño</dt>
              <dd className="inline text-[var(--tinta-suave)]">
                {" "}
                — Minutos en coche hasta la playa de referencia.
              </dd>
            </div>
            <div className="min-w-0 text-[11px] leading-snug">
              <dt className="inline font-semibold text-[var(--tinta)]">Precio</dt>
              <dd className="inline text-[var(--tinta-suave)]">
                {" "}
                — €/m² y, si hay, piso de 3 hab. en franja asequible.
              </dd>
            </div>
            <div className="min-w-0 text-[11px] leading-snug">
              <dt className="inline font-semibold text-[var(--tinta)]">Servicios</dt>
              <dd className="inline text-[var(--tinta-suave)]">
                {" "}
                — Vida diaria 1–10 (tiendas, farmacia, súper, colegio…). Sin hospital ni aeropuerto.
              </dd>
            </div>
            <div className="min-w-0 text-[11px] leading-snug">
              <dt className="inline font-semibold text-[var(--tinta)]">Hospital</dt>
              <dd className="inline text-[var(--tinta-suave)]">
                {" "}
                — Minutos al hospital público de referencia.
              </dd>
            </div>
            <div className="min-w-0 text-[11px] leading-snug">
              <dt className="inline font-semibold text-[var(--tinta)]">Aeropuerto</dt>
              <dd className="inline text-[var(--tinta-suave)]">
                {" "}
                — Minutos al más cercano y vuelo a Palma (Año / Casi siempre / solo Verano / No).
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <BloqueParaDecidirte filas={filas} />
    </section>
  );
}

export default function ComparaCliente() {
  const listId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const con = searchParams.get("con");
  const vsParam = searchParams.get("vs");

  const [slugs, setSlugs] = useState<string[]>([]);
  const [listo, setListo] = useState(false);
  const [q, setQ] = useState("");
  const deferredQ = useDeferredValue(q);
  const hits =
    deferredQ.trim().length >= 1 ? buscarMunicipios(deferredQ, 12) : [];

  const syncUrl = useCallback(
    (next: string[]) => {
      const params = new URLSearchParams();
      const vs = serializeVs(next);
      if (vs) params.set("vs", vs);
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [pathname, router],
  );

  // Carga inicial: ?vs= > localStorage; ?con= se añade a la bandeja.
  useEffect(() => {
    const desdeUrl = parseVs(vsParam);
    const base = desdeUrl.length > 0 ? desdeUrl : leerLocal();
    const conSlug = con?.trim() ?? "";
    const next = conSlug ? anadirABandeja(base, conSlug) : base;
    setSlugs(next);
    escribirLocal(next);
    setListo(true);
    const vs = serializeVs(next);
    const params = new URLSearchParams();
    if (vs) params.set("vs", vs);
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    // Solo al montar
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function actualizar(next: string[]) {
    setSlugs(next);
    escribirLocal(next);
    startTransition(() => syncUrl(next));
  }

  function anadir(slug: string) {
    const next = anadirABandeja(slugs, slug);
    actualizar(next);
    setQ("");
    inputRef.current?.focus();
  }

  function quitar(slug: string) {
    actualizar(quitarDeBandeja(slugs, slug));
  }

  const filas = slugs
    .map((s) => filaCompara(s))
    .filter((f): f is FilaCompara => Boolean(f));

  const enBandeja = new Set(slugs);

  return (
    <div className="mt-6">
      <p className="mb-4 max-w-2xl text-[15px] leading-snug text-[var(--tinta-suave)]">
        Busca pueblos y añádelos a la bandeja (máximo {TOPE_BANDEJA}; si está llena, el nuevo
        sustituye al más antiguo). La mesa compara lo que cambia al vivir: clima, mar, precio,
        hospital…
      </p>

      <section className="max-w-xl">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">
          Buscar
        </h2>
        <label className="mt-1.5 block">
          <span className="sr-only">Buscar pueblo o ciudad</span>
          <input
            ref={inputRef}
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar pueblo o ciudad…"
            autoComplete="off"
            spellCheck={false}
            role="combobox"
            aria-expanded={hits.length > 0}
            aria-controls={listId}
            aria-autocomplete="list"
            className="w-full rounded-lg border border-[var(--linea)] bg-white px-3.5 py-2.5 text-[17px] text-[var(--tinta)] shadow-sm outline-none placeholder:text-[var(--tinta-suave)] focus:border-[var(--acento)] focus:ring-2 focus:ring-[var(--acento)]/25"
          />
        </label>

        {q.trim().length >= 1 && hits.length === 0 ? (
          <p className="mt-3 text-sm text-[var(--tinta-suave)]">
            Ningún municipio encaja con «{q.trim()}».
          </p>
        ) : null}

        {hits.length > 0 ? (
          <ul
            id={listId}
            role="listbox"
            className="mt-2 divide-y divide-[var(--linea)] rounded-lg border border-[var(--linea)] bg-white shadow-sm"
          >
            {hits.map((h) => {
              const ya = enBandeja.has(h.slug);
              const sustituye =
                !ya && slugs.length >= TOPE_BANDEJA;
              return (
                <li key={h.slug} role="option" className="px-2 py-1.5">
                  <button
                    type="button"
                    disabled={ya}
                    onClick={() => {
                      if (ya) return;
                      anadir(h.slug);
                    }}
                    className={
                      "w-full rounded-lg px-2 py-2 text-left transition-colors " +
                      (ya
                        ? "cursor-default opacity-55"
                        : "cursor-pointer hover:bg-black/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--acento)]")
                    }
                  >
                    <span className="font-semibold text-[var(--tinta)]">{h.nombre}</span>
                    <span className="mt-0.5 block text-sm text-[var(--tinta-suave)]">
                      {h.zonaNombre}
                      {h.escala ? ` · ${h.escala}` : ""}
                      {ya
                        ? " · ya en la bandeja"
                        : sustituye
                          ? " · al añadir, sale el más antiguo"
                          : ""}
                    </span>
                    <span className="mt-0.5 block">
                      <CifrasHit hit={h} />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        ) : null}
      </section>

      <section className="mt-8">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">
            Mis candidatos
          </h2>
          <span className="text-xs text-[var(--tinta-suave)]">
            {listo ? `${slugs.length} / ${TOPE_BANDEJA}` : "…"}
          </span>
        </div>
        {filas.length === 0 ? (
          <p className="mt-2 text-sm text-[var(--tinta-suave)]">
            Aún no hay pueblos. Busca arriba o entra desde una ficha con «Compara con».
          </p>
        ) : (
          <ul className="mt-2 flex flex-wrap gap-2">
            {filas.map((f) => (
              <li
                key={f.slug}
                className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-[var(--linea)] bg-white py-1 pl-3 pr-1 text-sm shadow-sm"
              >
                <Link
                  href={f.href}
                  className="truncate font-semibold text-[var(--acento)] underline-offset-2 hover:underline"
                >
                  {f.nombre}
                </Link>
                <button
                  type="button"
                  onClick={() => quitar(f.slug)}
                  aria-label={`Quitar ${f.nombre}`}
                  className="shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold text-[var(--tinta-suave)] hover:bg-black/[0.05] hover:text-[var(--tinta)]"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      {filas.length >= 1 ? <MesaCompara filas={filas} /> : null}
    </div>
  );
}
