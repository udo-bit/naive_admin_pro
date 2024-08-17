import {dataTableProps, NDataTable} from "naive-ui";
import Toolbar from "./components/toolbar/index.tsx";
import {useProTableState} from "../context.ts";

export default defineComponent({
    name: 'baseTable',
    props: {
        ...dataTableProps
    },
    setup(props, {slots}) {
        const state = useProTableState()
        const prefixCls = 'pro-table-base-table'
        return () => {
            const tableSlots = {
                empty: slots.empty,
                loading: slots.loading,
            }
            const toolbarSlots = {
                headerTitle: slots.headerTitle,
                toolbarRender: slots.toolbarRender,
            }
            return <div class={prefixCls}>
                <Toolbar v-slots={toolbarSlots}/>
                <NDataTable
                    {...props}
                    columns={state.settingColumn?.cols.value}
                    v-slots={tableSlots}
                />
            </div>

        }

    }
})

