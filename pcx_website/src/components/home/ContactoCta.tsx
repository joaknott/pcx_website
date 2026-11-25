import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "./SectionLabel";

export default function ContactoCta() {
  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 rounded-lg border border-neutral-800 bg-neutral-900/60 p-8 md:flex-row md:items-center md:px-10">
          <div>
            <SectionLabel>Contacto</SectionLabel>
            <h2 className="mt-4 text-2xl font-medium tracking-tight text-white">
              ¿Necesitás revisar tu equipo?
            </h2>
          </div>
          <Link
            href="/reparaciones"
            className="inline-flex h-12 items-center justify-center gap-3 rounded-md bg-orange-600 px-6 text-sm font-semibold text-white transition hover:bg-orange-500"
          >
            Solicitar reparación <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}