// 用户管理
import { Layout } from '@/router/layout'
import { User } from "@element-plus/icons-vue";

export default {
    path: "/user",
    name: 'user',
    component: Layout,
    order: 3,
    hidden: false,
    redirect: "userList",
    meta: {
        title: '用户管理',
        hideBreadcrumb: false,
        icon: User
    },
    children: [
        {
            path: '/userList',
            component: () => import("@/views/blankPage/index.vue"),
            name: 'userList',
            hidden: false,
            meta: {
                title: '用户列表',
            }
        },
        {
            path: '/group',
            component: () => import("@/views/blankPage/index.vue"),
            name: 'group',
            hidden: false,
            meta: {
                title: '用户组列表',
            }
        },
        {
            path: '/auth',
            component: () => import("@/views/blankPage/index.vue"),
            name: 'auth',
            hidden: false,
            meta: {
                title: '权限列表',
            }
        }
    ]
}