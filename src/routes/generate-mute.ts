import type {RouteRecordRaw} from "vue-router";
import {MenuOption} from "naive-ui";
import SideTitle from "../layouts/side-menu/side-title.vue";
import SideIcon from "../layouts/side-menu/side-icon.vue";


export const generateMenu = (routes: RouteRecordRaw[]): MenuOption[] => {
    const menus: MenuOption[] = []
    for (const route of routes) {
        console.log(route)
        const currentMenu: MenuOption = {
            key: route.path,
            label: () => h(SideTitle, {route}),
        }
        if (route.children && route.children.length > 0)
            currentMenu.children = generateMenu(route.children)
        if (route?.meta?.icon) {
            console.log('icon', route.meta.icon)
            // @ts-ignore
            currentMenu.icon = () => h(SideIcon, {icon: route?.meta.icon})
        }

        menus.push(currentMenu)

    }
    return menus
}