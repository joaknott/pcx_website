/*
 * This component is used to display the latest works/projects/cases.
 * And it dissapears when there are no works/projects/cases.
 * It is used to showcase the work of the company.
*/

import Image from "next/image";
import type { SanityImageSource } from "@sanity/image-url";
import { urlFor } from "@/sanity/lib/image";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

type Trabajo = {
  _id: string;
  titulo: string;
  tipo?: string;
  descripcion?: string;
  imagen?: SanityImageSource;
};

export default function Trabajos({ trabajos = [] }: { trabajos?: Trabajo[] }) {
  if (!trabajos.length) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-24">
      <Reveal>
        <Eyebrow>Nuestros trabajos</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          Armados y reparaciones. <span className="font-normal text-white/50">Resultados reales.</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {trabajos.map((t, i) => (
          <Reveal key={t._id} delay={i * 80}>
            <figure className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-[#141414]">
              {t.imagen && (
                <Image
                  src={urlFor(t.imagen).width(900).height(675).fit("crop").url()}
                  alt={t.titulo}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                {t.tipo && (
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-500">
                    {t.tipo}
                  </p>
                )}
                <p className="mt-1 font-semibold text-white">{t.titulo}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}