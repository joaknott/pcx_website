import { Suspense } from "react";
import { getWhatsAppUrl } from "@/sanity/lib/sitio";
import ReparacionForm from "@/components/reparaciones/ReparacionForm";
import TrabajosCarrusel from "@/components/reparaciones/TrabajosCarrusel";

export const metadata = {
  title: "Solicitar reparación | PCX Computación",
  description:
    "Contanos qué le pasa a tu equipo. Presupuesto antes de reparar, sin compromisos ni sorpresas.",
};

export default function ReparacionesPage() {
  return (
    <>
      <Suspense fallback={<div className="min-h-[60vh]" />}>
        <Contenido />
      </Suspense>
      <Suspense fallback={null}>
        <TrabajosCarrusel />
      </Suspense>
    </>
  );
}

async function Contenido() {
  const whatsapp = await getWhatsAppUrl();
  return <ReparacionForm whatsapp={whatsapp} />;
}