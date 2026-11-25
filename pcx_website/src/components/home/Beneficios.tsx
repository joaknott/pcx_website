import { MessageCircle, ShieldCheck, Wrench, Zap } from "lucide-react";

const ITEMS = [
  { icon: Wrench, titulo: "Diagnóstico técnico", texto: "Identificamos el origen de la falla" },
  { icon: ShieldCheck, titulo: "Presupuesto previo", texto: "Decidís antes de realizar la reparación" },
  { icon: MessageCircle, titulo: "Atención directa", texto: "Hablás con quien revisa tu equipo" },
  { icon: Zap, titulo: "Asesoramiento", texto: "Opciones según tu uso y presupuesto" },
];

export default function Beneficios() {
  return (
    <section className="border-b border-neutral-800 bg-neutral-900/40">
      <ul className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-0 lg:px-8 lg:divide-x lg:divide-neutral-800">
        {ITEMS.map(({ icon: Icono, titulo, texto }) => (
          <li key={titulo} className="flex items-start gap-4 lg:px-6 lg:first:pl-0">
            <Icono className="mt-0.5 size-5 shrink-0 text-neutral-400" strokeWidth={1.5} />
            <div>
              <p className="text-xs font-semibold text-white">{titulo}</p>
              <p className="mt-1 text-[11px] text-neutral-500">{texto}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}