import { Ref } from 'vue'
import { unref } from 'vue-demi'
import type { ComponentPublicInstance } from 'vue-demi'

export type AnyFn = (...args: any[]) => any
export type MaybeRefOrGetter<T> = MaybeRef<T> | (() => T)
export type MaybeRef<T> = T | Ref<T>
export type VueInstance = ComponentPublicInstance
export type MaybeElement = HTMLElement | SVGElement | VueInstance | undefined | null
export type MaybeComputedElementRef<T extends MaybeElement = MaybeElement> = MaybeRefOrGetter<T>
export type UnRefElementReturn<T extends MaybeElement = MaybeElement> = T extends VueInstance
  ? Exclude<MaybeElement, VueInstance>
  : T | undefined

export function toValue<T>(r: MaybeRefOrGetter<T>): T {
  return typeof r === 'function' ? (r as AnyFn)() : unref(r)
}

export function unrefElement<T extends MaybeElement>(
  elRef: MaybeComputedElementRef<T>
): UnRefElementReturn<T> {
  const plain = toValue(elRef)
  return (plain as VueInstance)?.$el ?? plain
}

export const notNullish = <T = any>(val?: T | null | undefined): val is T => val != null
