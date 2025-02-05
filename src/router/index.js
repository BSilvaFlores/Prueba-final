import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/suscripciones',
    name: 'suscripciones',
    component: () => import('../views/SuscripcionesView.vue')
  },
  {
    path: '/cursos',
    name: 'cursos',
    component: () => import('../views/CursosView.vue')
  },
  {
    path: '/avance',
    name: 'avance',
    component: () => import('../views/AvanceView.vue')
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: () => import('../views/PerfilView.vue')
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFoundView.vue"),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router
export {routes}