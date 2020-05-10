import 'reflect-metadata'
import { Constructor } from '../types/constructor.type'

export function getParameters<T> (constructor) {
  return Reflect.getMetadata('design:paramtypes', constructor)
}
