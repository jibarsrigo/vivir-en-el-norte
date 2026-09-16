import MapaPortadaBloque from "@/components/MapaPortadaBloque";

export default function Portada() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:py-10">
      <h1 className="font-[family-name:var(--font-serif)] text-4xl leading-tight text-[var(--acento)] sm:text-5xl">
        Vivir en el norte
      </h1>
      <p className="mt-2 text-base text-[var(--tinta-suave)] sm:text-lg">
        Cerca del mar - El mejor clima de cada zona
      </p>

      <MapaPortadaBloque />
    </main>
  );
}
