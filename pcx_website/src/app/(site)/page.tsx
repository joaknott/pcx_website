import { client } from "@/sanity/lib/client";
import { serviciosQuery, trabajosDestacadosQuery } from "@/sanity/lib/queries";
import Hero from "@/components/home/Hero";
import Beneficios from "@/components/home/Beneficios";
import Servicios from "@/components/home/Servicios";
import BannerEquipate from "@/components/home/BannerEquipate";
import Trabajos from "@/components/home/Trabajos";
import CtaFinal from "@/components/home/CtaFinal";

export default async function Home() {
  const [servicios, trabajos] = await Promise.all([
    client.fetch(serviciosQuery, {}, { next: { revalidate: 60 } }),
    client.fetch(trabajosDestacadosQuery, {}, { next: { revalidate: 60 } }),
  ]);

  return (
    <>
      <Hero />
      <Beneficios />
      <Servicios servicios={servicios} />
      <BannerEquipate />
      <Trabajos trabajos={trabajos} />
      <CtaFinal />
    </>
  );
}