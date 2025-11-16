import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RepairView from '@/views/RepairView.vue'
import FindserviceView from '@/views/FindserviceView.vue'
import RepairshopView from '@/views/RepairshopView.vue'
import ContactView from '@/views/ContactView.vue'
import ExchangeView from '@/views/ExchangeView.vue'
import ExchangeshopView from '@/views/ExchangeshopView.vue'
import SaleprofileView from '@/views/SaleprofileView.vue'

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
    },
    {
      path: '/repairshop',
      name: 'repairshop',
      component: RepairshopView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path:'/exchange',
      name: 'exchange',
      component:ExchangeView,
    },
    {
      path:'/exchangeshop',
      name: 'exchangeshop',
      component:ExchangeshopView,
    },
    {
      path:'/saleprofile',
      name: 'saleprofile',
      component:SaleprofileView,
    }
  ],
})

export default router
