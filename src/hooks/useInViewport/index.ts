import { ref, watchEffect } from 'vue'
import { UseIntersectionObserverOptions } from './type'

export default function useInViewport(
  callback: IntersectionObserverCallback,
  options: UseIntersectionObserverOptions = {}
) {
  const { root, rootMargin = '0px', threshold = 0.1 } = options
  const observerRefElement = ref(null) // 创建一个ref对象，用于存储观察的元素
  const intersectionObserverRef = ref<IntersectionObserver | null>(null) // 创建一个ref对象，用于存储IntersectionObserver实例

  watchEffect((onInvalidate) => {
    const isSupported = window && 'IntersectionObserver' in window // 判断是否支持IntersectionObserver

    if (isSupported) {
      // 如果IntersectionObserver实例不存在且观察的元素存在
      if (!intersectionObserverRef.value && observerRefElement.value) {
        // 创建IntersectionObserver实例
        intersectionObserverRef.value = new IntersectionObserver(callback, {
          rootMargin,
          threshold,
          root
        })

        // 开始观察元素
        intersectionObserverRef.value.observe(observerRefElement.value)
      }

      // 如果IntersectionObserver实例存在且观察的元素不存在
      if (intersectionObserverRef.value && !observerRefElement.value)
        intersectionObserverRef.value.disconnect() // 断开观察
    }

    onInvalidate(() => intersectionObserverRef.value && intersectionObserverRef.value.disconnect()) // 返回一个函数，用于在组件卸载时断开观察
  })

  // 返回观察元素的ref对象
  return { observerRef: observerRefElement }
}
