export const CATEGORIAS = [
  { value: "computadoras", label: "Computadoras" },
  { value: "perifericos", label: "Periféricos" },
  { value: "componentes", label: "Componentes" },
  { value: "cables", label: "Cables y adaptadores" },
  { value: "software", label: "Software y sistemas" },
];

export type CategoriaValue = (typeof CATEGORIAS)[number]["value"];

export const SUBCATEGORIAS: Record<string, { value: string; label: string }[]> = {
  computadoras: [
    { value: "escritorio", label: "De escritorio" },
    { value: "notebooks", label: "Notebooks" },
    { value: "armadas", label: "Armadas a medida" },
  ],
  perifericos: [
    { value: "teclados", label: "Teclados" },
    { value: "mouses", label: "Mouses" },
    { value: "combos", label: "Combos teclado + mouse" },
    { value: "auriculares", label: "Auriculares" },
    { value: "mousepads", label: "Mousepads" },
    { value: "webcams", label: "Webcams" },
    { value: "parlantes", label: "Parlantes" },
  ],
  componentes: [
    { value: "procesadores", label: "Procesadores" },
    { value: "motherboards", label: "Motherboards" },
    { value: "memorias", label: "Memorias RAM" },
    { value: "almacenamiento", label: "Discos y SSD" },
    { value: "placas-video", label: "Placas de video" },
    { value: "fuentes", label: "Fuentes" },
    { value: "gabinetes", label: "Gabinetes" },
    { value: "refrigeracion", label: "Refrigeración" },
  ],
  cables: [
    { value: "cables-video", label: "Cables de video" },
    { value: "cables-usb", label: "Cables USB y datos" },
    { value: "cables-red", label: "Cables de red" },
    { value: "adaptadores", label: "Adaptadores" },
    { value: "cables-energia", label: "Cables de energía" },
  ],
  // software: sin subcategorías por ahora, no hace falta ninguna entrada
};