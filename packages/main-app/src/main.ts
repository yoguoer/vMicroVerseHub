import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router/index";
import ElementPlus from "element-plus";
import "element-plus/theme-chalk/index.css";
import initMyMicroApp from "v-micro-app-plugin";
import microAppSetting from "@/settings/microAppSetting";

const app = createApp(App);
const store = createPinia();
app.use(router).use(ElementPlus).use(store);

// 初始化微前端插件
const options = microAppSetting;
const microApp = await initMyMicroApp(app, options, router, store);
// 监听所有子应用的路由变化
microApp.router.afterEach((to, from, appName) => {
  console.log("全局后置守卫 afterEach: ", to, from, appName);
});

// 监听某个子应用的路由变化
microApp.router.afterEach({
  appFirst(to, from) {
    console.log("appFirst 的后置守卫 afterEach ", to, from);
  },
  appSecond(to, from) {
    console.log("appSecond 的后置守卫 beforeEach ", to, from);
  }
});

app.mount("#app");
