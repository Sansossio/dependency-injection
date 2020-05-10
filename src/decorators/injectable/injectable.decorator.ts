import 'reflect-metadata'
import { getParameters } from '../../utils/get-parameters/get-parameters.utils'
import { InjectableEnum } from '../../enum/injectable.enum'

export function Injectable () {
  return function (target) {
    Reflect.defineMetadata(
      InjectableEnum.INJECTABLE,
      true,
      target
    )
    Reflect.defineMetadata(
      InjectableEnum.PARAMETERS,
      getParameters(target),
      target
    )
    return target
  }
}
