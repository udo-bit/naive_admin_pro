import {ProTableColumn} from "../typing.ts";
import ProTableSelect from "./components/select.tsx";
import ProTableInput from "./components/input.tsx";

export default (item: ProTableColumn, model: Record<string, any>) => {
    const commonProps = {
        // v-model
        value: model[item.key!],
        "onUpdate:value": (val: any) => {
            model[item.key!] = val
        },
        ...item.fieldProps
    }
    if (item.valueType === 'select') {
        return (
            <ProTableSelect {...commonProps} valueEnum={item.valueEnum}/>
        )
    }
    return <ProTableInput {...commonProps}/>

}

