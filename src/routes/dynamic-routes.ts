import {Layout} from "../layouts";
import type {RouteRecordRaw} from "vue-router";

const dynamicRoutes: RouteRecordRaw[] = [
    {
        path: '/home',
        component: () => import("../pages/index.vue"),
        meta: {
            title: 'Home',
        }
    },
    {
        path: 'workspace',
        component: () => import("../pages/workspace/index.vue"),
        name: 'workspace',
        meta: {
            title: '工作台'
        }
    }
]

export const rootRouter: RouteRecordRaw = {
    path: '/',
    name: 'default-router',
    redirect: '/home',
    component: Layout,
    children: [],
}

export default dynamicRoutes
