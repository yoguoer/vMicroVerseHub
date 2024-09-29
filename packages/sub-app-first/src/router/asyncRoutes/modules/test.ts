// 用户管理
import { Layout } from "@/router/layout";
import { User } from "@element-plus/icons-vue";

export default {
  path: "/firsttest",
  name: "firsttest",
  component: Layout,
  order: 2,
  hidden: false,
  redirect: "firsttestMsg",
  meta: {
    title: "测试通信",
    hideBreadcrumb: false,
    icon: User
  },
  children: [
    {
      path: "/firsttestMsg",
      component: () => import("@/views/testMsg/index.vue"),
      name: "firsttestMsg",
      hidden: true,
      meta: {
        title: "测试通信"
      }
    }
  ]
};
