import { Suspense } from "react";
import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { getConfiguracionSitio } from "@/sanity/lib/sitio";
import { buildWhatsAppUrl } from "@/sanity/lib/whatsapp";
import Footer from "@/components/layout/Footer";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const config = await getConfiguracionSitio();
  const whatsappUrl = buildWhatsAppUrl(
    config?.whatsapp,
    "Hola! Quisiera hacerles una consulta.",
  );

  return (
    <>
      <Topbar />
      <Suspense fallback={<div className="h-16 border-b border-neutral-800" />}>
        <Navbar whatsappUrl={whatsappUrl} />
      </Suspense>
      <main className="flex-1">{children}</main>
      <WhatsAppFloat href={whatsappUrl} />
      <Footer />
    </>
  );
}