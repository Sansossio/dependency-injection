class BaseClass {}

export type Constructor = BaseClass & (new (...args: any[]) => any)
