import { euros, eurosM2 } from "@/lib/formato";
import type { FichaMunicipio } from "@/lib/municipios";

export default function TablaPrecios({ filas }: { filas: FichaMunicipio[] }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-xl border border-[var(--linea)] bg-white">
      <table className="min-w-[36rem] w-full text-left text-sm">
        <thead className="border-b border-[var(--linea)] bg-[var(--papel)] text-[var(--tinta-suave)]">
          <tr>
            <th className="px-3 py-2 font-medium">Municipio</th>
            <th className="px-3 py-2 font-medium">A · 2 hab</th>
            <th className="px-3 py-2 font-medium">A · 3 hab</th>
            <th className="px-3 py-2 font-medium">B · 2 hab</th>
            <th className="px-3 py-2 font-medium">B · 3 hab</th>
            <th className="px-3 py-2 font-medium">€/m²</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--linea)]">
          {filas.map((f) => (
            <tr key={f.slug}>
              <th className="px-3 py-2.5 font-medium text-[var(--acento)]">{f.municipio}</th>
              <td className="px-3 py-2.5 tabular-nums">{euros(f.A_2hab)}</td>
              <td className="px-3 py-2.5 tabular-nums">{euros(f.A_3hab)}</td>
              <td className="px-3 py-2.5 tabular-nums">{euros(f.B_2hab)}</td>
              <td className="px-3 py-2.5 tabular-nums">{euros(f.B_3hab)}</td>
              <td className="px-3 py-2.5 tabular-nums">{eurosM2(f.precioM2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="px-3 py-2 text-xs leading-relaxed text-[var(--tinta-suave)]">
        A: a cinco minutos o menos del agua. B: de cinco a media hora. 2 hab ≈ 65 m²; 3 hab ≈
        90 m². Reciente, con exterior y vistas abiertas. Guión: el núcleo no está en esa franja.
      </p>
    </div>
  );
}
