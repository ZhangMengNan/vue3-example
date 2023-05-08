<script setup lang="ts">
import { ref } from 'vue'
import useInViewport from '@/hooks/useInViewport'

import Container from '@/components/Container.vue'

const parentRef = ref()
const childrenRef = ref()
const inViewport = ref(false)

useInViewport(
  childrenRef,
  ([entry]: IntersectionObserverEntry[]) => (inViewport.value = entry.isIntersecting),
  {
    threshold: [0, 0.25, 0.5, 0.75, 1],
    root: parentRef
  }
)
</script>

<template>
  <Container>
    <div ref="parentRef" class="w-[300px] h-[300px] overflow-scroll border border-solid">
      scroll here
      <div class="h-[800px]">
        <div ref="childrenRef" class="border border-solid w-[100px] h-[100px] mt-[80px] mx-a">
          observer dom
        </div>
      </div>
    </div>
    <p :class="[inViewport ? 'color-green-400' : 'color-red-600', 'mt']">
      inViewport: {{ inViewport ? 'visible' : 'hidden' }}
    </p>
  </Container>
</template>

<style lang="less" scoped></style>
