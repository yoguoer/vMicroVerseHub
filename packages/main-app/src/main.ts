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

const options = {  
    projectName: 'main-app',  
    subAppConfigs: {  
      'appFirst': {  
        name: 'appFirst',  
        url: 'http://localhost:3000/#/' // 微应用的运行地址  
      },  
      'appSecond': {  
        name: 'appSecond',  
        url: 'http://localhost:4000/#/' // 另一个微应用的运行地址  
      }  
    },  
    isBaseApp: true, // 标记当前应用为主应用
    basePath: '/vivien', // 打包路径或其他基础路径 
    disableSandbox: false, // 是否禁用沙箱
    iframe: true, // 是否使用 iframe
  };  
  
  // 初始化微前端插件  
  await initMyMicroApp(app, options, router, store); 
  
app.use(router).use(ElementPlus).use(store)
app.mount('#app')
