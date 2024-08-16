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
            return <div class={prefixCls}>
                <Toolbar/>
                <NDataTable
                    {...props}
                    columns={state.settingColumn?.cols.value}
                    v-slots={tableSlots}
                />
            </div>

        }

    }
})

