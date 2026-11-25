import { getTrabajos } from "@/sanity/lib/trabajos";
import { urlFor } from "@/sanity/lib/image";
import CarruselClient, { type Item } from "./CarruselClient";

export default async function TrabajosCarrusel() {
  const trabajos = await getTrabajos();

  const items: Item[] = trabajos.flatMap((t) => [
    ...(t.imagenes ?? [])
    .filter((img) => img?.asset)
    .map((img) => ({
      id: `${t._id}-${img._key}`,
      kind: "image" as const,
      src: urlFor(img).width(900).height(675).fit("crop").auto("format").url(),
      titulo: t.titulo,
      descripcion: t.descripcion,
    })),
    ...(t.videos ?? []).map((url, i) => ({
      id: `${t._id}-v${i}`,
      kind: "video" as const,
      src: url,
      titulo: t.titulo,
      descripcion: t.descripcion,
    })),
  ]);

  if (items.length === 0) return null;

  return (
    <section className="border-t border-white/10 bg-[#0a0a0a] py-16">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-xs uppercase tracking-[0.25em] text-white/60">
          <span className="mr-3 inline-block h-px w-6 bg-orange-500 align-middle" />
          Nuestros trabajos
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Así dejamos <span className="text-orange-500">tu equipo.</span>
        </h2>
        <CarruselClient items={items} />
      </div>
    </section>
  );
}