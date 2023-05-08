<script setup lang="ts">
import useEventBus from '@/hooks/useEventBus'

import MessageBox from './MessageBox.vue'
import InputBox from './InputBox.vue'
import Container from '@/components/Container.vue'

const focus$ = useEventBus()
</script>

<template>
  <Container>
    <MessageBox :focus$="focus$" />
    <InputBox :focus$="focus$" />
  </Container>
</template>

<style lang="less" scoped></style>
