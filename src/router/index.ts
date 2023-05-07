import Home from '@/views/Home.vue'

import useRequest from '@/hooks/useRequest/demo.vue'
import useDebounce from '@/hooks/useDebounce/demo.vue'
import useEventBus from '@/hooks/useEventBus/demo/index.vue'
import useImage from '@/hooks/useImage/demo.vue'
import useInViewport from '@/hooks/useInViewport/demo.vue'
import useIsWindowVisible from '@/hooks/useIsWindowVisible/demo.vue'
import useMutationObserver from '@/hooks/useMutationObserver/demo.vue'
import useSetInterval from '@/hooks/useSetInterval/demo.vue'
import useThrottle from '@/hooks/useThrottle/demo.vue'
import useTheme from '@/hooks/useTheme/demo.vue'

import Demo from '@/views/demo.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  },
  {
    path: '/useRequest',
    name: 'useRequest',
    component: useRequest
  },
  {
    path: '/useDebounce',
    name: 'useDebounce',
    component: useDebounce
  },
  {
    path: '/useEventBus',
    name: 'useEventBus',
    component: useEventBus
  },
  {
    path: '/useImage',
    name: 'useImage',
    component: useImage
  },
  {
    path: '/useInViewport',
    name: 'useInViewport',
    component: useInViewport
  },
  {
    path: '/useIsWindowVisible',
    name: 'useIsWindowVisible',
    component: useIsWindowVisible
  },
  {
    path: '/useMutationObserver',
    name: 'useMutationObserver',
    component: useMutationObserver
  },
  {
    path: '/useSetInterval',
    name: 'useSetInterval',
    component: useSetInterval
  },
  {
    path: '/useThrottle',
    name: 'useThrottle',
    component: useThrottle
  },
  {
    path: '/useTheme',
    name: 'useTheme',
    component: useTheme
  }
]

export { routes }
