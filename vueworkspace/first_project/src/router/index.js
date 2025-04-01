import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '@/views/DataBinding.vue'
import ForView from '@/views/ListBinding.vue'
import IfView from '@/views/IfBinding.vue'
import OnEventView from '@/views/OnEvent.vue'
import ComWatView from '@/views/ComputedWatch.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/dataBinding',
    name: 'dataBind',
    component : DataBinding    
  },
  {
    path:'/for',
    name: 'for',
    component:ForView
  },
  {
    path:'/if',
    name: 'if',
    component:IfView
  },
  {
    path:'/eventView',
    name:'eventView',
    component:OnEventView
  },
  {
    path:'/comWatView',
    name:'comWatView',
    component : ComWatView
  }
]
// vue router를 생성하는 함수 = createRouter
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
