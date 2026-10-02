"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/noia/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/noia/" />;
}
