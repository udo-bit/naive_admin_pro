<script setup>
import MixLayout from '../mix-layout/index.vue'
import SideLayout from '../side-layout/index.vue'
import TopLayout from '../top-layout/index.vue'
import MobileLayout from '../mobile-layout/index.vue'
import {useAppStore} from "~/stores/app.ts";
import {useQueryBreakpoints} from "~/composables/query-breakpoints.ts";
import SettingDrawer from "~/layouts/setting-drawer/index.vue";
import RightContent from "~/layouts/base-layout/right-content.vue";
// import {menuOptions} from "~/layouts/composables/menu-data.ts";
import {useUserStore} from "~/stores/user.ts";
import MultiTab from "~/layouts/multi-tab/index.vue";
import WrapContent from "~/layouts/base-layout/wrap-content.vue";

const appStore = useAppStore();
const {layout, visible, layoutList, layoutStyleList} = storeToRefs(appStore);
const {isMobile, isPad, isDesktop} = useQueryBreakpoints();

const userStore = useUserStore();
const menuOptions = computed(() => userStore.menuData);
const {active} = useMenuStateInject()


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
    <WrapContent/>
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
        :active="active"
    >
      <template #headerRight>
        <RightContent/>
      </template>
      <WrapContent/>
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
      <WrapContent/>
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
      <WrapContent/>
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
