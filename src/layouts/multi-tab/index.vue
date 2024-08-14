<script lang="ts" setup>
const nameRef = ref<number>(1)
const message = useMessage()
const panels = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])

function handleClose(name: number) {
  if (panels.value.length === 1) {
    message.error('最后一个了')
    return
  }
  message.info(`关掉 ${name}`)
  const index = panels.value.findIndex(v => name === v)
  panels.value.splice(index, 1)
  if (nameRef.value === name)
    nameRef.value = panels.value[index]
}

const state = useMultiTabInject()
console.log(state)
</script>

<template>
  <n-tabs
      v-model:value="nameRef"
      type="card"
      closable
      class="pt-6px bg-white dark:bg-transparent"
      tab-style="min-width: 80px;"
      @close="handleClose"
  >
    <template #prefix>
      <div class="pl-12px"/>
    </template>
    <n-tab-pane
        v-for="panel in panels"
        :key="panel"
        :tab="panel.toString()"
        :name="panel"
    />
  </n-tabs>
</template>