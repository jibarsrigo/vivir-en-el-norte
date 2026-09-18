import Image from "next/image";
import MapaPortadaBloque from "@/components/MapaPortadaBloque";
import EnlaceBuscaCompara from "@/components/EnlaceBuscaCompara";
import { rutaPublica } from "@/lib/ruta-publica";

export default function Portada() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={rutaPublica("/fotos/portada/norte-atlantico.jpg")}
            alt="Costa atlántica del norte de España: acantilados verdes y mar"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_40%]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-[rgb(12_28_40/0.35)] via-[rgb(12_28_40/0.2)] to-[var(--papel)]"
            aria-hidden
          />
        </div>

        <div className="mx-auto flex min-h-[9.5rem] max-w-7xl flex-col justify-end px-4 pb-8 pt-10 sm:min-h-[11rem] sm:pb-9 sm:pt-12">
          <h1 className="font-[family-name:var(--font-serif)] text-3xl leading-tight text-white drop-shadow-[0_1px_12px_rgb(0_0_0/0.45)] sm:text-4xl md:text-5xl">
            Vivir en el norte
          </h1>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 pb-8 pt-3 sm:pb-10 sm:pt-4">
        <div className="mb-4">
          <EnlaceBuscaCompara className="inline-flex items-center gap-1.5 rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-[var(--acento)] shadow-sm ring-1 ring-[var(--linea)] hover:bg-white" />
        </div>
        <MapaPortadaBloque />
      </main>
    </>
  );
}
