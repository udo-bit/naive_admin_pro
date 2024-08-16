import {ProTableProps} from "../../typing.ts";
import type {TreeOption} from "naive-ui";

export const useSettingColumn = (props: ProTableProps) => {
    const treeData = ref<TreeOption[]>([]);
    const checkedKeys = ref<string[]>([]);
    const allCheckedKeys = ref<string[]>([]);

    const init = () => {
        treeData.value = []
        checkedKeys.value = []
        allCheckedKeys.value = []
        const columns = props.columns
        for (const column of columns) {
            const item: TreeOption = {
                label: column.title,
                key: column?.key
            }
            checkedKeys.value.push(item.key as string)
            treeData.value.push(item)
        }
        allCheckedKeys.value = checkedKeys.value.slice()
    }
    watch(() => props.columns, () => {
        init()
    }, {immediate: true})
    const isAllChecked = computed(() => {
        return allCheckedKeys.value.length === checkedKeys.value.length
    })
    const indeterminate = computed(() => {
        return checkedKeys.value.length > 0 && checkedKeys.value.length < allCheckedKeys.value.length
    })
    const handleCheckedKeys = (keys: string[]) => {
        checkedKeys.value = keys
    }
    const handleCheckAll = (checked: boolean) => {
        if (checked) {
            checkedKeys.value = allCheckedKeys.value
        } else {
            checkedKeys.value = []
        }
    }


    return {
        treeData,
        checkedKeys,
        allCheckedKeys,
        init,
        isAllChecked,
        indeterminate,
        handleCheckedKeys,
        handleCheckAll
    }
}

