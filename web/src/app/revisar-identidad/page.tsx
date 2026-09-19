import Link from "next/link";
import Image from "next/image";
import { RELATO_MUNICIPIOS } from "@/components/RelatoMunicipio";
import { municipiosFicha, zonaIdDeFicha } from "@/lib/municipios";
import { rutaPublica } from "@/lib/ruta-publica";

export const dynamic = "force-static";

/**
 * Página oculta de revisión (sin enlace en el menú).
 * URL: /revisar-identidad/
 */
export default function RevisarIdentidadPage() {
  const filas = municipiosFicha
    .map((m) => {
      const r = RELATO_MUNICIPIOS[m.slug];
      if (!r) return null;
      const curada = Boolean(r.fotoIdentidad);
      const foto = r.fotoIdentidad ?? r.fotosAbrir[0];
      if (!foto) return null;
      return {
        nombre: m.municipio,
        slug: m.slug,
        zona: m.zona,
        zonaId: zonaIdDeFicha(m),
        curada,
        src: foto.src,
        pie: foto.pie,
      };
    })
    .filter((x): x is NonNullable<typeof x> => x != null);

  const curadas = filas.filter((f) => f.curada).length;

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <p className="text-sm text-[var(--tinta-suave)]">
        Página oculta de revisión ·{" "}
        <Link href="/" className="underline-offset-2 hover:underline">
          Inicio
        </Link>
      </p>
      <h1 className="mt-2 font-[family-name:var(--font-serif)] text-3xl text-[var(--acento)]">
        Fotos de identidad
      </h1>
      <p className="mt-2 max-w-2xl text-[var(--tinta-suave)]">
        Casas + mar/ría/monte. {curadas} curadas · {filas.length - curadas} provisional
        (primera foto del relato) · {filas.length} pueblos.
      </p>

      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filas.map((f) => (
          <article key={f.slug} className="overflow-hidden rounded-xl border border-[var(--linea)] bg-white">
            <div className="relative aspect-[4/3] bg-[#f5f6f7]">
              <Image
                src={rutaPublica(f.src)}
                alt={f.pie}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="space-y-1 px-3 py-3">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-[family-name:var(--font-serif)] text-xl text-[var(--acento)]">
                  {f.nombre}
                </h2>
                <span
                  className={
                    f.curada
                      ? "text-xs font-semibold text-emerald-800"
                      : "text-xs font-semibold text-amber-800"
                  }
                >
                  {f.curada ? "Curada" : "Provisional"}
                </span>
              </div>
              <p className="text-xs text-[var(--tinta-suave)]">{f.zona}</p>
              <p className="text-sm leading-snug text-[var(--tinta-suave)]">{f.pie}</p>
              <p className="pt-1">
                <Link
                  href={`/zona/${f.zonaId}/${f.slug}/`}
                  className="text-sm font-semibold text-[var(--acento)] underline-offset-2 hover:underline"
                >
                  Abrir ficha
                </Link>
              </p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
