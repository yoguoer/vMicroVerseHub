import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import initMyMicroApp from 'v-micro-app-plugin'

const app = createApp(App)
const store = createPinia()

app.use(router).use(ElementPlus).use(store)

const {default: microAppSetting } = await import('@/settings/microAppSetting')
const options = microAppSetting
// 初始化微前端插件  
await initMyMicroApp(app, options, router, store);

app.mount('#app')
