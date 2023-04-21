import { ref, onUnmounted, onMounted } from 'vue'

type Subscription<T> = (val: T) => void

/**
 * 事件订阅器，用于管理事件的订阅和发布
 */
export class EventEmitter<T> {
  private readonly subscriptions = new Set<Subscription<T>>()

  /**
   * 发布事件
   * @param val 事件数据
   */
  emit = (val: T) => {
    for (const subscription of this.subscriptions) {
      subscription(val)
    }
  }

  /**
   * 订阅事件
   * @param callback 事件回调函数
   */
  useSubscription = (callback: Subscription<T>) => {
    const callbackRef = ref<Subscription<T>>()
    callbackRef.value = callback

    onMounted(() => {
      const subscription = (val: T) => callbackRef.value != null && callbackRef.value(val)

      this.subscriptions.add(subscription)
    })

    onUnmounted(() => this.subscriptions.clear())
  }
}

/**
 * 事件订阅器的自定义 Hook
 * @returns 事件订阅器实例
 */
export default function useEventEmitter<T = void>() {
  const eventEmitterRef = ref<EventEmitter<T>>()
  if (eventEmitterRef.value == null) eventEmitterRef.value = new EventEmitter()

  return eventEmitterRef.value
}
