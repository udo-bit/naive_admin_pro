<script setup lang="ts">

const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="flex flex-col my-16px">
        <span class="font-500 text-14px mb-16px">
          {{ title }}
        </span>
    <slot/>
  </div>
</template>

<style scoped>

</style>
