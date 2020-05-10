import { Injectable } from './decorators/injectable/injectable.decorator'
import { InjectorApp } from './app/injector-app'

@Injectable()
class Test {
  a: number = 1
}

@Injectable()
class Test2 {
  constructor (
    readonly test: Test
  ) {}
}

const app = InjectorApp.create([Test, Test2])
const test2 = app.get(Test2)
console.log(test2.test.a)
