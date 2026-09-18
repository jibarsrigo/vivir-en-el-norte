export default function Encaja({
  si,
  no,
  veredicto,
}: {
  si: string[];
  no: string[];
  veredicto: string;
}) {
  return (
    <section className="mt-10 max-w-2xl">
      <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">Encaja si</h2>
      {si.map((t) => (
        <p key={t.slice(0, 48)} className="mt-3 text-[17px] leading-relaxed">
          {t}
        </p>
      ))}
      <h2 className="mt-8 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">No encaja si</h2>
      {no.map((t) => (
        <p key={t.slice(0, 48)} className="mt-3 text-[17px] leading-relaxed">
          {t}
        </p>
      ))}
      <p className="mt-8 border-t border-[var(--linea)] pt-6 text-[17px] leading-relaxed font-medium">
        {veredicto}
      </p>
    </section>
  );
}
