<script setup lang="ts">
import { ref } from 'vue'
import { Button } from 'ant-design-vue'

import useThrottle from '@/hooks/useThrottle'

const count = ref(0)

const { run, cancel } = useThrottle(() => {
  count.value++
}, 3000)
</script>

<template>
  <div>{{ count }}</div>
  <Button @click="run">点击</Button>
  <Button @click="cancel">取消</Button>
</template>

<style lang="less" scoped></style>
