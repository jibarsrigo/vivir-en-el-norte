"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/viveiro/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/viveiro/" />;
}
