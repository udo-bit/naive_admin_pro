import {ProTableProps} from "./typing.ts";
import {useSettingColumn} from "./base-table/composables/setting-column.ts";

const tableState = (props: ProTableProps) => {
    const columns = computed(() => props.columns);
    const options = computed(() => props.options);
    const settingColumn = useSettingColumn(props)
    return {
        columns,
        options,
        settingColumn
    }
}


const [useProTableProvider, useProTableInject] = createInjectionState(tableState);

export const useProTableState = () => {
    return useProTableInject() ?? {
        columns: computed(() => {
        }),
        options: computed(() => ({reload: true, setting: true})),
        settingColumn: {} as any
    }
}

export {
    useProTableProvider,
}
