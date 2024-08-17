import Reload from "./reload.tsx";
import Setting from "./setting.tsx"
import {NSpace} from "naive-ui";
import {useProTableState} from "../../../context.ts";

const toolbar = defineComponent({
    name: "toolbar",
    setup(_, {slots}) {
        const {options} = useProTableState()
        const renderToolbar = () => {
            if (options.value === false) {
                return null
            }
            return (
                <NSpace>
                    {options.value?.reload && <Reload/>}
                    {options.value?.setting && <Setting/>}
                </NSpace>
            )
        }
        const renderHeaderTitle = () => {
            if (slots.headerTitle) {
                return slots.headerTitle()
            }
            return "高级表格"
        }

        return () => (
            <div class={'flex justify-between  pb-16px'}>
                <div class={'font-700 text-xl '}>{renderHeaderTitle()}</div>
                <div class={'flex items-center justify-between gap-4'}>
                    {slots.toolbarRender?.()}
                    {renderToolbar()}
                </div>


            </div>
        )
    }
})

export default toolbar
