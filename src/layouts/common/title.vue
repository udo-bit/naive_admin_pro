<script setup lang="ts">
import type {CSSProperties} from "vue";
const props = withDefaults(defineProps<{
  title?: string
  size?: number
}>(), {
  size: 24,
});
const titleStyle = computed<CSSProperties>(()=>{
  return {
    fontSize: `${props.size}px`
  }
})
</script>

<template>
<span ml-2 v-if="title" :style="titleStyle">{{title}}</span>
</template>

<style scoped>

</style>
