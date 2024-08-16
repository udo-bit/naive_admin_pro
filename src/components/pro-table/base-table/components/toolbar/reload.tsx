import {NButton, NIcon, NTooltip} from "naive-ui";
import {ReloadOutlined} from "@vicons/antd";
import {useProTableState} from "../../../context.ts";

export default defineComponent({
    name: 'reload',
    setup() {
        const state = useProTableState()

        return () => {
            const slots = {
                trigger: () => (<NButton text onClick={() => state?.requestState?.handleRequest()}>
                    <NIcon size={16} class={'cursor-pointer'}>
                        <ReloadOutlined/>
                    </NIcon>
                </NButton>)
            }
            return <NTooltip
                v-slots={slots}
            >
                <span>刷新</span>
            </NTooltip>
        }
    }

})
