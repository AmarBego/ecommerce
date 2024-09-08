<template>
    <header class="seller-header">
      <h1>Seller Dashboard</h1>
      <nav>
        <router-link to="/dashboard">Home</router-link> |
        <router-link to="/inventory">Inventory</router-link> |
        <router-link to="/orders">Orders</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'SellerHeader'
  }
  </script>
  
  <style scoped>
  .seller-header {
    background-color: #3f51b5;
    color: white;
    padding: 1rem;
  }
  </style>