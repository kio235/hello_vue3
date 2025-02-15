// 引入create app用于创建应用
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App);

app.use(router)

app.mount('#app')