"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/noja/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/noja/" />;
}
