import {IncludeNull} from "../utils/types.ts";

export interface UserInfo {
    id: number
    username: string
    nickname?: string
    avatar?: string
    email?: string
    mobile?: string
    signature?: string
    gender?: number
    realName?: string
    birthday?: string
    money?: number
}

export const userLoginUrl = '/user/login'

export interface UserAccountLoginParams {
    username: IncludeNull<string>
    password: IncludeNull<string>
    captcha?: IncludeNull<string>
}

export interface UserMobileLoginParams {
    mobile: IncludeNull<string>
    captcha: IncludeNull<string>
    type: 'mobile'
}

export interface UserLoginResult {
    token: string
}

// login api
export const userLoginApi = (params: UserAccountLoginParams | UserMobileLoginParams) => {
    return usePost<UserMobileLoginParams | UserAccountLoginParams, UserLoginResult>(userLoginUrl, params)
}

export const userSendCodeUrl = '/user/send-code'

export type UserSendCodeParams = Pick<UserMobileLoginParams, 'mobile'>

export const userSendCodeApi = (params: UserSendCodeParams) => {
    return usePost<UserSendCodeParams, any>(userSendCodeUrl, params)
}

export const userGetInfoUrl = '/user/info'

export const userGetInfoApi = () => {
    return useGet<any, UserInfo>(userGetInfoUrl)
}

export interface MenuInfo {
    // 主键id
    id: number
    // 父级id
    pid?: number
    // 路由地址
    path: string
    // 路由名称
    name?: string
    // 路由标题
    title: string
    // 路由图标
    icon?: string
    // 路由组件
    component?: string
    // 路由重定向
    redirect?: string
}

// 路由地址
export const userRoutesUrl = '/user/menus'
// 调用接口
export const userRoutesApi = () => {
    return useGet<any, MenuInfo[]>(userRoutesUrl)
}


