import { cacheLife, cacheTag } from "next/cache";
import type { SanityImageSource } from "@sanity/image-url";
import { client } from "./client";

export type Trabajo = {
  _id: string;
  titulo: string;
  tipo?: string;
  descripcion?: string;
  imagenes?: (SanityImageSource & { _key: string; asset?: unknown })[];
  videos?: string[];
};

export async function getTrabajos(): Promise<Trabajo[]> {
  "use cache";
  cacheLife("minutes");
  cacheTag("trabajos");
  return client.fetch<Trabajo[]>(
    `*[_type == "trabajo"] | order(coalesce(destacado, false) desc, fecha desc)[0...12]{
      _id, titulo, tipo, descripcion,
      "imagenes": imagenes[defined(asset)],
      "videos": videos[defined(asset)].asset->url
    }`,
  );
}