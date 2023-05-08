<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="w-sm my-0 mx-a p-8 flex grid-items-center flex-col">
    <slot />
  </div>
  <a-button type="primary" @click="router.go(-1)" class="back-button">返回</a-button>
</template>

<style lang="less" scoped>
.back-button {
  position: fixed;
  bottom: 5rem;
  right: 5rem;
}
</style>
