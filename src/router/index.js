import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Home',
    icon: 'coffee',
    component: () => import('@/views/Home'),
  },
  {
    path: '/login',
    name: 'Login',
    icon: 'coffee',
    component: () => import('@/views/Login'),
    meta : {
      layout: 'auth'
    }
  },
  {
    path: '/test',
    name: 'Test',
    icon: 'user',
    component: () => import('@/views/Test'),
  },
  {
    path: '/test2',
    name: 'Test2',
    icon: 'times',
    component: () => import('@/views/Test'),
  },
  {
    path: '/test3',
    name: 'Super long text',
    icon: 'clock',
    component: () => import('@/views/Test'),
  },
  {
    path: '/test4',
    name: 'Test 4',
    icon: 'adjust',
    component: () => import('@/views/Test'),
  },
  {
    path: '/test5',
    name: 'Test 5',
    icon: 'atom',
    component: () => import('@/views/Test'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
