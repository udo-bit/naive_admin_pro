<script setup lang="ts">
const message = useMessage()
const handleMessage = ()=>{
  message.warning('这是一条警告提示')
}
const dialog = useDialog()
const handleDialog = ()=>{
  dialog.success({
    title:'这是一个标题',
    content:'这是一个内容',
    positiveText:"确定",
    onPositiveClick:handleMessage
  })
}
</script>

<template>
<div>
  <n-button @click="handleMessage">message</n-button>
</div>
<div>
  <n-button @click="handleDialog">dialog</n-button>
</div>

</template>

<style>

</style>