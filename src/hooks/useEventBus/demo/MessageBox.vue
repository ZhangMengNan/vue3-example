<script setup lang="ts">
import { defineProps } from 'vue'
import { EventEmitter } from '@/hooks/useEventBus'

const props = defineProps({ focus$: EventEmitter<void> })
</script>

<template>
  <div>
    <span class="mr">您收到了一条消息</span>
    <a-button type="primary" @click="props.focus$?.emit()">回复</a-button>
  </div>
</template>

<style lang="less" scoped></style>
