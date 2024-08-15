// 用户管理
import { Layout } from '@/router/layout'
import { User } from "@element-plus/icons-vue";

export default {
    path: "/firstuser",
    name: 'firstuser',
    component: Layout,
    order: 2,
    hidden: false,
    redirect: "firstuserList",
    meta: {
        title: '用户管理',
        hideBreadcrumb: false,
        icon: User
    },
    children: [
        {
            path: '/firstuserList',
            component: () => import("@/views/blankPage/index.vue"),
            name: 'firstuserList',
            hidden: false,
            meta: {
                title: '用户列表',
            }
        },
        {
            path: '/firstgroup',
            component: () => import("@/views/blankPage/index.vue"),
            name: 'firstgroup',
            hidden: false,
            meta: {
                title: '用户组列表',
            }
        },
        {
            path: '/firstauth',
            component: () => import("@/views/blankPage/index.vue"),
            name: 'firstauth',
            hidden: false,
            meta: {
                title: '权限列表',
            }
        }
    ]
}