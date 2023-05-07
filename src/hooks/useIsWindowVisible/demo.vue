<script setup lang="ts">
import useIsWindowVisible from '@/hooks/useIsWindowVisible'

useIsWindowVisible((isWindowVisible) => (document.title = isWindowVisible ? '回来啦~' : '离开啦~'))
</script>

<template>
  <div class="w-sm my-0 mx-a p-8 text-center color-red-600">请查看浏览器标签栏 title</div>
</template>

<style lang="less" scoped></style>
