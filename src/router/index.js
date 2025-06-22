import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { LOCALSTORAGE } from '@/const/localStorage'

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
      meta: { requiresAuth: true },
    },
    {
      path: '/user/employee/education',
      name: 'education',
      component: () => import('../views/employee/EducationView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/user/vacansies',
      name: 'user-vacansies',
      component: ()=> import('../views/employee/EmployeeVacansyView.vue'),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/user/:id/my-interview',
      name: 'user-interview',
      component: ()=> import('../views/employee/MyInterviewView.vue'),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/forbidden',
      name: 'forbidden',
      component: () => import('../views/ForbiddenView.vue'),
    }
  ],
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !localStorage.getItem(LOCALSTORAGE.TOKEN)) {
    next({ path: '/forbidden' })
  } else next()
})

export default router
