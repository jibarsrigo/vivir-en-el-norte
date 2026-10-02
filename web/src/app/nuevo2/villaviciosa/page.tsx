"use client";

import RedirectCliente from "@/components/RedirectCliente";

/** Legacy /nuevo2/villaviciosa/ → ficha pública. */
export default function Page() {
  return <RedirectCliente to="/villaviciosa/" />;
}
