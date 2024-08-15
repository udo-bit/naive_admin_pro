import {NIcon, NTooltip} from "naive-ui";
import {ReloadOutlined} from "@vicons/antd";

export default () => {
    const slots = {
        trigger: () => <div>
            <NIcon size={16} class={'cursor-pointer'}>
                <ReloadOutlined/>
            </NIcon>
        </div>
    }

    return <NTooltip v-slots={slots}>
        <span>刷新</span>
    </NTooltip>
}
