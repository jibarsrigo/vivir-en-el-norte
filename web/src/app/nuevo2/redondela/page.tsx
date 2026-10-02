"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/redondela/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/redondela/" />;
}
