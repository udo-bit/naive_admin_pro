import axios, {AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig} from 'axios'
import {STORAGE_AUTHORIZATION_KEY, useAuthorization} from "../composables/authorization.ts";
import router from "../routes/index"

const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API || '/',
    timeout: 5000,
})

const requestHandler = async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
    const authorization = useAuthorization();
    /**
     * 判断是否存在token，如果存在的话，则每个http header都加上token
     */
    if (authorization.value) {
        config.headers.set(STORAGE_AUTHORIZATION_KEY, authorization.value)
    }
    return config
}

export interface ResponseBody<T = any> {
    code: number
    data?: T
    msg: string
}

const responseHandler = (response: AxiosResponse) => {
    return response.data
}

const errorHandler = (error: AxiosError): Promise<any> => {
    // const notification = useNotification()
    const token = useAuthorization()
    const {notification} = useGlobalConfig()
    if (error.response) {
        const {data, status, statusText} = error.response as AxiosResponse<ResponseBody>
        if (status === 401) {
            notification?.error({
                title: 'global.request.error.401',
                content: data?.msg || statusText,
                duration: 3000,
            })
            /**
             * 这里处理清空用户信息和token的逻辑，后续扩展
             */
            token.value = null
            router
                .replace({
                    path: '/login',
                    query: {
                        // 重定向到登录页，并携带当前页面的路径
                        redirect: router.currentRoute.value.path,
                    },
                })
                .then(() => {
                })
        } else if (status === 403) {
            console.log('403')
            notification?.error({
                title: 'global.request.error.403',
                content: data?.msg || statusText,
                duration: 3000,
            })
        } else if (status === 500) {
            notification?.error({
                title: 'global.request.error.500',
                content: data?.msg || statusText,
                duration: 3000,
            })
        } else {
            notification?.error({
                title: 'global.request.error.other',
                content: data?.msg || statusText,
                duration: 3000,
            })
        }
    }
    return Promise.reject(error)
}

instance.interceptors.request.use(requestHandler)
instance.interceptors.response.use(responseHandler, errorHandler)
export default instance

export const useGet = <T = any, R = any>(url: string, params?: T, config?: AxiosRequestConfig): Promise<ResponseBody<R>> => {
    return instance.request({
        url,
        params,
        method: 'GET',
        ...config,
    })
}

export const usePost = <T = any, R = any>(url: string, data?: T, config?: AxiosRequestConfig): Promise<ResponseBody<R>> => {
    return instance.request({
        url,
        data,
        method: 'POST',
        ...config,
    })
}

export const usePut = <T = any, R = any>(url: string, data?: T, config?: AxiosRequestConfig): Promise<ResponseBody<R>> => {
    return instance.request({
        url,
        data,
        method: 'PUT',
        ...config,
    })
}

export const useDelete = <T = any, R = any>(url: string, data?: T, config?: AxiosRequestConfig): Promise<ResponseBody<R>> => {
    return instance.request({
        url,
        data,
        method: 'DELETE',
        ...config,
    })
}






