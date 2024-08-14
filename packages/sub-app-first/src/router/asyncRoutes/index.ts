import type { AppRouteModule } from "@/router/types";
// import.meta.globEager() 直接引入所有的模块 Vite 独有的功能
const modules = import.meta.glob('./modules/*.ts', { eager: true, import: 'default' })

//  获取异步路由列表
function getAsyncRoutes(): Array<AppRouteModule> {
    let asyncRoutes: Array<AppRouteModule> = [];
    Object.keys(modules).forEach((key) => {
        const mod = modules[key] || {};
        asyncRoutes = Array.isArray(mod) ? [...asyncRoutes, ...mod] : [...asyncRoutes, mod];
    });
    return asyncRoutes
}


//异步路由：通过后端接口遍历生成
const asyncRoutes = getAsyncRoutes();
export default asyncRoutes

