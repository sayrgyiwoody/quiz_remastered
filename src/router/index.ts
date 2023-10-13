import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllQuiz from '../views/AllQuiz.vue'
import ViewQuiz from '../views/ViewQuiz.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/allQuiz',
    name : 'allQuiz',
    component: AllQuiz
  },
  {
    path: '/viewQuiz/:id',
    name : 'viewQuiz',
    component: ViewQuiz
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
