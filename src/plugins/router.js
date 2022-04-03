import Index from '@/pages/Index'
import DetailPage from '@/pages/DetailPage'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: Index, name: 'index'},
  { path: '/pokemon/:name', component: DetailPage, name: 'detail' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
