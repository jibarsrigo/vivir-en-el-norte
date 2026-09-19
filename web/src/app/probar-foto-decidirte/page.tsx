import type { Metadata } from "next";
import ProbarFotoDecidirteCliente from "./ProbarFotoDecidirteCliente";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Probar foto Para decidirte (oculto)",
  robots: { index: false, follow: false },
};

/**
 * Página oculta · /probar-foto-decidirte/
 */
export default function ProbarFotoDecidirtePage() {
  return <ProbarFotoDecidirteCliente />;
}
