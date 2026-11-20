import { defineField, defineType } from 'sanity'

export const configuracionSitio = defineType({
  name: 'configuracionSitio',
  title: 'Configuración del sitio',
  type: 'document',
  fields: [
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp (solo números, con código de país)',
      type: 'string',
      description: 'Ej: 5491112345678',
      validation: (r) => r.required().regex(/^\d{10,15}$/, { name: 'solo números' }),
    }),
    defineField({ name: 'direccion', title: 'Dirección', type: 'string' }),
    defineField({ name: 'horarios', title: 'Horarios', type: 'text', rows: 3 }),
    defineField({ name: 'instagram', title: 'Instagram (URL)', type: 'url' }),
    defineField({ name: 'facebook', title: 'Facebook (URL)', type: 'url' }),
    defineField({ name: 'heroTitulo', title: 'Título del hero', type: 'string' }),
    defineField({ name: 'heroSubtitulo', title: 'Subtítulo del hero', type: 'text', rows: 2 }),
  ],
  preview: { prepare: () => ({ title: 'Configuración del sitio' }) },
})