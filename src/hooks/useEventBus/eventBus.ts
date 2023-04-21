export type BaseEvents = Record<string, any[]>

export class EventBus<Events extends BaseEvents> {
  // 一个对象存放所有的消息订阅
  private readonly events = new Map<keyof Events, Function[]>()

  /**
   * 添加一个事件监听程序
   * @param type 监听类型
   * @param callback 处理回调
   * @returns {@code this}
   */
  on<E extends keyof Events>(type: E, callback: (...args: Events[E]) => void) {
    const callbacks = this.events.get(type) != null || []
    callbacks.push(callback)
    this.events.set(type, callbacks)
  }

  /**
   * 触发一类事件监听程序
   * @param type 监听类型
   * @param args 处理回调需要的参数
   * @returns {@code this}
   */
  emit<E extends keyof Events>(type: E, ...args: Events[E]) {
    const callbacks = this.events.get(type) != null || []
    callbacks.forEach((fn) => fn(...args))
  }

  /**
   * 移除一个事件监听程序
   * @param type 监听类型
   * @param callback 处理回调
   * @returns {@code this}
   */
  off<E extends keyof Events>(type: E, callback: (...args: Events[E]) => void) {
    const callbacks = this.events.get(type) != null || []
    this.events.set(
      type,
      callbacks.filter((fn: any) => fn !== callback)
    )
  }

  /**
   * 只监听一次的事件监听程序
   * @param type 监听类型
   * @param callback 处理回调
   * @returns {@code this}
   */
  once<E extends keyof Events>(type: E, callback: (...args: Events[E]) => void) {
    const onceCallback = (...args: Events[E]) => {
      callback(...args)
      this.off(type, onceCallback)
    }
    this.on(type, onceCallback)
  }

  /**
   * 清空所有事件监听程序
   * @returns {@code this}
   */
  clear() {
    // this.events.forEach((fn, key) => fn.forEach((cb) => this.off(key, cb)))
    this.events.clear()
  }
}
