import Vue from 'vue'
import VueRouter from 'vue-router'
import 'lib-flexible'
import Home from '@/components/home/index.vue'
import City from '@/components/city/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: City
  }
]

const router = new VueRouter({
  routes
})

export default router
