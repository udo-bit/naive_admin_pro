import {useRoute} from "vue-router";
// @ts-ignore
import {loginRoute} from '~/routes/route-guard.ts'

export interface MenuState {
    active: string
}

export interface MenuStateFn {
    active: Ref<string>
    updateActive: (active: string) => void
}

const menuStateFn = (): MenuStateFn => {
    const route = useRoute()
    const state = reactive<MenuState>({
        active: '',
    })
    const updateActive = (active: string) => {
        state.active = active
    }
    watch(() => route.path, () => {
        if (route.path !== loginRoute) {
            updateActive(route.path)
        }
    })
    return {
        ...toRefs(state),
        updateActive
    }
}
const [useMenuStateProvider, useMenuState] = createInjectionState(menuStateFn)

export const useMenuStateInject = (): MenuStateFn => {
    return useMenuState() ?? {
        active: ref(''),
        updateActive: (_path: string) => {
        },
    }
}
// 抛出注入
export {
    useMenuStateProvider,
}
