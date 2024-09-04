// 用户管理
import { Layout } from '@/router/layout'
import { User } from "@element-plus/icons-vue";

export default {
    path: "/maintest-routers",
    name: 'maintestRouters',
    component: Layout,
    order: 4,
    hidden: false,
    redirect: "maintest-router",
    meta: {
        title: '测试路由',
        hideBreadcrumb: false,
        icon: User
    },
    children: [
        {
            path: '/maintest-router',
            component: () => import("@/views/testRouters/index.vue"),
            name: 'maintestRouter',
            hidden: true,
            meta: {
                title: '测试路由',
            }
        }
    ]
}