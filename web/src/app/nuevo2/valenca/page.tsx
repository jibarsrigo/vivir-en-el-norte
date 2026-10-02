"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/valenca/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/valenca/" />;
}
