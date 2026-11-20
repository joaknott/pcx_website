// src/app/(site)/layout.tsx
import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { getConfiguracionSitio } from "@/sanity/lib/queries";
import { buildWhatsAppUrl } from "@/sanity/lib/whatsapp";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const config = await getConfiguracionSitio();
  const whatsappUrl = buildWhatsAppUrl(
    config?.whatsapp,
    "Hola! Quisiera hacerles una consulta.",
  );

  return (
    <>
      <Topbar />
      <Navbar whatsappUrl={whatsappUrl} />
      <main className="flex-1">{children}</main>
      <WhatsAppFloat href={whatsappUrl} />
    </>
  );
}