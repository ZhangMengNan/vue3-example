import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'

import App from './App.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Test from '@/views/Test.vue'

import Worker from '../worker?worker'
import { version } from '../package.json'
import 'ant-design-vue/dist/antd.css'
console.log('version', version)

// const worker = new Worker()
// worker.onmessage = function (e) {
//   console.log('e', e)
// }

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(Antd)
app.mount('#app')
