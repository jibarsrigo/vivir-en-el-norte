import { notFound } from "next/navigation";
import BloqueZonaFicha from "@/components/BloqueZonaFicha";
import CabeceraFichaMunicipio from "@/components/CabeceraFichaMunicipio";
import FichaCapa2026 from "@/components/FichaCapa2026";
import MapaMunicipioFicha from "@/components/MapaMunicipioFicha";
import RelatoMunicipio from "@/components/RelatoMunicipio";
import { municipiosFicha, municipioPorSlug, zonaIdDeFicha } from "@/lib/municipios";
import { resumenZona } from "@/lib/zona-resumen";
import { zonaPorId } from "@/lib/zonas";

export function generateStaticParams() {
  return municipiosFicha.map((m) => ({
    id: zonaIdDeFicha(m),
    municipio: m.slug,
  }));
}

export default async function PaginaMunicipio({
  params,
}: {
  params: Promise<{ id: string; municipio: string }>;
}) {
  const { id, municipio } = await params;
  const z = zonaPorId(id);
  const ficha = municipioPorSlug(municipio);
  if (!z || !ficha || zonaIdDeFicha(ficha) !== id) notFound();

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <CabeceraFichaMunicipio ficha={ficha} zonaId={z.id} zonaNombre={z.zona} />

      <BloqueZonaFicha zonaId={z.id} nombreZona={z.zona} resumen={resumenZona(z.id)} />

      {/* Mapa arriba + pastilla de capas (= portada con todas las capas de mapa). */}
      <MapaMunicipioFicha ficha={ficha} capasPortada={Boolean(ficha.mapa)} />

      <FichaCapa2026 ficha={ficha} />

      <RelatoMunicipio ficha={ficha} zonaId={z.id} />
    </main>
  );
}
