import {createRouter, createWebHistory} from 'vue-router'
import staticRoutes from "./static-routes.ts";


const router = createRouter({
    routes: [
        ...staticRoutes,
        {
            path: '/login',
            component: () => import('~/pages/login/index.vue'),
            name: 'Login',
        },
        {
            path: '/error',
            name: 'error',
            component: () => import('~/pages/error/error.vue'),
        },
    ],
    history: createWebHistory(import.meta.env.VITE_APP_BASE ?? '/'),
})

export default router
