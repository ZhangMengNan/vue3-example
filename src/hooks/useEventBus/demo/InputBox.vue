<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { EventEmitter } from '@/hooks/useEventBus'

const inputRef = ref()
const props = defineProps({ focus$: EventEmitter<void> })

props.focus$?.useSubscription((e) => inputRef.value.focus())
</script>

<template>
  <a-input ref="inputRef" placeholder="输入回复" class="mt" />
</template>

<style lang="less" scoped></style>
