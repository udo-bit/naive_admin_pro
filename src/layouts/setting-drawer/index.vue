<script setup lang="ts">
import {CloseOutlined, SettingOutlined} from '@vicons/antd';
import CheckboxLayout from "~/layouts/setting-drawer/checkbox-layout.vue";
import SettingContainer from "~/layouts/setting-drawer/setting-container.vue";
import {LayoutType} from "~/config/layout-theme.ts";

const props = withDefaults(defineProps<{
  floatTop?: number | string;
  drawerWidth: number | string;
  layout: 'mix' | 'top' | 'side';
  layoutStyle: 'dark' | 'light' | 'inverted' | string;
  layoutList: LayoutType[];
  layoutStyleList: LayoutType[];
}>(), {
  floatTop: 240,
  drawerWidth: 300,
});
const emit = defineEmits(['update:layout', 'update:layoutStyle']);
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
const onChangeStyle = (val: string) => {
  emit('update:layoutStyle', val)
}

// const styles = ref([
//   {
//     id: 'light',
//     key: 'side',
//     title: '亮色模式',
//     inverted: false,
//   },
//   {
//     id: 'inverted',
//     key: 'side',
//     title: '暗色模式',
//     inverted: true,
//   }
// ])

// const layouts = ref([
//   {
//     key: 'side',
//     title: 'Side Menu Layout',
//   },
//   {
//     key: 'top',
//     title: 'Top Menu Layout',
//   },
//   {
//     key: 'mix',
//     title: 'Mix Menu Layout',
//   },
// ])


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
          <template v-for="{key,title} in layoutList" :key="key">
            <CheckboxLayout :layout="key" :title="title" :checked="key === layout" @click="onChange(key)"/>
          </template>
        </n-space>
      </SettingContainer>
      <SettingContainer title="主题模式">
        <n-space size="large">
          <template v-for="{id,key,title,inverted,dark} in layoutStyleList" :key="id">
            <CheckboxLayout :inverted="inverted"
                            :layout="key"
                            :title="title"
                            :dark="dark"
                            :checked="id === layoutStyle"
                            @click="onChangeStyle(id)"

            />
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
