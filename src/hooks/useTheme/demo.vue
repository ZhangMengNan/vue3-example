<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useTheme from '@/hooks/useTheme'

import Container from '@/components/Container.vue'

const { toggle } = useTheme()
const { theme } = storeToRefs(useTheme())
</script>

<template>
  <Container>
    <p class="text-8 my">当前主题：{{ theme }}</p>
    <div>
      <a-button type="primary" class="mr" @click="toggle('light')">LIGHT</a-button>
      <a-button type="primary" @click="toggle('dark')">DARK</a-button>
    </div>
  </Container>
</template>

<style lang="less" scoped></style>
