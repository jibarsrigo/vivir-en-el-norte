import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import Link from "next/link";
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
    "Cómo se siente vivir en la costa norte: el tiempo, la calle, el agua y el paseo. Para decidir con calma.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${serif.variable} ${sans.variable} font-sans antialiased`}>
        <header className="border-b border-[var(--linea)] bg-[var(--papel)]/90 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-3">
            <Link href="/" className="font-[family-name:var(--font-serif)] text-xl text-[var(--acento)]">
              Vivir en el norte
            </Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
