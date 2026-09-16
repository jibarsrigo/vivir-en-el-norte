/** Misma estructura visual que LeyendaClima/Mar compacta. */
export function LeyendaMapa() {
  return (
    <div className="min-w-0">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">
        Mapa
      </p>
      <ul className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] text-[var(--tinta)]">
        <li className="flex items-center gap-1">
          <span className="inline-block h-2.5 w-2.5 shrink-0 rounded-full border border-white bg-[#1c2a32] shadow-[0_0_0_1px_#1c2a32]" />
          <span className="font-semibold leading-none">Municipio</span>
        </li>
        <li className="flex items-center gap-1">
          <span className="inline-block h-2.5 w-2.5 shrink-0 border-2 border-[#1a2228] bg-white shadow-[0_0_0_1px_#fff]" />
          <span className="font-semibold leading-none">Capital</span>
        </li>
      </ul>
    </div>
  );
}
