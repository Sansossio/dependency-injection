import { InjectableEnum } from '../../enum/injectable.enum'
import { Property } from '../../decorators/property/property.type'

export function getProperties (target): Property[] {
  return Reflect.getMetadata(InjectableEnum.PROPERTIES, target?.constructor) || []
}
