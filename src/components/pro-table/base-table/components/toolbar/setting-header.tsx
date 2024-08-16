import {NButton, NCheckbox} from "naive-ui";
import {useProTableState} from "../../../context.ts";

export default defineComponent({
    name: "settingHeader",
    setup() {
        return () => {
            const state = useProTableState()
            const checkedProps = {
                "onUpdate:checked": state.settingColumn.handleCheckAll
            }
            return <div class={'flex justify-between w-240px py-6px px-24px'}>
                <div>
                    <NCheckbox
                        {...checkedProps}
                        checked={state.settingColumn?.isAllChecked.value}
                        indeterminate={state.settingColumn?.indeterminate.value}
                    />
                    <span class={'ml-6px'}>列显示</span>
                </div>
                <NButton
                    onClick={state.settingColumn.init}
                    text type={'primary'}>重置</NButton>
            </div>
        }
    }
})


