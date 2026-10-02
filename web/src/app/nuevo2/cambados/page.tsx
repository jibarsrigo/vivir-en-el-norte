"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/cambados/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/cambados/" />;
}
