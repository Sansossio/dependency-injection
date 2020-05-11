import { Injectable, Property, InjectorApp } from 'dependency-injection-implementation'

class B {
  value = 1
}

@Injectable()
class C {
  @Property()
  b: B
}

const app = InjectorApp.create([C, B])
const c = app.get(C)

console.log(c.b.value)
