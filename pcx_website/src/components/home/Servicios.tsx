import { ArrowRight, Code2, Cpu, Monitor, Wrench, type LucideIcon } from "lucide-react";
import SectionLabel from "./SectionLabel";

type Servicio = {
  _id: string;
  nombre: string;
  icono?: string;
  descripcion?: string;
  etiqueta?: string;
};

// Las keys tienen que coincidir con el valor del campo "icono" en Sanity
const ICONOS: Record<string, LucideIcon> = {
  wrench: Wrench,
  code: Code2,
  cpu: Cpu,
  monitor: Monitor,
};

export default function Servicios({
  servicios,
  whatsapp,
}: {
  servicios: Servicio[];
  whatsapp: string;
}) {
  const urlPara = (nombre: string) => {
    const msg = `Hola! Quiero consultar por el servicio: ${nombre}.`;
    return `${whatsapp}${whatsapp.includes("?") ? "&" : "?"}text=${encodeURIComponent(msg)}`;
  };

  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel>Nuestros servicios</SectionLabel>
            <h2 className="mt-5 text-3xl font-medium tracking-tight text-white">
              Hardware y software, <span className="text-neutral-400">en un solo lugar.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-neutral-400 md:text-right">
            Reparación, mantenimiento y actualización para particulares y equipos de trabajo.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {servicios.map((s, i) => {
            const Icono = ICONOS[s.icono?.toLowerCase() ?? ""] ?? Wrench;
            return (
              <li
                key={s._id}
                className="flex flex-col rounded-lg border border-neutral-800 bg-neutral-900/60 p-6"
              >
                <div className="flex items-start justify-between">
                  <Icono className="size-6 text-neutral-300" strokeWidth={1.5} />
                  <span className="text-xs text-neutral-500">{String(i + 1).padStart(2, "0")}</span>
                </div>
                {s.etiqueta && (
                  <p className="mt-8 text-[10px] font-medium uppercase tracking-[0.15em] text-orange-500">
                    {s.etiqueta}
                  </p>
                )}
                <h3 className="mt-3 text-lg font-medium text-white">{s.nombre}</h3>
                {s.descripcion && (
                  <p className="mt-3 text-sm leading-6 text-neutral-400">{s.descripcion}</p>
                )}
                <div className="mt-auto pt-8">
                  <a
                    href={urlPara(s.nombre)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border-t border-neutral-800 pt-4 text-xs text-white transition hover:text-orange-400"
                  >
                    Consultar servicio <ArrowRight className="size-3.5" />
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}