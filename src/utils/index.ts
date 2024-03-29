import { unref, defineAsyncComponent } from 'vue'
import {
  MaybeRefOrGetter,
  AnyFn,
  MaybeElement,
  MaybeComputedElementRef,
  VueInstance,
  UnRefElementReturn
} from './types'

// 定义一个将 ref 或 getter 转换为值的函数
export function toValue<T>(r: MaybeRefOrGetter<T>): T {
  return typeof r === 'function' ? (r as AnyFn)() : unref(r)
}

// 定义一个将 ref 或 getter 转换为普通元素的函数
export function unrefElement<T extends MaybeElement>(
  elRef: MaybeComputedElementRef<T>
): UnRefElementReturn<T> {
  const plain = toValue(elRef)
  return (plain as VueInstance)?.$el ?? plain
}

// 定义一个判断值是否为非nullish的函数
export const notNullish = <T = any>(val?: T | null | undefined): val is T => val !== null

export const noop = () => {}

// import { markRaw, defineAsyncComponent } from 'vue';
// const modules = import.meta.glob('./components/*.vue')
// const link: any = modules[`./components/${routeAddress.value}.vue`]

// try {
//   layouts.value = markRaw(defineAsyncComponent(link))
// } catch {
//   console.log('error')
// }

// const modules = import.meta.glob('./*/*.vue', { eager: true })
// const components: Record<string, any> = {}

// for (const path in modules) {
//   const key = path.replace(/(.*\/)*([^.]+).vue/gi, '$2')
//   components[key] = defineAsyncComponent(() => import(path))
// }
