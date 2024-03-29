import { createApp } from 'vue'
import Antd from 'ant-design-vue'

import App from './App.vue'

import router from '@/router'
import stores from '@/stores'
import SvgIcon from '@/components/SvgIcon.vue'

import 'ant-design-vue/dist/antd.css'
import 'virtual:uno.css'
import './styles/vars.less'
import 'virtual:svg-icons-register'

const app = createApp(App)

app.use(router)
app.use(stores)
app.use(Antd)
app.component('svg-icon', SvgIcon)
app.mount('#app')
