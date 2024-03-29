<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const list = ['个人问答机器人', '企业专属机器人']
const title = ref('')
const index = ref(0) // 当前数组位置
const direction = ref(false)
const timer = ref<any>(null)

const startTimer = () => {
  timer.value = setInterval(() => {
    clock()
  }, 150)
}

const clearTimer = () => clearInterval(timer.value)

const clock = () => {
  if (title.value.length === list[index.value].length || direction.value) {
    // if (!direction.value) {
    //   direction.value = true
    //   clearTimer()
    //   setTimeout(() => {
    //     startTimer()
    //   }, 500)
    // } else {
    //   title.value = title.value.substring(0, title.value.length - 1)
    // }
  } else {
    title.value = list[index.value].substring(0, title.value.length + 1)
  }

  if (title.value.length === 0) {
    direction.value = false
    index.value = (index.value + 1) % list.length
  }
}

onMounted(() => {
  startTimer()
})

onBeforeUnmount(() => {
  clearTimer()
})
</script>

<template>
  <div>
    <span
      id="Chato_rolling_click"
      class="font-medium text-center bg-clip-text text-transparent text-[64px] leading-[95px] min-h-[95px] tracking-[8px] lg:text-[32px] lg:leading-[48px] lg:min-h-[48px] lg:tracking-[1px] line-grad-bg"
    >
      {{ title }}
    </span>
    <svg-icon svg-class="w-4 h-[75px] lg:w-2 lg:h-9" name="home_play" />
  </div>
</template>

<style lang="less" scoped>
.line-grad-bg {
  background-image: linear-gradient(117deg, #0547ff -84%, #d683ff 125%);
}
</style>
