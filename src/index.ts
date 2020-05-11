import { Injectable } from './decorators/injectable/injectable.decorator'
import { InjectorApp } from './app/injector-app'
import { Property } from './decorators/property/property.decorator'

class A {
  value = 1
}

@Injectable()
class B {
  @Property()
  public a: A
}

@Injectable()
class C {
  constructor (
    readonly b: B
  ) {}
}

const app = InjectorApp.create([C, A, B])
const c = app.get(C)
console.log(c.b.a.value)
