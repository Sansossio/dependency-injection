import 'reflect-metadata'
import { Property } from './property.type'
import { InjectableEnum } from '../../enum/injectable.enum'

export function Property () {
  return function (target: any, key: string) {
    const fields: Property[] = Reflect.getMetadata(InjectableEnum.PROPERTIES, target) || []
    const value = Reflect.getMetadata('design:type', target, key)
    const property: Property = {
      key,
      value
    }
    fields.push(property)
    Reflect.defineMetadata(InjectableEnum.PROPERTIES, fields, target.constructor)
  }
}
