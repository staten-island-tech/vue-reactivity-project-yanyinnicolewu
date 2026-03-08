import { createRouter, createWebHistory } from 'vue-router'
import SmiskiStore from '@/views/SmiskiStore.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/smiskistore',
      name: 'home',
      component: SmiskiStore,
    },
  ],
})

export default router
