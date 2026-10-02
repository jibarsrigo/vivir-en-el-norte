"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/gondomar/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/gondomar/" />;
}
