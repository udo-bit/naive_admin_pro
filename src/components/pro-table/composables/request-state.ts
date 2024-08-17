import {ProTableProps} from "../typing.ts";
import {PaginationProps} from "naive-ui";

const useRequestState = (props: ProTableProps) => {
    const remote = computed(() => {
        if (props.request) return true
        return props.remote
    })

    const data = ref<Record<string, any>>()
    const loading = ref(false)
    let storeParams: Record<string, any> = {}

    const pagination = ref<Partial<PaginationProps>>({
        page: 1,
        pageSize: 10
    })

    const handleRequest = async (params?: Record<string, any>) => {
        if (!props.request) return
        try {
            loading.value = true
            const {data: dataResource, total} = await props.request({
                    page: pagination.value.page ?? 1,
                    pageSize: pagination.value.pageSize ?? 10,
                    ...props.params,
                    ...storeParams,
                    ...params
                }
            )
            pagination.value.pageCount = total
            data.value = dataResource
        } finally {
            loading.value = false
        }
    }
    onMounted(() => {
        if (props.manualRequest) {
            handleRequest().then(() => {
            })
        }
    })

    pagination.value['onUpdate:page'] = (page: number) => {
        handleRequest({page}).then(() => pagination.value.page = page)

    }
    pagination.value['onUpdate:pageSize'] = (pageSize: number) => {
        handleRequest({pageSize}).then(() => pagination.value.pageSize = pageSize)
    }

    const formatPagination = () => {
        if (props.request) {
            // @ts-ignore
            return {
                ...props?.pagination,
                ...pagination.value
            }
        }
        return props?.pagination
    }

    const handleProps = reactive({
        remote,
        data: computed(() => {
            if (props.request) return data.value
            return props.data
        }),
        loading: computed(() => {
            if (props.request) return loading.value
            return props.loading
        })
    })

    const querySearch = async (params: Record<string, any>) => {
        const queryParams = {
            ...params,
            page: 1
        }
        try {
            storeParams = {}
            await handleRequest(queryParams)
            storeParams = params
            pagination.value.page = 1
        } catch (e) {

        }
    }


    return {
        formatPagination,
        handleProps,
        handleRequest,
        querySearch,
        loading,
    }
}

export {
    useRequestState
}
