<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useTheme from '@/hooks/useTheme'

const { toggle } = useTheme()
const { theme } = storeToRefs(useTheme())
</script>

<template>
  <slot :theme="theme" :toggle="toggle" />
</template>

<style></style>
