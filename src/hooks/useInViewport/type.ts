import { Ref } from 'vue'

// type TargetValue<T> = T | undefined | null

// type TargetType = HTMLElement | Element | Window | Document

// export type BasicTarget<T extends TargetType = Element> = TargetValue<T> | Ref<TargetValue<T>>

// export interface Options {
//   rootMargin?: string
//   threshold?: number | number[]
//   root?: BasicTarget<Element>
// }

// type MaybeRef<T> = T | Ref<T>

// type MaybeRefOrGetter<T> = MaybeRef<T> | (() => T)

// type MaybeElement = HTMLElement | null | undefined | Element

// type MaybeComputedElementRef<T extends MaybeElement = MaybeElement> = MaybeRefOrGetter<T>

// root?: MaybeComputedElementRef

export interface UseIntersectionObserverOptions {
  root?: HTMLElement | null | undefined | Element
  rootMargin?: string
  threshold?: number | number[]
}
