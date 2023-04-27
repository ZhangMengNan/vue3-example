import { ref, onUnmounted } from 'vue'

/**
 * @param {Function} callback - 要执行的回调函数
 * @param {number} delay - 延迟时间，单位为毫秒，默认为100毫秒
 */
export default function useThrottle<T extends (...args: any[]) => void>(callback: T, delay = 100) {
  const timer = ref<NodeJS.Timeout | null>(null)

  const run = (...args: Parameters<T>) => {
    if (timer.value !== null) return

    timer.value = setTimeout(() => {
      callback(...args)
      timer.value = null
    }, delay)
  }

  const cancel = () => {
    if (timer.value === null) return

    clearTimeout(timer.value)
    timer.value = null
  }

  onUnmounted(cancel)

  return {
    run,
    cancel
  }
}
