import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'categoria',
  title: 'Categoría',
  type: 'document',
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'nombre', maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'padre',
      title: 'Categoría padre',
      description: 'Dejalo vacío si es una categoría principal (ej: Periféricos)',
      type: 'reference',
      to: [{ type: 'categoria' }],
    }),
    defineField({
      name: 'orden',
      title: 'Orden',
      type: 'number',
    }),
  ],
  preview: {
    select: { title: 'nombre', padre: 'padre.nombre' },
    prepare: ({ title, padre }) => ({
      title: padre ? `${padre} → ${title}` : title,
    }),
  },
})