// 用户管理
import { Layout } from '@/router/layout'
import { User } from "@element-plus/icons-vue";

export default {
    path: "/firsttest-routers",
    name: 'firsttestRouters',
    component: Layout,
    order: 4,
    hidden: false,
    redirect: "firsttest-router",
    meta: {
        title: '测试路由',
        hideBreadcrumb: false,
        icon: User
    },
    children: [
        {
            path: '/firsttest-router',
            component: () => import("@/views/testRouters/index.vue"),
            name: 'firsttestRouter',
            hidden: true,
            meta: {
                title: '测试路由',
            }
        }
    ]
}