<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Child from './Child.vue'

import emitter from '@/utils/mitt'

const inputVal = ref('')

const changeValue = (event: any) => {
  inputVal.value = event.target.value
}

const change = (result: any) => {
  console.log('inputVal', inputVal.value)
  console.log('result', result)
}

onMounted(() => {
  emitter.emit('form-item-created', 'emitter')
})
</script>

<template>
  <input type="text" :value="inputVal" @input="changeValue" />
  <Child msg="Child" data="this is Child" @change="change">
    <template v-slot:header>
      <div>父组件header内容</div>
    </template>
    <template v-slot:default>
      <div>父组件内容</div>
    </template>
    <template v-slot:footer>
      <div>父组件footer内容</div>
    </template>
  </Child>
</template>

<style lang="less" scoped></style>
