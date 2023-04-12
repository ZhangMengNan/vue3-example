import { ref, onMounted } from 'vue'
import { Service, Options } from './type'

/**
 * @template T 请求成功后返回的数据类型
 * @template P 请求函数的参数类型
 * @param {(...args: P) => Promise<T>} Service 请求函数类型
 * @param {object} Options 请求配置项
 * @property {boolean} [manual=false] 是否手动触发请求
 * @property {(data: T, args: P) => void} [onSuccess] 请求成功后的回调函数
 * @property {(error: Error, args: P) => void} [onError] 请求失败后的回调函数
 * @returns {{loading: Ref<boolean>, data: Ref<T | undefined>, error: Ref<Error | undefined>, run: (...args: P) => Promise<void>}}
 */

function useRequest<T, P extends any[]>(service: Service<T, P>, options?: Options<T, P>) {
  const { manual = false, onSuccess, onError } = options ?? {}
  const loading = ref(false)
  const data = ref<T>()
  const error = ref<Error>()

  const run = async (...args: P) => {
    loading.value = true

    try {
      const result = await service(...args)
      data.value = result
      onSuccess?.(result, args)
    } catch (e) {
      error.value = e as Error
      onError?.(e as Error, args)
    } finally {
      loading.value = false
    }
  }

  const runAsync = () => {}

  onMounted(() => {
    // @ts-ignore
    if (!manual) run()
  })

  return {
    loading,
    data,
    error,
    run
  }
}

export default useRequest
