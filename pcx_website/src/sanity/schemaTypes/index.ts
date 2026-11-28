import { type SchemaTypeDefinition } from 'sanity'
import { producto } from './producto'
import { trabajo } from './trabajo'
import { servicio } from './servicio'
import { configuracionSitio } from './configuracionSitio'
import categoria from './categoria'


export const schemaTypes = [producto, categoria, /* ...los demás */]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [producto, trabajo, servicio, configuracionSitio],
}