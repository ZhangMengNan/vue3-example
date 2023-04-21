<script setup lang="ts">
import useEventEmitter from '@/hooks/useEventBus'

import MessageBox from './MessageBox.vue'
import InputBox from './InputBox.vue'

const focus$ = useEventEmitter()
</script>

<template>
  <div>
    <MessageBox :focus$="focus$" />
    <InputBox :focus$="focus$" />
  </div>
</template>

<style lang="less" scoped></style>
