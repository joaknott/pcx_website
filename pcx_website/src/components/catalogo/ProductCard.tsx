import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cpu, Code2, Keyboard, Monitor, Package } from "lucide-react";
import { CATEGORIAS } from "@/sanity/lib/categorias";
import { urlFor } from "@/sanity/lib/image";
import type { Producto } from "@/sanity/lib/catalogo";


// Ícono de respaldo cuando el producto no tiene imagen.
// Ajustá las keys a los `value` reales de tu CATEGORIAS.
const ICONOS: Record<string, typeof Package> = {
  computadoras: Monitor,
  perifericos: Keyboard,
  componentes: Cpu,
  software: Code2,
};

export default function ProductCard({ producto }: { producto: Producto }) {
  const categoria = CATEGORIAS.find((c) => c.value === producto.categoria)?.label;
  const Icono = ICONOS[producto.categoria] ?? Package;

  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white transition hover:shadow-md">
      <div className="relative aspect-[4/3] bg-neutral-50">
        {producto.imagen ? (
          <Image
            src={urlFor(producto.imagen).width(800).height(600).fit("crop").url()}
            alt={producto.nombre}
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Icono className="size-20 text-neutral-600" strokeWidth={1.25} />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs text-neutral-500">{categoria}</p>
        <h3 className="mt-2 text-lg font-medium">{producto.nombre}</h3>
        {producto.descripcionCorta && (
          <p className="mt-2 text-sm text-neutral-500">{producto.descripcionCorta}</p>
        )}

        <p className="mt-5 text-2xl font-medium">
          {producto.precio != null
            ? new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
                maximumFractionDigits: 0,
              }).format(producto.precio)
            : "Consultar precio"}
        </p>
        <p className="mt-2 text-xs text-neutral-500">Disponibilidad a confirmar</p>

        <Link
          href={`/catalogo/${producto.slug}`}
          className="mt-auto flex items-center justify-between border-t border-neutral-200 pt-4 text-sm text-orange-700 hover:text-orange-800"
        >
          <span className="mt-4 block">Ver producto</span>
          <ArrowRight className="mt-4 size-4" />
        </Link>
      </div>
    </article>
  );
}