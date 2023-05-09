import { ref, watchEffect, onUnmounted } from 'vue'

function isWindowVisible() {
  if (!(typeof document !== 'undefined' && 'visibilityState' in document)) return true

  return document.visibilityState === 'visible'
}

function useIsWindowVisible() {
  const isVisible = ref(isWindowVisible())

  const handleVisibilityChange = () => (isVisible.value = isWindowVisible())
  const clear = () => document.removeEventListener('visibilitychange', handleVisibilityChange)

  watchEffect((onInvalidate) => {
    if (!('visibilityState' in document)) return undefined

    document.addEventListener('visibilitychange', handleVisibilityChange)

    onInvalidate(clear)
  })

  onUnmounted(clear)

  return isVisible
}

export default useIsWindowVisible
