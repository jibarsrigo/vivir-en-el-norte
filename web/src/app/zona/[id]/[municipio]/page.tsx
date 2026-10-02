import RedirectCliente from "@/components/RedirectCliente";
import { municipiosFicha, municipioPorSlug, zonaIdDeFicha } from "@/lib/municipios";
import { zonaPorId } from "@/lib/zonas";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return municipiosFicha.map((m) => ({
    id: zonaIdDeFicha(m),
    municipio: m.slug,
  }));
}

/** Legacy /zona/{id}/{slug}/ → /{slug}/ (ficha NUEVO2 promovida). */
export default async function Page({
  params,
}: {
  params: Promise<{ id: string; municipio: string }>;
}) {
  const { id, municipio } = await params;
  const z = zonaPorId(id);
  const ficha = municipioPorSlug(municipio);
  if (!z || !ficha || zonaIdDeFicha(ficha) !== id) notFound();
  return <RedirectCliente to={`/${ficha.slug}/`} />;
}
