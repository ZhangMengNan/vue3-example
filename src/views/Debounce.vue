<script setup lang="ts">
import { ref } from 'vue'
import { Button } from 'ant-design-vue'
import useDebounce from '@/hooks/useDebounce'

const count = ref(0)

const { run, cancel } = useDebounce(() => {
  count.value++
}, 3000)
</script>

<template>
  <div>{{ count }}</div>
  <Button @click="run">点击</Button>
  <Button @click="cancel">取消</Button>
</template>

<style lang="less" scoped></style>
