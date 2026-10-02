import RedirectCliente from "@/components/RedirectCliente";
import { zonas } from "@/lib/zonas";

export function generateStaticParams() {
  return zonas.map((z) => ({ id: z.id }));
}

/** Legacy /nuevo2/zona/[id]/ → /zona/[id]/. */
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <RedirectCliente to={`/zona/${id}/`} />;
}
