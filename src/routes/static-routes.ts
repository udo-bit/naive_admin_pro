import {RouteRecordRaw} from "vue-router";

const staticRoutes: RouteRecordRaw[] = [
    {
        path: '/login',
        name: 'login',
        component: () => import('~/pages/login/index.vue'),
    },
    {
        path: '/error',
        name: 'error',
        component: () => import('~/pages/error/error.vue'),
    },
    {
        path: '/redirect/:path(.*)',
        name: 'redirect',
        component: () => import('~/pages/redirect/index.vue'),
    },
    {
        path: '/:pathMatch(.*)',
        component: () => import('~/pages/error/error.vue'),
    },

]
export default staticRoutes
