import { createRouter, createWebHistory } from 'vue-router'
import AdminRoutes from './admin/paths'
import ClientRoutes from './client/paths'

const routes = [...AdminRoutes, ...ClientRoutes]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
