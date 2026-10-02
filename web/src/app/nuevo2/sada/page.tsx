"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/sada/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/sada/" />;
}
