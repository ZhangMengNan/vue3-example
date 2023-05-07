import { ref, watch, onUnmounted } from 'vue'
import useSupported from '../useSupported'

import { unrefElement } from '@/utils'

import { UseMutationObserverOptions } from './type'
import { MaybeElementRef } from '@/utils/types'

/**
 * @param {MaybeElementRef} target - 监听的元素
 * @param {MutationCallback} callback - 回调函数
 * @param {UseMutationObserverOptions} options - 配置项
 * @returns {Object} - 返回一个对象，包含 stop 方法
 */
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
