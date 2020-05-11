import { Injectable, InjectorApp } from '../src'

class B {
  value = 1
}

@Injectable()
class C {
  constructor (
    readonly b: B
  ) {}
}

const app = InjectorApp.create([C, B])
const c = app.get(C)

console.log(c.b.value)
