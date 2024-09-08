<template>
    <div class="role-selection">
      <h1>Select Your Session</h1>
      <p>Choose which type of session you'd like to start:</p>
      <div class="buttons">
        <button @click="setSession('buyer')">Buyer Session</button>
        <button v-if="isSeller" @click="setSession('seller')">Seller Session</button>
      </div>
    </div>
  </template>
  
  <script>
  import { useRouter } from 'vue-router'
  import { useStore } from 'vuex'
  import { computed } from 'vue'
  
  export default {
    name: 'RoleSelectionPage',
    setup() {
      const router = useRouter()
      const store = useStore()
  
      const isSeller = computed(() => store.getters.isSeller)
  
      const setSession = (role) => {
        store.dispatch('switchSession', role)
        router.push('/dashboard')
      }
  
      return {
        setSession,
        isSeller
      }
    }
  }
  </script>
  
  <style scoped>
  .role-selection {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }
  
  .buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
  }
  
  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>