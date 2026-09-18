import {
  LEYENDA_HOSPITAL,
  htmlIconoHospital,
  htmlIconoHospitalSede,
} from "@/lib/hospital";

function Icono({ tramo }: { tramo: (typeof LEYENDA_HOSPITAL)[number]["id"] }) {
  return (
    <span
      className="inline-flex shrink-0"
      dangerouslySetInnerHTML={{ __html: htmlIconoHospital(tramo, "pueblo") }}
    />
  );
}

export function LeyendaHospital({ compacta = false }: { compacta?: boolean }) {
  if (compacta) {
    return (
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">
          Hospital
        </p>
        <ul className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] text-[var(--tinta)]">
          <li className="flex items-center gap-1">
            <span
              className="inline-flex shrink-0"
              dangerouslySetInnerHTML={{
                __html: htmlIconoHospitalSede("pueblo", "publico"),
              }}
            />
            <span className="font-semibold leading-none">Público</span>
          </li>
          <li className="flex items-center gap-1">
            <span
              className="inline-flex shrink-0"
              dangerouslySetInnerHTML={{
                __html: htmlIconoHospitalSede("pueblo", "privado"),
              }}
            />
            <span className="font-semibold leading-none">Privado</span>
          </li>
          {LEYENDA_HOSPITAL.map((c) => (
            <li key={c.id} className="flex items-center gap-1">
              <Icono tramo={c.id} />
              <span className="font-semibold leading-none">{c.etiqueta}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="min-w-0">
      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--tinta-suave)]">
        Hospital
      </p>
      <ul className="mt-1.5 flex flex-wrap gap-x-3 gap-y-0.5 text-sm text-[var(--tinta)]">
        <li className="flex items-center gap-1.5">
          <span
            className="inline-flex shrink-0"
            dangerouslySetInnerHTML={{
              __html: htmlIconoHospitalSede("pueblo", "publico"),
            }}
          />
          <span className="leading-tight font-semibold">Público</span>
        </li>
        <li className="flex items-center gap-1.5">
          <span
            className="inline-flex shrink-0"
            dangerouslySetInnerHTML={{
              __html: htmlIconoHospitalSede("pueblo", "privado"),
            }}
          />
          <span className="leading-tight font-semibold">Privado</span>
        </li>
        {LEYENDA_HOSPITAL.map((c) => (
          <li key={c.id} className="flex items-center gap-1.5">
            <Icono tramo={c.id} />
            <span className="leading-tight font-semibold">{c.etiqueta}</span>
          </li>
        ))}
      </ul>
      <p className="mt-1 text-[11px] leading-snug text-[var(--tinta-suave)]">
        Edificio rojo = público; violeta = privado (los citados en las fichas). Cruz en círculo =
        minutos al público de referencia. Nombre al acercar o al pasar el ratón.
      </p>
    </div>
  );
}
