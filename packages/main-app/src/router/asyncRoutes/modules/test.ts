// 用户管理
import { Layout } from '@/router/layout'
import { User } from "@element-plus/icons-vue";

export default {
    path: "/maintest",
    name: 'maintest',
    component: Layout,
    order: 2,
    hidden: false,
    redirect: "maintestMsg",
    meta: {
        title: '测试',
        hideBreadcrumb: false,
        icon: User
    },
    children: [
        {
            path: '/maintestMsg',
            component: () => import("@/views/testMsg/index.vue"),
            name: 'maintestMsg',
            hidden: false,
            meta: {
                title: '测试通信',
            }
        }
    ]
}