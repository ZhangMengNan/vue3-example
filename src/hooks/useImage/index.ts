import { watch, ref, shallowRef } from 'vue'

import { noop, toValue } from '@/utils'
import { MaybeRefOrGetter } from '@/utils/types'

interface UseImageOptions {
  src: string
  srcset?: string
  sizes?: string
}

interface UseAsyncStateOptions<D = any> {
  delay?: number
  immediate?: boolean
  onError?: (e: unknown) => void
  onSuccess?: (data: D) => void
  resetOnExecute?: boolean
}

function loadImage({ src, srcset, sizes }: UseImageOptions): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = src

    if (srcset) img.srcset = srcset
    if (sizes) img.sizes = sizes

    img.onload = () => resolve(img)
    img.onerror = reject
  })
}

function useImage(
  options: MaybeRefOrGetter<UseImageOptions>,
  asyncStateOptions: UseAsyncStateOptions = {}
) {
  const {
    delay = 5000,
    immediate = true,
    onSuccess = noop,
    onError = noop,
    resetOnExecute = true
  } = asyncStateOptions
  const isLoading = ref(false)
  const isReady = ref(false)
  const error = shallowRef<unknown | undefined>(undefined)

  const loadImageWithTimeout = async () => {
    if (resetOnExecute) {
      isLoading.value = true
      isReady.value = false
    }

    return await Promise.race([
      loadImage(toValue(options)),
      new Promise((_resolve, reject) =>
        setTimeout(() => reject(new Error(`Image loading timed out`)), delay)
      )
    ])
      .then((res) => {
        isReady.value = true
        onSuccess(res)
      })
      .catch((e) => {
        error.value = e
        onError(e)
      })
      .finally(() => {
        isLoading.value = false
      })
  }

  if (immediate) loadImageWithTimeout()

  watch(
    () => toValue(options),
    () => loadImageWithTimeout(),
    { deep: true }
  )

  return {
    isLoading,
    isReady,
    error
  }
}

export default useImage
