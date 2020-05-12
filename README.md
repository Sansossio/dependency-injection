# Dependency injection

![https://www.npmjs.com/package/dependency-injection-implementation](https://nodei.co/npm/dependency-injection-implementation.png)

This TypeScript library allows you to easily declare and resolve dependencies, injecting them in your classes attributes, using eye-candy TypeScript annotations.

*Author:* Julio Sansossio - [https://github.com/Sansossio](https://github.com/Sansossio)

# Install
```sh
npm install dependency-injection-implementation
```

# Example
### Inject constructor
```ts
import { Injectable, InjectorApp } from 'dependency-injection-implementation'

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
### Inject property
```ts
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
// Log: 1
```
[More examples](https://github.com/Sansossio/dependency-injection/tree/master/examples)
