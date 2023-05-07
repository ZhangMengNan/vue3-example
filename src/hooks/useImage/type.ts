export interface UseImageOptions {
  src: string
  srcset?: string
  sizes?: string
}

export interface UseAsyncStateOptions<D = any> {
  delay?: number
  immediate?: boolean
  onError?: (e: unknown) => void
  onSuccess?: (data: D) => void
  resetOnExecute?: boolean
}
