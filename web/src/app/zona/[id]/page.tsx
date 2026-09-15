import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import MapaLocalizadorCliente from "@/components/MapaLocalizadorCliente";
import MapaZonaDetalleCliente from "@/components/MapaZonaDetalleCliente";
import RelatoBaixoMino from "@/components/RelatoBaixoMino";
import { municipiosDeZona } from "@/lib/municipios-puntos";
import { mallorca, zonaPorId, zonas } from "@/lib/zonas";

export function generateStaticParams() {
  return zonas.map((z) => ({ id: z.id }));
}

export default async function PaginaZona({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const z = zonaPorId(id);
  if (!z) notFound();
  const pueblos = municipiosDeZona(z.id);

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <p className="text-sm text-[var(--tinta-suave)]">
        <Link href="/" className="underline-offset-2 hover:underline">
          Vivir en el norte
        </Link>
        {" · "}
        {z.provincia}
      </p>
      <h1 className="mt-2 font-[family-name:var(--font-serif)] text-4xl text-[var(--acento)]">{z.zona}</h1>
      {z.calorAprieta ? (
        <p className="mt-3 font-semibold text-[var(--calor)]">El calor aprieta en {z.calorAprieta}.</p>
      ) : (
        <p className="mt-3 text-[var(--tinta-suave)]">El verano no aprieta como en Mallorca.</p>
      )}

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
          {z.id === "baixo-mino" ? (
            <Image
              src="/mapas/zona_01_detalle.png"
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

      {z.activa ? (
        <RelatoBaixoMino zona={z} />
      ) : (
        <section className="mt-8 max-w-2xl text-[17px] leading-relaxed">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">El tiempo</h2>
          <ul className="mt-3 space-y-1">
            <li>Despejados: {z.despejados} días (Mallorca, {mallorca.despejados}).</li>
            <li>
              Sol: {z.solHoras.toLocaleString("es-ES")} h al año (Mallorca,{" "}
              {mallorca.solHoras.toLocaleString("es-ES")}).
            </li>
            <li>
              Lluvia: {z.lluviaDias} días; de octubre a marzo, {z.lluvia.oct_mar} días al mes
              {"; "}
              el peor es {z.lluvia.peor} ({z.lluvia.peor_n}). En Mallorca, {mallorca.lluvia.oct_mar} en
              esos meses.
            </li>
            <li>
              Viento {z.viento.toLowerCase()}, niebla {z.niebla.toLowerCase()}.
            </li>
          </ul>
          {z.portugal ? (
            <p className="mt-6">Portugal, un poco más adelante. El tiempo ya se puede comparar aquí.</p>
          ) : (
            <p className="mt-6">El relato de esta zona se está escribiendo. El tiempo ya está.</p>
          )}
          <p className="mt-4 text-[var(--tinta-suave)]">Pueblos: {z.municipios.join(", ")}.</p>
        </section>
      )}
    </main>
  );
}
