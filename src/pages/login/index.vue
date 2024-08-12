<script lang="ts" setup>
import locales from "~/locales"
import logo from "~/assets/vue.svg"
import {GithubOutlined, LockOutlined, MobileOutlined, UserOutlined} from '@vicons/antd'
import {BlankLayout} from "~/layouts"
import {useUserStore} from "~/stores/user.ts";
import {useAccountLogin} from "~/pages/login/composables/account-login.ts";
import {useMobileLogin} from './composables/mobile-login'

const {mModel, mFormRef, mRules, mLoading, counterDownState, counter, mLogin, sendCode} = useMobileLogin()

const {rules, loading, login, model, formRef} = useAccountLogin()


</script>
<template>
  <BlankLayout>
    <div flex="~ col" class="py-20px items-center justify-center">
      <div class="flex items-center">
        <img :src="logo" class="h-40px w-40px" alt="图片无法显示">
        <span class="ml-3 text-33px font-600">
              Naive Admin Pro
          </span>
      </div>
      <div class="flex items-center mt-12px mb-40px text-[var(--text-color-3)]">
        {{ locales['login.admin.desc'] }}
      </div>
      <div class="w-350px mx-auto">
        <n-tabs default-value="username" type="line" justify-content="space-evenly">
          <n-tab-pane name="username" :tab="locales['login.account.tab']">
            <!--            账号登陆-->
            <n-form :ref="formRef" :rules="rules" :model="model" label-placement="left" label-align="left">
              <n-form-item-row>
                <n-input v-model:value="model.username" :placeholder="locales['login.username.placeholder']">
                  <template #prefix>
                    <n-icon :component="UserOutlined"/>
                  </template>
                </n-input>
              </n-form-item-row>
              <n-form-item-row>
                <n-input v-model:value="model.password" :placeholder="locales['login.password.placeholder']">
                  <template #prefix>
                    <n-icon :component="LockOutlined"/>
                  </template>
                </n-input>
              </n-form-item-row>
              <n-form-item-row>
                <div class="w-100% flex items-center justify-between">
                  <n-checkbox v-model:value="model.rememberMe">
                    {{ locales["login.remember-me"] }}
                  </n-checkbox>
                  <a class="cursor-pointer text-[var(--primary-color)]">
                    {{ locales["login.forgot-password"] }}
                  </a>
                </div>
              </n-form-item-row>
            </n-form>
            <!--            登陆按钮-->
            <n-button type="primary" :loading="loading" block secondary strong @click="login">
              {{ locales["login.login"] }}
            </n-button>
          </n-tab-pane>
          <!--         手机登陆-->
          <n-tab-pane name="mobile" :tab="locales['login.mobile.tab']">
            <n-form :form="mFormRef" :model="mModel" :rules="mRules" label-align="left" label-placement="left">
              <n-form-item-row path="mobile">
                <n-input v-model:value="mModel.mobile" :placeholder="locales['login.mobile.placeholder']">
                  <template #prefix>
                    <n-icon :component="MobileOutlined"/>
                  </template>
                </n-input>
              </n-form-item-row>
              <n-form-item-row path="code">
                <n-input-group>
                  <n-input v-model:value="mModel.code"
                           :placeholder="locales['login.mobile.verification-code.placeholder']">
                    <template #prefix>
                      <n-icon :component="LockOutlined"/>
                    </template>
                  </n-input>

                  <n-button :disabled="counterDownState" @click="sendCode"></n-button>
                  <n-button>
                    {{ locales['login.mobile.verification-code.get-verification-code'] }}
                  </n-button>
                </n-input-group>
              </n-form-item-row>
              <n-form-item-row path="rememberMe">
                <div class="w-100% flex items-center justify-between">
                  <n-checkbox v-model:value="mModel.rememberMe">
                    {{ locales['login.remember-me'] }}
                  </n-checkbox>
                  <a class="cursor-pointer text-[var(--primary-color)]">
                    {{ locales['login.forgot-password'] }}
                  </a>
                </div>
              </n-form-item-row>
            </n-form>
            <n-button :loading="mLoading" @click="mLogin" type="primary" block secondary strong>
              {{ locales['login.login'] }}
            </n-button>
          </n-tab-pane>
        </n-tabs>
        <div class="flex mt-24px items-center">
          {{ locales["login.sign-in-with"] }}
          <n-icon
              size="24"
              class="cursor-pointer text-[var(--text-color-3)] hover:text-[var(--primary-color)]"
              :component="GithubOutlined"
          />
        </div>
      </div>
    </div>
  </BlankLayout>

</template>


<style scoped>
.pro-admin-login-container {
  background-image: url("~/assets/images/login-bg.svg");
  background-repeat: no-repeat;
  background-position: center 110px;
  background-size: 100%;
}
</style>
