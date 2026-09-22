import Image from "next/image";
import Encaja from "@/components/Encaja";
import Foto from "@/components/Foto";
import { rutaPublica } from "@/lib/ruta-publica";
import type { V1RelatoMun } from "@/lib/v1";

function Parrafos({ textos }: { textos: string[] }) {
  return (
    <>
      {textos.map((p) => (
        <p key={p.slice(0, 56)} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
          {p}
        </p>
      ))}
    </>
  );
}

function Fotos({ items, omitSrc }: { items: { src: string; pie: string }[]; omitSrc?: string }) {
  if (!items.length) return null;
  const seen = new Set<string>();
  if (omitSrc) seen.add(omitSrc);
  const unicas = items.filter((f) => {
    if (seen.has(f.src)) return false;
    seen.add(f.src);
    return true;
  });
  if (!unicas.length) return null;
  return (
    <>
      {unicas.map((f) => (
        <Foto key={f.src} src={f.src} pie={f.pie} />
      ))}
    </>
  );
}

function FotoIdentidad({ foto }: { foto: { src: string; pie: string } }) {
  return (
    <figure className="mt-6 overflow-hidden rounded-xl border border-[var(--linea)] bg-white">
      <Image
        src={rutaPublica(foto.src)}
        alt={foto.pie}
        width={1600}
        height={1000}
        className="h-auto w-full"
        priority
      />
      <figcaption className="px-3 py-2 text-sm text-[var(--tinta-suave)]">{foto.pie}</figcaption>
    </figure>
  );
}

/** Renders frozen V1 municipio narrative — does not read current relatos. */
export default function V1RelatoMunicipio({ relato }: { relato: V1RelatoMun }) {
  const idSrc = relato.fotoIdentidad?.src;
  return (
    <article className="mt-8">
      {relato.fotoIdentidad ? <FotoIdentidad foto={relato.fotoIdentidad} /> : null}

      <p className="mt-6 text-sm font-medium text-[var(--tinta-suave)]">{relato.escala}</p>

      <section>
        <h2 className="mt-10 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">
          Cómo se vive
        </h2>
        <Parrafos textos={relato.abrir} />
        <Fotos items={relato.fotosAbrir} omitSrc={idSrc} />
      </section>

      <section>
        <h2 className="mt-10 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">
          Frente a Mallorca
        </h2>
        <h3 className="mt-4 text-lg font-semibold text-[var(--acento)]">Clima</h3>
        <Parrafos textos={relato.tiempo} />
        {relato.vivir?.length ? (
          <>
            <h3 className="mt-6 text-lg font-semibold text-[var(--acento)]">Vivir</h3>
            <Parrafos textos={relato.vivir} />
          </>
        ) : null}
      </section>

      <section>
        <h2 className="mt-10 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">
          De dónde viene
        </h2>
        <Parrafos textos={relato.historia} />
        <Fotos items={relato.fotosHistoria} omitSrc={idSrc} />
      </section>

      <section>
        <h2 className="mt-10 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">
          Mar, río y camino
        </h2>
        <Parrafos textos={relato.fuera} />
        <Fotos items={relato.fotosFuera} omitSrc={idSrc} />
      </section>

      <section>
        <h2 className="mt-10 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">
          Casa
        </h2>
        <Parrafos textos={relato.casa} />
      </section>

      <Encaja si={relato.encaja.si} no={relato.encaja.no} veredicto={relato.encaja.veredicto} />

      <p className="mt-12 max-w-2xl text-xs text-[var(--tinta-suave)]">{relato.creditoFotos}</p>
    </article>
  );
}
