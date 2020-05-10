import { Injectable } from './decorators/injectable/injectable.decorator'
import { InjectorApp } from './app/injector-app'
import { Property } from './decorators/property/property.decorator'

@Injectable()
class Test {
  a: number = 1
}

@Injectable()
class Test2 {
  @Property()
  readonly test2: Test

  constructor (
    readonly test: Test
  ) {}
}

const app = InjectorApp.create([Test, Test2])
const test2 = app.get(Test2)
console.log(test2.test.a)
