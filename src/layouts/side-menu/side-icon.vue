<script lang="ts" setup>
import * as icons from '@vicons/antd'

const props = defineProps<{
  icon: string
}>()

const comp = computed(() => (icons as any)[props.icon])

</script>

<template>

  <n-icon :component="comp"/>
</template>
