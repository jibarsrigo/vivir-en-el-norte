import Link from "next/link";
import Encaja from "@/components/Encaja";
import Foto from "@/components/Foto";
import V2EnlaceIdealista from "@/components/V2EnlaceIdealista";
import V2TablaComparativaZona from "@/components/V2TablaComparativaZona";
import type { FichaMunicipio } from "@/lib/municipios";
import { v2HrefZona } from "@/lib/v2-hrefs";
import type { V2RelatoMun } from "@/lib/v2";

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

/** Renders frozen V2 municipio narrative — mirrors CURRENT RelatoMunicipio layout. */
export default function V2RelatoMunicipio({
  relato,
  ficha,
  zonaId,
  vecinos,
  escalas,
  idealistaUrl,
}: {
  relato: V2RelatoMun;
  ficha: FichaMunicipio;
  zonaId: string;
  vecinos: FichaMunicipio[];
  escalas: Record<string, string>;
  idealistaUrl?: string | null;
}) {
  const omitIdentidad = (relato.fotoIdentidad ?? relato.fotosAbrir[0])?.src;

  return (
    <article className="mt-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">
        {relato.escala}
      </p>

      <h2 className="mt-6 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">
        Cómo se vive
      </h2>
      <Parrafos textos={relato.abrir} />
      <Fotos items={relato.fotosAbrir} omitSrc={omitIdentidad} />

      <h2 className="mt-10 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">
        Frente a Mallorca
      </h2>
      <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">
        Clima
      </h3>
      <Parrafos textos={relato.tiempo.slice(0, 1)} />
      <Fotos items={relato.fotosClima ?? []} omitSrc={omitIdentidad} />
      {relato.tiempo.length > 1 ? <Parrafos textos={relato.tiempo.slice(1)} /> : null}
      {relato.vivir && relato.vivir.length > 0 ? (
        <>
          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">
            Vivir
          </h3>
          <Parrafos textos={relato.vivir.slice(0, 1)} />
          <Fotos items={relato.fotosVivir ?? []} omitSrc={omitIdentidad} />
          {relato.vivir.length > 1 ? <Parrafos textos={relato.vivir.slice(1)} /> : null}
        </>
      ) : null}

      <h2 className="mt-10 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">
        De dónde viene
      </h2>
      <Parrafos textos={relato.historia} />
      <Fotos items={relato.fotosHistoria} omitSrc={omitIdentidad} />

      <h2 className="mt-10 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">
        Mar, río y camino
      </h2>
      <Parrafos textos={relato.fuera} />
      <Fotos items={relato.fotosFuera} omitSrc={omitIdentidad} />

      <h2 className="mt-10 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">Casa</h2>
      <Parrafos textos={relato.casa.slice(0, 1)} />
      <Fotos items={(relato.fotosCasa ?? []).slice(0, 1)} omitSrc={omitIdentidad} />
      {relato.casa.length > 1 ? <Parrafos textos={relato.casa.slice(1)} /> : null}
      <Fotos items={(relato.fotosCasa ?? []).slice(1)} omitSrc={omitIdentidad} />
      <V2EnlaceIdealista url={idealistaUrl} nombre={ficha.municipio} />

      <Encaja si={relato.encaja.si} no={relato.encaja.no} veredicto={relato.encaja.veredicto} />

      <section className="mt-12 max-w-3xl">
        <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">
          Más pueblos de{" "}
          <Link href={v2HrefZona(zonaId)} className="underline-offset-2 hover:underline">
            {ficha.zona}
          </Link>
        </h2>
        <V2TablaComparativaZona
          municipios={vecinos}
          zonaId={zonaId}
          slugActual={ficha.slug}
          escalas={escalas}
        />
      </section>

      <p className="mt-12 max-w-2xl text-xs text-[var(--tinta-suave)]">{relato.creditoFotos}</p>
    </article>
  );
}
