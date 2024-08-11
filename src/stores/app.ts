import {layoutThemeConfig} from "../config/layout-theme.ts";
import {useLayoutTheme} from "../composables/layout-theme.ts";

const useAppStore = defineStore('app', () => {
    const defaultLayout = import.meta.env.DEV ? layoutThemeConfig : useLayoutTheme();
    const layout = reactive(unref(defaultLayout));
    const visible = ref(false);

    const updateVisible = (value: boolean) => {
        visible.value = value;
    }

    const updateCollapsed = (val: boolean) => {
        // @ts-ignore
        layout.collapsed = val;
    }

    return {
        layout,
        visible,
        updateVisible,
        updateCollapsed

    }

})

export {
    useAppStore
}
