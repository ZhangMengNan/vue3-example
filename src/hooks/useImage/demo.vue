<script setup lang="ts">
import { ref } from 'vue'
import useImage from '@/hooks/useImage'

import Container from '@/components/Container.vue'

const imageOptions = ref({ src: 'https://place.dog/300/200' })
const { isLoading, error } = useImage(imageOptions)

function change() {
  const time = new Date().getTime()
  imageOptions.value.src = `https://place.dog/300/200?t=${time}`
}
</script>

<template>
  <Container>
    <div v-if="isLoading" class="w-[300px] h-[200px] animate-pulse bg-gray-500/5 p-2">
      Loading...
    </div>
    <div v-else-if="error" class="color-red-600">Failed</div>
    <img v-else :src="imageOptions.src" class="w-[300px] h-[200px]" />
    <a-button type="primary" @click="change" class="mt">更换图片</a-button>
  </Container>
</template>

<style lang="less" scoped></style>
