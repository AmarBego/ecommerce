<template>
    <header class="buyer-header">
      <h1>Buyer Dashboard</h1>
      <nav>
        <router-link to="/dashboard">Home</router-link> |
        <router-link to="/products">Products</router-link> |
        <router-link to="/cart">Cart</router-link> |
        <router-link v-if="!isSeller" to="/become-seller">Become a Seller</router-link>
        <a v-else @click="switchToSellerView">Switch to Seller View</a>
      </nav>
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
  
      const switchToSellerView = () => {
        store.commit('setSessionType', 'seller')
        router.push('/dashboard')
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
    padding: 1rem;
  }
  </style>