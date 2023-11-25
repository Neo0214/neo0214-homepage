import { createApp } from 'vue'
import App from './App.vue'
import MyIndex from './components/index.vue'

// 注册myindex为全局可用组件
const app = createApp(App)
app.component('index', MyIndex)
app.mount('#app')




