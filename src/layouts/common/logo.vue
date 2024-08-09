<script setup lang="ts">
withDefaults(defineProps<{
  src?: string,
  size?:number
}>(), {
  size:24
});
</script>

<template>
  <n-image v-if="src" :src="src" alt="logo" :height="size" :width="size" :preview-disabled="true" />
</template>

<style scoped>

</style>
