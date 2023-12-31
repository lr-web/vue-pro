<template>
  <div class="login-form-wrapper">
    <div class="login-form-title">登录 中为新智</div>
    <div class="login-form-sub-title">中为新智 前端通用模板</div>
    <div class="login-form-error-msg">{{ errorMessage }}</div>
    <a-form
      ref="loginForm"
      :model="userInfo"
      class="login-form"
      layout="vertical"
      @submit="handleSubmit"
    >
      <a-form-item
        field="username"
        :rules="[{ required: true, message: '用户名不能为空' }]"
        :validate-trigger="['change', 'blur']"
        hide-label
      >
        <a-input
          v-model="userInfo.username"
          :placeholder="'用户名：admin'"
        >
          <template #prefix>
            <icon-user />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item
        field="password"
        :rules="[{ required: true, message: '密码不能为空' }]"
        :validate-trigger="['change', 'blur']"
        hide-label
      >
        <a-input-password
          v-model="userInfo.password"
          :placeholder="'请输入密码'"
          allow-clear
        >
          <template #prefix>
            <icon-lock />
          </template>
        </a-input-password>
      </a-form-item>
      <a-form-item
        field="authCode"
        :rules="[{ required: true, message: '请输入验证码' }]"
        :validate-trigger="['change', 'blur']"
        hide-label
      >
        <a-input
          v-model="userInfo.authCode"
          placeholder="请输入验证码" 
          allow-clear>
          <template #append>
            <a-image
              width="80"
              height="32"
              fit="fill"
              :preview="false"
              :src="baseUrl + '/sysCode/getCodeImg?time=' + time"
              @click="changeCodeImg"
            />
          </template>
        </a-input>
      </a-form-item>
      <a-space :size="16" direction="vertical">
        <div class="login-form-password-actions">
          <a-checkbox
            checked="rememberPassword"
            :model-value="loginConfig.rememberPassword"
            @change="setRememberPassword as any"
          >忘记密码</a-checkbox>
        </div>
        <a-button type="primary" html-type="submit" long :loading="loading">
          登录
        </a-button>
      </a-space>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive } from 'vue';
  import { useRouter } from 'vue-router';
  import { Message } from '@arco-design/web-vue';
  import { ValidatedError } from '@arco-design/web-vue/es/form/interface';
  import { useStorage } from '@vueuse/core';
  import { useUserStore } from '@/store';
  import useLoading from '@/hooks/loading';
  import type { LoginData } from '@/api/user';
  import {Base64} from 'js-base64'
  
  const router = useRouter();
  const errorMessage = ref('');
  const { loading, setLoading } = useLoading();
  const userStore = useUserStore();
  const time = ref('')
  const baseUrl = ref(import.meta.env.VITE_BASE_URL)
  const loginConfig = useStorage('login-config', {
    rememberPassword: true,
    username: 'admin', // 演示默认值
    password: '0000', // demo default value
    authCode: ''
  });
  const userInfo = reactive({
    username: loginConfig.value.username,
    password: loginConfig.value.password,
    authCode: loginConfig.value.authCode,
  });
  const changeCodeImg = () => {
    time.value = String(new Date().getTime())
  }
  const handleSubmit = async ({
    errors,
    values,
  }: {
    errors: Record<string, ValidatedError> | undefined;
    values: Record<string, any>;
  }) => {
    if (loading.value) return;
    if (!errors) {
      setLoading(true);
      try {
        console.log(values)
        const params = JSON.parse(JSON.stringify(values))
        params.password = Base64.encode(values.password)
        await userStore.login(params as LoginData);
        const { redirect, ...othersQuery } = router.currentRoute.value.query;
        router.push({
          name: (redirect as string) || 'TestPage',
          query: {
            ...othersQuery,
          },
        });
        Message.success('登录成功');
        const { rememberPassword } = loginConfig.value;
        const { username, password } = values;
        // 实际生产环境需要进行加密存储
        loginConfig.value.username = rememberPassword ? username : '';
        loginConfig.value.password = rememberPassword ? password : '';
      } catch (err) {
        errorMessage.value = (err as Error).message;
      } finally {
        setLoading(false);
      }
    }
  };
  const setRememberPassword = (value: boolean) => {
    loginConfig.value.rememberPassword = value;
  };
</script>

<style lang="less" scoped>
.login-form {
  &-wrapper {
    width: 320px;
  }

  &-title {
    color: var(--color-text-1);
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }

  &-sub-title {
    color: var(--color-text-3);
    font-size: 16px;
    line-height: 24px;
  }

  &-error-msg {
    height: 32px;
    color: rgb(var(--red-6));
    line-height: 32px;
  }

  &-password-actions {
    display: flex;
    justify-content: space-between;
  }

  &-register-btn {
    color: var(--color-text-3) !important;
  }
}
:deep(.arco-input-append) {
  padding: 0!important;
}
</style>
