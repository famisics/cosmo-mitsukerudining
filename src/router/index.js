import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/user/LoginView.vue')
    },
    {
      path: '/reg',
      name: 'reg',
      component: () => import('../views/user/RegView.vue')
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('../views/ChatView.vue')
    },
    {
      path: '/fav',
      name: 'fav',
      component: () => import('../views/dining/FavView.vue')
    },
    {
      path: '/find',
      name: 'find',
      component: () => import('../views/dining/FindView.vue')
    },
    {
      path: '/sid/:sid',
      name: 'dining',
      component: () => import('../views/dining/DiningView.vue')
    },
    {
      path: '/uid/:uid',
      name: 'prof',
      component: () => import('../views/user/ProfView.vue')
    },
    // {
    //   path: '*',
    //   component: () => import('../views/NotFoundView.vue')
    // }
  ]
})

export default router
