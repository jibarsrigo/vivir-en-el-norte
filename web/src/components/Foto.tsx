import Image from "next/image";
import { rutaPublica } from "@/lib/ruta-publica";

export default function Foto({
  src,
  pie,
  alt,
}: {
  src: string;
  pie: string;
  alt?: string;
}) {
  return (
    <figure className="my-6 overflow-hidden rounded-xl border border-[var(--linea)] bg-white">
      <Image
        src={rutaPublica(src)}
        alt={alt ?? pie}
        width={1280}
        height={850}
        className="h-auto w-full"
      />
      <figcaption className="px-3 py-1.5 text-sm text-[var(--tinta-suave)]">{pie}</figcaption>
    </figure>
  );
}
