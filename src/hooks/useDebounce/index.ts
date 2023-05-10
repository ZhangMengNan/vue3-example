import { ref, onUnmounted } from 'vue'

/**
 * @param {Function} callback - 需要防抖的函数
 * @param {number} delay - 防抖时间，默认100ms
 */
export default function useDebounce<T extends (...args: any[]) => any>(callback: T, delay = 100) {
  const timer = ref<NodeJS.Timeout | ReturnType<typeof setTimeout> | null>(null)

  const run = (...args: Parameters<T>) => {
    cancel()

    timer.value = setTimeout(() => callback(...args), delay)
  }

  const cancel = () => {
    timer.value !== null && clearTimeout(timer.value)
    timer.value = null
  }

  onUnmounted(cancel)

  return {
    run,
    cancel
  }
}
