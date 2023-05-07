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
  <div class="w-sm my-0 mx-a p-8">
    <div>
      <h1 class="mb">默认请求：</h1>
      <div v-if="defaultLoading">loading...</div>
      <div v-if="data">Username: {{ data }}</div>
      <div v-if="error" class="color-red-600">{{ error.message }}</div>
    </div>
    <div class="mt-8">
      <h1 class="mb">手动触发：</h1>
      <a-input
        :value="text"
        placeholder="请输入用户名"
        @change="(event: Event) => (text = (event.target as HTMLInputElement).value)"
        class="mb"
      />
      <a-button type="primary" :disabled="editLoading" :loading="editLoading" @click="run(text)">
        Edit
      </a-button>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
