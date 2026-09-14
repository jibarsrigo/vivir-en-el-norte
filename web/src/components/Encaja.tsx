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
      <ul className="mt-3 list-disc space-y-2 pl-5 text-[17px] leading-relaxed">
        {si.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <h2 className="mt-8 font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">No encaja si</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-[17px] leading-relaxed">
        {no.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <p className="mt-6 text-[17px] leading-relaxed">{veredicto}</p>
    </section>
  );
}
