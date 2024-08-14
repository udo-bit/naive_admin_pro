import type {RouteRecordRaw} from 'vue-router'
import modules from './modules'
// @ts-ignore
import type {MenuInfo} from '~/api/user'
// @ts-ignore
import {userRoutesApi} from '~/api/user'
// @ts-ignore
import {rootRouter} from '~/routes/dynamic-routes'


const defaultRoutes: Record<string, any> = {
    RouteView: () => import('~/layouts/base-layout/route-view.vue'),
    BlankView: () => import('~/layouts/base-layout/blank-view.vue'),
}

const getComponent = (component?: string) => {
    if (!component)
        return defaultRoutes.BlankView
    if (component in defaultRoutes)
        return defaultRoutes[component]

    return (modules as Record<string, any>)[component]
}

const generator = (menuInfo: MenuInfo[], pid?: number | string): RouteRecordRaw[] => {
    const routes: RouteRecordRaw[] = []
    let currentMenus: MenuInfo[] = []
    // 如果没有传pid参数，首先把父元素都找出来
    if (!pid) {
        // 如果没有pid,从menuInfo中过滤出没有pid的item
        currentMenus = menuInfo.filter(item => !item.pid)

    } else {
        // 如果有pid,从menuInfo中过滤出有pid的item
        currentMenus = menuInfo.filter(item => item.pid === pid)
    }
    
    // 遍历所有item
    for (const menuItem of currentMenus) {

        const currentRoute: RouteRecordRaw = {
            path: menuItem.path,
            name: menuItem.name,
            component: getComponent(menuItem.component),
            meta: {
                title: menuItem.title,
                icon: menuItem.icon,
                id: menuItem.id,
                pid: menuItem.pid,
            },
            // 找出所有pid为id的元素，并添加到children中
            children: generator(menuInfo, menuItem.id),
        }
        // 如果没有子元素
        if (!currentRoute.children || currentRoute.children.length === 0)
            // 删除children属性
            delete (currentRoute as RouteRecordRaw).children
        routes.push(currentRoute)
    }
    return routes
}

export const generateRoute = async () => {
    const {data} = await userRoutesApi()
    if (data) {
        const routes = generator(data)
        return {
            ...rootRouter,
            children: routes,
        }
    }
}




