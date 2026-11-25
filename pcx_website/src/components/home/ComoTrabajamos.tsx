import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "./SectionLabel";

const PASOS = [
  {
    titulo: "Contanos qué pasa",
    texto: "Completá la solicitud con los datos de tu equipo y el problema.",
  },
  {
    titulo: "Diagnóstico y presupuesto",
    texto: "Revisamos el equipo y te informamos qué necesita y el costo de la reparación.",
  },
  {
    titulo: "Reparación y entrega",
    texto: "Una vez aprobado el presupuesto, realizamos el trabajo y coordinamos la entrega.",
  },
];

export default function ComoTrabajamos() {
  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <SectionLabel>Cómo trabajamos</SectionLabel>
            <h2 className="mt-5 text-3xl font-medium tracking-tight text-white">
              De la consulta <span className="text-neutral-400">a la reparación.</span>
            </h2>
          </div>
          <Link
            href="/reparaciones"
            className="inline-flex items-center gap-3 text-xs text-orange-500 transition hover:text-orange-400"
          >
            Solicitar diagnóstico <ArrowRight className="size-4" />
          </Link>
        </div>

        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {PASOS.map((p, i) => (
            <li key={p.titulo} className="border-t border-neutral-800 pt-6">
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-neutral-500">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-sm font-medium text-white">{p.titulo}</h3>
              </div>
              <p className="mt-4 pl-8 text-sm leading-6 text-neutral-400">{p.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}