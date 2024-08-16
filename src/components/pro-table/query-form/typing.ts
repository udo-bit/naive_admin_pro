import {ProTableColumn,} from "../typing.ts";
import {PropType, ExtractPropTypes} from "@vue/runtime-core";

export const queryFormProps = {
    columns: {
        type: Array as PropType<ProTableColumn[]>,
        default: () => [],
    }
};

export type QueryFormProps = ExtractPropTypes<typeof queryFormProps>;
