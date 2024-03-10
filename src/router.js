import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue'; // 你的首页组件
import Blogs from './components/Blogs.vue'; // 你的博客组件
import Signup from './components/Signup.vue'; // 你的注册组件

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/Home',
    name:'Home',
    component:Home
  },
  {
    path:'/Blogs',
    name:'Blogs',
    component:Blogs
  },
  {
    path:'/Signup',
    name:'Signup',
    component:Signup
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;
