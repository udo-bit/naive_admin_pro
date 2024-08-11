<script setup lang="ts">
import CheckBoxLayout from "~/layouts/setting-drawer/checkbox-layout.vue"
</script>

<template>
  <div class flex gap-5>
    <CheckBoxLayout checked/>
    <CheckBoxLayout layout="mix"/>
    <CheckBoxLayout layout="top"/>
    <CheckBoxLayout layout="side" inverted/>
  </div>

</template>

<style>

</style>
