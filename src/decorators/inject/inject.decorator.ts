import 'reflect-metadata'
import { InjectableEnum } from '../../enum/injectable.enum'
import { Constructor } from '../../types/constructor.type'

export function Inject () {
  return function (target: Constructor, key: string, index: number) {
    const parameters = Reflect.getOwnMetadata(InjectableEnum.PARAMETERS, target.constructor)
    console.log(index)
  }
}
