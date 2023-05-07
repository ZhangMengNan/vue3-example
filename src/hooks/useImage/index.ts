import { watch, ref, shallowRef } from 'vue'

import { toValue } from '@/utils'

import { UseImageOptions, UseAsyncStateOptions } from './type'
import { MaybeRefOrGetter } from '@/utils/types'

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

/**
 * @param options 图片加载参数
 * @param asyncStateOptions 异步状态参数
 * @returns { isLoading, isReady, error }
 */
function useImage(
  options: MaybeRefOrGetter<UseImageOptions>,
  asyncStateOptions: UseAsyncStateOptions = {}
) {
  const {
    delay = 5000,
    immediate = true,
    onSuccess,
    onError,
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
        onSuccess?.(res)
      })
      .catch((e) => {
        error.value = e
        onError?.(e)
      })
      .finally(() => (isLoading.value = false))
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
