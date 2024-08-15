declare module '*.vue' {
    import {defineComponent} from 'vue'
    const component: ReturnType<typeof defineComponent>
    export default component
}

// 支持jsx
declare namespace JSX {
    interface IntrinsicElements {
        [elem: string]: any
    }
}
