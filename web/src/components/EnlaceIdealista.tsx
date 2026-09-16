import { urlIdealistaMunicipio, urlIdealistaZona } from "@/lib/idealista";

type Props =
  | { ambito: "municipio"; slug: string; nombre: string }
  | { ambito: "zona"; zonaId: string; nombre: string };

export default function EnlaceIdealista(props: Props) {
  const href =
    props.ambito === "municipio"
      ? urlIdealistaMunicipio(props.slug)
      : urlIdealistaZona(props.zonaId);

  if (!href) return null;

  const etiqueta = `Ver casas en venta en ${props.nombre}`;

  return (
    <p className="mt-4 max-w-2xl text-[17px] leading-relaxed">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-[var(--acento)] underline-offset-2 hover:underline"
      >
        {etiqueta}
      </a>
      <span className="text-[var(--tinta-suave)]"> — en Idealista (se abre en otra pestaña).</span>
    </p>
  );
}
