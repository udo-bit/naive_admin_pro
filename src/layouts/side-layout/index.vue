<script setup lang="ts">
import {LayoutContent, LayoutSider, Logo, Title} from "~/layouts/common"

const props = withDefaults(defineProps<{
  headerHeight?: number
  logo?: string
  title?: string
  sideWidth?: number;
  sideCollapsedWidth?: number;
  showSiderTrigger: boolean | 'bar' | 'arrow-circle';
  inverted?: boolean;
  collapsed: boolean;
}>(), {
  headerHeight: 48,
  sideWidth: 240,
  sideCollapsedWidth: 48,
  inverted: false,
});
const headerHeightVar = computed(() => `${props.headerHeight}px`);
const contentHeightVar = computed(() => `calc(100vh - ${props.headerHeight}px)`);

defineEmits(['update:collapsed']);
</script>

<template>
  <n-layout has-sider>
    <LayoutSider
        :show-trigger="showSiderTrigger"
        :width="sideWidth"
        :collapsed-width="sideCollapsedWidth"
        :inverted="inverted"
        :collapsed="collapsed"
        @update:collapsed="($event)=>$emit('update:collapsed',$event)"
    >
      <div class="flex items-center justify-center mt-24px">
        <Logo :src="logo" size="30"/>
        <Title v-if="!collapsed" :title="title"/>
      </div>
    </LayoutSider>
    <n-layout style="--n-color:var(--pro-admin-layout-content-bg)">
      <n-layout-header class="pro-admin-mix-layout-header flex items-center px-4 justify-between">
        <slot name="headerLeft">
          <div/>
        </slot>
        <slot name="headerRight">
          <div/>
        </slot>
      </n-layout-header>
      <LayoutContent class="pro-admin-mix-layout-content" content-style="padding: 24px;">
        <slot/>
      </LayoutContent>
      <n-layout-footer>成府路</n-layout-footer>
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
