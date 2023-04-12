<script setup lang="ts">
import { ref } from 'vue'
import { Button } from 'ant-design-vue'
import useSetInterval from '@/hooks/useSetInterval'

const count = ref(6)
const isEnd = ref(false)

useSetInterval(() => {
  if (!isEnd.value) return

  count.value--
  if (count.value <= 0) {
    isEnd.value = false
    count.value = 6
  }
})
</script>

<template>
  <div v-if="isEnd">{{ count }}s后重试</div>
  <Button v-else @click="isEnd = true">获取验证码</Button>
</template>

<style lang="less" scoped></style>
