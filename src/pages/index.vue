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
const notification = useNotification()
const handleNotification = ()=>{
  notification.success({
    title:'这是一个标题',
    content:'这是一个内容',
  })
}
const loadingBar = useLoadingBar()
const handleLoadingBar = ()=>{
  loadingBar.start()
  setTimeout(()=>{
    loadingBar.finish()
  },2000)
}
</script>

<template>
  <div class="flex flex-row space-x-2xl">
    <div>
      <n-button @click="handleMessage">message</n-button>
    </div>
    <div>
      <n-button @click="handleDialog">dialog</n-button>
    </div>
    <div>
      <n-button @click="handleNotification">notification</n-button>
    </div>
    <div>
      <n-button @click="handleLoadingBar">loadingBar</n-button>
    </div>
  </div>


</template>

<style>

</style>
