<script setup lang="ts">
import {LayoutContent, LayoutSider, Logo, Title} from "~/layouts/common"
import SideMenu from "~/layouts/side-menu/index.vue"
import {MenuOption, MenuProps} from "naive-ui";

const props = withDefaults(defineProps<{
  headerHeight?: number
  logo?: string
  title?: string
  sideWidth?: number;
  siderCollapsedWidth?: number;
  showSiderTrigger: boolean | 'bar' | 'arrow-circle';
  collapsed: boolean;

  collapsedIconSize?: number
  active?: string
  options?: MenuOption[]
  expandedKeys?: MenuProps['expandedKeys']

}>(), {
  headerHeight: 48,
  sideWidth: 240,
  siderCollapsedWidth: 48,
  collapsedIconSize: 22,

});
const headerHeightVar = computed(() => `${props.headerHeight}px`);
const contentHeightVar = computed(() => `calc(100vh - ${props.headerHeight}px)`);
defineEmits(['update:collapsed', 'update:active', 'update:expandedKeys'])
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
                   :collapsed-width="siderCollapsedWidth"
                   :collapsed="collapsed"
                   @update:collapsed="($event)=>$emit('update:collapsed',$event)">
        <SideMenu
            :collapsed-icon-size="collapsedIconSize"
            :collapsed-width="siderCollapsedWidth"
            :collapsed="collapsed"
            :value="active"
            :options="options"
            :expanded-keys="expandedKeys"
            @update:value="$emit('update:active', $event)"
            @update:expandedKeys="$emit('update:expandedKeys', $event)"
        />

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
