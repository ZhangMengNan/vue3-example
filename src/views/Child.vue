<script setup lang="ts">
import { defineProps, defineEmits, onUnmounted, useSlots } from 'vue'
import emitter from '@/utils/mitt'

defineProps({
  msg: { type: String },
  data: { type: String }
})

const emit = defineEmits(['change'])

const butFn = () => emit('change', 'hhhhh')

const fn = (e: any) => {
  console.log('form-item-created-', e)
}

emitter.on('form-item-created', fn)

onUnmounted(() => {
  emitter.off('form-item-created', fn)
})

const slots = useSlots()
</script>

<!--没在 props 里接收的内容，全部都放到了 $attrs 里，并且存在一个对象里面-->

<!--只有 1 个根元素的情况下，子组件中，没被 props 接收的属性，都会绑定在根元素上。-->

<!--当子组件有 2 个根元素时，没被 props 接收的属性不会绑定到子组件的元素上。-->
<!--希望第二个元素绑定所有没被 props 接收的属性，可以使用 v-bind="$attrs" 的方法实现-->

<!--useAttrs-->
<template>
  <!-- <div>{{ msg }} {{ $attrs.data }}</div> -->
  <div v-if="data">
    <slot name="header" />
  </div>
  <slot name="default" />
  <div class="submit-area">
    <slot name="submit">
      <button type="submit" @click="butFn">提交按钮</button>
    </slot>
  </div>
</template>

<style lang="less" scoped></style>
