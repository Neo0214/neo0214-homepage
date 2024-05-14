import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./components/routers/Home.vue')
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('./components/routers/Home.vue')
  },
  {
    path: '/Blogs',
    name: 'Blogs',
    component: () => import('./components/routers/Blogs.vue')
  },
  {
    path: '/Blogs/blogDetail',
    name: 'BlogDetail',
    component: () => import('./components/routers/BlogDetail.vue')
  },
  {
    path: '/Blogs/blogEdit',
    name: 'BlogEdit',
    component: () => import('./components/routers/BlogEdit.vue')
  },
  {
    path: '/Labs',
    name: 'Labs',
    component: () => import('./components/routers/Labs.vue')
  },
  {
    path: '/Labs/BattleField',
    name: 'BattleField',
    component: () => import('./components/routers/BattleField.vue')
  },
  {
    path:'/Labs/Map',
    name:'Map',
    component:()=>import('./components/routers/Map.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;
