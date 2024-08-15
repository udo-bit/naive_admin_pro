import Reload from "./reload.tsx";
import Setting from "./setting.tsx"
import {NSpace} from "naive-ui";
import {useProTableState} from "../../../context.ts";

const toolbar = defineComponent({
    name: "toolbar",
    setup() {
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
        return () => (
            <div class={'flex justify-between items-center pb-16px'}>
                <div class={'font-700 text-xl '}>高级表格</div>
                {renderToolbar()}

            </div>
        )
    }
})

export default toolbar
