import { ref, watchEffect, onUnmounted } from 'vue'

function isWindowVisible() {
  if (!(typeof document !== 'undefined' && 'visibilityState' in document)) return true

  return document.visibilityState === 'visible'
}

/**
 * 判断窗口是否可见
 * @param callback 回调函数，可选参数，当窗口可见性状态改变时调用
 */
function useIsWindowVisible(callback?: (event: boolean) => void) {
  const isVisible = ref(isWindowVisible())

  const handleVisibilityChange = () => (isVisible.value = isWindowVisible())
  const clear = () => document.removeEventListener('visibilitychange', handleVisibilityChange)

  watchEffect((onInvalidate) => {
    if (!('visibilityState' in document)) return undefined

    document.addEventListener('visibilitychange', handleVisibilityChange)
    callback?.(isVisible.value)

    onInvalidate(clear)
  })

  onUnmounted(clear)

  return isVisible
}

export default useIsWindowVisible
