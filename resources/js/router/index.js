import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Quotes from '../pages/Quotes.vue'
import Quoters from '../pages/Quoters.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/quoters',
    name: 'Quoters',
    component: Quoters,
    props: true,
  },
  {
    path: '/quotes',
    name: 'Quotes',
    component: Quotes,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
