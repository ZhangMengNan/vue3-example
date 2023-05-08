<script setup lang="ts">
import useIsWindowVisible from '@/hooks/useIsWindowVisible'

import Container from '@/components/Container.vue'

useIsWindowVisible((isWindowVisible) => (document.title = isWindowVisible ? '回来啦~' : '离开啦~'))
</script>

<template>
  <Container> <p class="color-red-600">请查看浏览器标签栏 title</p> </Container>
</template>

<style lang="less" scoped></style>
