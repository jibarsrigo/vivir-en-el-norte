"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/cervo/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/cervo/" />;
}
