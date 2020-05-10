import 'reflect-metadata'

export function getParameters<T> (constructor) {
  return Reflect.getMetadata('design:paramtypes', constructor) || []
}
