<script setup lang="ts">
import {TabItem} from "~/layouts/multi-tab/type.ts";
import {ReloadOutlined} from "@vicons/antd"
import {useMultiTab} from "~/composables/multi-tab-state.ts";

const props = defineProps<{
  item: TabItem,
  contextMenu: (e: MouseEvent) => void
}>()
const {refresh, current} = useMultiTab()
const handleContextMenu = (e: MouseEvent) => {
  props.contextMenu(e)
}


</script>

<template>
    <span @contextmenu="handleContextMenu">
        {{ item.tabTitle }}
    </span>
  <n-icon @click="refresh()" v-if="item.path == current" class="ml-2 n-base-close n-tabs-tab__close">
    <ReloadOutlined/>
  </n-icon>

</template>

<style scoped>

</style>
