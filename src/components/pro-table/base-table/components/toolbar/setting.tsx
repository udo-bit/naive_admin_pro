import {DropdownOption, NDropdown, NIcon, NTooltip} from "naive-ui";
import {SettingOutlined} from "@vicons/antd";
import SettingHeader from "./setting-header.tsx";
import SettingBody from "./setting-body.tsx";

export default () => {
    const dropdownOptions: DropdownOption[] = [
        {type: 'render', key: 'header', render: () => <div><SettingHeader/></div>},
        {type: 'divider', key: 'divider'},
        {type: 'render', key: 'body', render: () => <div><SettingBody/></div>},
    ]
    const slots = {
        trigger: () => <div>
            <NDropdown trigger={"click"} options={dropdownOptions}>
                <NIcon size={16} class={'cursor-pointer'}>
                    <SettingOutlined/>
                </NIcon>
            </NDropdown>

        </div>
    }

    return <NTooltip v-slots={slots}>
        <span>设置</span>
    </NTooltip>
}
