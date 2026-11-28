import { cacheLife, cacheTag } from "next/cache";
import type { SanityImageSource } from "@sanity/image-url";
import { client } from "./client";
import type { CategoriaValue } from "./categorias";

export type Producto = {
  _id: string;
  nombre: string;
  slug: string;
  categoria: CategoriaValue;
  subcategoria?: string;
  badge?: string;
  descripcionCorta?: string;
  descripcion?: string;
  precio?: number;
  estado?: "nuevo" | "usado" | "reacondicionado";
  disponible?: boolean;
  imagen?: SanityImageSource;
};

const CAMPOS = `
  _id, nombre, "slug": slug.current, categoria, subcategoria, badge, descripcionCorta, descripcion,
  precio, estado, disponible, "imagen": imagenes[0]
`;

export async function getProductos(): Promise<Producto[]> {
  "use cache";
  cacheLife("minutes");
  cacheTag("productos");
  return client.fetch<Producto[]>(
    `*[_type == "producto" && defined(slug.current)] | order(coalesce(orden, 9999) asc, _createdAt desc){${CAMPOS}}`,
  );
}

export async function getProducto(slug: string): Promise<Producto | null> {
  "use cache";
  cacheLife("minutes");
  cacheTag("productos", `producto-${slug}`);
  return client.fetch<Producto | null>(
    `*[_type == "producto" && slug.current == $slug][0]{${CAMPOS}}`,
    { slug },
  );
}