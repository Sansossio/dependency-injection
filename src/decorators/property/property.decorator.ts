import 'reflect-metadata'
import { Property } from './property.type'
import { InjectableEnum } from '../../enum/injectable.enum'
import { InjectType } from '../../types/inject.type'
import { getProperties } from '../../utils/get-properties/get-properties.utils'

export function Property (options?: InjectType) {
  return function (target: any, key: string) {
    const fields: Property[] = getProperties(target)
    const value = options?.type || Reflect.getMetadata('design:type', target, key)
    const property: Property = {
      key,
      value
    }
    fields.push(property)
    Reflect.defineMetadata(InjectableEnum.PROPERTIES, fields, target.constructor)
  }
}
