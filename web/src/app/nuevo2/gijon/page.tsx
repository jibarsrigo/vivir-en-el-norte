"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/gijon/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/gijon/" />;
}
