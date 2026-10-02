"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/liencres-pielagos/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/liencres-pielagos/" />;
}
