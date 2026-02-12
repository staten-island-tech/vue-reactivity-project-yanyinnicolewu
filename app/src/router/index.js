import { createRouter, createWebHistory } from 'vue-router'
import icecreamstore from '@/views/icecreamstore.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/icecreamstore',
      name: 'icecreamstore',
      component: icecreamstore,
    },
  ],
})

export default router
