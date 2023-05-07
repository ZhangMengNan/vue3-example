export type Service<T, P extends any[]> = (...args: P) => Promise<T>

export interface Options<T, P extends any[]> {
  manual?: boolean
  onSuccess?: (data: T, params: P) => void
  onError?: (e: Error, params: P) => void
}
