import { ref, watchEffect, onUnmounted } from 'vue'

/**
 * @param callback 定时器回调函数
 * @param delay 定时器间隔时间，默认为1000ms
 */
function useSetInterval(callback: () => void, delay: number = 1000) {
  const timer = ref<NodeJS.Timeout | ReturnType<typeof setTimeout> | null>(null)

  const clear = () => timer.value && clearInterval(timer.value)

  watchEffect((onInvalidate) => {
    timer.value = setInterval(callback, delay)

    onInvalidate(clear)
  })

  onUnmounted(clear)
}

export default useSetInterval
