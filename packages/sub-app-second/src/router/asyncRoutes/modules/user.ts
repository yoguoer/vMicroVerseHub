// 用户管理
import { Layout } from "@/router/layout";
import { User } from "@element-plus/icons-vue";

export default {
  path: "/seconduser",
  name: "seconduser",
  component: Layout,
  order: 2,
  hidden: false,
  redirect: "seconduserList",
  meta: {
    title: "用户管理",
    hideBreadcrumb: false,
    icon: User
  },
  children: [
    {
      path: "/seconduserList",
      component: () => import("@/views/blankPage/index.vue"),
      name: "seconduserList",
      hidden: false,
      meta: {
        title: "用户列表"
      }
    },
    {
      path: "/secondgroup",
      component: () => import("@/views/blankPage/index.vue"),
      name: "secondgroup",
      hidden: false,
      meta: {
        title: "用户组列表"
      }
    },
    {
      path: "/secondauth",
      component: () => import("@/views/blankPage/index.vue"),
      name: "secondauth",
      hidden: false,
      meta: {
        title: "权限列表"
      }
    }
  ]
};
