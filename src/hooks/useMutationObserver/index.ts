import { ref, watch, onUnmounted } from 'vue'
import useSupported from '../useSupported'

import { unrefElement } from '@/utils'
import { MaybeElementRef } from '@/utils/types'

interface UseMutationObserverOptions extends MutationObserverInit {}

const useMutationObserver = (
  target: MaybeElementRef,
  callback: MutationCallback,
  options: UseMutationObserverOptions = {}
) => {
  const isSupported = useSupported(() => window && 'MutationObserver' in window)
  const mutationObserverRef = ref<MutationObserver | null>(null)

  const stop = () => mutationObserverRef.value && mutationObserverRef.value.disconnect()

  watch(
    () => unrefElement(target),
    (el) => {
      if (!isSupported.value || !el) return
      mutationObserverRef.value = new MutationObserver(callback)
      mutationObserverRef.value.observe(el, options)
    },
    {
      immediate: true,
      flush: 'post'
    }
  )

  onUnmounted(stop)

  return { stop }
}

export default useMutationObserver
