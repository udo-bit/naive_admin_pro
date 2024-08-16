import {NTree} from "naive-ui";
import {useProTableState} from "../../../context.ts";

export default defineComponent({
    name: 'settingBody',
    setup() {
        const state = useProTableState()
        return () => {
            const treeProps = {
                "onUpdate:checkedKeys": state.settingColumn?.handleCheckedKeys
            }
            console.log(state.settingColumn.treeData.value)
            return <div class={'py-6px'}>
                <NTree
                    {...treeProps}
                    checkedKeys={state.settingColumn?.checkedKeys.value}
                    checkable
                    selectable={false}
                    data={state.settingColumn?.treeData?.value}
                />

            </div>
        }
    }
})
