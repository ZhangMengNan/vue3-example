import { Ref, ComponentPublicInstance } from 'vue'

export type MaybeRef<T> = T | Ref<T>
export type MaybeRefOrGetter<T> = MaybeRef<T>
export type AnyFn = (...args: any[]) => any
export type VueInstance = ComponentPublicInstance
export type MaybeElement = HTMLElement | SVGAElement | VueInstance | undefined | null
export type MaybeComputedElementRef<T extends MaybeElement = MaybeElement> = MaybeRefOrGetter<T>
export type UnRefElementReturn<T extends MaybeElement = MaybeElement> = T extends VueInstance
  ? Exclude<MaybeElement, VueInstance>
  : T | undefined
export type MaybeElementRef<T extends MaybeElement = MaybeElement> = MaybeRef<T>
