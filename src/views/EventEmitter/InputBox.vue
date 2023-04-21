<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { EventEmitter } from '@/hooks/useEventBus'

const inputRef = ref()
const props = defineProps({ focus$: EventEmitter<void> })

props.focus$?.useSubscription(() => inputRef.value.focus())
</script>

<template>
  <a-input ref="inputRef" placeholder="输入回复" :style="{ marginTop: '20px', width: '200px' }" />
</template>

<style lang="less" scoped></style>
