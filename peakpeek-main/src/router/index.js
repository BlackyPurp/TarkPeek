import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: Home
  },
  {
    path: '/search',
    name: 'SearchPage',
    component: () => import('../views/SearchPage.vue')
  },
  {
    path: '/itemResult',
    name: 'item',
    component: () => import('../views/itemResult.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition;
    }
    if (to.hash) {
        return { el: to.hash };
    }
    return { x: 0, y: 0 };
  }
})

export default router
