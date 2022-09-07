<template>
  <div class="about">
    <p>{{ $i18n.t('message.login') }}</p>
  </div>
</template>

<script>
  import { changeLanguage } from '@/plugins/i18n';
  export default {
    created() {
      setTimeout(() => {
        changeLanguage('ja');
      }, 1000)
    },
  }
</script>
