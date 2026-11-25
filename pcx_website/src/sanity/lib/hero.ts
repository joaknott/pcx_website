import { client } from "./client";
import { urlFor } from "./image";

export type HeroMedia =
  | { tipo: "video"; url: string; poster?: string }
  | { tipo: "imagen"; url: string };

export async function getHeroMedia(): Promise<HeroMedia> {
  const data = await client.fetch<{
    video?: string;
    imagen?: Parameters<typeof urlFor>[0];
  } | null>(
    `*[_type == "configuracionSitio"][0]{ "video": heroVideo.asset->url, "imagen": heroImagen }`,
    {},
    { next: { revalidate: 60 } },
  );

  const imagen = data?.imagen ? urlFor(data.imagen).width(1800).url() : undefined;

  if (data?.video) return { tipo: "video", url: data.video, poster: imagen };
  return { tipo: "imagen", url: imagen ?? "/hero-pc.png" };
}