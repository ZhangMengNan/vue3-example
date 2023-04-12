import { ref, watchEffect } from 'vue'

function useSetInterval(callback: () => void, delay: number = 1000) {
  const timer = ref<NodeJS.Timeout | null>(null)

  watchEffect((onInvalidate) => {
    timer.value = setInterval(callback, delay)

    onInvalidate(() => timer.value && clearInterval(timer.value))
  })

  return timer
}

export default useSetInterval
