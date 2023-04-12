<script setup lang="ts">
import { ref } from 'vue'
import { message } from 'ant-design-vue'
import Mock from 'mockjs'

import useRequest from '@/hooks/useRequest'

const text = ref('')

// 默认请求
function getUsername(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) resolve(Mock.mock('@name'))
      else reject(new Error('Failed to get username'))
    }, 1000)
  })
}
const { data, error, loading: defaultLoading } = useRequest(getUsername)

// 手动触发
function editUsername(username: string): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) resolve()
      else reject(new Error('Failed to modify username'))
    }, 1000)
  })
}
const { loading: editLoading, run } = useRequest(editUsername, {
  manual: true,
  onSuccess: (_, params) => {
    text.value = ''
    message.success(`The username was changed to "${params[0]}" !`)
  },
  onError: (error) => message.error(error.message)
})
</script>

<template>
  <div>
    <h1>默认请求：</h1>
    <div v-if="defaultLoading">loading...</div>
    <div v-if="data">Username: {{ data }}</div>
    <div v-if="error">{{ error.message }}</div>
  </div>
  <div>
    <h1>手动触发：</h1>
    <input
      type="text"
      :value="text"
      @input="(event: Event) => (text = (event.target as HTMLInputElement).value)"
      placeholder="Please enter username"
      :style="{ width: '240px', marginRight: '16px' }"
    />
    <button :disabled="editLoading" type="button" @click="run(text)">
      {{ editLoading ? 'Loading' : 'Edit' }}
    </button>
  </div>
</template>

<style lang="less" scoped></style>
