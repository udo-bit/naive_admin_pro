import {inputProps, NInput} from "naive-ui"
import {queryFormProps} from "./typing.ts";

export default defineComponent({
    name: 'ProFormInput',
    props: {
        ...inputProps,
        ...queryFormProps,
    },
    setup(props) {
        return () => {
            const {value, mode, ...restProps} = props;
            if (mode === 'read') return value;
            return (
                <NInput
                    {...restProps}
                    value={value}
                />
            )
        }
    }
})
