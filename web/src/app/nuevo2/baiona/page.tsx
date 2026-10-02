"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/baiona/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/baiona/" />;
}
