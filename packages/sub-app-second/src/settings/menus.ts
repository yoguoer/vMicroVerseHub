import asyncRoutes from "@/router/asyncRoutes"
import type { AppRouteModule } from "@/router/types";

const getMenus = (asyncRoutes: Array<AppRouteModule> | AppRouteModule) => {
    if(asyncRoutes?.hidden)  return null
    if(asyncRoutes instanceof Array) {
        return asyncRoutes.map((route) => {
          return {
            title: route?.meta?.title,
            name: route.name,
            children: route.children ? getMenus(route.children.filter(r => !r.hidden)) : []
          }
        })
    }else {
      return  asyncRoutes?.hidden ? null :{
        title: asyncRoutes?.meta?.title,
        name: asyncRoutes?.name,
        children: asyncRoutes?.children ? getMenus(asyncRoutes?.children.filter(r => !r.hidden)) : []
      }
    }
}
const menus = getMenus(asyncRoutes)
export default menus