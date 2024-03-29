<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  name: string
  prefix?: string
  color?: string
  svgClass?: string | string[]
}

const { prefix, name } = withDefaults(defineProps<Props>(), {
  prefix: 'icon',
  svgClass: 'svg-icon'
})
const symbolId = computed(() => `#${prefix}-${name}`)
</script>

<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :href="symbolId" :fill="color"></use>
  </svg>
</template>

<style lang="less" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
}
</style>
