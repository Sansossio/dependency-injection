import { Injectable, InjectorApp, Property } from '../src'

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
