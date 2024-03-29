<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="p-8 my-0 w-xl mx-a">
    <div class="grid grid-cols-3 grid-rows-3 gap-4">
      <a-button type="primary" @click="router.push('useDebounce')">useDebounce</a-button>
      <a-button type="primary" @click="router.push('useThrottle')">useThrottle</a-button>
      <a-button type="primary" @click="router.push('useRequest')">useRequest</a-button>
      <a-button type="primary" @click="router.push('useEventBus')">useEventBus</a-button>
      <a-button type="primary" @click="router.push('useImage')">useImage</a-button>
      <a-button type="primary" @click="router.push('useInViewport')">useInViewport</a-button>
      <a-button type="primary" @click="router.push('useIsWindowVisible')">
        useIsWindowVisible
      </a-button>
      <a-button type="primary" @click="router.push('useMutationObserver')">
        useMutationObserver
      </a-button>
      <a-button type="primary" @click="router.push('useSetInterval')">useSetInterval</a-button>
      <a-button type="primary" @click="router.push('useTheme')">useTheme</a-button>
      <a-button type="primary" @click="router.push('animated-text')">animated text</a-button>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
