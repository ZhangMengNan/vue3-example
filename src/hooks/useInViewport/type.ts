import { MaybeComputedElementRef } from '@/utils/types'

export interface UseIntersectionObserverOptions {
  root?: MaybeComputedElementRef
  rootMargin?: string
  threshold?: number | number[]
}
