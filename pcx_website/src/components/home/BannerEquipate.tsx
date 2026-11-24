/*
 * This component is used to display a banner with a title, a description and a button.
 * It is used to promote the catalog page.
*/

import Link from "next/link";
import { ArrowRight, Cpu } from "lucide-react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function BannerEquipate() {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <Reveal>
        <div className="grid items-center gap-10 rounded-xl border border-white/10 bg-[#141414] p-8 md:grid-cols-2 md:p-14">
          <div>
            <Eyebrow>Equipate con PCX</Eyebrow>
            <h2 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              El próximo upgrade empieza acá<span className="text-orange-500">.</span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-white/60">
              Computadoras, periféricos y componentes.
              <br />
              Encontrá lo que necesitás con asesoramiento de verdad.
            </p>
            <Link
              href="/catalogo"
              className="mt-8 inline-flex items-center gap-6 bg-orange-500 px-6 py-4 text-sm font-semibold text-black transition hover:bg-orange-400"
            >
              Descubrir el catálogo <ArrowRight size={18} />
            </Link>
          </div>

          <div className="hidden flex-col items-center md:flex">
            <div className="flex h-64 w-64 items-center justify-center rounded-full border border-orange-500/20 bg-[radial-gradient(circle,rgba(249,115,22,0.15),transparent_65%)]">
              <div className="flex h-48 w-48 items-center justify-center rounded-full border border-dashed border-orange-500/20">
                <Cpu size={96} strokeWidth={1.25} className="text-orange-500" />
              </div>
            </div>
            <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-white/25">
              Built for your next level
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}