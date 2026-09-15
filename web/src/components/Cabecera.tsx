"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Cabecera() {
  const path = usePathname();
  if (path === "/") return null;

  return (
    <header className="border-b border-[var(--linea)] bg-[var(--papel)]/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3">
        <Link href="/" className="font-[family-name:var(--font-serif)] text-xl text-[var(--acento)]">
          Vivir en el norte
        </Link>
      </div>
    </header>
  );
}
