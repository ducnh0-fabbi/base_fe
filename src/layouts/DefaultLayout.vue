<template>
	<div :class="isShowSidebar ? 'sidebar-show' : 'sidebar-close'">
		<SidebarView @closeSidebar="closeSidebar()" />
	</div>
	<div :class="isShowSidebar ? 'div-show' : 'div-close'">
		<HeaderView @openSidebar="openSidebar()" />
		<router-view></router-view>
	</div>
</template>

<script setup>
import SidebarView from '@/components/SidebarView.vue';
import HeaderView from '@/components/HeaderView.vue';
import { ref, provide } from 'vue';
let isShowSidebar = ref(true);
const closeSidebar = () => {
	isShowSidebar.value = false;
}

const openSidebar = () => {
	isShowSidebar.value = !isShowSidebar.value;
}

provide('isShowSidebar', isShowSidebar);
</script>
