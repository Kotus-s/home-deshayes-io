import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Test from "@/views/Test";

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Home',
    icon: 'coffee',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    icon: 'user',
    component: Test
  },
  {
    path: '/test2',
    name: 'Test2',
    icon: 'times',
    component: Test
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
