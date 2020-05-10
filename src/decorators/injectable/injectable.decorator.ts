import { getParameters } from '../../utils/get-parameters.utils/get-parameters.utils'

export function Injectable () {
  return function (target) {
    target.parameters = getParameters(target)
    target.injectable = true
    return target
  }
}
