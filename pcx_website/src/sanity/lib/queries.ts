import { client } from "./client";
import { groq } from "next-sanity";

export type ConfiguracionSitio = { whatsapp?: string } | null;

export const configuracionSitioQuery = groq`
  *[_type == "configuracionSitio"][0]{
    whatsapp,
    direccion,
    horarios,
    instagram,
    facebook,
    heroTitulo,
    heroSubtitulo,
    heroImagen,
    "heroVideoUrl": heroVideo.asset->url
  }
`;

// Function to be used at day 3
export const serviciosQuery = groq`
  *[_type == "servicio"] | order(_createdAt asc){ _id, etiqueta, nombre, icono, descripcion }
`;

// Function to be used at day 3
export const trabajosDestacadosQuery = groq`
  *[_type == "trabajo" && destacado == true] | order(_createdAt desc)[0...6]{
    _id, titulo, tipo, descripcion, "imagen": imagenes[0]
  }
`;
// Function to be used at day 3
export const productosQuery = groq`
  *[_type == "producto" && disponible == true] | order(orden asc, _createdAt desc){
    _id, nombre, "slug": slug.current, categoria, subcategoria, badge, precio, estado,
    descripcionCorta, descripcion, descripcionDetallada, especificaciones,
    "imagen": imagenes[0],
    imagenes
  }
`;
export const conteosCatalogoQuery = groq`
{
  "total": count(*[_type == "producto" && disponible == true]),
  "categorias": {
    "computadoras": count(*[_type == "producto" && disponible == true && categoria == "computadoras"]),
    "perifericos": count(*[_type == "producto" && disponible == true && categoria == "perifericos"]),
    "componentes": count(*[_type == "producto" && disponible == true && categoria == "componentes"]),
    "software": count(*[_type == "producto" && disponible == true && categoria == "software"])
  },
  "subcategorias": {
    "teclados": count(*[_type == "producto" && disponible == true && subcategoria == "teclados"]),
    "mouses": count(*[_type == "producto" && disponible == true && subcategoria == "mouses"]),
    "combos": count(*[_type == "producto" && disponible == true && subcategoria == "combos"]),
    "auriculares": count(*[_type == "producto" && disponible == true && subcategoria == "auriculares"]),
    "mousepads": count(*[_type == "producto" && disponible == true && subcategoria == "mousepads"])
  }
}
`;
export const productosFiltradosQuery = groq`
  *[_type == "producto" && disponible == true
    && (!defined($categoria) || categoria == $categoria)
    && (!defined($sub) || subcategoria == $sub)
  ] | order(orden asc, _createdAt desc){
    _id, nombre, "slug": slug.current, categoria, subcategoria, badge, precio, estado,
    descripcionCorta, "imagen": imagenes[0]
  }
`;