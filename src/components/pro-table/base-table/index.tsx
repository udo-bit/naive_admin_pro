import {dataTableProps, NDataTable} from "naive-ui";
import Toolbar from "./components/toolbar/index.tsx";

const baseTable = defineComponent({
    name: 'baseTable',
    props: {
        ...dataTableProps
    },
    setup(props, {slots}) {
        const prefixCls = 'pro-table-base-table'
        const tableSlots = {
            empty: slots.empty,
            loading: slots.loading,
        }
        return () => (
            <div class={prefixCls}>

                <Toolbar/>
                <NDataTable  {...props} v-slots={tableSlots}/>

            </div>
        )
    }
})

export default baseTable
