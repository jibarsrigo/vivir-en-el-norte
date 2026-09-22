import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import Cabecera from "@/components/Cabecera";
import PieGlobal from "@/components/PieGlobal";
import "./globals.css";

const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vivir en el norte",
  description:
    "Mapa y fichas para elegir dónde vivir en el norte de España y el norte de Portugal, comparado con Mallorca.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${serif.variable} ${sans.variable} font-sans antialiased`}>
        <Cabecera />
        {children}
        <PieGlobal />
      </body>
    </html>
  );
}
