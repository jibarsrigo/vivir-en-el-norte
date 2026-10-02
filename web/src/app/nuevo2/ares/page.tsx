"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/ares/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/ares/" />;
}
