<script setup lang="ts">
const attrs = useAttrs();

</script>

<template>
  <n-layout-sider
      v-bind="attrs"
      class="pro-admin-layout-sider"
      collapse-mode="width">
    <slot/>
  </n-layout-sider>
</template>

<style scoped>

</style>
