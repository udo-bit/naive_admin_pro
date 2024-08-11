import {layoutThemeConfig, LayoutType} from "../config/layout-theme.ts";
import {darkTheme} from "naive-ui";

// const isDark = useDark();
const toggleDark = useToggle(useDark());

const useAppStore = defineStore('app', () => {
    // const defaultLayout = import.meta.env.DEV ? layoutThemeConfig : useLayoutTheme();
    const layout = reactive(unref(layoutThemeConfig));
    const visible = ref(false);
    const updateVisible = (value: boolean) => {
        visible.value = value;
    }

    const updateCollapsed = (val: boolean) => {
        layout.collapsed = val;
    }
    const updateLayoutStyle = (val: string) => {
        layout.layoutStyle = val
    }

    const layoutTheme = computed(() => {
        if (layout.layoutStyle === 'dark') {
            return darkTheme
        } else {
            return undefined
        }
    })

    //
    const layoutList: ComputedRef<LayoutType[]> = computed<LayoutType[]>(() => {
        return [
            {
                id: 'side',
                key: 'side',
                inverted: true,
                title: 'Side Menu Layout',
            },
            {
                id: 'top',
                key: 'top',
                title: 'Top Menu Layout',
            },
            {
                id: 'mix',
                key: 'mix',
                title: 'Mix Menu Layout',
            },
        ]
    })
    const layoutStyleList: ComputedRef<LayoutType[]> = computed<LayoutType[]>(() => {
        const list: LayoutType[] = [
            {
                id: 'light',
                key: 'side',
                title: '亮色布局风格'
            }
        ];
        if (layout.layout !== 'mix') {
            list.push({
                id: 'inverted',
                key: 'side',
                title: '暗色布局风格',
                inverted: true
            })
        } else {
            updateLayoutStyle('light')
        }
        return list
    });


    watch(
        () => layout.layoutStyle,
        (val) => {
            if (val === 'dark')
                toggleDark(true)
            else toggleDark(false)
        }
    )


    return {
        layout,
        visible,
        updateVisible,
        updateCollapsed,
        updateLayoutStyle,
        layoutTheme,
        layoutList,
        layoutStyleList,


    }

})

export {
    useAppStore
}
