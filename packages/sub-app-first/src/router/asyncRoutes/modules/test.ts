// 用户管理
import { Layout } from '@/router/layout'
import { User } from "@element-plus/icons-vue";

export default {
    path: "/firsttest",
    name: 'firsttest',
    component: Layout,
    order: 2,
    hidden: false,
    redirect: "firsttestMsg",
    meta: {
        title: '测试',
        hideBreadcrumb: false,
        icon: User
    },
    children: [
        {
            path: '/firsttestMsg',
            component: () => import("@/views/testMsg/index.vue"),
            name: 'firsttestMssg',
            hidden: false,
            meta: {
                title: '测试通信',
            }
        }
    ]
}