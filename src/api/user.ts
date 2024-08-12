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
