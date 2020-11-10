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
  {
    path: '/test3',
    name: 'Super long text',
    icon: 'clock',
    component: Test
  },
  {
    path: '/test4',
    name: 'Test 4',
    icon: 'adjust',
    component: Test
  },
  {
    path: '/test5',
    name: 'Test 5',
    icon: 'atom',
    component: Test
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
