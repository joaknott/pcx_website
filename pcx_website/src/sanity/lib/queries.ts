import { client } from "./client";

export type ConfiguracionSitio = { whatsapp?: string } | null;

export function getConfiguracionSitio() {
  return client.fetch<ConfiguracionSitio>(
    `*[_type == "configuracionSitio"][0]{ whatsapp }`,
    {},
    { next: { revalidate: 60 } },
  );
}