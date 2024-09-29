// 用户管理
import { Layout } from "@/router/layout";
import { User } from "@element-plus/icons-vue";

export default {
  path: "/echarts",
  name: "echarts",
  component: Layout,
  order: 2,
  hidden: false,
  redirect: "echartsTest",
  meta: {
    title: "图表",
    hideBreadcrumb: false,
    icon: User
  },
  children: [
    {
      path: "/echartsTest",
      component: () => import("@/views/echarts/echartsTest.vue"),
      name: "echartsTest",
      hidden: false,
      meta: {
        title: "测试通信"
      }
    }
  ]
};
