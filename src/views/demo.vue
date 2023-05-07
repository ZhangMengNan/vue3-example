<script setup lang="ts">
import { useRouter } from 'vue-router'
import UseTheme from '@/components/UseTheme.vue'

const router = useRouter()
</script>

<template>
  <div>
    <use-theme>
      <a-button type="primary" @click="router.push('useRequest')">useRequest</a-button>
      <a-button type="primary" @click="router.push('useDebounce')">useDebounce</a-button>
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
      <a-button type="primary" @click="router.push('useThrottle')">useThrottle</a-button>
    </use-theme>
  </div>
</template>

<style lang="less" scoped></style>
