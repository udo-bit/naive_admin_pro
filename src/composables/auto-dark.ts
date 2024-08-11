import {useAppStore} from "../stores/app.ts";

const isDark = useDark();
const toggleDark = useToggle(isDark);

export const useAutoDark = () => {
    // const isPreferDark = usePreferredDark();
    const appStore = useAppStore();
    // @ts-ignore
    if (appStore.layout.layoutStyle === 'dark') {
        toggleDark(true);
    } else {
        toggleDark(false);
    }
}
