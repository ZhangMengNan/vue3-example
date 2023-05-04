<script setup lang="ts">
import { ref } from 'vue'
import useImage from '@/hooks/useImage'

const imageOptions = ref({ src: 'https://place.dog/300/200' })
const { isLoading, error } = useImage(imageOptions)

function change() {
  const time = new Date().getTime()
  imageOptions.value.src = `https://place.dog/300/200?t=${time}`
}
</script>

<template>
  <div v-if="isLoading" class="w-[300px] h-[200px] animate-pulse bg-gray-500/5 p-2">Loading...</div>
  <div v-else-if="error">Failed</div>
  <img v-else :src="imageOptions.src" class="w-[300px] h-[200px]" />
  <button @click="change">Change</button>
</template>

<style lang="less" scoped>
button {
  padding: 3px 15px;
  background-color: var(--vp-c-brand);
  border: none;
  outline: none;
  color: white;
  margin: 0.5rem 0;
  border-bottom: 2px solid var(--vp-c-brand-dark);
  text-shadow: 1px 1px 1px var(--vp-c-brand-dark);
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;
  vertical-align: middle;
}
</style>
