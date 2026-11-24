import { cache } from "react";
import { client } from "@/sanity/lib/client";
import { configuracionSitioQuery } from "@/sanity/lib/queries";
import { buildWhatsAppUrl } from "./whatsapp";

export type ConfiguracionSitio = {
  whatsapp?: string;
  direccion?: string;
  horarios?: string[];
  redes?: { nombre: string; url: string }[];
} | null;

// cache(): si layout, footer y páginas lo llaman, se consulta una sola vez por request
export const getConfiguracionSitio = cache(async (): Promise<ConfiguracionSitio> => {
  return client.fetch(configuracionSitioQuery, {}, { next: { revalidate: 60 } });
});

export async function getWhatsAppUrl(mensaje?: string) {
    const config = await getConfiguracionSitio();
    return buildWhatsAppUrl(config?.whatsapp, mensaje);
  }