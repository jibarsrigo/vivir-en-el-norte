import TablaComparativaZona from "@/components/TablaComparativaZona";
import { ESCALAS_ZONA } from "@/lib/escalas-zona";
import { municipiosDeZonaFicha } from "@/lib/municipios";

/**
 * Tabla comparativa de municipios de la zona (notas 1–10 + escala).
 */
export default function MunicipiosZonaFin({ zonaId }: { zonaId: string }) {
  const municipios = municipiosDeZonaFicha(zonaId);
  const escalas = ESCALAS_ZONA[zonaId] ?? {};

  return (
    <section className="mt-8 max-w-3xl">
      <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[var(--acento)]">
        Municipios
      </h2>
      <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
        Las notas permiten comparar de un vistazo. Debajo de cada nombre, la escala dice si la vida
        diaria es de villa, ciudad, isla o casas entre viñas.
      </p>
      <TablaComparativaZona municipios={municipios} zonaId={zonaId} escalas={escalas} />
    </section>
  );
}
