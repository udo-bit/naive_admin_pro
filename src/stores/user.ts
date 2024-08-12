import {UserAccountLoginParams, userGetInfoApi, UserInfo, userLoginApi, UserMobileLoginParams} from "../api/user.ts";

export const useUserStore = defineStore('user', () => {
    const userInfo = ref<UserInfo>();
    const token = useAuthorization();
    const setUserInfo = (info: UserInfo) => {
        userInfo.value = info;
    }
    const setToken = (val: string) => {
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

    return {
        userInfo,
        token,
        setUserInfo,
        setToken,
        login,
        getUserInfo
    }

})
