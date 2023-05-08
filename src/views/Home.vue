<script setup lang="ts">
// ../glob/*.json 仅引入 json 文件
// ../glob/*-[0-9].json 正则表达式表示文件名
const globModules = import.meta.glob('../glob/*') // 异步
Object.entries(globModules).forEach(([k, v]) =>
  v().then((item: any) => console.log(`globModules-${k} : ${item.default}`))
)

const globEagerModules = import.meta.glob('../glob/*', { eager: true, import: 'default' }) // 同步
Object.entries(globEagerModules).forEach(([k, v]: [k: any, v: any]) =>
  v().then((item: any) => console.log(`globEagerModules-${k} : ${item.default}`))
)

// 预编译 第三方插件第一次启动之前进行编译（CommonJs -> ESM）放入 node_modules/.vite 文件中，之后可以直接读取缓存文件而非重新编译
</script>

<template>
  <div>this is home</div>
</template>

<style scoped lang="less"></style>
