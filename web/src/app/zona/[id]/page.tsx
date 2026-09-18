import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import MapaLocalizadorCliente from "@/components/MapaLocalizadorCliente";
import MapaZonaDetalleCliente from "@/components/MapaZonaDetalleCliente";
import MarcarZonaLeida from "@/components/MarcarZonaLeida";
import RelatoBaixoMino from "@/components/RelatoBaixoMino";
import RelatoValMinor from "@/components/RelatoValMinor";
import RelatoVigoERia from "@/components/RelatoVigoERia";
import RelatoOMorrazo from "@/components/RelatoOMorrazo";
import RelatoPontevedraESanxenxo from "@/components/RelatoPontevedraESanxenxo";
import RelatoOSalnes from "@/components/RelatoOSalnes";
import RelatoBarbanzaENoia from "@/components/RelatoBarbanzaENoia";
import RelatoGolfoArtabroEFerrol from "@/components/RelatoGolfoArtabroEFerrol";
import RelatoAMarina from "@/components/RelatoAMarina";
import RelatoAsturiasOccidente from "@/components/RelatoAsturiasOccidente";
import RelatoAsturiasCentro from "@/components/RelatoAsturiasCentro";
import RelatoAsturiasOriente from "@/components/RelatoAsturiasOriente";
import RelatoCantabriaOccidental from "@/components/RelatoCantabriaOccidental";
import RelatoCantabriaOriental from "@/components/RelatoCantabriaOriental";
import RelatoAltoMinho from "@/components/RelatoAltoMinho";
import RelatoLitoralNorte from "@/components/RelatoLitoralNorte";
import { municipiosDeZona } from "@/lib/municipios-puntos";
import { mallorca, zonaPorId, zonas, type Zona } from "@/lib/zonas";

export function generateStaticParams() {
  return zonas.map((z) => ({ id: z.id }));
}

const MAPA_DETALLE_ESTATICO: Record<string, string> = {
  "baixo-mino": "/mapas/zona_01_detalle.png",
  "val-minor": "/mapas/zona_02_detalle.png",
  "vigo-e-ria": "/mapas/zona_03_detalle.png",
  "o-morrazo": "/mapas/zona_04_detalle.png",
  "pontevedra-e-sanxenxo": "/mapas/zona_05_detalle.png",
  "o-salnes": "/mapas/zona_06_detalle.png",
  "barbanza-e-noia": "/mapas/zona_07_detalle.png",
  "golfo-artabro-e-ferrol": "/mapas/zona_08_detalle.png",
  "a-marina": "/mapas/zona_09_detalle.png",
  "asturias-occidente": "/mapas/zona_10_detalle.png",
  "asturias-centro": "/mapas/zona_11_detalle.png",
  "asturias-oriente": "/mapas/zona_12_detalle.png",
  "cantabria-occidental": "/mapas/zona_13_detalle.png",
  "cantabria-oriental": "/mapas/zona_14_detalle.png",
  "alto-minho": "/mapas/zona_15_detalle.png",
  "litoral-norte": "/mapas/zona_16_detalle.png",
};

function RelatoZona({ zona }: { zona: Zona }) {
  if (zona.id === "baixo-mino") return <RelatoBaixoMino zona={zona} />;
  if (zona.id === "val-minor") return <RelatoValMinor zona={zona} />;
  if (zona.id === "vigo-e-ria") return <RelatoVigoERia zona={zona} />;
  if (zona.id === "o-morrazo") return <RelatoOMorrazo zona={zona} />;
  if (zona.id === "pontevedra-e-sanxenxo") return <RelatoPontevedraESanxenxo zona={zona} />;
  if (zona.id === "o-salnes") return <RelatoOSalnes zona={zona} />;
  if (zona.id === "barbanza-e-noia") return <RelatoBarbanzaENoia zona={zona} />;
  if (zona.id === "golfo-artabro-e-ferrol") return <RelatoGolfoArtabroEFerrol zona={zona} />;
  if (zona.id === "a-marina") return <RelatoAMarina zona={zona} />;
  if (zona.id === "asturias-occidente") return <RelatoAsturiasOccidente zona={zona} />;
  if (zona.id === "asturias-centro") return <RelatoAsturiasCentro zona={zona} />;
  if (zona.id === "asturias-oriente") return <RelatoAsturiasOriente zona={zona} />;
  if (zona.id === "cantabria-occidental") return <RelatoCantabriaOccidental zona={zona} />;
  if (zona.id === "cantabria-oriental") return <RelatoCantabriaOriental zona={zona} />;
  if (zona.id === "alto-minho") return <RelatoAltoMinho zona={zona} />;
  if (zona.id === "litoral-norte") return <RelatoLitoralNorte zona={zona} />;
  return null;
}

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
