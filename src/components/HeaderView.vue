<template>
  <div id="header" class="d-flex justify-content-between align-items-center">
    <div class="d-flex  align-items-center" @click="openSidebar()" >
      <img class="margin-right-12" v-if="MAIN_ROUTERS.includes(route.name)" :src="
        require(`@/assets/images/logo-${route.name}.svg`)
      " alt="">
      <p class="mb-0 font-weight-7 font-size-24">{{ $t(`sidebar.${route.name}`) }}</p>
    </div>
    <div class="d-flex header--left">
      <img src="@/assets/images/bell.svg" class="header--left-img" alt="">
      <img src="@/assets/images/person.svg" alt="">
    </div>
  </div>
  <div class="header-border d-flex w-100">
    <div class="header-border--left" />
    <div class="header-border--center" />
    <div class="header-border--right" />
  </div>
</template>

<script setup>
  import { useRoute } from 'vue-router';
  import { MAIN_ROUTERS } from '@/constants/sidebar';
  import { defineEmits } from 'vue';

  const emit = defineEmits(['openSidebar']);
  const openSidebar = () => {
    emit('openSidebar');
  };

  const route = useRoute();
</script>
