import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import Contact from '@/ContentPages/Contact';
import OrderMgmt from '@/ContentPages/OrderMgmt';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },{
    path: '/order-mgmt',
    name: 'order-mgmt',
    component: OrderMgmt
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
