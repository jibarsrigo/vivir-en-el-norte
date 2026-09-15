import MapaPortadaBloque from "@/components/MapaPortadaBloque";
import IndiceComunidades from "@/components/IndiceComunidades";

export default function Portada() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:py-10">
      <h1 className="font-[family-name:var(--font-serif)] text-4xl leading-tight text-[var(--acento)] sm:text-5xl">
        Vivir en el norte
      </h1>
      <p className="mt-2 text-base text-[var(--tinta-suave)] sm:text-lg">
        Cerca del mar - El mejor clima de cada zona
      </p>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--tinta)]">
        Qué se siente al salir de casa. Cómo es el tiempo en cada estación: si abre el sol o
        cierra la lluvia. Cómo es el pueblo, qué paseos ofrece el mar. Para imaginar la vida
        en cada costa.
      </p>

      <MapaPortadaBloque />

      <p className="mt-6 text-sm text-[var(--tinta-suave)] sm:hidden">
        Pulsa una comunidad para ver los pueblos. En el mapa también se puede pulsar.
      </p>

      <IndiceComunidades />
    </main>
  );
}
