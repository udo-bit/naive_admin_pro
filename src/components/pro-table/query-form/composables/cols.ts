import {QueryFormProps} from "../typing.ts";

const useCols = (props: QueryFormProps) => {
    // TODO
    const items = computed(() => {
        return props?.columns?.filter(item => {
            return item.hideInSearch !== true
        })
    })

    return {
        items
    }
}

export default useCols
