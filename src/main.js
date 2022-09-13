import { createApp } from 'vue';
import App from './App.vue';
import dayjs from '@/plugins/dayjs';
import i18n from '@/plugins/i18n';
import router from './router';
import store from './store';
import Cookie from 'js-cookie';
import './assets/style/style.scss';
import 'bootstrap/dist/css/bootstrap.css';
import vuelidate from "@/plugins/vuelidate";

const app = createApp(App);
app.config.globalProperties.$dayjs = dayjs;
app.config.globalProperties.$cookie = Cookie;

app.use(i18n)
.use(router)
.use(store)
.use(vuelidate)
.mount('#app');
