import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  
  resolve:{
    alias:[
      {
        find:'@',
        replacement:resolve(__dirname,'src')
      }
    ]
  },

  server: {
    port: 3000, // 自定义端口号  
    fs: {
      strict: false
    },
    open: true,
    cors: true,
    hmr: true, // 开启热更新
  },
})
