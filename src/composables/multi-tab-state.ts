import {omit} from "lodash-es";
import {MULTI_TAB_STORE_KEY, TabItem} from "../layouts/multi-tab/type.ts";

export const useMultiTabProvider = () => {
    const state = reactive({
        // tab列表
        tabList: [],
        // 选中的数据
        current: '',
    })
    provide(MULTI_TAB_STORE_KEY, state)
    // 返回选中的状态信息
    return state
}

export const useMultiTabInject = () => {
    // 给他加一个！我们确定是一定有值的
    return inject(MULTI_TAB_STORE_KEY)!
}


export const useMultiTab = () => {
    const state = useMultiTabInject()
    const tabList = computed(() => state.tabList)
    const current = computed(() => state.current)
    const route = useRoute()
    const router = useRouter()
    const {message} = useGlobalConfig()

    const closeTab = (path?: string) => {
        // 如果path为空
        if (!path) {
            path = current.value
        }
        // 如果当前仅有一个页签，禁止关闭
        if (tabList.value.length <= 1) {
            message?.info("至少保留一个页签")
            return
        }
        const currentIndex = tabList.value.findIndex((item) => item.path === path)
        if (path !== current.value) {
            // 如果删除的不是当前页面，不需要切换
            state.tabList.splice(currentIndex, 1)
            return
        }
        const targetIndex = currentIndex === 0 ? currentIndex + 1 : currentIndex - 1
        router.replace(tabList.value[targetIndex].route!).then(() => {
            state.tabList.splice(currentIndex, 1)
        }).catch()
    }

    const refresh = (path ?: string) => {
        if (!path) {
            path = current.value
        }
        router.replace({
            path: '/redirect' + path
        }).catch().then(() => {
        })
    }

    watch(() => route.fullPath, () => {
        if (current.value !== route.path) {
            state.current = route.path
        }
        // 查找当前的tab是否存在
        const tabIndex = tabList.value.findIndex((item) => item.path === route.path)
        if (tabIndex !== -1) {
            // 如果存在就更新
            state.tabList[tabIndex].route = omit(route, 'matched')
        } else {
            const tabItem: TabItem = {
                route: omit(route, 'matched'),
                path: route.path,
                tabTitle: route.meta.title
            }
            state.tabList.push(tabItem)
        }
    }, {immediate: true})

    return {
        tabList,
        current,
        closeTab,
        refresh
    }
}
