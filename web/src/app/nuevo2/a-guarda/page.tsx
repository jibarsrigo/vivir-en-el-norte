"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/a-guarda/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/a-guarda/" />;
}
