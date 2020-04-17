import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/home'),
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '/welcome',
        name: 'Welcome',
        component: () => import(/* webpackChunkName: "about" */ '../views/welcome'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/order',
        name: 'Order',
        component: () => import(/* webpackChunkName: "about" */ '../views/order'),
        meta: {
          title: '订单'
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
