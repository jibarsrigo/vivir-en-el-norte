"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/foz/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/foz/" />;
}
