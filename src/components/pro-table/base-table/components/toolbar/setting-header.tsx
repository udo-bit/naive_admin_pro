import {NButton, NCheckbox} from "naive-ui";

export default () => {
    return <div class={'flex justify-between w-240px py-6px px-24px'}>
        <div>
            <NCheckbox/>
            <span class={'ml-6px'}>列显示</span>
        </div>
        <NButton text type={'primary'}>重置</NButton>
    </div>
}
