"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/laredo/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/laredo/" />;
}
