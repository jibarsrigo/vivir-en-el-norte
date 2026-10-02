import Image from "next/image";
import Link from "next/link";
import { rutaPublica } from "@/lib/ruta-publica";

/** Pie global: costa suave (poca opacidad) + acceso a V1 y V2. */
export default function PieGlobal() {
  return (
    <footer className="relative isolate mt-16 overflow-hidden border-t border-[var(--linea)]">
      <div className="absolute inset-0 -z-10">
        <Image
          src={rutaPublica("/fotos/portada/norte-atlantico.jpg")}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[32%_52%] opacity-[0.28]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[var(--papel)]/55"
          aria-hidden
        />
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 text-sm text-[var(--tinta)]">
        <span className="font-[family-name:var(--font-serif)] text-base text-[var(--acento)]">
          Vivir en el norte
        </span>
        <nav className="flex items-center gap-3 text-xs text-[var(--tinta-suave)]">
          <Link href="/v1/" className="underline-offset-2 hover:underline hover:text-[var(--acento)]">
            V1
          </Link>
          <Link href="/v2/" className="underline-offset-2 hover:underline hover:text-[var(--acento)]">
            V2
          </Link>
        </nav>
      </div>
    </footer>
  );
}
