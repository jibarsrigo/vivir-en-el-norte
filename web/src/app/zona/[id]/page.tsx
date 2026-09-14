import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { mallorca, zonaPorId, zonas } from "@/lib/zonas";

export function generateStaticParams() {
  return zonas.map((z) => ({ id: z.id }));
}

export default async function PaginaZona({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const z = zonaPorId(id);
  if (!z) notFound();

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

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <figure className="overflow-hidden rounded-xl border border-[var(--linea)] bg-white">
          {/* Mapa grande: el norte; esta zona en color (localizador). */}
          <div className="relative aspect-[16/10] bg-[#dceaf2]">
            <iframe
              title={`Dónde está ${z.zona}`}
              className="absolute inset-0 h-full w-full border-0"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=-9.6%2C41.0%2C-2.8%2C44.0&layer=mapnik&marker=${z.lat}%2C${z.lon}`}
            />
          </div>
          <figcaption className="px-3 py-2 text-sm text-[var(--tinta-suave)]">
            Dónde está la zona (marca en el norte).
          </figcaption>
        </figure>
        <figure className="overflow-hidden rounded-xl border border-[var(--linea)] bg-white">
          {z.id === "baixo-mino" ? (
            <Image
              src="/mapas/zona_01.png"
              alt={`Detalle de ${z.zona}`}
              width={1474}
              height={1078}
              className="h-auto w-full"
            />
          ) : (
            <div className="flex aspect-[16/10] items-center justify-center bg-[#f1f0e8] px-6 text-center text-[var(--tinta-suave)]">
              El mapa de detalle se añade con el relato de la zona.
            </div>
          )}
          <figcaption className="px-3 py-2 text-sm text-[var(--tinta-suave)]">La zona por dentro.</figcaption>
        </figure>
      </div>

      <section className="mt-8 max-w-2xl text-[17px] leading-relaxed">
        <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">El tiempo</h2>
        <ul className="mt-3 space-y-1">
          <li>Despejados: {z.despejados} días (Mallorca, {mallorca.despejados}).</li>
          <li>
            Sol: {z.solHoras.toLocaleString("es-ES")} h al año (Mallorca, {mallorca.solHoras.toLocaleString("es-ES")}).
          </li>
          <li>
            Lluvia: {z.lluviaDias} días; de octubre a marzo, {z.lluvia.oct_mar} días al mes
            {"; "}
            el peor es {z.lluvia.peor} ({z.lluvia.peor_n}). En Mallorca, {mallorca.lluvia.oct_mar} en esos meses.
          </li>
          <li>
            Viento {z.viento.toLowerCase()}, niebla {z.niebla.toLowerCase()}.
          </li>
        </ul>
        {z.activa ? (
          <p className="mt-6">
            El relato de cómo se vive —la calle, el baño, el paseo, lo que cuesta una casa de dos o tres
            habitaciones cerca del agua o un poco tierra adentro— entra a continuación en esta misma
            página.
          </p>
        ) : z.portugal ? (
          <p className="mt-6">Portugal, un poco más adelante. El tiempo ya se puede comparar aquí.</p>
        ) : (
          <p className="mt-6">El relato de esta zona se está escribiendo. El tiempo ya está.</p>
        )}
        <p className="mt-4 text-[var(--tinta-suave)]">Pueblos: {z.municipios.join(", ")}.</p>
      </section>
    </main>
  );
}
