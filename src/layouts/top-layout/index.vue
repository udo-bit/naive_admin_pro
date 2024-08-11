<script setup lang="ts">
import {LayoutContent, Logo, Title} from "~/layouts/common"

const props = withDefaults(defineProps<{
  headerHeight?: number
  logo?: string
  title?: string
}>(), {
  headerHeight: 48,
});
const headerHeightVar = computed(() => `${props.headerHeight}px`);
</script>

<template>
  <n-layout class="h-screen" style="--n-color:var(--pro-admin-layout-content-bg)">
    <n-layout-header inverted class="pro-admin-mix-layout-header flex items-center justify-between px-4">
      <div class="flex items-center">
        <Logo :src="logo"/>
        <Title :title="title"/>
      </div>
      <slot name="headerRight">
        <div>右侧</div>
      </slot>
    </n-layout-header>

    <LayoutContent content-style="padding: 24px;">
      <slot/>
    </LayoutContent>
  </n-layout>
</template>

<style scoped>
.pro-admin-mix-layout-header {
  height: v-bind(headerHeightVar);
}


</style>
