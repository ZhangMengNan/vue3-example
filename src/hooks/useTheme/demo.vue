<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useTheme from '@/hooks/useTheme'

const { toggle } = useTheme()
const { theme } = storeToRefs(useTheme())
</script>

<template>
  <div class="w-sm my-0 mx-a p-8">
    <div>{{ theme }}</div>
    <a-button @click="toggle('light')">LIGHT</a-button>
    <a-button @click="toggle('dark')">DARK</a-button>
  </div>
</template>

<style lang="less" scoped></style>
