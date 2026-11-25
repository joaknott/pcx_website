import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import type { HeroMedia } from "@/sanity/lib/hero";
import SectionLabel from "./SectionLabel";

export default function Hero({ media }: { media: HeroMedia }) {
  return (
    <section className="relative overflow-hidden border-b border-neutral-800 bg-neutral-950">
      {/* Media: fondo en mobile, mitad derecha en desktop */}
      <div className="absolute inset-0 lg:left-auto lg:w-[55%]">
        {media.tipo === "video" ? (
          <video
            src={media.url}
            poster={media.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          />
        ) : (
          <Image
            src={media.url}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-neutral-950/75 lg:hidden" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-neutral-950 via-neutral-950/50 to-transparent lg:block" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-xl">
          <SectionLabel>PCX Computación</SectionLabel>
          <h1 className="mt-6 text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Servicio técnico para tu computadora.
          </h1>
          <p className="mt-6 text-sm leading-7 text-neutral-300 sm:text-base">
            Reparación y mantenimiento de PCs y notebooks.
            <br />
            Hardware, software y atención personalizada.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/reparaciones"
              className="inline-flex h-12 items-center gap-3 rounded-md bg-orange-600 px-6 text-sm font-semibold text-white transition hover:bg-orange-500"
            >
              Solicitar reparación <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/catalogo"
              className="inline-flex h-12 items-center gap-3 rounded-md border border-neutral-700 px-6 text-sm font-semibold text-white transition hover:border-neutral-500"
            >
              Ver catálogo <ArrowRight className="size-4" />
            </Link>
          </div>

          <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-400">
            <ShieldCheck className="size-4" />
            Diagnóstico claro <span>·</span> Atención personalizada <span>·</span> Presupuesto previo
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 hidden border-l border-neutral-700 pl-4 text-xs lg:block">
        <p className="text-neutral-200">PCs de escritorio y notebooks</p>
        <p className="mt-1 text-[10px] text-neutral-500">Reparación · Mantenimiento · Actualización</p>
      </div>
    </section>
  );
}