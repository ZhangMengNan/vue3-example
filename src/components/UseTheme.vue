<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useTheme from '@/hooks/useTheme'

const { toggle } = useTheme()
const { theme } = storeToRefs(useTheme())
</script>

<template>
  <div class="container">
    <slot :theme="theme" :toggle="toggle"></slot>
  </div>
</template>

<style></style>
