<script setup lang="ts">
import {menuProps} from "naive-ui";


const props = defineProps({
  ...menuProps,
})

</script>

<template>
  <n-menu class="n-menu-item-content" v-bind="props"/>
</template>

<style>

</style>