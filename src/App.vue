<script setup lang="ts">

const appStore = useAppStore();
const {layoutTheme} = storeToRefs(appStore);
useAutoDark();
useMenuStateProvider()
</script>

<template>

  <n-config-provider :theme="layoutTheme">
    <app-provider>
      <div>
        <router-view></router-view>
      </div>
    </app-provider>
  </n-config-provider>
</template>

<style scoped>

</style>
