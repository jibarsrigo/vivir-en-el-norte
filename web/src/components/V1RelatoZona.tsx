import Encaja from "@/components/Encaja";
import Foto from "@/components/Foto";
import type { V1ZonaBlock } from "@/lib/v1";

/** Renders frozen V1 zone narrative blocks — does not read current Relato*.tsx. */
export default function V1RelatoZona({ blocks }: { blocks: V1ZonaBlock[] }) {
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
