import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import MapaLocalizadorCliente from "@/components/MapaLocalizadorCliente";
import MapaZonaDetalleCliente from "@/components/MapaZonaDetalleCliente";
import V2RelatoZona from "@/components/V2RelatoZona";
import { rutaPublica } from "@/lib/ruta-publica";
import {
  actualHrefZona,
  loadV2Zona,
  v2Zonas,
} from "@/lib/v2";

export function generateStaticParams() {
  return v2Zonas.map((z) => ({ id: z.zonaId }));
}

export default async function PaginaV2Zona({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const doc = loadV2Zona(id);
  if (!doc) notFound();

  const z = doc.zonaBaseline;
  const mapaEstatico = doc.mapaDetalle;
  const pueblos = doc.fichas.map((f) => ({
    zonaId: id,
    nombre: f.municipio,
    etiqueta: f.municipio,
    lat: f.lat,
    lon: f.lon,
  }));

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <p className="text-sm text-[var(--tinta-suave)]">
        <Link href="/" className="underline-offset-2 hover:underline">
          Inicio
        </Link>
        {" · "}
        <Link href="/v2/" className="underline-offset-2 hover:underline">
          V2
        </Link>
        {" · "}
        <span className="rounded bg-[var(--linea)]/40 px-1.5 py-0.5 text-xs">
          V2 · CURRENT congelado
        </span>
        {z.provincia ? (
          <>
            {" · "}
            {z.provincia}
          </>
        ) : null}
      </p>
      <h1 className="mt-2 font-[family-name:var(--font-serif)] text-4xl text-[var(--acento)]">
        {doc.nombre}
      </h1>
      <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
        <Link
          href={actualHrefZona(id)}
          className="font-semibold text-[var(--acento)] underline-offset-2 hover:underline"
        >
          Ver versión actual
        </Link>
        <Link href="/v2/" className="underline-offset-2 hover:underline text-[var(--tinta-suave)]">
          Índice V2
        </Link>
      </p>

      {z.calorAprieta ? (
        <p className="mt-3 font-semibold text-[var(--calor)]">
          El calor aprieta en {z.calorAprieta}.
        </p>
      ) : (
        <p className="mt-3 text-[var(--tinta-suave)]">El verano no aprieta como en Mallorca.</p>
      )}

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <figure className="overflow-hidden rounded-xl border border-[var(--linea)] bg-white">
          <div className="relative aspect-[16/10] min-h-[280px]">
            <div className="absolute inset-0">
              <MapaLocalizadorCliente zonaId={id} nombre={doc.nombre} />
            </div>
          </div>
          <figcaption className="px-3 py-2 text-sm text-[var(--tinta-suave)]">
            Dónde está la zona, en el norte.
          </figcaption>
        </figure>
        <figure className="overflow-hidden rounded-xl border border-[var(--linea)] bg-white">
          {mapaEstatico ? (
            <Image
              src={rutaPublica(mapaEstatico)}
              alt={`Detalle de ${doc.nombre}`}
              width={965}
              height={879}
              className="h-auto w-full"
            />
          ) : (
            <div className="relative aspect-[16/10] min-h-[280px]">
              <div className="absolute inset-0">
                <MapaZonaDetalleCliente
                  zonaId={id}
                  lat={z.lat ?? 42.5}
                  lon={z.lon ?? -8.5}
                  pueblos={pueblos}
                />
              </div>
            </div>
          )}
          <figcaption className="px-3 py-2 text-sm text-[var(--tinta-suave)]">
            La zona por dentro.
          </figcaption>
        </figure>
      </div>

      <V2RelatoZona
        blocks={doc.blocks}
        zonaId={id}
        nombreZona={doc.nombre}
        fichas={doc.fichas}
        escalas={doc.escalas}
        idealistaUrl={doc.idealistaUrl}
      />
    </main>
  );
}
