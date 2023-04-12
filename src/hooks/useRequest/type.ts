// import { Ref } from 'vue'

export type Service<T, P extends any[]> = (...args: P) => Promise<T>

export interface Options<T, P extends any[]> {
  manual?: boolean
  onSuccess?: (data: T, params: P) => void
  onError?: (e: Error, params: P) => void
}

// export interface Props<T, P extends any[]> {
//   service: Service<T, P>
//   options: Options<T, P>
// }

// export interface UseRequestResult<T, P extends any[]> {
//   loading: Ref<boolean>
//   data: Ref<T | undefined>
//   error: Ref<Error | undefined>
//   run: (...args: P) => Promise<void>
// }
