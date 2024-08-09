import logo from "~/assets/vue.svg";
export interface LayoutTheme{
    title?:string;
    layout:'mix'|'side'|'top';
    headerHeight:number;
    logo?:string;
    sideWidth?:number;
    sideCollapsedWidth?:number;
    showSiderTrigger :boolean |'bar'|'arrow-circle';
}

export const layoutThemeConfig={
    title: 'Naive Admin Pro',
    layout: 'side',
    headerHeight: 48,
    logo,
    sideWidth: 240,
    sideCollapsedWidth: 48,
    showSiderTrigger: 'bar',
};

