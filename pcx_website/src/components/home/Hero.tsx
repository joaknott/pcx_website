import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Plus, ShieldCheck } from "lucide-react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0a0a0a]">
      <Image
        src="/hero-pc.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-right"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent lg:via-[#0a0a0a]/60" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

      <div className="mx-auto flex min-h-[640px] max-w-6xl flex-col justify-center px-4 py-20 lg:min-h-[800px]">
        <Reveal>
          <Eyebrow>Servicio técnico &amp; tecnología</Eyebrow>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-8 font-display text-[clamp(3.5rem,11vw,8rem)] font-bold italic uppercase leading-[0.9] text-white">
            Tu PC.
            <br />
            En su mejor
            <br />
            <span className="text-orange-500">versión.</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 max-w-md text-base leading-relaxed text-white/70">
            Reparamos, optimizamos y potenciamos tu equipo.
            <br />
            Soluciones reales para que nada te frene.
          </p>
        </Reveal>

        <Reveal delay={300}>
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

          <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/50">
            <ShieldCheck size={16} className="text-orange-500" />
            Diagnóstico claro <span>·</span> Atención personalizada <span>·</span> Trabajo garantizado
          </p>
        </Reveal>
      </div>

      {/* Detalle inferior derecho */}
      <div className="pointer-events-none absolute inset-x-0 bottom-8 hidden lg:block">
        <div className="mx-auto flex max-w-6xl justify-end px-4">
          <div className="flex items-center gap-6 text-xs">
            <div className="flex items-center gap-3">
              <Plus size={18} className="text-orange-500" />
              <div>
                <p className="font-semibold uppercase tracking-widest text-white">
                  Rendimiento sin límites
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                  Hardware · Software · Pasión
                </p>
              </div>
            </div>
            <span className="border-l border-white/15 pl-6 text-white/50">PCX / 01</span>
          </div>
        </div>
      </div>

      <p className="absolute right-4 top-1/2 hidden -translate-y-1/2 text-[10px] uppercase tracking-[0.3em] text-white/30 [writing-mode:vertical-rl] xl:block">
        Más que tecnología. Tu próximo nivel.
      </p>
    </section>
  );
}