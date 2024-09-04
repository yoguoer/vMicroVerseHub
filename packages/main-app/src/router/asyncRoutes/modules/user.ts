// 用户管理
import { Layout } from '@/router/layout'
import { User } from "@element-plus/icons-vue";

export default {
    path: "/mainuser",
    name: 'mainuser',
    component: Layout,
    order: 3,
    hidden: true,
    redirect: "mainuserList",
    meta: {
        title: '用户管理',
        hideBreadcrumb: false,
        icon: User
    },
    children: [
        {
            path: '/mainuserList',
            component: () => import("@/views/blankPage/index.vue"),
            name: 'mainuserList',
            hidden: false,
            meta: {
                title: '用户列表',
            }
        },
        {
            path: '/maingroup',
            component: () => import("@/views/blankPage/index.vue"),
            name: 'maingroup',
            hidden: false,
            meta: {
                title: '用户组列表',
            }
        },
        {
            path: '/mainauth',
            component: () => import("@/views/blankPage/index.vue"),
            name: 'mainauth',
            hidden: false,
            meta: {
                title: '权限列表',
            }
        }
    ]
}