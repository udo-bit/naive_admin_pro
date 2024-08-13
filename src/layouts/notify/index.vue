<script lang="ts" setup>
import {BellOutlined} from '@vicons/antd'
import type {DropdownOption} from "naive-ui"
import Content from "./content.vue"

const options = ref<DropdownOption[]>([{
  type: 'render',
  key: 'render',
  render: () => h(Content),
},])

withDefaults(defineProps<{
  count?: number,
  maxCount?: number
  inverted?: boolean
}>(), {
  maxCount: 99,
  count: 5
})
</script>

<template>
  <div class="flex">
    <n-dropdown trigger="click" :options="options">
      <n-badge :value="count" :max="maxCount">
        <n-icon :class="inverted ? 'text-white' : 'text-[var(--text-color-base)]'"
                class="cursor-pointer text-[var(--text-color-base)]" size="18">
          <BellOutlined/>
        </n-icon>
      </n-badge>
    </n-dropdown>
  </div>
</template>