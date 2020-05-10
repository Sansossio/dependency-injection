import { isClass } from '../utils/is-class/is-class.utils'
import { Constructor } from '../types/constructor.type'
import { InjectableType } from '../types/injectable/injectable.type'

export class InjectorApp {
  private readonly providers = new Map<string, any>()

  constructor (
    private readonly dependencies: Constructor[]
  ) {}

  private existsDependency (dependency: Constructor) {
    return !!this.dependencies.find(d => d.name === dependency.name)
  }

  private getProvider (provider: InjectableType) {
    if (!this.existsDependency(provider)) {
      throw new Error(`Dependency "${provider.name}" does not exists`)
    }
    if (!provider.injectable) {
      return new provider()
    }
    const provArgs = provider.parameters.map(prov => this.getProvider(prov))
    return new provider(...provArgs)
  }

  static create (providers: (Constructor | InjectableType)[]) {
    const app = new InjectorApp(providers)
    for (const provider of providers) {
      if (!isClass(provider)) {
        throw new Error('Providers must be classes')
      }
      app.providers.set(provider.name, app.getProvider(provider as any))
    }
    return app
  }

  get <T> (provider: new (...args: any[]) => T): T {
    if (!isClass(provider)) {
      throw new Error('Provider must be a class')
    }
    const { name } = provider
    const prov = this.providers.get(name)
    if (!prov) {
      throw new Error(`App does not have provider "${name}"`)
    }
    return prov
  }
}
