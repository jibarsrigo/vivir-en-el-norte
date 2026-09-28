import Encaja from "@/components/Encaja";
import Foto from "@/components/Foto";
import TablaPrecios from "@/components/TablaPrecios";
import V2EnlaceIdealista from "@/components/V2EnlaceIdealista";
import V2MunicipiosZonaFin from "@/components/V2MunicipiosZonaFin";
import type { FichaMunicipio } from "@/lib/municipios";
import type { V2ZonaBlock } from "@/lib/v2";

/** Renders frozen V2 zone narrative + widgets from freeze data (not live Relato*.tsx). */
export default function V2RelatoZona({
  blocks,
  zonaId,
  nombreZona,
  fichas,
  escalas,
  idealistaUrl,
}: {
  blocks: V2ZonaBlock[];
  zonaId: string;
  nombreZona: string;
  fichas: FichaMunicipio[];
  escalas: Record<string, string>;
  idealistaUrl?: string | null;
}) {
  return (
    <article className="mt-8">
      {blocks.map((b, i) => {
        const key = `${b.type}-${i}`;
        if (b.type === "h2") {
          return (
            <h2
              key={key}
              className="mt-10 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]"
            >
              {b.text}
            </h2>
          );
        }
        if (b.type === "p") {
          return (
            <p key={key} className="mt-3 max-w-2xl text-[17px] leading-relaxed">
              {b.text}
            </p>
          );
        }
        if (b.type === "foto") {
          return <Foto key={key} src={b.src} pie={b.pie} />;
        }
        if (b.type === "encaja") {
          return <Encaja key={key} si={b.si} no={b.no} veredicto={b.veredicto} />;
        }
        if (b.type === "tablaPrecios") {
          return <TablaPrecios key={key} filas={fichas} />;
        }
        if (b.type === "idealista") {
          return <V2EnlaceIdealista key={key} url={idealistaUrl} nombre={nombreZona} />;
        }
        if (b.type === "municipiosFin") {
          return (
            <V2MunicipiosZonaFin
              key={key}
              zonaId={zonaId}
              municipios={fichas}
              escalas={escalas}
            />
          );
        }
        if (b.type === "credito") {
          return (
            <p key={key} className="mt-12 max-w-2xl text-xs text-[var(--tinta-suave)]">
              {b.text}
            </p>
          );
        }
        return null;
      })}
    </article>
  );
}
