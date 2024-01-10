import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/Layout/Login';
import HomeView from '../views/HomeView.vue'
import IsLoggedIn from '@/Layout/IsLoggedIn';
import App from '@/Layout/App';
import OrderMgmt from '@/ContentPages/OrderMgmt';
import OrderDetail from '@/ContentPages/OrderDetail';

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },{
    path: '/home',
    name: 'home',
    component: IsLoggedIn,
    children: [
      {
        path: 'index',
        name: 'index',
        component: HomeView,
      },
      {
        path: 'order-mgmt',
        name: 'order-mgmt',
        component: OrderMgmt
      }, {
        path: 'order-detail/:orderId',
        name: 'order-detail',
        component: OrderDetail
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
