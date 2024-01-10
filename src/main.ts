import { createApp } from 'vue';
import Login from './Layout/Login.vue';
import router from './router';
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus';
import { createPinia } from 'pinia';

const app = createApp(Login);
const pinia = createPinia();
app.use(pinia);
app.use(router).mount('#app');
app.use(ElementPlus);


