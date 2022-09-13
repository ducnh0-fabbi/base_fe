<template>
  <div id="sidebar">
    <div class="sidebar-header text-center position-relative h-100">
      <div class="sidebar-logo">
        <img src="@/assets/images/logo.svg" alt="">
      </div>
      <div v-for="(option, index) in OPTIONS_SIDEBAR" :key="index">
        <div class="option">
          <router-link :to="{ name: option.routerName }" >
            <div class="text-left f-w6 option__div d-flex justify-content-start align-items-center margin-bottom-2">
              <img :src="require('@/assets/images/' + option.src)" />
              {{ $t(`sidebar.${option.text}`) }}
            </div>
          </router-link>
        </div>
      </div>
      <div class="button-back position-absolute" @click="closeSidebar()">
        <img src="@/assets/images/icon-back.svg" alt="icon_back">
      </div>
    </div>
  </div>
</template>

<script setup>
  import { OPTIONS_SIDEBAR } from '@/constants/sidebar'
  import { defineEmits } from 'vue';
  const emit = defineEmits(['closeSidebar']);
  const closeSidebar = () => {
    emit('closeSidebar');
  };
</script>
