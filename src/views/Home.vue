<script setup lang="ts">
import { reactive, ref } from 'vue'
import { throttle } from 'lodash-es'
// import { ElMessage, ElMessageBox } from 'element-plus'
import { Person, Num } from '@/types/test'

const person: Person = reactive({
  name: 'zmn',
  age: Num.Second
})
const count = ref(0)

// ../glob/*.json 仅引入 json 文件
// ../glob/*-[0-9].json 正则表达式表示文件名
const globModules = import.meta.glob('../glob/*') // 异步

Object.entries(globModules).forEach(([k, v]) => {
  // console.log(`${k} : ${v}`)

  v().then((item: any) => console.log(`${k} : ${item.default}`))
})

const globEagerModules = import.meta.glob('../glob/*', { eager: true, import: 'default' }) // 同步

Object.entries(globEagerModules).forEach(([k, v]) => {
  console.log(`globEagerModules-${k} : ${v}`)

  // v().then((item: any) => console.log(`${k} : ${item.default}`))
})

// 预编译 第三方插件第一次启动之前进行编译（CommonJs -> ESM）放入 node_modules/.vite 文件中，之后可以直接读取缓存文件而非重新编译
const add = throttle(() => {
  count.value = count.value + 1
}, 2000)
</script>

<template>
  <div class="root">name:{{ person.name }} age:{{ person.age }}</div>
  <button @click="add">{{ count }}</button>
</template>

<style scoped lang="less">
@import url(@/styles/test.less);
</style>
