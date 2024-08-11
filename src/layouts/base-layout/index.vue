<script setup>
import MixLayout from '../mix-layout/index.vue'
import SideLayout from '../side-layout/index.vue'
import TopLayout from '../top-layout/index.vue'
import MobileLayout from '../mobile-layout/index.vue'
import {useAppStore} from "~/stores/app.ts";
import {useQueryBreakpoints} from "~/composables/query-breakpoints.ts";
import SettingDrawer from "~/layouts/setting-drawer/index.vue";

const appStore = useAppStore();
const {layout, visible,} = storeToRefs(appStore);
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
      <div>
        测试右侧插槽
      </div>
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
    >
      <template #headerRight>
        <div>
          测试右侧插槽
        </div>
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
    >
      <template #headerRight>
        <div>
          测试右侧插槽
        </div>
      </template>

      <router-view></router-view>
    </SideLayout>

    <TopLayout
        v-if="layout.layout === 'top'"
        :logo="layout.logo"
        :title="layout.title"
    >
      <template #headerRight>
        <div>
          测试右侧插槽
        </div>
      </template>
      <router-view></router-view>
    </TopLayout>
  </template>
  <SettingDrawer v-model:layout="layout.layout"/>
</template>

<style scoped>

</style>
