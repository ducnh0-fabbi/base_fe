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
        <button class="login-form__login--button font-size-14 margin-bottom-69">{{ $i18n.t('button.login') }}</button>
      </VeeForm>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useStore } from 'vuex';

  let email = ref(null);

  let password = ref(null);

  const store = useStore();

  const onSubmit = async () => {
    const data = {
      'email': email,
      'password': password,
    }
    await store.dispatch('auth/login', data)
  }
</script>
