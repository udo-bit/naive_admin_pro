import {layoutThemeConfig} from "../config/layout-theme.ts";


export const useLayoutTheme = () => createGlobalState(
    () => useStorage('layoutTheme', layoutThemeConfig)
);
