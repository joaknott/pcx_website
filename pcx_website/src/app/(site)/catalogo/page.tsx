import { Suspense } from "react";
import { getProductos } from "@/sanity/lib/catalogo";
import { getWhatsAppUrl } from "@/sanity/lib/sitio";
import CatalogoClient from "@/components/catalogo/CatalogoClient";

export const metadata = {
  title: "Catálogo | PCX Computación",
  description: "Computadoras, periféricos, componentes y software.",
};

export default function CatalogoPage() {
  return (
    <Suspense fallback={<div className="min-h-[50vh]" />}>
      <Contenido />
    </Suspense>
  );
}

async function Contenido() {
  const [productos, whatsapp] = await Promise.all([
    getProductos(),
    getWhatsAppUrl(),
  ]);
  return <CatalogoClient productos={productos} whatsapp={whatsapp} />;
}