import { MessageCircle, ShieldCheck, Wrench, Zap } from "lucide-react";

const items = [
  { icon: Wrench, titulo: "Soluciones de verdad", texto: "Vamos al origen del problema" },
  { icon: ShieldCheck, titulo: "Tu equipo, en buenas manos", texto: "Cuidamos lo que es importante para vos" },
  { icon: MessageCircle, titulo: "Hablás con un técnico", texto: "Atención directa, sin intermediarios" },
  { icon: Zap, titulo: "Volvé a estar conectado", texto: "Trabajamos para que sigas adelante" },
];

export default function Beneficios() {
  return (
    <section className="border-y border-white/10 bg-[#111]">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {items.map(({ icon: Icon, titulo, texto }, i) => (
          <div
            key={titulo}
            className={`flex items-center gap-4 lg:px-6 ${
              i === 0 ? "lg:pl-0" : "lg:border-l lg:border-white/10"
            }`}
          >
            <Icon size={28} className="shrink-0 text-orange-500" />
            <div>
              <p className="text-sm font-semibold text-white">{titulo}</p>
              <p className="mt-0.5 text-xs text-white/40">{texto}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}