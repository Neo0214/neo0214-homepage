import { createApp } from 'vue'; // 引入 createApp
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus' //全局引入
import 'element-plus/dist/index.css'
import axios from 'axios'
import QS from 'qs'
 

 


const app = createApp(App); // 创建 Vue 应用
app.config.globalProperties.$qs = QS;
app.use(router); // 使用路由
app.use(ElementPlus); // 使用 Element Plus

app.mount('#app'); // 挂载应用到 DOM


axios.defaults.baseURL = 'http://localhost:8080'; // 添加协议头 http://

// 将axios实例挂载到Vue应用上
app.config.globalProperties.$http = axios;

