import {ProTableColumn,} from "../typing.ts";
import {PropType, ExtractPropTypes} from "@vue/runtime-core";

export const queryFormProps = {
    columns: {
        type: Array as PropType<ProTableColumn[]>,
        default: () => [],
    },
    onSearch: {
        type: Function as PropType<(params: any) => void>,
        default: () => {
        },
    },
    onReset: {
        type: Function as PropType<(params: any) => void>,
        default: () => {
        },
    },
    loading: {
        type: Boolean as PropType<boolean>,
        default: false,
    }
};

export type QueryFormProps = ExtractPropTypes<typeof queryFormProps>;
