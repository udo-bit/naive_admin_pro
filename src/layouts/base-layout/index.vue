<script setup>
import MixLayout from '../mix-layout/index.vue'
import SideLayout from '../side-layout/index.vue'
import {useAppStore} from "~/stores/app.ts";
const {layout} = storeToRefs(useAppStore());
</script>

<template>
<div >
  <MixLayout
      v-if="layout.layout === 'mix'"
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
  </MixLayout>
  <SideLayout
      v-if="layout.layout==='side'"
      :logo="layout.logo"
      :title="layout.title"
      :show-sider-trigger="layout.showSiderTrigger"
      :side-width="layout.sideWidth"
      :side-collapsed-width="layout.sideCollapsedWidth"
  >
    <router-view></router-view>
  </SideLayout>
</div>
</template>

<style scoped>

</style>
