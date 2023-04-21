<script setup lang="ts">
import { defineProps } from 'vue'
import { EventEmitter } from '@/hooks/useEventBus'

const props = defineProps({ focus$: EventEmitter<void> })
</script>

<template>
  <div>
    <span :style="{ marginRight: '20px' }">您收到了一条消息</span>
    <button type="button" @click="props.focus$?.emit()">回复</button>
  </div>
</template>

<style lang="less" scoped></style>
