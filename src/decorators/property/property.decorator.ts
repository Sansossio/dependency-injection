import 'reflect-metadata'
import { Property } from './property.type'
import { InjectableEnum } from '../../enum/injectable.enum'
import { isClass } from '../../utils/is-class/is-class.utils'

export function Property () {
  return (target: any, key: string) => {
    const fields: Property[] = Reflect.getMetadata(InjectableEnum.PROPERTIES, target) || []
    const value = Reflect.getMetadata('design:type', target, key)
    if (!isClass(value)) {
      throw new Error(`Property (${target.constructor.name}:${key}) must be a class`)
    }
    const property: Property = {
      key,
      value
    }
    fields.push(property)
    const provider = Object.getPrototypeOf(target)
    Reflect.defineMetadata(InjectableEnum.PROPERTIES, fields, provider)
  }
}
