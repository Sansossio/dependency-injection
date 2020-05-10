import 'reflect-metadata'
import { Constructor } from '../../types/constructor.type'
import { InjectorApp } from '../../app/injector-app'

export function getParameters (constructor: Constructor | InjectorApp) {
  return Reflect.getMetadata('design:paramtypes', constructor) || []
}
