import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Antd from 'ant-design-vue'

import App from './App.vue'

import { routes } from '@/router'
import stores from '@/stores'

import 'ant-design-vue/dist/antd.css'
import 'virtual:uno.css'
import './styles/vars.less'

const history = createWebHistory()
const router = createRouter({ history, routes })
const app = createApp(App)

app.use(router)
app.use(stores)
app.use(Antd)
app.mount('#app')
