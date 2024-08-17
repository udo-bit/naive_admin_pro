import {queryFormProps} from "./typing.ts";
import useCols from "./composables/cols.ts";
import {NButton, NForm, NFormItemGi, NIcon, NSpace} from "naive-ui";
import {NGrid} from "naive-ui/lib";
import renderField from "./render-field.tsx";
import {DownloadOutlined, UploadOutlined} from "@vicons/antd";

const queryForm = defineComponent({
    name: 'queryForm',
    props: {
        ...queryFormProps
    },
    setup(props) {
        const {
            handleReset,
            handleSearch,
            toggleCollapsed,
            collapsed,
            restCol,
            model,
            cols,
            domRef,
            itemCols
        } = useCols(props)
        return () => {
            const prefixCls = 'pro-table-query-form'

            const renderItems = () => {
                return itemCols.value.map((item) => {
                    return (<NFormItemGi key={item.key} label={item.title}>
                        {renderField(item, model)}
                    </NFormItemGi>)
                })
            }
            const renderAction = () => {
                let dom;
                if (!collapsed.value) {
                    dom = (<NSpace size={'small'}>
                            展开
                            <NIcon>
                                <DownloadOutlined/>
                            </NIcon>
                        </NSpace>
                    )
                } else {
                    dom = (<NSpace size={'small'}>
                            收起
                            <NIcon>
                                <UploadOutlined/>
                            </NIcon>
                        </NSpace>
                    )
                }
                return (
                    <NFormItemGi span={restCol.value}>
                        <NSpace align={'center'} justify={'end'} class={'w-100%'}>
                            <NButton onClick={handleReset}>
                                重 置
                            </NButton>
                            <NButton type={'primary'} onClick={handleSearch} loading={props.loading}>
                                查 询
                            </NButton>
                            <NButton
                                text
                                type={'primary'}
                                onClick={() => toggleCollapsed()}
                            >
                                {dom}
                            </NButton>
                        </NSpace>
                    </NFormItemGi>
                )

            }

            return (
                <div class={prefixCls} ref={domRef}>
                    <NForm labelPlacement={'left'} showFeedback={false}>
                        <NGrid cols={cols.value} xGap={12} yGap={12}>
                            {renderItems()}
                            {renderAction()}
                        </NGrid>
                    </NForm>

                </div>


            )
        }
    }
})

export default queryForm
