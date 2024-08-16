import {queryFormProps} from "./typing.ts";
import useCols from "./composables/cols.ts";
import QueryFormInput from "./components/input.tsx"

const queryForm = defineComponent({
    name: 'queryForm',
    props: {
        ...queryFormProps
    },
    setup(props) {
        const state = useCols(props)
        console.log(state.items)

        return () => {
            const prefixCls = 'pro-table-query-form'

            return (
                <div>
                    <div class={prefixCls}>
                        <div>queryForm</div>
                        <QueryFormInput
                            mode={"edit"}
                            value={"test"}
                            placeholder={"test"}/></div>

                </div>

            )
        }
    }
})

export default queryForm
