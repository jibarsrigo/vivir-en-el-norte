"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/moana/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/moana/" />;
}
