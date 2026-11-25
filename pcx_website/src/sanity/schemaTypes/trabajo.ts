import { defineArrayMember, defineField, defineType } from 'sanity'

export const trabajo = defineType({
  name: 'trabajo',
  title: 'Trabajo realizado',
  type: 'document',
  fields: [
    defineField({ name: 'titulo', title: 'Título', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'tipo',
      title: 'Tipo',
      type: 'string',
      options: {
        list: [
          { title: 'Reparación', value: 'reparacion' },
          { title: 'Armado', value: 'armado' },
          { title: 'Mantenimiento', value: 'mantenimiento' },
          { title: 'Software', value: 'software' },
        ],
      },
    }),
    
    defineField({ name: 'descripcion', title: 'Descripción', type: 'text', rows: 3 }),
    defineField({
      name: 'imagenes',
      title: 'Imágenes',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({ name: 'destacado', title: 'Mostrar en el inicio', type: 'boolean', initialValue: false }),
    defineField({ name: 'fecha', title: 'Fecha', type: 'date' }),
    defineField({
      name: "videos",
      title: "Videos",
      type: "array",
      of: [
        defineArrayMember({
          type: "file",
          options: { accept: "video/mp4,video/webm" },
        }),
      ],
    }),
  ],
  preview: { select: { title: 'titulo', subtitle: 'tipo', media: 'imagenes.0' } },
})