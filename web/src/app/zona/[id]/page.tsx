import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import MapaLocalizadorCliente from "@/components/MapaLocalizadorCliente";
import MapaZonaDetalleCliente from "@/components/MapaZonaDetalleCliente";
import MarcarZonaLeida from "@/components/MarcarZonaLeida";
import MunicipiosZonaFin from "@/components/MunicipiosZonaFin";
import RelatoZona from "@/components/RelatoZona";
import { municipiosDeZona } from "@/lib/municipios-puntos";
import { rutaPublica } from "@/lib/ruta-publica";
import { MAPA_DETALLE_ESTATICO } from "@/lib/zona-mapas";
import { mallorca, zonaPorId, zonas } from "@/lib/zonas";

export function generateStaticParams() {
  return zonas.map((z) => ({ id: z.id }));
}

/** Página de zona (CURRENT tras cutover NUEVO2). */
export default async function PaginaZona({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const z = zonaPorId(id);
  if (!z) notFound();
  const pueblos = municipiosDeZona(z.id);
  const mapaEstatico = MAPA_DETALLE_ESTATICO[z.id];

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <MarcarZonaLeida zonaId={z.id} />
      <p className="text-sm text-[var(--tinta-suave)]">
        <Link href="/" className="underline-offset-2 hover:underline">
          Inicio
        </Link>
        {" · "}
        {z.provincia}
      </p>
      <h1 className="mt-2 font-[family-name:var(--font-serif)] text-4xl text-[var(--acento)]">{z.zona}</h1>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <figure className="overflow-hidden rounded-xl border border-[var(--linea)] bg-white">
          <div className="relative aspect-[16/10] min-h-[280px]">
            <div className="absolute inset-0">
              <MapaLocalizadorCliente zonaId={z.id} nombre={z.zona} />
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
              alt={`Detalle de ${z.zona}`}
              width={965}
              height={879}
              className="h-auto w-full"
            />
          ) : (
            <div className="relative aspect-[16/10] min-h-[280px]">
              <div className="absolute inset-0">
                <MapaZonaDetalleCliente zonaId={z.id} lat={z.lat} lon={z.lon} pueblos={pueblos} />
              </div>
            </div>
          )}
          <figcaption className="px-3 py-2 text-sm text-[var(--tinta-suave)]">La zona por dentro.</figcaption>
        </figure>
      </div>

      {z.activa ? <MunicipiosZonaFin zonaId={z.id} /> : null}

      {z.activa ? (
        <RelatoZona zona={z} />
      ) : (
        <section className="mt-8 max-w-2xl text-[17px] leading-relaxed">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">
            El tiempo comparado con Baleares
          </h2>
          <ul className="mt-3 space-y-1">
            <li>Despejados: {z.despejados} días (Mallorca, {mallorca.despejados}).</li>
            <li>
              Sol: {z.solHoras.toLocaleString("es-ES")} h (Mallorca,{" "}
              {mallorca.solHoras.toLocaleString("es-ES")}).
            </li>
          </ul>
        </section>
      )}

      <p className="mt-10 flex flex-wrap gap-x-3 gap-y-1 text-xs text-[var(--tinta-suave)]">
        <Link
          href={`/v1/zona/${z.id}/`}
          className="underline-offset-2 hover:underline"
        >
          V1
        </Link>
        <Link
          href={`/v2/zona/${z.id}/`}
          className="underline-offset-2 hover:underline"
        >
          V2
        </Link>
      </p>
    </main>
  );
}
