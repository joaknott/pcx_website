import { type SchemaTypeDefinition } from 'sanity'
import { producto } from './producto'
import { trabajo } from './trabajo'
import { servicio } from './servicio'
import { configuracionSitio } from './configuracionSitio'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [producto, trabajo, servicio, configuracionSitio],
}