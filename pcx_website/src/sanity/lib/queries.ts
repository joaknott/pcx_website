import { client } from "./client";
import { groq } from "next-sanity";

export type ConfiguracionSitio = { whatsapp?: string } | null;

export const configuracionSitioQuery = groq`
  *[_type == "configuracionSitio"][0]{
    whatsapp, direccion, horarios, redes
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
  *[_type == "producto" && disponible == true] | order(_createdAt desc){
    _id, nombre, "slug": slug.current, categoria, badge, precio, estado,
    descripcion, "imagen": imagenes[0]
  }
`;