import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import OurPlant from '../views/OurPlant.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
      //component: () => import('../views/AboutView.vue')
    },
    {
      path: '/our-plant',
      name: 'our-plant',
      component: OurPlant
    }
  ]
})

export default router
