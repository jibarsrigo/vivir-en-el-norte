"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/nigran/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/nigran/" />;
}
