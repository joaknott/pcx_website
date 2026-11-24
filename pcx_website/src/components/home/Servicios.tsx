import Link from "next/link";
import { ArrowUpRight, Code2, Cpu, Monitor, Wrench, type LucideIcon } from "lucide-react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

type Servicio = {
  _id: string;
  etiqueta?: string;
  nombre: string;
  icono?: string;
  descripcion?: string;
};

const ICONOS: Record<string, LucideIcon> = {
  wrench: Wrench,
  code: Code2,
  cpu: Cpu,
  monitor: Monitor,
};

const RESPALDO: Servicio[] = [
  { _id: "1", etiqueta: "Hardware", nombre: "Reparación de equipos", icono: "wrench", descripcion: "Encontramos la falla y la solucionamos. Notebooks y PCs, en las mejores manos." },
  { _id: "2", etiqueta: "Software", nombre: "Software y sistemas", icono: "code", descripcion: "Instalación, optimización y eliminación de virus. Todo funcionando como debería." },
  { _id: "3", etiqueta: "Upgrades", nombre: "Potenciá tu PC", icono: "cpu", descripcion: "Más velocidad, más capacidad, más posibilidades. Actualizá tu equipo con nosotros." },
  { _id: "4", etiqueta: "PC a medida", nombre: "Armado a tu medida", icono: "monitor", descripcion: "Para jugar, trabajar o crear. Diseñamos la computadora que realmente necesitás." },
];

export default function Servicios({ servicios = [] }: { servicios?: Servicio[] }) {
  const items = servicios.length ? servicios : RESPALDO;

  return (
    <section className="mx-auto max-w-6xl px-4 py-24">
      <Reveal>
        <Eyebrow>Lo que hacemos</Eyebrow>
        <div className="mt-4 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Tu tecnología. <span className="font-normal text-white/50">Nuestra especialidad.</span>
          </h2>
          <p className="max-w-xs text-sm leading-relaxed text-white/50 md:text-right">
            Desde esa falla que te complica el día hasta el equipo que siempre quisiste.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((s, i) => {
          const Icon = ICONOS[s.icono ?? ""] ?? Wrench;
          return (
            <Reveal key={s._id} delay={i * 80} className="h-full">
              {/* Las 2 primeras llevan a reparación, las otras 2 al catálogo */}
              <Link
                href={i < 2 ? "/reparaciones" : "/catalogo"}
                className="group flex h-full flex-col rounded-xl border border-white/10 bg-[#141414] p-7 transition hover:border-orange-500/50"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-500">
                    <Icon size={26} />
                  </span>
                  <span className="font-display text-3xl text-white/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {s.etiqueta && (
                  <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-500">
                    {s.etiqueta}
                  </p>
                )}
                <h3 className="mt-2 text-xl font-semibold text-white">{s.nombre}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/50">{s.descripcion}</p>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white">
                  Conocé más
                  <ArrowUpRight
                    size={16}
                    className="text-orange-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}