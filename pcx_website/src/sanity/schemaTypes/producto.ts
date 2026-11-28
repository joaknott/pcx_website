import { defineField, defineType } from 'sanity'
import { CATEGORIAS, SUBCATEGORIAS } from "../lib/categorias";

const opcionesSub = Object.entries(SUBCATEGORIAS).flatMap(([cat, subs]) =>
  subs.map((s) => ({
    title: `${CATEGORIAS.find((c) => c.value === cat)?.label} → ${s.label}`,
    value: s.value,
  }))
);

export const producto = defineType({
  name: 'producto',
  title: 'Producto',
  type: 'document',
  fields: [
    defineField({ name: 'nombre', title: 'Nombre', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'nombre', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'categoria',
      title: 'Categoría',
      type: 'string',
      options: {
        list: CATEGORIAS.map((c) => ({ title: c.label, value: c.value })),
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'subcategoria',
      title: 'Subcategoría',
      type: 'string',
      options: { list: opcionesSub },
      hidden: ({ document }) => !SUBCATEGORIAS[document?.categoria as string],
      validation: (r) =>
        r.custom((value, context) => {
          const cat = context.document?.categoria as string | undefined;
          const subs = cat ? SUBCATEGORIAS[cat] : undefined;
          if (!subs) return true; 
          if (!value) return 'Elegí una subcategoría';
          if (!subs.some((s) => s.value === value))
            return 'Esa subcategoría no pertenece a la categoría elegida';
          return true;
        }),
    }),
    defineField({
      name: 'badge',
      title: 'Etiqueta (opcional)',
      type: 'string',
      description: 'Ej: A TU MEDIDA, GAMING, UPGRADE',
    }),
    defineField({ name: 'descripcionCorta', title: 'Descripción corta', type: 'string', validation: (r) => r.max(120) }),
    defineField({ name: 'descripcion', title: 'Descripción completa', type: 'text', rows: 4 }),

    // NUEVOS
    defineField({
      name: 'descripcionDetallada',
      title: 'Descripción detallada (popup)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'especificaciones',
      title: 'Especificaciones',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Característica', type: 'string' }),
            defineField({ name: 'valor', title: 'Valor', type: 'string' }),
          ],
          preview: { select: { title: 'label', subtitle: 'valor' } },
        },
      ],
    }),

    defineField({ name: 'precio', title: 'Precio (opcional)', type: 'number' }),
    defineField({
      name: 'estado',
      title: 'Estado',
      type: 'string',
      options: {
        list: [
          { title: 'Nuevo', value: 'nuevo' },
          { title: 'Usado', value: 'usado' },
          { title: 'Reacondicionado', value: 'reacondicionado' },
        ],
      },
    }),
    defineField({
      name: 'imagenes',
      title: 'Imágenes',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({ name: 'disponible', title: 'Disponible', type: 'boolean', initialValue: true }),
    defineField({ name: 'orden', title: 'Orden (menor aparece primero)', type: 'number' }),
  ],
  preview: { select: { title: 'nombre', subtitle: 'categoria', media: 'imagenes.0' } },
})