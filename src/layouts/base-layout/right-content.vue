<script lang="ts" setup>
import SelectUser from "~/layouts/select-user/index.vue"
import type {DropdownOption} from 'naive-ui'
import type {Component} from '@vue/runtime-core'
import {NIcon} from 'naive-ui'
import {UserOutlined, SettingOutlined, LogoutOutlined} from "@vicons/antd"
import {useUserStore} from "~/stores/user.ts"
import avatar from "~/assets/vue.svg"
import Notify from "~/layouts/notify/index.vue"
import {useAppStore} from "~/stores/app.ts";

const nickname = "jack"

const userStore = useUserStore()
const appStore = useAppStore()

function renderIcon(icon: Component) {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    })
  }
}

const notifyInverted = computed(
    () =>
        (appStore.layout.layoutStyle === 'inverted' && appStore.layout.layout === 'top')
        || appStore.layout.layout === 'mix',
)

const userOptions = ref<DropdownOption[]>([
  {
    label: () => "个人中心",
    key: 'user-center',
    icon: renderIcon(UserOutlined),
  },
  {
    label: () => "个人设置",
    key: 'user-setting',
    icon: renderIcon(SettingOutlined),
  },
  {
    key: 'header-divider',
    type: 'divider',
  },
  {
    label: () => "退出登陆",
    icon: renderIcon(LogoutOutlined),
    key: 'logout',
  },
])

const handleSelect = (_value: string) => {
  if (_value === "logout")
    userStore.logout();
}
</script>

<template>

  <n-space align="center">
    <Notify :inverted="notifyInverted" class="mr-5"/>
    <SelectUser :avatar="avatar" :nickname="nickname" :options="userOptions" @select="handleSelect"/>
  </n-space>
</template>
