"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/tomino/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/tomino/" />;
}
