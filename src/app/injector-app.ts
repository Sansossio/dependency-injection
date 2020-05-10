import { isClass } from '../utils/is-class/is-class.utils'

export class InjectorApp {
  private readonly providers = new Map<string, any>()

  private getProvider (provider) {
    let prov = new provider()
    if (provider.injectable) {
      const provArgs = provider.parameters.map((param) => {
        const { name } = param
        const value = this.providers.get(name)
        if (!value) {
          throw new Error(`Dependency "${name}" does not exists`)
        }
        return value
      })
      prov = new provider(...provArgs)
    }
    return prov
  }

  static create (providers: any[]) {
    const app = new InjectorApp()
    for (const provider of providers) {
      if (!isClass(provider)) {
        throw new Error('Providers must be classes')
      }
      app.providers.set(provider.name, app.getProvider(provider))
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
