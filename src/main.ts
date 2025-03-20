// 引入create app用于创建应用
import {createApp} from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia=createPinia();
app.use(pinia)
app.mount('#app')