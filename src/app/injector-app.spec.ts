import { InjectorApp } from './injector-app'
import { Injectable } from '../decorators/injectable/injectable.decorator'
import { Property } from '../decorators/property/property.decorator'

describe('Injector app', () => {
  describe('Create', () => {
    it('should throw error when when some provider is not a class', () => {
      expect(
        () => {
          InjectorApp.create([class {}, null as any])
        }
      ).toThrow()
    })
    it('should return InjectorApp instance', () => {
      expect(InjectorApp.create([])).toBeInstanceOf(InjectorApp)
    })

    it('should throw error when one provider has an non-existent dependency', () => {
      class Test {}
      @Injectable()
      class Test2 {
        constructor (
          readonly test: Test
        ) {}
      }
      expect(() => InjectorApp.create([Test2])).toThrow()
    })

    it('should return InjectorApp instance, proviers without order', () => {
      class Test {
        a = 1
      }
      @Injectable()
      class Test2 {
        constructor (
          readonly depency: Test
        ) {}
      }
      const app = InjectorApp.create([Test2, Test])
      expect(app).toBeInstanceOf(InjectorApp)
      expect(app.get(Test2).depency).toBeInstanceOf(Test)
    })

    it('should throw error when property is not a class value', () => {
      expect(() => {
        @Injectable()
        class Test2 {
          @Property()
          property: null
        }
        InjectorApp.create([Test2])
      }).toThrow()
    })
  })

  describe('Get', () => {
    it('should return instance of a specific profiver', () => {
      class Test {}
      const app = InjectorApp.create([Test])
      expect(app.get(Test)).toBeInstanceOf(Test)
    })

    it('should return class injected inside another one', () => {
      class Test {}
      @Injectable()
      class Test2 {
        constructor (
          readonly test: Test
        ) {}
      }
      const app = InjectorApp.create([Test, Test2])
      expect(app.get(Test2).test).toBeInstanceOf(Test)
    })

    it('should throw error when provider does not exists', () => {
      class Test {}
      class Test2 {}
      const app = InjectorApp.create([Test])
      expect(() => app.get(Test2)).toThrow()
    })

    it('should throw error when get.value is not a class', () => {
      const app = InjectorApp.create([])
      expect(() => app.get('' as any)).toThrow()
    })
  })

  describe('Properties inject', () => {
    it('should inject a provider inside a property', () => {
      class Test {}
      @Injectable()
      class Test2 {
        @Property()
        property: Test
      }
      const app = InjectorApp.create([Test2, Test])
      const getValue = app.get(Test2).property
      expect(getValue).toBeDefined()
      expect(getValue).toBeInstanceOf(Test)
    })
  })
})
