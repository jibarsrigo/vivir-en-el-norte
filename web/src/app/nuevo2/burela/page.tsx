"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/burela/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/burela/" />;
}
