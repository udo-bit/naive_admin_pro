import type {FormInst, FormRules} from 'naive-ui'
// @ts-ignore
import type {UserAccountLoginParams} from '~/api/user.ts'
import {useUserStore} from "../../../stores/user.ts";
// @ts-ignore
import router from "~/routes";

export const useAccountLogin = () => {
    const formRef = ref<FormInst>()
    const loading = ref(false)
    const userStore = useUserStore()

    const model = reactive<UserAccountLoginParams>({
        username: null,
        password: null,
    })

    const rules = reactive<FormRules>({
        username: [
            {
                required: true,
                renderMessage: () => "请输入用户名",
            },
            {
                min: 5,
                max: 20,
                renderMessage: () => "用户名长度在 5 到 20 个字符",
            },
        ],
        password: [
            {
                required: true,
                renderMessage: () => "请输入密码",
            },
            {
                min: 5,
                max: 20,
                renderMessage: () => "密码长度在 5 到 20 个字符",
            },
        ],
    })

    const login = async () => {
        loading.value = true
        try {
            await formRef.value?.validate()
            await userStore.login(model)
            loading.value = false
            const redirect = router.currentRoute.value?.params?.redirect as string
            await router.replace(redirect || '/')
        } catch (e) {
            loading.value = false
        }
    }

    return {
        formRef,
        loading,
        model,
        login,
        rules,

    }
}
