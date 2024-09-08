<template>
    <header class="seller-header">
      <div class="header-content">
        <h1>Seller Dashboard</h1>
        <nav>
          <router-link to="/seller/dashboard">Home</router-link>
          <router-link to="/seller/inventory">Inventory</router-link>
          <router-link to="/seller/orders">Orders</router-link>
          <router-link to="/seller/analytics">Analytics</router-link>
          <a @click="switchToBuyerView" class="switch-view">Switch to Buyer View</a>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  
  export default {
    name: 'SellerHeader',
    setup() {
      const store = useStore()
      const router = useRouter()
  
      const switchToBuyerView = async () => {
        try {
          await store.dispatch('switchSession', 'buyer')
          router.push('/dashboard')
        } catch (error) {
          console.error('Failed to switch to buyer view:', error)
        }
      }
  
      return {
        switchToBuyerView
      }
    }
  }
  </script>
  
  <style scoped>
  .seller-header {
    background-color: #3f51b5;
    color: white;
    padding: 1rem 0;
  }
  .header-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    margin: 0;
    font-size: 1.5rem;
  }
  nav {
    display: flex;
    gap: 1rem;
  }
  nav a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.3s;
  }
  nav a:hover, nav a.router-link-active {
    background-color: rgba(255, 255, 255, 0.2);
  }
  .switch-view {
    cursor: pointer;
  }
  </style>