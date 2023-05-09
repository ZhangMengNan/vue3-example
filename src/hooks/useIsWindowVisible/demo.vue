<script setup lang="ts">
import { ref, watch } from 'vue'

import useIsWindowVisible from '@/hooks/useIsWindowVisible'
import useDebounce from '@/hooks/useDebounce'

import Container from '@/components/Container.vue'

const startMessage = '💡 最小化页面或切换标签然后返回'
const message = ref(startMessage)
const visibility = useIsWindowVisible()

const { run } = useDebounce(() => (message.value = startMessage), 3000)

watch(visibility, (current, previous) => {
  if (!current && previous) return

  message.value = '🎉 欢迎回来!'
  run()
})
</script>

<template>
  <Container>
    <div class="content">{{ message }}</div>
  </Container>
</template>

<style lang="less" scoped>
.content {
  background: var(--vp-code-block-bg);
  position: relative;
  border-radius: 8px;
  padding: 2rem;
  transition: background-color 0.5s;
}
</style>
