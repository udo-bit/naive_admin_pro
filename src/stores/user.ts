import {UserAccountLoginParams, userGetInfoApi, UserInfo, userLoginApi, UserMobileLoginParams} from "../api/user.ts";
import router from "../routes/index"
import {RouteRecordRaw} from "vue-router";
import dynamicRoutes, {rootRouter} from "../routes/dynamic-routes.ts";

export const useUserStore = defineStore('user', () => {
    const userInfo = ref<UserInfo>();
    const token = useAuthorization();
    const {message} = useGlobalConfig()

    // 动态路由
    const routerRecords = ref<RouteRecordRaw[]>([])

    const generateRoutes = async () => {
        const routerRecord = {
            ...rootRouter,
            children: dynamicRoutes
        }
        routerRecords.value = dynamicRoutes
        return routerRecord
    }

    const setUserInfo = (info: UserInfo | undefined) => {
        userInfo.value = info;
    }
    const setToken = (val: string | null) => {
        // @ts-ignore
        token.value = val;
    }

    const login = async (params: UserAccountLoginParams | UserMobileLoginParams) => {
        const {data} = await userLoginApi(params);
        console.log(data);
        if (data?.token) {
            setToken(data.token);
        }
    }

    const getUserInfo = async () => {
        const {data} = await userGetInfoApi()
        if (data)
            setUserInfo(data)
    }

    const logout = async () => {
        setToken(null)
        setUserInfo(undefined)
        message?.success("退出登陆成功", {duration: 3000})
        await router.replace({
            path: '/login',
            query: {
                redirect: router.currentRoute.value.path,
            },
        })
    }

    return {
        userInfo,
        token,
        setUserInfo,
        setToken,
        login,
        getUserInfo,
        logout,
        generateRoutes
    }

})
