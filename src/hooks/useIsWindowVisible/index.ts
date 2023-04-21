import { ref, watchEffect } from 'vue'

function isWindowVisible() {
  if (!(typeof document !== 'undefined' && 'visibilityState' in document)) return true

  return document.visibilityState === 'visible'
}

function useIsWindowVisible(callback: (event: boolean) => void) {
  const isVisible = ref(isWindowVisible())

  const handleVisibilityChange = () => (isVisible.value = isWindowVisible())

  watchEffect((onInvalidate) => {
    if (!('visibilityState' in document)) return undefined

    document.addEventListener('visibilitychange', handleVisibilityChange)
    // callback(isVisible.value)

    onInvalidate(() => document.removeEventListener('visibilitychange', handleVisibilityChange))
  })

  return isVisible.value
}

export default useIsWindowVisible
