import { createRouter, createWebHistory } from 'vue-router'
import IntroPage from '../views/Intro.vue'
import LoginPage from '../views/Login.vue'
import RegisterPage from '../views/Register.vue'
import RoleSelectionPage from '../views/RoleSelection.vue'
import DashboardPage from '../views/Dashboard.vue'
import BecomeSellerPage from '../views/BecomeSellerPage.vue'

import store from '../store'

const routes = [
  { path: '/', component: IntroPage },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '/role-selection', component: RoleSelectionPage },
  { 
    path: '/become-seller', 
    component: BecomeSellerPage,
    meta: { requiresAuth: true }
  },
  { 
    path: '/dashboard', 
    component: DashboardPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/seller/create-listing',
    component: () => import('@/views/seller/CreateListingPage.vue'),
    meta: { requiresAuth: true, role: 'seller' }
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  router.beforeEach(async (to, from, next) => {
    await store.dispatch('checkAuth')
    const isAuthenticated = store.getters.isAuthenticated
    const isSeller = store.getters.isSeller
    const currentSessionType = store.state.sessionType
  
    if (to.meta.requiresAuth && !isAuthenticated) {
      next('/login')
    } else if (to.path === '/dashboard') {
      if (!currentSessionType) {
        if (isSeller) {
          next('/role-selection')
        } else {
          await store.dispatch('switchSession', 'buyer')
          next()
        }
      } else {
        next()
      }
    } else if (to.path === '/role-selection' && !isAuthenticated) {
      next('/login')
    } else if (to.path === '/role-selection' && !isSeller) {
      next('/dashboard')
    } else {
      next()
    }
  })
export default router