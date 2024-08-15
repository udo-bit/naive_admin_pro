import QueryForm from "./query-form";
import BaseTable from "./base-table";
import {NEl} from "naive-ui"
import "./style/index.less";
import {proTableProps} from './typing';
import {useProTableProvider} from "./context.ts";

const proTable = defineComponent({
    name: "proTable",
    props: {
        ...proTableProps
    },
    setup(props, {slots}) {
        const basicTableSlots = {
            empty: slots.empty,
            loading: slots.loading,
            headerTitle: slots.headerTitle,
            toolbarRender: slots.toolbarRender,
        }
        useProTableProvider(props)
        return () => (
            <NEl tag={'div'}>
                <QueryForm/>
                <BaseTable
                    {...props}
                    v-slots={basicTableSlots}
                />
            </NEl>
        )
    }
})

export default proTable
