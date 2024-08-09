<script setup lang="ts">
import {Logo,Title,LayoutContent,LayoutSider} from "~/layouts/common"
const props = withDefaults(defineProps<{
  headerHeight?: number
  logo?: string
  title?: string
  sideWidth?:number;
  sideCollapsedWidth?:number;
  showSiderTrigger :boolean |'bar'|'arrow-circle';
  inverted?:boolean;
}>(), {
  headerHeight: 48,
  sideWidth:240,
  sideCollapsedWidth:48,
  inverted:false,
});
const headerHeightVar = computed(() => `${props.headerHeight}px`);
const contentHeightVar = computed(() => `calc(100vh - ${props.headerHeight}px)`);
</script>

<template>
  <n-layout has-sider>
    <LayoutSider content-style="padding: 24px;"
                 :show-trigger="showSiderTrigger"
                 :width="sideWidth"
                 :collapsed-width="sideCollapsedWidth"
                 :inverted="inverted"
    >
      <div class="flex items-center">
        <Logo :src="logo"/>
        <Title :title="title"/>
      </div>
    </LayoutSider>
    <n-layout style="--n-color:var(--pro-admin-layout-content-bg)">
      <n-layout-header class="pro-admin-mix-layout-header flex items-center px-4 justify-between">123</n-layout-header>
      <LayoutContent class="pro-admin-mix-layout-content" content-style="padding: 24px;" >
        <slot/>
      </LayoutContent>
      <n-layout-footer>成府路</n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<style scoped>
.pro-admin-mix-layout-header{
  height: v-bind(headerHeightVar);
}
.pro-admin-mix-layout-content{
  height: v-bind(contentHeightVar);
}

</style>
