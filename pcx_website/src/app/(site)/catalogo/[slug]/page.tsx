import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { getProducto } from "@/sanity/lib/catalogo";
import { CATEGORIAS } from "@/sanity/lib/categorias";
import { getWhatsAppUrl } from "@/sanity/lib/sitio";
import { urlFor } from "@/sanity/lib/image";


/* Esta cagada no funciona nose porke, hay que solucionar */
export default function ProductoPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <div className="bg-neutral-100 text-neutral-900">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          href="/catalogo"
          className="mb-8 inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900"
        >
          <ArrowLeft className="size-4" /> Volver al catálogo
        </Link>
        <Suspense fallback={<div className="min-h-[50vh]" />}>
          <Contenido params={params} />
        </Suspense>
      </div>
    </div>
  );
}

async function Contenido({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [producto, base] = await Promise.all([getProducto(slug), getWhatsAppUrl()]);
  if (!producto) notFound();

  const categoria = CATEGORIAS.find((c) => c.value === producto.categoria)?.label;
  const mensaje = `Hola! Quiero consultar por: ${producto.nombre}. ¿Me pasan precio y disponibilidad?`;
  const url = `${base}${base.includes("?") ? "&" : "?"}text=${encodeURIComponent(mensaje)}`;
  const descripcion = producto.descripcion ?? producto.descripcionCorta;

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-neutral-200 bg-white">
        {producto.imagen ? (
          <Image
            src={urlFor(producto.imagen).width(1000).height(750).fit("crop").url()}
            alt={producto.nombre}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        ) : null}
      </div>

      <div>
        <p className="text-xs text-neutral-500">{categoria}</p>
        <h1 className="mt-2 text-3xl font-medium">{producto.nombre}</h1>

        {producto.estado && (
          <span className="mt-3 inline-block rounded bg-neutral-200 px-2 py-1 text-xs capitalize text-neutral-700">
            {producto.estado}
          </span>
        )}
        {descripcion && <p className="mt-4 whitespace-pre-line text-neutral-600">{descripcion}</p>}

        <p className="mt-6 text-2xl font-medium">
          {producto.precio != null
            ? new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
                maximumFractionDigits: 0,
              }).format(producto.precio)
            : "Consultar precio"}
        </p>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700"
        >
          <MessageCircle className="size-5" /> Consultar producto
        </a>
      </div>
    </div>
  );
}