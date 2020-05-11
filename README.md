# Dependency injection

This TypeScript library allows you to easily declare and resolve dependencies, injecting them in your classes attributes, using eye-candy TypeScript annotations.

*Author:* Julio Sansossio - [https://github.com/Sansossio](https://github.com/Sansossio)

# Example
```ts
import { Injectable, InjectorApp } from 'dependency-injection-ts'

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
// Log: 1
```
[More examples](https://github.com/Sansossio/dependency-injection/tree/master/examples)
