"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/oia/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/oia/" />;
}
