import { ref, watch } from 'vue'

export default function useThrottle<T extends (...args: any[]) => void>(callback: T, delay = 100) {
  let lastExecutedTimestamp = Date.now()

  const run = (...args: Parameters<T>) => {
    const now = Date.now()

    if (now - lastExecutedTimestamp > delay) {
      callback(...args)
      lastExecutedTimestamp = now
    }
  }

  const cancel = () => {}

  return {
    run
  }
}
