<template>
    <header class="seller-header">
      <div class="header-content">
        <h1 class="logo">Seller Hub</h1>
        <nav>
          <router-link to="/seller/dashboard" class="nav-link">Home</router-link>
          <router-link to="/seller/inventory" class="nav-link">Inventory</router-link>
          <router-link to="/seller/orders" class="nav-link">Orders</router-link>
          <div class="profile-dropdown">
            <button @click="toggleDropdown" class="profile-button">
              <span class="profile-icon">&#9787;</span>
            </button>
            <div v-if="showDropdown" class="dropdown-menu">
              <router-link to="/seller/analytics" class="dropdown-item">Analytics</router-link>
              <button @click="switchToBuyerView" class="dropdown-item">Switch to Buyer View</button>
              <button @click="logout" class="dropdown-item">Logout</button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  
  export default {
    name: 'SellerHeader',
    setup() {
      const store = useStore()
      const router = useRouter()
      const showDropdown = ref(false)
  
      const toggleDropdown = () => {
        showDropdown.value = !showDropdown.value
      }
  
      const switchToBuyerView = async () => {
        try {
          await store.dispatch('switchSession', 'buyer')
          router.push('/dashboard')
        } catch (error) {
          console.error('Failed to switch to buyer view:', error)
        }
      }
  
      const logout = async () => {
        try {
          await store.dispatch('logout')
          router.push('/')
        } catch (error) {
          console.error('Failed to logout:', error)
        }
      }
  
      return {
        showDropdown,
        toggleDropdown,
        switchToBuyerView,
        logout
      }
    }
  }
  </script>
  
  <style scoped>
  .seller-header {
    background-color: #34495e;
    color: #ecf0f1;
    padding: 1rem 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .header-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    font-size: 1.8rem;
    font-weight: bold;
    background: linear-gradient(45deg, #e74c3c, #f39c12); 
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease;
  }
  
  .logo:hover {
    transform: scale(1.05);
  }
  
  nav {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  
  .nav-link {
    color: #ecf0f1;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  
  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #e74c3c; 
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  .nav-link:hover::after,
  .nav-link.router-link-active::after {
    transform: scaleX(1);
    transform-origin: left;
  }
  
  .nav-link:hover,
  .nav-link.router-link-active {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  .profile-dropdown {
    position: relative;
  }
  
  .profile-button {
    background: none;
    border: none;
    cursor: pointer;
    color: #ecf0f1;
    transition: all 0.3s ease;
  }
  
  .profile-icon {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #2c3e50; 
    border-radius: 50%;
    transition: all 0.3s ease;
  }
  
  .profile-button:hover .profile-icon {
    background-color: #e74c3c; 
    transform: scale(1.1);
  }
  
  .dropdown-menu {
    position: absolute;
    right: 0;
    top: 120%;
    background-color: #2c3e50; 
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    min-width: 200px;
    overflow: hidden;
    z-index: 10;
  }
  
  .dropdown-item {
    color: #ecf0f1;
    padding: 0.75rem 1rem;
    text-decoration: none;
    transition: all 0.3s ease;
    display: block;
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
  }
  
  .dropdown-item:hover {
    background-color: #e74c3c;
  }
  
  .dropdown-item.router-link-active {
    background-color: transparent;
  }
  
  .dropdown-item.router-link-active:hover {
    background-color: #e74c3c;
  }
  
  .dropdown-item:not(.router-link-active) {
    color: #ecf0f1;
  }
  
  .dropdown-item:hover {
    color: #ecf0f1;
  }
  </style>