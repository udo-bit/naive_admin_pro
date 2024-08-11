<script setup lang="ts">
import {LayoutContent, LayoutSider, Logo, Title} from "~/layouts/common"

const props = withDefaults(defineProps<{
  headerHeight?: number
  logo?: string
  title?: string
  sideWidth?: number;
  sideCollapsedWidth?: number;
  showSiderTrigger: boolean | 'bar' | 'arrow-circle';
  collapsed: boolean;
}>(), {
  headerHeight: 48,
  sideWidth: 240,
  sideCollapsedWidth: 48,
});
const headerHeightVar = computed(() => `${props.headerHeight}px`);
const contentHeightVar = computed(() => `calc(100vh - ${props.headerHeight}px)`);
defineEmits(['update:collapsed']);
</script>

<template>
  <n-layout>
    <n-layout-header inverted class="pro-admin-mix-layout-header flex items-center justify-between px-4">
      <div class="flex items-center">
        <Logo :src="logo"/>
        <Title :title="title"/>
      </div>
      <slot name="headerRight">
        <div>右侧</div>
      </slot>
    </n-layout-header>
    <n-layout has-sider class="pro-admin-mix-layout-content">
      <LayoutSider content-style="padding: 24px;"
                   :show-trigger="showSiderTrigger"
                   :width="sideWidth"
                   :collapsed-width="sideCollapsedWidth"
                   :collapsed="collapsed"
                   @update:collapsed="($event)=>$emit('update:collapsed',$event)">
        >
        海淀桥
      </LayoutSider>
      <LayoutContent content-style="padding: 24px;">
        <slot/>
      </LayoutContent>
    </n-layout>
  </n-layout>
</template>

<style scoped>
.pro-admin-mix-layout-header {
  height: v-bind(headerHeightVar);
}

.pro-admin-mix-layout-content {
  height: v-bind(contentHeightVar);
}

</style>
