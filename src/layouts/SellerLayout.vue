<template>
    <div class="seller-layout">
      <SellerHeader />
      <main class="seller-main">
        <router-view></router-view>
      </main>
      <SellerFooter />
    </div>
  </template>
  
  <script>
  import SellerHeader from '@/components/seller/SellerHeader.vue'
  import SellerFooter from '@/components/seller/SellerFooter.vue'
  
  export default {
    name: 'SellerLayout',
    components: {
      SellerHeader,
      SellerFooter
    }
  }
  </script>
  
  <style scoped>
  .seller-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .seller-main {
    flex: 1;
    padding: 20px;
  }
  </style>