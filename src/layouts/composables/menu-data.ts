import type {MenuOption} from 'naive-ui'
import {NIcon} from 'naive-ui'
import {SaveFilled as BookIcon, PhoneFilled as PersonIcon, WalletFilled as WineIcon} from '@vicons/antd'
import type {Component} from '@vue/runtime-core'

function renderIcon(icon: Component) {
    return () => h(NIcon, null, {default: () => h(icon)})
}

export const menuOptions: MenuOption[] = [
    {
        label: '且听风吟',
        key: 'hear-the-wind-sing',
        icon: renderIcon(BookIcon),
    },
    {
        label: '1973年的弹珠玩具',
        key: 'pinball-1973',
        icon: renderIcon(BookIcon),
        children: [
            {
                label: '鼠',
                key: 'rat',
                icon: renderIcon(BookIcon),
            },
        ],
    },
    {
        label: '寻羊冒险记',
        key: 'a-wild-sheep-chase',
        disabled: true,
        icon: renderIcon(BookIcon),
    },
    {
        label: '舞，舞，舞',
        key: 'dance-dance-dance',
        icon: renderIcon(BookIcon),
        children: [
            {
                type: 'group',
                label: '人物',
                key: 'people',
                children: [
                    {
                        label: '叙事者',
                        key: 'narrator',
                        icon: renderIcon(PersonIcon),
                    },
                    {
                        label: '羊男',
                        key: 'sheep-man',
                        icon: renderIcon(PersonIcon),
                    },
                ],
            },
            {
                label: '饮品',
                key: 'beverage',
                icon: renderIcon(WineIcon),
                children: [
                    {
                        label: '威士忌',
                        key: 'whisky',
                    },
                ],
            },
            {
                label: '食物',
                key: 'food',
                children: [
                    {
                        label: '三明治',
                        key: 'sandwich',
                    },
                ],
            },
            {
                label: '过去增多，未来减少',
                key: 'the-past-increases-the-future-recedes',
            },
        ],
    },
]
