import { ref, watch, onUnmounted } from 'vue'
import useSupported from '@/hooks/useSupported'

import { unrefElement } from '@/utils'

import { MaybeComputedElementRef } from '@/utils/types'
import { UseIntersectionObserverOptions } from './type'

/**
 * @param target 目标元素
 * @param callback 回调函数
 * @param options 选项
 * @returns 停止监听函数
 */
export default function useInViewport(
  target: MaybeComputedElementRef,
  callback: IntersectionObserverCallback,
  options: UseIntersectionObserverOptions = {}
) {
  const { root, rootMargin = '0px', threshold = 0.1 } = options
  const isSupported = useSupported(() => window && 'IntersectionObserver' in window)
  const intersectionObserverRef = ref<IntersectionObserver | null>(null)

  const stop = () => intersectionObserverRef.value && intersectionObserverRef.value.disconnect()

  watch(
    () => [unrefElement(target), unrefElement(root)] as const,
    ([target, root]) => {
      if (!isSupported.value || !target || !root) return

      intersectionObserverRef.value = new IntersectionObserver(callback, {
        rootMargin,
        threshold,
        root: unrefElement(root)
      })
      intersectionObserverRef.value.observe(target)
    },
    {
      immediate: true,
      flush: 'post'
    }
  )

  onUnmounted(stop)

  return { stop }
}
