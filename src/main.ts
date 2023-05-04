import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'

import App from './App.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Test from '@/views/Test.vue'
import EventEmitter from '@/views/EventEmitter/index.vue'
import Debounce from '@/views/Debounce.vue'
import Throttle from '@/views/Throttle.vue'
import IntersectionObserver from '@/views/IntersectionObserver.vue'
import MutationObserver from '@/views/MutationObserver.vue'
import Image from '@/views/Image.vue'

import Worker from '../worker?worker'
import { version } from '../package.json'
import 'ant-design-vue/dist/antd.css'
import './styles/vars.less'
import 'virtual:uno.css'

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
    },
    {
      path: '/event/emitter',
      name: 'EventEmitter',
      component: EventEmitter
    },
    {
      path: '/debounce',
      name: 'Debounce',
      component: Debounce
    },
    {
      path: '/throttle',
      name: 'Throttle',
      component: Throttle
    },
    {
      path: '/intersection/observer',
      name: 'IntersectionObserver',
      component: IntersectionObserver
    },
    {
      path: '/mutation/observer',
      name: 'MutationObserver',
      component: MutationObserver
    },
    {
      path: '/image',
      name: 'Image',
      component: Image
    }
  ]
})

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(Antd)
app.mount('#app')
