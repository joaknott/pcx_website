import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenido')
    .items([
      S.listItem()
        .title('Configuración del sitio')
        .id('configuracionSitio')
        .child(S.document().schemaType('configuracionSitio').documentId('configuracionSitio')),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => item.getId() !== 'configuracionSitio'),
    ])