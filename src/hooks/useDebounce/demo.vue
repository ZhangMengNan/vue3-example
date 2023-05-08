<script setup lang="ts">
import { ref } from 'vue'
import useDebounce from '@/hooks/useDebounce'

import Container from '@/components/Container.vue'

const count = ref(0)
const { run, cancel } = useDebounce(() => count.value++, 3000)
</script>

<template>
  <Container>
    <p class="text-8 my">防抖数值：{{ count }}</p>
    <div>
      <a-button type="primary" class="mr" @click="run">点击</a-button>
      <a-button type="primary" @click="cancel">取消</a-button>
    </div>
  </Container>
</template>

<style lang="less" scoped></style>
