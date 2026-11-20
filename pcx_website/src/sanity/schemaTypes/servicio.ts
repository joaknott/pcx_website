import { defineField, defineType } from 'sanity'

export const servicio = defineType({
  name: 'servicio',
  title: 'Servicio',
  type: 'document',
  fields: [
    defineField({ name: 'nombre', title: 'Nombre', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'icono',
      title: 'Ícono',
      type: 'string',
      description: 'Nombre del ícono (ej: wrench, cpu, shield). Lo conectamos en el código.',
    }),
    defineField({ name: 'descripcion', title: 'Descripción', type: 'text', rows: 3 }),
    defineField({ name: 'orden', title: 'Orden', type: 'number' }),
  ],
  preview: { select: { title: 'nombre', subtitle: 'descripcion' } },
})