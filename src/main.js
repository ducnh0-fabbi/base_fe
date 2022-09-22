import { createApp } from 'vue';
import App from './App.vue';
import dayjs from '@/plugins/dayjs';
import i18n from '@/plugins/i18n';
import router from './router';
import store from './store';
import Cookie from 'js-cookie';
import './assets/style/style.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import vuelidate from "@/plugins/vuelidate";
import clickOutside from '@/directives/click-outside';
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import CKEditor from '@ckeditor/ckeditor5-vue';

const app = createApp(App);
app.directive('click-outside', clickOutside);
app.config.globalProperties.$dayjs = dayjs;
app.config.globalProperties.$cookie = Cookie;

app.use(i18n)
.use(router)
.use(store)
.use(vuelidate)
.use(Antd)
.use(CKEditor)
.use(VueLoading)
.mount('#app');
