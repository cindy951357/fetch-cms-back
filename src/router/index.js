import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import Contact from '@/ContentPages/Contact';
import OrderMgmt from '@/ContentPages/OrderMgmt';
import OrderDetail from '@/ContentPages/OrderDetail';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },{
    path: '/order-mgmt',
    name: 'order-mgmt',
    component: OrderMgmt
  }, {
    path: '/order-detail/:orderId',
    name: 'order-detail',
    component: OrderDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
