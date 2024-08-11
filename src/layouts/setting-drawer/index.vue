<script setup lang="ts">
import {CloseOutlined, SettingOutlined} from '@vicons/antd';
import CheckboxLayout from "~/layouts/setting-drawer/checkbox-layout.vue";
import SettingContainer from "~/layouts/setting-drawer/setting-container.vue";

const props = withDefaults(defineProps<{
  floatTop?: number | string;
  drawerWidth: number | string;
  layout: 'mix' | 'top' | 'side';
}>(), {
  floatTop: 240,
  drawerWidth: 300,
});
const emit = defineEmits(['update:layout']);
const onChange = (val: string) => {
  emit('update:layout', val)
}

const show = ref(false);
const onShow = () => {
  show.value = true
}
const onHide = () => {
  show.value = false
}

const layouts = ref([
  {
    key: 'side',
    title: 'Side Menu Layout',
  },
  {
    key: 'top',
    title: 'Top Menu Layout',
  },
  {
    key: 'mix',
    title: 'Mix Menu Layout',
  },
])


</script>

<template>
  <teleport to="body">
    <div class="fixed top-240px right-0 top-10">
      <n-button type="primary" class="b-rd-tr-0! b-rd-br-0!" size="large" @click="onShow">
        <template #icon>
          <n-icon size="24">
            <SettingOutlined/>
          </n-icon>
        </template>
      </n-button>
    </div>
  </teleport>
  <n-drawer v-model:show="show" width="300">
    <n-drawer-content>
      <SettingContainer title="导航模式">
        <n-space size="large">
          <template v-for="{key,title} in layouts" :key="key">
            <CheckboxLayout :layout="key" :title="title" :checked="key === layout" @click="onChange(key)"/>
          </template>
        </n-space>
      </SettingContainer>
    </n-drawer-content>
    <!--    关闭按钮-->
    <div class="absolute top-240px right-300px">
      <!---->
      <n-button type="primary" class="b-rd-tr-0! b-rd-br-0!" size="large" @click="onHide">
        <template #icon>
          <n-icon size="24">
            <CloseOutlined/>
          </n-icon>
        </template>
      </n-button>
    </div>
  </n-drawer>
</template>

<style scoped>

</style>
