"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/navia/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/navia/" />;
}
