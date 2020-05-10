import { isClass } from './is-class.utils'

describe('isClass', () => {
  it('should return true when value is a class', () => {
    expect(isClass(class {})).toEqual(true)
  })

  it('should return true when value is not a class', () => {
    expect(isClass(1)).toEqual(false)
    expect(isClass('')).toEqual(false)
    expect(isClass({})).toEqual(false)
  })
})
