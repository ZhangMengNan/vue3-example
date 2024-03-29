import { fileURLToPath } from 'url'
import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(), // HMR（热更新）已被 vueJsx 集成
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    UnoCSS(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  // 哪些文件是否需要预编译
  optimizeDeps: {
    // exclude: ['lodash-es'] // 例：lodash-es 插件内置许多其它第三方插件，如不需要预编译，在 network 会有许多格外的资源请求
  },
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) }
  },
  build: {
    manifest: true
  },
  // base: './',
  server: { port: 8080, open: true }
})
