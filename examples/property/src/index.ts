import { Injectable, Property, InjectorApp } from 'dependency-injection-implementation'

class B {
  value = 1
}

@Injectable()
class C {
  @Property()
  b: B

  @Property({ type: B })
  untyped
}

const app = InjectorApp.create([C, B])
const c = app.get(C)

console.log(c.b.value)
console.log(c.untyped.value)
