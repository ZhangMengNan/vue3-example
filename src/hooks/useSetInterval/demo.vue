<script setup lang="ts">
import { ref } from 'vue'
import useSetInterval from '@/hooks/useSetInterval'

const count = ref(60)
const isEnd = ref(false)

useSetInterval(() => {
  if (!isEnd.value) return

  count.value--
  if (count.value <= 0) {
    isEnd.value = false
    count.value = 60
  }
})
</script>

<template>
  <div class="w-sm my-0 mx-a p-8 flex grid-items-center flex-col">
    <div v-if="isEnd">{{ count }}s 后重试</div>
    <a-button type="primary" v-else @click="isEnd = true">获取验证码</a-button>
  </div>
</template>

<style lang="less" scoped></style>
