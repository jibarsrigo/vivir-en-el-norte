import Link from "next/link";
import MapaPortadaBloque from "@/components/MapaPortadaBloque";
import { zonas } from "@/lib/zonas";

function Cifras({
  despejados,
  solHoras,
  lluviaDias,
  lluvia,
  viento,
  niebla,
}: {
  despejados: number;
  solHoras: number;
  lluviaDias: number;
  lluvia: { oct_mar: string; peor: string; peor_n: string };
  viento: string;
  niebla: string;
}) {
  return (
    <ul className="grid gap-1 text-[15px] leading-snug text-[var(--tinta)]">
      <li>
        <span className="text-[var(--tinta-suave)]">Despejados</span> {despejados} días al año
      </li>
      <li>
        <span className="text-[var(--tinta-suave)]">Sol</span> {solHoras.toLocaleString("es-ES")} h
        <span className="text-[var(--tinta-suave)]"> / año</span>
      </li>
      <li>
        <span className="text-[var(--tinta-suave)]">Lluvia</span> {lluviaDias} días
        <span className="text-[var(--tinta-suave)]">
          {" "}
          (oct–mar {lluvia.oct_mar} días/mes; el peor, {lluvia.peor}, {lluvia.peor_n})
        </span>
      </li>
      <li>
        <span className="text-[var(--tinta-suave)]">Viento</span> {viento.toLowerCase()} ·{" "}
        <span className="text-[var(--tinta-suave)]">niebla</span> {niebla.toLowerCase()}
      </li>
    </ul>
  );
}

export default function Portada() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:py-10">
      <h1
        className="font-[family-name:var(--font-serif)] text-4xl leading-tight text-[var(--acento)] sm:text-5xl"
      >
        Vivir en el norte
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--tinta)]">
        El tiempo que se siente en la calle, el tamaño del pueblo, el agua y el paseo. Para
        imaginar el día a día en la costa norte —no unas vacaciones— y decidir con calma.
      </p>

      <MapaPortadaBloque />

      <p className="mt-6 text-sm text-[var(--tinta-suave)] sm:hidden">
        En el teléfono, elige la zona en la lista. En el mapa también se puede pulsar.
      </p>

      <ol className="mt-4 divide-y divide-[var(--linea)] overflow-hidden rounded-xl border border-[var(--linea)] bg-white">
        {zonas.map((z) => (
          <li key={z.id}>
            <Link
              href={`/zona/${z.id}/`}
              className="flex min-h-[4.75rem] touch-manipulation flex-col gap-2 px-4 py-5 sm:min-h-0 sm:flex-row sm:items-start sm:justify-between sm:gap-6 sm:py-4"
            >
              <div className="min-w-[11rem]">
                <p className="font-[family-name:var(--font-serif)] text-xl text-[var(--acento)]">
                  {z.zona}
                </p>
                <p className="text-sm text-[var(--tinta-suave)]">
                  {z.provincia}
                  {z.portugal ? " · más adelante" : z.activa ? " · se puede entrar" : " · relato en curso"}
                </p>
                <p className="mt-2 max-w-xl text-[15px] leading-snug text-[var(--tinta)]">
                  {z.municipios.join(" · ")}
                </p>
                {z.calorAprieta ? (
                  <p className="mt-1 text-sm font-semibold text-[var(--calor)]">
                    El calor aprieta ({z.calorAprieta})
                  </p>
                ) : null}
              </div>
              <Cifras
                despejados={z.despejados}
                solHoras={z.solHoras}
                lluviaDias={z.lluviaDias}
                lluvia={z.lluvia}
                viento={z.viento}
                niebla={z.niebla}
              />
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
