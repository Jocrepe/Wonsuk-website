import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RepairView from '@/views/RepairView.vue'
import FindserviceView from '@/views/FindserviceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/repair',
      name: 'repair',
      component: RepairView,
    },
    {
      path: '/findservice',
      name: 'findservice',
      component: FindserviceView,
    }
  ],
})

export default router
