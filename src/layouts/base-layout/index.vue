<script setup>
import MixLayout from '../mix-layout/index.vue'
import SideLayout from '../side-layout/index.vue'
import TopLayout from '../top-layout/index.vue'
import MobileLayout from '../mobile-layout/index.vue'
import {useAppStore} from "~/stores/app.ts";
import {useQueryBreakpoints} from "~/composables/query-breakpoints.ts";
import SettingDrawer from "~/layouts/setting-drawer/index.vue";
import RightContent from "~/layouts/base-layout/right-content.vue";
import {menuOptions} from "~/layouts/composables/menu-data.ts";

const appStore = useAppStore();
const {layout, visible, layoutList, layoutStyleList} = storeToRefs(appStore);
const {isMobile, isPad, isDesktop} = useQueryBreakpoints();

watchEffect(() => {
  if (isDesktop.value) {
    appStore.updateCollapsed(false)
  } else if (isPad.value) {
    appStore.updateCollapsed(true)
  }
  if (isMobile.value) {
    appStore.updateVisible(false)
  }
})

</script>

<template>
  <MobileLayout
      v-if="isMobile"
      :logo="layout.logo"
      :title="layout.title"
      v-model:visible="appStore.visible"
  >
    <template #headerRight>
      <RightContent/>
    </template>
    <router-view></router-view>
  </MobileLayout>
  <template v-else>
    <MixLayout
        v-if="layout.layout === 'mix'"
        :logo="layout.logo"
        :title="layout.title"
        :show-sider-trigger="layout.showSiderTrigger"
        :side-width="layout.sideWidth"
        :side-collapsed-width="layout.sideCollapsedWidth"
        v-model:collapsed="layout.collapsed"
        :options="menuOptions"
    >
      <template #headerRight>
        <RightContent/>
      </template>
      <router-view></router-view>
    </MixLayout>
    <SideLayout
        v-if="layout.layout==='side'"
        v-model:collapsed="layout.collapsed"
        :logo="layout.logo"
        :title="layout.title"
        :show-sider-trigger="layout.showSiderTrigger"
        :side-width="layout.sideWidth"
        :side-collapsed-width="layout.sideCollapsedWidth"
        :inverted="layout.layoutStyle === 'inverted'"
    >
      <template #headerRight>
        <RightContent/>
      </template>

      <router-view></router-view>
    </SideLayout>

    <TopLayout
        v-if="layout.layout === 'top'"
        :logo="layout.logo"
        :title="layout.title"
        :inverted="layout.layoutStyle === 'inverted'"
    >
      <template #headerRight>
        <RightContent/>
      </template>
      <router-view></router-view>
    </TopLayout>
  </template>
  <SettingDrawer
      v-model:layout="layout.layout"
      v-model:layout-style="layout.layoutStyle"
      :layout-list="layoutList"
      :layout-style-list="layoutStyleList"
  />
</template>

<style scoped>

</style>
