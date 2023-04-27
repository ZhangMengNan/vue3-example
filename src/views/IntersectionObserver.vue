<script setup lang="ts">
import { ref } from 'vue'
import useInViewport from '@/hooks/useInViewport'

const parentRef = ref()
const inViewport = ref(false)
const { observerRef } = useInViewport(
  ([entry]: IntersectionObserverEntry[]) => (inViewport.value = entry.isIntersecting),
  {
    threshold: [0, 0.25, 0.5, 0.75, 1],
    root: parentRef.value
  }
)
</script>

<template>
  <div>
    <div
      :style="{ width: '300px', height: '300px', overflow: 'scroll', border: '1px solid' }"
      ref="parentRef"
    >
      scroll here
      <div :style="{ height: '800px' }">
        <div
          ref="observerRef"
          :style="{
            border: '1px solid',
            height: '100px',
            width: '100px',
            textAlign: 'center',
            marginTop: '80px'
          }"
        >
          observer dom
        </div>
      </div>
    </div>
    <div :style="{ marginTop: '16px', color: inViewport ? '#87d068' : '#f50' }">
      <p>inViewport: {{ inViewport ? 'visible' : 'hidden' }}</p>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
