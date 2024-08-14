<script lang="ts" setup>
import {useMultiTab} from "~/composables/multi-tab-state.ts";
import {MoreOutlined} from "@vicons/antd";
import {DropdownOption} from "naive-ui";
import {TabItem} from "~/layouts/multi-tab/type.ts";
import TabItemCom from "~/layouts/multi-tab/tab-item.vue";

const menuDropdown = reactive({
  x: 0,
  y: 0,
  showDropdown: false
})

const handleContextMenu = (e: MouseEvent) => {
  console.log(123)
  e.preventDefault()
  menuDropdown.showDropdown = false
  nextTick().then(() => {

    menuDropdown.showDropdown = true
    menuDropdown.x = e.clientX
    menuDropdown.y = e.clientY
  })
}

const renderTab = (tabItem: TabItem) => {
  return h(TabItemCom, {item: tabItem, contextMenu: handleContextMenu})
}


const {tabList, current, closeTab, refresh} = useMultiTab()
const router = useRouter()
const actionOpt = computed<DropdownOption[]>(() => {
  return [
    {
      label: '关闭当前页面',
      key: 'close-current',
      disabled: tabList.value.length <= 1
    },
    {
      label: '刷新当前页面',
      key: 'refresh-current',
    }
  ]
})

function handleClose(name: string) {
  closeTab(name)
  menuDropdown.showDropdown = false
}

const handleSelect = (key: string) => {
  if (key === 'close-current') {
    closeTab()
  } else if (key === 'refresh-current') {
    refresh()
  }
  menuDropdown.showDropdown = false
}
const handleUpdate = (name: string) => {
  router.push(name)
  menuDropdown.showDropdown = false
}


const state = useMultiTabInject()
console.log(state)
</script>

<template>
  <n-tabs
      v-model:value="current"
      type="card"
      class="pt-6px bg-white dark:bg-transparent"
      tab-style="min-width: 80px;"
      @close="handleClose"
      @update:value="handleUpdate"

  >
    <template #prefix>
      <div class="pl-12px"/>
    </template>
    <template #suffix>
      <div class="mr-12px">
        <n-dropdown trigger="click" :options="actionOpt" @select="handleSelect">
          <n-icon size="16" cursor-pointer>
            <MoreOutlined/>
          </n-icon>
        </n-dropdown>
      </div>
    </template>

    <n-tab-pane
        closable
        v-for="panel in tabList"
        :key="panel.path"
        :tab="renderTab(panel)"
        :name="panel.path"
    />
  </n-tabs>
  <n-dropdown
      placement="bottom-start"
      trigger="manual"
      :x="menuDropdown.x"
      :y="menuDropdown.y"
      :options="actionOpt"
      :show="menuDropdown.showDropdown"
      @clickoutside="menuDropdown.showDropdown=false"
      @select="handleSelect"
  />
</template>
