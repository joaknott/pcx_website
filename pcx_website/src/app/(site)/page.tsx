import { client } from "@/sanity/lib/client";
import { serviciosQuery } from "@/sanity/lib/queries";
import { getWhatsAppUrl } from "@/sanity/lib/sitio";
import { getHeroMedia } from "@/sanity/lib/hero";
import Hero from "@/components/home/Hero";
import Beneficios from "@/components/home/Beneficios";
import Servicios from "@/components/home/Servicios";
import Productos from "@/components/home/Productos";
import ComoTrabajamos from "@/components/home/ComoTrabajamos";
import ContactoCta from "@/components/home/ContactoCta";

export default async function Home() {
  const [servicios, whatsapp, media] = await Promise.all([
    client.fetch(serviciosQuery, {}, { next: { revalidate: 60 } }),
    getWhatsAppUrl(),
    getHeroMedia(),
  ]);

  return (
    <>
      <Hero media={media} />
      <Beneficios />
      <Servicios servicios={servicios} whatsapp={whatsapp} />
      <Productos />
      <ComoTrabajamos />
      <ContactoCta />
    </>
  );
}