import { InjectableEnum } from '../../enum/injectable.enum'

export function isInjectable (target) {
  return !!Reflect.getMetadata(InjectableEnum.INJECTABLE, target)
}
