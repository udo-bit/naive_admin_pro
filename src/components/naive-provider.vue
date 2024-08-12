<script lang="ts" setup>
const notification = useNotification()
const dialog = useDialog()
const message = useMessage()
const loadingBar = useLoadingBar()
useGlobalConfigProvider({
  notification,
  dialog,
  message,
  loadingBar,
})
</script>

<template>
  <slot/>
</template>
