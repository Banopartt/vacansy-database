import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/vacansies',
      name: 'vacansies',
      component: () => import('../views/VacansyView.vue'),
    },
    {
      path: '/resumes',
      name: 'resumes',
      component: () => import('../views/ResumeView.vue'),
    },
    {
      path: '/user/:id',
      name: 'user',
      component: () => import('../views/ProfileView.vue'),
    },
    {
      path: '/user/employee/education',
      name: 'education',
      component: () => import('../views/employee/EducationView.vue'),
    },
  ],
})

export default router
