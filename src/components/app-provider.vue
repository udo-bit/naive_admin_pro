<script setup lang="ts">
import NaiveProvider from "~/components/naive-provider.vue";
</script>

<template>

  <n-message-provider>
    <n-dialog-provider>
      <n-notification-provider>
        <n-loading-bar-provider>
          <naive-provider>
            <slot/>
          </naive-provider>
        </n-loading-bar-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-message-provider>
</template>

<style scoped>

</style>
