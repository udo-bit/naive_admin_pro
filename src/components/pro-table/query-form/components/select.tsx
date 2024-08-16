import {defineComponent} from 'vue';
import {NBadge, NSelect, NSpace, SelectOption, selectProps} from "naive-ui"
import {queryFormProps} from "./typing.ts";
import {ProTableValueEnum} from "../../typing.ts";

export default defineComponent({
    name: 'select',
    props: {
        ...selectProps,
        ...queryFormProps,
        valueEnum: {
            type: Object as PropType<Record<string | number, ProTableValueEnum>>,
            default: undefined
        }
    },
    setup(props) {
        const options = computed(() => {
            const opt: SelectOption[] = [];
            for (const key in props.valueEnum) {
                opt.push({
                    label: props.valueEnum[key].label,
                    key: key,
                })
            }
            return opt
        })
        return () => {
            const {value, mode} = props
            if (mode === 'read') {
                const val = props.valueEnum?.[value]
                if (val) {
                    const status = val.status
                    if (!status) {
                        return <>{val.label}</>
                    }
                    // 处理有值的情况
                    return (
                        <NSpace>
                            <NBadge
                                type={status}
                                dot={true}
                            />
                            {val.label}
                        </NSpace>
                    )
                }
                return <>{value}</>
            }
            return (
                <NSelect
                    value={value}
                    options={options.value}
                ></NSelect>
            )
        }
    }

});
