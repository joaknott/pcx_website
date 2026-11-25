"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type Item = {
  id: string;
  kind: "image" | "video";
  src: string;
  titulo: string;
  descripcion?: string;
};

export default function CarruselClient({ items }: { items: Item[] }) {
  const ref = useRef<HTMLDivElement>(null);

  const mover = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="relative mt-8">
      <div
        ref={ref}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((it) => (
          <figure
            key={it.id}
            className="w-[85%] shrink-0 snap-start sm:w-[48%] lg:w-[32%]"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-black">
              {it.kind === "image" ? (
                <Image
                  src={it.src}
                  alt={it.titulo}
                  fill
                  sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 85vw"
                  className="object-cover"
                />
              ) : (
                <video
                  src={it.src}
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                />
              )}
            </div>
            <figcaption className="mt-3">
              <p className="text-sm font-semibold">{it.titulo}</p>
              {it.descripcion && (
                <p className="mt-1 line-clamp-2 text-xs text-white/60">
                  {it.descripcion}
                </p>
              )}
            </figcaption>
          </figure>
        ))}
      </div>

      {items.length > 1 && (
        <div className="mt-6 hidden justify-end gap-2 md:flex">
          <button
            type="button"
            onClick={() => mover(-1)}
            aria-label="Anterior"
            className="rounded-full border border-white/20 p-2 hover:border-orange-500 hover:text-orange-500"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => mover(1)}
            aria-label="Siguiente"
            className="rounded-full border border-white/20 p-2 hover:border-orange-500 hover:text-orange-500"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      )}
    </div>
  );
}