import Index from '@/pages/Index'
import DetailPage from '@/pages/DetailPage'
import { createRouter, createWebHistory } from 'vue-router'

export const routeNames = {
  index: 'index',
  detail: 'detail',
}

const routes = [
  { path: '/', component: Index, name: routeNames.index },
  { path: '/pokemon/:name', component: DetailPage, name: routeNames.detail },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
