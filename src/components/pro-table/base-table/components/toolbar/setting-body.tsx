import {NTree} from "naive-ui";

export default () => {
    const treeData = [
        {
            label: 'Name',
            key: 'name'
        },
        {
            label: 'Age',
            key: 'age'
        }
    ]
    return <div class={'py-6px'}>
        <NTree
            checkable
            selectable={false}
            data={treeData}
        />

    </div>
}
