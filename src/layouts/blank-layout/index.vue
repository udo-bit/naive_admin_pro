<template>
  <n-el tag="div" flex="~ col" class="pro-admin-login-container h-screen">
    <slot name="prefix"/>
    <div class="flex-1">
      <slot/>
    </div>
    <slot name="suffix">
      <div flex="~ shrink-0 basis-auto col" class="items-center">
        <div class="my-2">
          <span>Naive Admin Pro</span>
          &copy; 2022 后台管理系统模板
        </div>
      </div>
    </slot>
  </n-el>
</template>

<style scoped>
.pro-admin-login-container {
  background-image: url("~@/assets/images/bg.svg");
  background-repeat: no-repeat;
  background-position: center 110px;
  background-size: 100%;
}
</style>
