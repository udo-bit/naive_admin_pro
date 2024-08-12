import type {FormInst, FormRules} from 'naive-ui'
// @ts-ignore
import type {UserMobileLoginParams} from '~/api/user'
// @ts-ignore
import router from '~/routes'
import {userSendCodeApi} from "../../../api/user.ts";

export const useMobileLogin = () => {
    const message = useMessage()
    const mLoading = ref(false)
    const mFormRef = ref<FormInst>()
    const userStore = useUserStore()
    const mModel = reactive<UserMobileLoginParams>({
        mobile: null,
        code: null,
        type: 'mobile',
    })
    const mRules = reactive<FormRules>({
        mobile: [
            {
                key: 'mobile',
                required: true,
                renderMessage: () => 'login.mobile.required',
            },
            {
                key: 'mobile',
                pattern: /^1[3456789]\d{9}$/,
                renderMessage: () => 'login.mobile.rule',
            },
        ],
        code: [
            {
                required: true,
                renderMessage: () => 'login.mobile.verification-code.required',
            },
            {
                min: 6,
                max: 6,
                renderMessage: () => 'login.mobile.verification-code.rule',
            },
        ],
    })
    const mLogin = async () => {
        mLoading.value = true
        try {
            await mFormRef.value?.validate()
            await userStore.login(mModel)
            mLoading.value = false
            const redirect = router.currentRoute.value?.params?.redirect as string
            await router.replace(redirect || '/')
        } catch (e) {
            mLoading.value = false
        }
    }

    const counter = ref(120)
    const counterDownState = ref(false)
    const startCountdown = () => {
        counter.value = 120
        const timer = setInterval(() => {
            if (counter.value <= 0) {
                counterDownState.value = false
                clearInterval(timer)
                return
            }
            counter.value--
        }, 1000)
    }

    const sendCode = async () => {
        // 验证手机号是否已经填写
        const msgIns = message.loading("验证码发送中...")
        try {
            await mFormRef.value?.validate(undefined, rule => rule.key === 'mobile')
            startCountdown()
            await userSendCodeApi({mobile: mModel.mobile})
            msgIns.destroy()
            counterDownState.value = true
            message.success('验证码发送成功')
        } catch (e) {
            msgIns.destroy()
        }
    }


    return {
        mLoading,
        mFormRef,
        mRules,
        mModel,
        mLogin,
        sendCode,
    }
}
