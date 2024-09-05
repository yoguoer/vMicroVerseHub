// 用户管理
import { Layout } from '@/router/layout'
import { User } from "@element-plus/icons-vue";

export default {
    path: "/secondtest",
    name: 'secondtest',
    component: Layout,
    order: 2,
    hidden: false,
    redirect: "secondtestMsg",
    meta: {
        title: '测试',
        hideBreadcrumb: false,
        icon: User
    },
    children: [
        {
            path: '/secondtestMsg',
            component: () => import("@/views/testMsg/index.vue"),
            name: 'secondtestMsg',
            hidden: true,
            meta: {
                title: '测试通信',
            }
        }
    ]
}