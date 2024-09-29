/**
 * 无需权限同步加载的公共路由
 */
import type { AppRouteRecordRaw } from "@/router/types";

// 根路由
export const RootRoute: AppRouteRecordRaw = {
  path: "/",
  name: "Root",
  hidden: true,
  redirect: window.__MICRO_APP_ENVIRONMENT__ ? "/secondtest" : "/home",
  meta: {
    title: "首页"
  }
};

//登录页面
export const homeRoute: AppRouteRecordRaw = {
  path: "/home",
  name: "home",
  hidden: true,
  component: () => import("@/views/Home/index.vue"),
  meta: {
    title: "home"
  }
};

export default [RootRoute, homeRoute];
