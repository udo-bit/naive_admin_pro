import logo from "~/assets/vue.svg";

export interface LayoutTheme {
    title?: string;
    layout: 'mix' | 'side' | 'top';
    headerHeight: number;
    logo?: string;
    sideWidth?: number;
    sideCollapsedWidth?: number;
    showSiderTrigger: boolean | 'bar' | 'arrow-circle';
    collapsed: boolean;
    layoutStyle: 'dark' | 'light' | 'inverted' | string;
    dark?:boolean,

}


export const layoutThemeConfig: LayoutTheme = {
    title: 'Naive Admin Pro',
    layout: 'mix',
    headerHeight: 48,
    logo,
    sideWidth: 240,
    sideCollapsedWidth: 48,
    showSiderTrigger: 'bar',
    collapsed: false,
    layoutStyle: 'mix',
};

export interface LayoutType {
    key: 'mix' | 'side' | 'top';
    id: string;
    inverted?: boolean;
    title?: string;
    dark?:boolean
}

