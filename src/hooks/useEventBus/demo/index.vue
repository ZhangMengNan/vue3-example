<script setup lang="ts">
import useEventBus from '@/hooks/useEventBus'

import MessageBox from './MessageBox.vue'
import InputBox from './InputBox.vue'

const focus$ = useEventBus()
</script>

<template>
  <div class="w-sm my-0 mx-a p-8">
    <MessageBox :focus$="focus$" />
    <InputBox :focus$="focus$" />
  </div>
</template>

<style lang="less" scoped></style>
