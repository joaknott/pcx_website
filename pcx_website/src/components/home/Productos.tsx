import Link from "next/link";
import { ArrowRight, Cpu, Keyboard, Monitor } from "lucide-react";
import SectionLabel from "./SectionLabel";

const ITEMS = [
  { icon: Monitor, titulo: "Computadoras", texto: "Para trabajar, estudiar y jugar" },
  { icon: Keyboard, titulo: "Periféricos", texto: "Accesorios para tu espacio de trabajo" },
  { icon: Cpu, titulo: "Componentes", texto: "Actualizaciones para tu equipo" },
];

export default function Productos() {
  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 rounded-lg border border-neutral-800 bg-neutral-900/60 p-8 md:p-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <SectionLabel>Productos</SectionLabel>
            <h2 className="mt-5 text-3xl font-medium leading-tight tracking-tight text-white">
              Equipos y componentes <br /> para lo que necesitás.
            </h2>
            <p className="mt-5 text-sm leading-6 text-neutral-400">
              Computadoras, periféricos y componentes.
              <br />
              Te asesoramos para elegir una opción adecuada a tu uso.
            </p>
            <Link
              href="/catalogo"
              className="mt-8 inline-flex h-12 items-center gap-3 rounded-md bg-orange-600 px-6 text-sm font-semibold text-white transition hover:bg-orange-500"
            >
              Ver productos <ArrowRight className="size-4" />
            </Link>
          </div>

          <ul className="divide-y divide-neutral-800 lg:border-l lg:border-neutral-800 lg:pl-10">
            {ITEMS.map(({ icon: Icono, titulo, texto }) => (
              <li key={titulo} className="flex items-center gap-4 py-5 first:pt-0 last:pb-0">
                <Icono className="size-6 shrink-0 text-neutral-400" strokeWidth={1.5} />
                <div>
                  <p className="text-sm text-white">{titulo}</p>
                  <p className="mt-1 text-xs text-neutral-500">{texto}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}