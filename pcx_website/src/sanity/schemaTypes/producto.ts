import { defineField, defineType } from 'sanity'

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
        list: [
          { title: 'Computadoras', value: 'computadoras' },
          { title: 'Periféricos', value: 'perifericos' },
          { title: 'Componentes', value: 'componentes' },
          { title: 'Software y sistemas', value: 'software' },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'badge',
      title: 'Etiqueta (opcional)',
      type: 'string',
      description: 'Ej: A TU MEDIDA, GAMING, UPGRADE',
    }),
    defineField({ name: 'descripcionCorta', title: 'Descripción corta', type: 'string', validation: (r) => r.max(120) }),
    defineField({ name: 'descripcion', title: 'Descripción completa', type: 'text', rows: 4 }),
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