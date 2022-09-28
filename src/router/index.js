import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Categories from '../views/Categories.vue'
import Depenses from '../views/Depenses.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Accueil
    },
    {
      path: '/depenses',
      name: 'Dépenses',
      component: Depenses
    },
    {
      path: '/categories',
      name: 'Catégories',
      component: Categories
    }
  ]
})

export default router
