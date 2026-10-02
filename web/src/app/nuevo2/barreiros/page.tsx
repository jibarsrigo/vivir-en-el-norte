"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/barreiros/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/barreiros/" />;
}
