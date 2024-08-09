import {layoutThemeConfig} from "../config/layout-theme.ts";





export const useLayoutTheme = () => createGlobalState(
    ()=>useLocalStorage('layoutTheme',layoutThemeConfig)
);
