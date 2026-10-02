"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/oleiros/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/oleiros/" />;
}
