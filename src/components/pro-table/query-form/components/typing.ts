import {PropType} from '@vue/runtime-core';

const queryFormProps = {
    mode: {
        type: String as PropType<'read' | 'edit'>,
        default: 'edit'
    },
    // v-model
    value: {
        type: [String, Number, Boolean, Array, Object] as PropType<any>,
        default: undefined
    },
    'onUpdate:value': {
        type: Function as PropType<(value: any) => void>,
        default: undefined
    }


}

export {
    queryFormProps
}
