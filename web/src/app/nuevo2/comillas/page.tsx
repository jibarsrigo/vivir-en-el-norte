"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/comillas/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/comillas/" />;
}
