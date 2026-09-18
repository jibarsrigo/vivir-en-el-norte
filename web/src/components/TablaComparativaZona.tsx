import Link from "next/link";
import type { FichaMunicipio } from "@/lib/municipios";

/** Convierte minutos en nota 1–10 (menos minutos = mejor). */
function notaCercania(min: number, ideal: number, peor: number): number {
  if (min <= ideal) return 10;
  if (min >= peor) return 1;
  return Math.round(10 - ((min - ideal) / (peor - ideal)) * 9);
}

/** Precio: más barato = mejor, relativo al tramo de la zona. */
function notaPrecio(precio: number, minZona: number, maxZona: number): number {
  if (maxZona <= minZona) return 5;
  if (precio <= minZona) return 10;
  if (precio >= maxZona) return 1;
  return Math.round(10 - ((precio - minZona) / (maxZona - minZona)) * 9);
}

function filasConNotas(municipios: FichaMunicipio[]) {
  const precios = municipios.map((m) => m.precioM2);
  const minP = Math.min(...precios);
  const maxP = Math.max(...precios);
  return municipios.map((m) => ({
    m,
    mar: notaCercania(m.minCosta, 0, 30),
    bano: notaCercania(m.minBano, 0, 30),
    servicios: m.servicios,
    hospital: notaCercania(m.hospitalMin, 20, 50),
    precio: notaPrecio(m.precioM2, minP, maxP),
    conexiones: m.comunicacionesNota10,
  }));
}

export default function TablaComparativaZona({
  municipios,
  zonaId,
  slugActual,
  escalas,
}: {
  municipios: FichaMunicipio[];
  zonaId: string;
  /** Si se omite, ninguna fila se marca como «esta ficha» (página de zona). */
  slugActual?: string;
  /** Escala bajo el nombre (Villa, Isla…). */
  escalas?: Record<string, string>;
}) {
  const filas = filasConNotas(municipios);

  return (
    <div className="mt-4 overflow-x-auto rounded-xl border border-[var(--linea)] bg-white">
      <table className="min-w-[40rem] w-full text-left text-sm">
        <thead className="border-b border-[var(--linea)] bg-[var(--papel)] text-[var(--tinta-suave)]">
          <tr>
            <th className="px-3 py-2 font-medium">Municipio</th>
            <th className="px-3 py-2 font-medium tabular-nums" title="Minutos a la costa">
              Mar
            </th>
            <th className="px-3 py-2 font-medium tabular-nums" title="Minutos a playa de baño">
              Baño
            </th>
            <th className="px-3 py-2 font-medium tabular-nums">Servicios</th>
            <th className="px-3 py-2 font-medium tabular-nums" title="Cercanía al hospital">
              Hospital
            </th>
            <th className="px-3 py-2 font-medium tabular-nums" title="Precio del metro: más alto = más asequible">
              Precio
            </th>
            <th className="px-3 py-2 font-medium tabular-nums">Conexiones</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--linea)]">
          {filas.map(({ m, mar, bano, servicios, hospital, precio, conexiones }) => {
            const actual = slugActual != null && m.slug === slugActual;
            const escala = escalas?.[m.municipio];
            return (
              <tr
                key={m.slug}
                className={actual ? "bg-[var(--papel)] font-medium" : undefined}
              >
                <th className="px-3 py-2.5 text-[var(--acento)]">
                  {actual ? (
                    <span>
                      {m.municipio}
                      <span className="ml-1.5 text-xs font-normal text-[var(--tinta-suave)]">
                        (esta ficha)
                      </span>
                    </span>
                  ) : (
                    <Link
                      href={`/zona/${zonaId}/${m.slug}/`}
                      className="underline-offset-2 hover:underline"
                    >
                      {m.municipio}
                    </Link>
                  )}
                  {escala ? (
                    <div className="mt-0.5 text-xs font-normal text-[var(--tinta-suave)]">
                      {escala}
                    </div>
                  ) : null}
                </th>
                <td className="px-3 py-2.5 tabular-nums">{mar}</td>
                <td className="px-3 py-2.5 tabular-nums">{bano}</td>
                <td className="px-3 py-2.5 tabular-nums">{servicios}</td>
                <td className="px-3 py-2.5 tabular-nums">{hospital}</td>
                <td className="px-3 py-2.5 tabular-nums">{precio}</td>
                <td className="px-3 py-2.5 tabular-nums">{conexiones}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ul className="space-y-0.5 px-3 py-2 text-[0.7rem] leading-snug text-[var(--tinta-suave)]">
        <li>
          <span className="font-medium text-[var(--tinta)]">Mar</span> = minutos en coche hasta
          ver el mar (costa o estuario).
        </li>
        <li>
          <span className="font-medium text-[var(--tinta)]">Baño</span> = minutos hasta una playa
          donde se pueda nadar con comodidad, no solo mirar.
        </li>
        <li>
          <span className="font-medium text-[var(--tinta)]">Servicios</span> = tiendas, farmacia,
          centro de salud, supermercado, colegio o instituto y demás vida diaria en el propio
          municipio (sin contar el hospital).
        </li>
        <li>
          <span className="font-medium text-[var(--tinta)]">Hospital</span> = minutos al hospital
          público más cercano.
        </li>
        <li>
          <span className="font-medium text-[var(--tinta)]">Precio</span> = metro cuadrado más
          asequible respecto a los pueblos de esta zona.
        </li>
        <li>
          <span className="font-medium text-[var(--tinta)]">Conexiones</span> = carreteras, bus y
          tren (si hay).
        </li>
      </ul>
    </div>
  );
}
