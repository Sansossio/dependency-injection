import { Injectable, Property, InjectorApp } from '../src'

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
