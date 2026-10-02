"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/xove/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/xove/" />;
}
