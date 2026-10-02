"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { rutaPublica } from "@/lib/ruta-publica";

/** Cabecera interior: franja estrecha con costa norte (misma foto que la portada). */
export default function Cabecera() {
  const path = usePathname();
  if (path === "/") return null;

  return (
    <header className="relative isolate overflow-hidden border-b border-[var(--linea)]">
      <div className="absolute inset-0 -z-10">
        <Image
          src={rutaPublica("/fotos/portada/norte-atlantico.jpg")}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[28%_48%]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[rgb(12_28_40/0.62)] via-[rgb(12_28_40/0.38)] to-[rgb(12_28_40/0.28)]"
          aria-hidden
        />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-3.5 sm:py-4">
        <Link
          href="/"
          className="font-[family-name:var(--font-serif)] text-xl text-white drop-shadow-[0_1px_8px_rgb(0_0_0/0.45)] sm:text-2xl"
        >
          Vivir en el norte
        </Link>
      </div>
    </header>
  );
}
