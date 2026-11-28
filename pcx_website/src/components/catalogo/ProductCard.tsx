import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cable, Cpu, Code2, Keyboard, MessageCircle, Monitor, Package } from "lucide-react";
import { CATEGORIAS, SUBCATEGORIAS } from "@/sanity/lib/categorias";
import { urlFor } from "@/sanity/lib/image";
import type { Producto } from "@/sanity/lib/catalogo";

const ICONOS: Record<string, typeof Package> = {
  computadoras: Monitor,
  perifericos: Keyboard,
  componentes: Cpu,
  cables: Cable,
  software: Code2,
};

export default function ProductCard({
  producto,
  whatsapp,
}: {
  producto: Producto;
  whatsapp?: string;
}) {
  const categoria = CATEGORIAS.find((c) => c.value === producto.categoria)?.label;
  const sub = SUBCATEGORIAS[producto.categoria]?.find(
    (s) => s.value === producto.subcategoria
  )?.label;
  const etiqueta = sub ? `${categoria} · ${sub}` : categoria;
  const Icono = ICONOS[producto.categoria] ?? Package;

  const mensaje = `Hola! Quiero consultar por: ${producto.nombre}. ¿Me pasan precio y disponibilidad?`;
  const urlConsulta = whatsapp
    ? `${whatsapp}${whatsapp.includes("?") ? "&" : "?"}text=${encodeURIComponent(mensaje)}`
    : `/catalogo/${producto.slug}`;

  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white transition hover:shadow-md">
      <div className="relative aspect-[4/3] bg-white">
        {producto.imagen ? (
          <Image
            src={urlFor(producto.imagen).width(800).height(600).fit("max").auto("format").url()}
            alt={producto.nombre}
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-contain p-3"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-neutral-50">
            <Icono className="size-20 text-neutral-600" strokeWidth={1.25} />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs text-neutral-500">{etiqueta}</p>
        <h3 className="mt-2 text-lg font-medium">{producto.nombre}</h3>
        {producto.descripcionCorta && (
          <p className="mt-2 text-sm text-neutral-500">{producto.descripcionCorta}</p>
        )}

        {/* Precio o botón de consulta (mt-auto alinea esta zona entre tarjetas) */}
        <div className="mt-auto pt-5">
          {producto.precio != null ? (
            <p className="text-2xl font-medium">
              {new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
                maximumFractionDigits: 0,
              }).format(producto.precio)}
            </p>
          ) : (
            <a
              href={urlConsulta}
              target={whatsapp ? "_blank" : undefined}
              rel={whatsapp ? "noopener noreferrer" : undefined}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-700"
            >
              <MessageCircle className="size-4" />
              Consultar precio
            </a>
          )}
          <p className="mt-2 text-center text-xs text-neutral-500">
            Disponibilidad a confirmar
          </p>
        </div>

        <Link
          href={`/catalogo/${producto.slug}`}
          className="mt-4 flex items-center justify-between border-t border-neutral-200 pt-4 text-sm text-orange-700 hover:text-orange-800"
        >
          <span>Ver producto</span>
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </article>
  );
}