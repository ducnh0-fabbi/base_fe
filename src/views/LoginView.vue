<template>
  <div class="d-flex justify-content-center align-items-center" id="login">
    <div class="login-form">
      <img class="login-form__login" src="@/assets/images/logo-login.svg" alt="">
      <VeeForm @submit="onSubmit" class="text-left">
        <div class="login-form__login--div __top">
          <VeeField class="font-size-14" v-model="email" id="email" :name="$i18n.t('property.email')" rules="required|email" :placeholder="$i18n.t('property.email')" />
          <br>
          <ErrorMessage :name="$i18n.t('property.email')" class="errors"/>
        </div>
        <div class="login-form__login--div __bottom">
          <VeeField class="font-size-14" type="password" v-model="password" :name="$i18n.t('property.password')" id="password" :placeholder="$i18n.t('property.password')" rules="required|password"/>
          <br>
          <ErrorMessage :name="$i18n.t('property.password')" class="errors"/>
        </div>
        <button class="login-form__login--button font-size-14 margin-bottom-69 font-weight-7">{{ $i18n.t('button.login') }}</button>
      </VeeForm>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  import { notification } from 'ant-design-vue';
  import i18n from '@/plugins/i18n';
  import { useLoading } from 'vue-loading-overlay';
  import { useRouter } from 'vue-router';

  let email = ref(null);

  let password = ref(null);

  const $loading = useLoading()

  const store = useStore();

  const router = useRouter();

  const onSubmit = async () => {
    const loader = $loading.show();
    const data = {
      'email': email.value,
      'password': password.value,
    }
    const isLogin = await store.dispatch('auth/login', data);
    if (isLogin) {
      notification['success']({
        message: i18n.global.t('message.login_success')
      });
      router.push({ name: 'dashboard'});
    } else {
      notification['error']({
        message: i18n.global.t('message.login_fail')
      })
    }
    loader.hide();
  }
</script>
