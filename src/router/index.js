import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Quotes from '../views/Quotes.vue'
import Quoters from '../views/Quoters.vue'

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
