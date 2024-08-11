<script setup lang="ts">
import {LayoutContent, Logo} from "~/layouts/common"
import {MenuUnfoldOutlined} from '@vicons/antd'

const props = withDefaults(defineProps<{
  headerHeight?: number
  logo?: string
  title?: string
  visible?: boolean
  headerInverted?: boolean
  drawerInverted?: boolean
  logoVisible?: boolean
}>(), {
  headerHeight: 48,
  visible: false,
  logoVisible: true,
});
const headerHeightVar = computed(() => `${props.headerHeight}px`);
const emit = defineEmits(['update:visible']);
const onShow = () => {
  emit('update:visible', true);
};
</script>

<template>
  <n-layout class="h-screen" style="--n-color:var(--pro-admin-layout-content-bg)">
    <n-layout-header inverted class="pro-admin-mix-layout-header flex items-center justify-between px-4">
      <div class="flex items-center">
        <Logo :src="logo"/>
        <n-icon size="20" ml-2 @click="onShow">
          <MenuUnfoldOutlined/>
        </n-icon>
      </div>
      <slot name="headerRight">
        <div>右侧</div>
      </slot>
    </n-layout-header>

    <LayoutContent content-style="padding: 24px;">
      <slot/>
    </LayoutContent>
  </n-layout>
  <n-drawer
      :show="visible"
      :width="240"
      placement="left"
      @update-show="($event) =>$emit('update:visible', $event)"
  >
    <n-drawer-content body-content-style="padding:0">
      <n-layout class="h-100%">
        <n-layout-header class="h-100%" :inverted="drawerInverted">
          《斯通纳》是美国作家约翰·威廉姆斯在 1965 年出版的小说。
        </n-layout-header>
      </n-layout>
    </n-drawer-content>
  </n-drawer>
</template>

<style scoped>
.pro-admin-mix-layout-header {
  height: v-bind(headerHeightVar);
}


</style>
