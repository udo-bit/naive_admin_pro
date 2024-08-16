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
            const {value, mode} = props;
            if (mode === 'read') return value;
            return (
                <NInput
                    {...props}
                    value={value}
                />
            )
        }
    }
})
