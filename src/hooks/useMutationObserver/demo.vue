<script setup lang="ts">
import { ref, reactive } from 'vue'
import useMutationObserver from '@/hooks/useMutationObserver'

import Container from '@/components/Container.vue'

const el = ref(null)
const state = reactive({ width: 200, count: 0 })

useMutationObserver(el, (mutationsList) => mutationsList.forEach(() => (state.count += 1)), {
  attributes: true
})
</script>

<template>
  <Container>
    <div ref="el" class="p-[12px] border border-solid" :style="{ width: `${state.width}px` }">
      当前宽度：{{ state.width }}
    </div>
    <a-button type="primary" class="mt" @click="state.width += 10">增加宽度</a-button>
    <p class="mt">mutation count {{ state.count }}</p>
  </Container>
</template>

<style lang="less" scoped></style>
