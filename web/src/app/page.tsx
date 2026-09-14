import dynamic from "next/dynamic";
import Link from "next/link";
import { mallorca, zonas } from "@/lib/zonas";
import { COLOR_CLASE } from "@/lib/zonas";

const MapaPortada = dynamic(() => import("@/components/MapaPortada"), { ssr: false });

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
    <main className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
      <h1
        className="font-[family-name:var(--font-serif)] text-4xl leading-tight text-[var(--acento)] sm:text-5xl"
      >
        Vivir en el norte
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--tinta)]">
        El tiempo que se siente en la calle, el tamaño del pueblo, el agua y el paseo. Para
        imaginar el día a día en la costa norte —no unas vacaciones— y decidir con calma.
      </p>

      <section className="mt-8 overflow-hidden rounded-xl border border-[var(--linea)] bg-white shadow-sm">
        <div className="h-[52vh] min-h-[280px] sm:h-[58vh]">
          <MapaPortada zonas={zonas} />
        </div>
        <div className="grid gap-4 border-t border-[var(--linea)] p-4 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">
              Color del mapa
            </p>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              {Object.entries(COLOR_CLASE).map(([nombre, color]) => (
                <li key={nombre} className="flex items-center gap-1.5">
                  <span className="inline-block h-3 w-3 rounded-sm" style={{ background: color }} />
                  {nombre === "Más favorable"
                    ? "Más sol, menos lluvia"
                    : nombre === "Más húmedo / nublado"
                      ? "Más nublado"
                      : nombre}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-sm text-[var(--calor)]">
              Si el verano se parece al de Mallorca: aviso en rojo, «el calor aprieta».
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">
              Mallorca, para comparar el tiempo
            </p>
            <div className="mt-2">
              <Cifras {...mallorca} />
            </div>
          </div>
        </div>
      </section>

      <p className="mt-6 text-sm text-[var(--tinta-suave)] sm:hidden">
        En el teléfono, elige la zona en la lista. En el mapa también se puede pulsar.
      </p>

      <ol className="mt-4 divide-y divide-[var(--linea)] overflow-hidden rounded-xl border border-[var(--linea)] bg-white">
        {zonas.map((z) => (
          <li key={z.id}>
            <Link
              href={`/zona/${z.id}/`}
              className="flex flex-col gap-2 px-4 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
            >
              <div className="min-w-[11rem]">
                <p className="font-[family-name:var(--font-serif)] text-xl text-[var(--acento)]">
                  {z.zona}
                </p>
                <p className="text-sm text-[var(--tinta-suave)]">
                  {z.provincia}
                  {z.portugal ? " · más adelante" : z.activa ? " · se puede entrar" : " · relato en curso"}
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
