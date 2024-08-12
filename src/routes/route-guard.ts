import router from './index'
import {AxiosError} from "axios";

export const allowRoutes = ['/404', '/401', '/500', '/403', '/error']

export const loginRoute = '/login'

export const allowRouteHasLoin = [...allowRoutes, loginRoute]

router.beforeEach(async (to, _from, next) => {
    const {loadingBar} = useGlobalConfig()
    loadingBar?.start()
    const token = useAuthorization()
    const userStore = useUserStore()
    if (!token.value) {
        if (!allowRouteHasLoin.includes(to.path)) {
            next({
                path: '/login',
                query: {
                    redirect: to.path,
                },
            })
            return
        }
    } else {
        if (!userStore.userInfo && !allowRoutes.includes(to.path)) {
            // 如果用户信息不存在，那么就需要获取用户信息
            try {
                await userStore.getUserInfo()
                if (to.path === loginRoute) {
                    // 跳转至首页
                    next({
                        path: '/',
                    })
                    return
                }
            } catch (e) {

                if (e instanceof AxiosError) {
                    if (e.response?.status === 401)
                        return
                }

                next({
                    path: '/error',
                    query: {
                        redirect: to.path,
                    },
                })
                return
            }

        }
    }

    next()
})

router.afterEach((to) => {
    const appStore = useAppStore()
    const {loadingBar} = useGlobalConfig()
    const title = to.meta?.title
    loadingBar?.finish()
    if (title) {
        document.title = `${title} - ${appStore.layout.title}`
    } else {
        if (appStore.layout.title)
            document.title = appStore.layout.title
    }
})

