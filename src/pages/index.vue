<script lang="ts" setup>
// @ts-ignore
import ProTable from "~/components/pro-table/index.tsx";
import {systemMenuApi} from "~/api/menu.ts";

const columns = ref<any[]>([
  {
    title: '标题',
    key: 'title',
    width: 200,
    hideInSearch: true,
    fixed: 'left',
  },
  {
    title: '名称',
    key: 'name',
    minWidth: 200,
    valueType: 'input',
  },
  {
    title: '路径',
    key: 'path',
    width: 200,
    valueType: 'input',
  },
  {
    title: '组件',
    key: 'component',
    width: 200,
    valueType: 'input',
  },
  {
    title: '图标',
    key: 'icon',
    hideInSearch: true,
    width: 200,
  },
  {
    title: '重定向',
    key: 'redirect',
    width: 200,
    valueType: 'input',
  },
  {
    title: '保活状态',
    key: 'keepAlive',
    hideInSearch: true,
    width: 100,
  },
  {
    title: '启用状态',
    key: 'status',
    width: 100,
    valueType: 'select',
    valueEnum: {
      1: {value: 1, label: '启用'},
      2: {value: 2, label: '禁用'},
    },
  },
  {
    title: '操作',
    key: 'action',
    width: 150,
    fixed: 'right',
    align: 'center',
    hideInSearch: true,
    render() {
      return '1'
    },
  },
])
const data = ref([
  {
    id: 1,
    pid: null,
    path: '/dashboard',
    name: 'Dashboard',
    component: 'RouteView',
    redirect: '/dashboard/analysis',
    title: '仪表板',
    icon: 'DashboardOutlined'
  },
  {
    id: 2,
    pid: 1,
    path: '/dashboard/analysis',
    name: 'DashboardAnalysis',
    component: '仪表板',
    title: 'pages.dashboard.analysis.title',
    keepAlive: false
  },
  {
    id: 3,
    pid: 1,
    name: 'DashboardWorkspace',
    path: '/dashboard/workspace',
    component: '仪表板',
    title: 'pages.dashboard.workspace.title',
    keepAlive: false
  },
  {
    id: 5,
    pid: null,
    name: 'Menu1',
    path: '/menu',
    component: 'RouteView',
    redirect: '/menu/1-1',
    title: '菜单',
    icon: 'MenuOutlined'
  },
  {
    id: 6,
    pid: 5,
    name: 'Menu1-1',
    path: '/menu/1-1',
    redirect: '/menu/1-1/1-1-1',
    component: 'RouteView',
    title: '菜单名称'
  },
  {
    id: 7,
    pid: 5,
    name: 'Menu1-2',
    path: '/menu/1-2',
    component: 'RouteView',
    redirect: '/menu/1-2/1-2-1',
    title: 'pages.menu.menu2.title'
  },
  {
    id: 10,
    pid: 7,
    name: 'Menu1-2-1',
    path: '/menu/1-2/1-2-1',
    component: 'Menu21',
    title: 'pages.menu.menu21.title',
    keepAlive: true
  },
  {
    id: 11,
    pid: 7,
    name: 'Menu1-2-2',
    path: '/menu/1-2/1-2-2',
    component: 'Menu22',
    title: 'pages.menu.menu22.title',
    keepAlive: true
  },
  {
    id: 8,
    pid: 6,
    name: 'Menu1-1-1',
    path: '/menu/1-1/1-1-1',
    component: 'Menu11',
    title: 'pages.menu.menu11.title',
    keepAlive: false
  },
  {
    id: 9,
    pid: 6,
    name: 'Menu1-1-2',
    path: '/menu/1-1/1-1-2',
    component: 'Menu12',
    title: 'pages.menu.menu12.title',
    keepAlive: false
  },
  {
    id: 4,
    pid: null,
    name: 'JumpBaidu',
    path: 'https://www.baidu.com',
    component: 'BlankRoute',
    title: 'pages.jump.baidu',
    icon: 'LinkOutlined'
  }
])
const handleRequest = async (params: any) => {
  let res = await systemMenuApi(params)
  return {
    ...res.data
  }
}
</script>

<template>
  <ProTable
      :columns="columns"
      :data="data"
      :scroll-x="1800"
      :options="{reload:true,setting:true}"
      :request="handleRequest"
      :params="{text:123}"
      :pagination="{
        showSizePicker: true,
        pageSizes: [10, 20, 50, 100]
      }"
  >
    <template #headerTitle>我是自定义标题</template>
    <template #toolbarRender>
      <div class="flex">
        <NButton tyep="primary" size="small">
          新增
        </NButton>
      </div>

    </template>
  </ProTable>
</template>

<style scoped>

</style>
