// 用户管理
import { Layout } from '@/router/layout'
import { User } from "@element-plus/icons-vue";

export default {
    path: "/secondtest-routers",
    name: 'secondtestRouters',
    component: Layout,
    order: 4,
    hidden: false,
    redirect: "secondtest-router",
    meta: {
        title: '测试路由',
        hideBreadcrumb: false,
        icon: User
    },
    children: [
        {
            path: '/secondtest-router',
            component: () => import("@/views/testRouters/index.vue"),
            name: 'secondtestRouter',
            hidden: true,
            meta: {
                title: '测试路由',
            }
        }
    ]
}