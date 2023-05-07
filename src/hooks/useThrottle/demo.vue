<script setup lang="ts">
import { ref } from 'vue'

import useThrottle from '@/hooks/useThrottle'

const count = ref(0)
const { run, cancel } = useThrottle(() => count.value++, 3000)
</script>

<template>
  <div class="w-sm my-0 mx-a p-8">
    <p class="text-8 my">节流数值：{{ count }}</p>
    <a-button type="primary" class="mr" @click="run">点击</a-button>
    <a-button type="primary" @click="cancel">取消</a-button>
  </div>
</template>

<style lang="less" scoped></style>
