<script lang="ts" setup>


const onRequest1 = () => {
  useGet('/').then(res => {
    console.log(res)
  })
}
const onRequest2 = () => {
  useGet('/403').then(res => {
    console.log(res)
  })
}

</script>

<template>
  <div>
    <n-space>
      <n-button @click="onRequest1">
        200
      </n-button>

      <n-button @click="onRequest2">
        403
      </n-button>

    </n-space>
  </div>
</template>

<style scoped>

</style>
