import { computed } from 'vue'
import useMounted from '../useMounted'

export default function useSupported(callback: () => unknown) {
  const isMounted = useMounted()

  return computed(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isMounted.value

    return Boolean(callback())
  })
}
