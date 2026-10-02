"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/santona/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/santona/" />;
}
