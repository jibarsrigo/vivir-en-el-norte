"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/cudillero/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/cudillero/" />;
}
