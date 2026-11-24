export const CATEGORIAS = [
    { value: "computadoras", label: "Computadoras" },
    { value: "perifericos", label: "Periféricos" },
    { value: "componentes", label: "Componentes" },
    { value: "software", label: "Software y sistemas" },
  ] as const;
  
  export type CategoriaValue = (typeof CATEGORIAS)[number]["value"];