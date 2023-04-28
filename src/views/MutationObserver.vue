<script setup lang="ts">
import { ref, reactive } from 'vue'
import useMutationObserver from '@/hooks/useMutationObserver'

const el = ref(null)
const state = reactive({ width: 200, count: 0 })

useMutationObserver(el, (mutationsList) => mutationsList.forEach(() => (state.count += 1)), {
  attributes: true
})
</script>

<template>
  <div>
    <div ref="el" class="container" :style="{ width: `${state.width}px` }">
      current width：{{ state.width }}
    </div>
    <button @click="state.width += 10">widening</button>
    <p>Mutation count {{ state.count }}</p>
  </div>
</template>

<style lang="less" scoped>
.container {
  padding: 12px;
  border: 1px solid #000;
  margin-bottom: 8px;
}
</style>
