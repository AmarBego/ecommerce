<template>
    <header class="common-header">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="E-commerce Logo" />
        </router-link>
      </div>
      <nav class="main-nav">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/products">Products</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
      <div class="user-actions">
        <template v-if="isAuthenticated">
          <button @click="goToDashboard">Dashboard</button>
          <button @click="logout">Logout</button>
        </template>
        <template v-else>
          <router-link to="/login" class="btn">Login</router-link>
          <router-link to="/register" class="btn">Register</router-link>
        </template>
      </div>
    </header>
  </template>
  
  <script>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  
  export default {
    name: 'CommonHeader',
    setup() {
      const store = useStore()
      const router = useRouter()
  
      const isAuthenticated = computed(() => store.getters.isAuthenticated)
  
      const goToDashboard = () => {
        router.push('/dashboard')
      }
  
      const logout = async () => {
        await store.dispatch('logout')
        router.push('/')
      }
  
      return {
        isAuthenticated,
        goToDashboard,
        logout
      }
    }
  }
  </script>
  
  <style scoped>
  .common-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #f8f8f8;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .logo img {
    height: 40px;
  }
  
  .main-nav ul {
    display: flex;
    list-style-type: none;
    padding: 0;
  }
  
  .main-nav li {
    margin: 0 1rem;
  }
  
  .main-nav a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
  
  .user-actions {
    display: flex;
    gap: 1rem;
  }
  
  .btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background-color: #4CAF50;
    color: white;
    text-decoration: none;
    cursor: pointer;
  }
  
  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
  }
  </style>