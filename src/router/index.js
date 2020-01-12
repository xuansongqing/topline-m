import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    // @ 是src的别名 vuecli特殊提供的
    component: () => import('@/views/login')
  },
  {
    path: '/',
    name: 'tab-bar',
    component: () => import('@/views/tab-bar'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import ('@/views/home')
      },
      {
        path: 'coupon',
        name: 'coupon',
        component: () => import('@/views/coupon')
      },
      {
        path: 'video',
        name: 'video',
        component: () => import('@/views/video')
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/user')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
