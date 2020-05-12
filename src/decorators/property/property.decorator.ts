import 'reflect-metadata'
import { Property } from './property.type'
import { InjectableEnum } from '../../enum/injectable.enum'
import { getProperties } from '../../utils/get-properties/get-properties.utils'

export function Property () {
  return function (target: any, key: string) {
    const fields: Property[] = getProperties(target)
    const value = Reflect.getMetadata('design:type', target, key)
    const property: Property = {
      key,
      value
    }
    fields.push(property)
    Reflect.defineMetadata(InjectableEnum.PROPERTIES, fields, target.constructor)
  }
}
