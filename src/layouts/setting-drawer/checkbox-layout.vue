<script lang="ts" setup>
import {CheckOutlined} from '@vicons/antd'

const props = withDefaults(defineProps<{
  layout?: 'mix' | 'side' | 'top'
  inverted?: boolean
  checked?: boolean
  title?: string
  dark?:boolean
}>(), {
  inverted: false,
  layout: 'top',
})
defineEmits(['click'])

const headerClass = computed(() => {
  if (props.layout === 'mix' || props.layout === 'top' || props.dark) {
    return [
      'bg-[var(--inverted-color)]',
    ]
  }
  if (props.layout === 'side') {
    return [
      'bg-[var(--base-color)]',
    ]
  }
})

const siderClass = computed(() => {
  if (props.layout === 'mix') {
    return [
      'h-75%',
      'bg-white',
      'bottom-0',
    ]
  }
  if (props.layout === 'side') {
    return [
      'h-100%',
      `bg-[var(--${(props.inverted || props.dark) ? 'inverted' : 'base'}-color)]`,
    ]
  }
  return []
})
</script>

<template>
  <n-popover trigger="hover">
    <template #trigger>
      <n-el
          tag="div"
          class="cursor-pointer relative w-44px h-36px b-rd-4px overflow-hidden bg-[var(--pro-admin-layout-content-bg)] shadow-[var(--pro-admin-layout-box-shadow)]"
          @click="$emit('click',$event)"
      >
        <div
            :class="headerClass"
            class="h-25% absolute top-0 w-100%"
        />
        <div
            v-if="layout !== 'top'"
            :class="siderClass"
            class="w-30% absolute left-0 h-100%"
        />
        <div v-if="checked" class="absolute bottom--3px right-3px">
          <n-icon size="16">
            <CheckOutlined/>
          </n-icon>
        </div>
      </n-el>
    </template>
    <span>{{ title }}</span>
  </n-popover>

</template>

<style scoped>

</style>
