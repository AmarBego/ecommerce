<template>
    <header class="buyer-header">
      <div class="header-content">
        <h1>Buyer Dashboard</h1>
        <nav>
          <router-link to="/buyer/dashboard">Home</router-link>
          <router-link to="/buyer/products">Products</router-link>
          <router-link to="/buyer/cart">Cart</router-link>
          <router-link to="/buyer/orders">My Orders</router-link>
          <router-link v-if="!isSeller" to="/become-seller">Become a Seller</router-link>
          <a v-else @click="switchToSellerView" class="switch-view">Switch to Seller View</a>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  
  export default {
    name: 'BuyerHeader',
    setup() {
      const store = useStore()
      const router = useRouter()
  
      const isSeller = computed(() => store.getters.isSeller)
  
      const switchToSellerView = async () => {
        try {
          await store.dispatch('switchSession', 'seller')
          router.push('/dashboard')
        } catch (error) {
          console.error('Failed to switch to seller view:', error)
        }
      }
  
      return {
        isSeller,
        switchToSellerView
      }
    }
  }
  </script>
  
  <style scoped>
  .buyer-header {
    background-color: #4CAF50;
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