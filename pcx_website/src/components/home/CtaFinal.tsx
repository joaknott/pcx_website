/*
 * This component is used to display a final call to action button.
 * It is used to encourage the user to contact the company.
*/

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function CtaFinal() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-28 pt-8">
      <Reveal>
        <Eyebrow>Simple. Claro. PCX.</Eyebrow>
        <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
          Volvé a disfrutar <span className="font-normal text-white/50">tu equipo.</span>
        </h2>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/reparaciones"
            className="flex items-center gap-8 bg-orange-500 px-6 py-4 text-sm font-semibold text-black transition hover:bg-orange-400"
          >
            Solicitar reparación <ArrowRight size={18} />
          </Link>
          <Link
            href="/catalogo"
            className="flex items-center gap-8 border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:border-orange-500/60"
          >
            Explorar catálogo <ArrowUpRight size={18} />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}