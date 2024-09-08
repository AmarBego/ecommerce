<template>
    <div class="buyer-layout">
      <BuyerHeader />
      <main class="buyer-main">
        <router-view></router-view>
      </main>
      <BuyerFooter />
    </div>
  </template>
  
  <script>
  import BuyerHeader from '@/components/buyer/BuyerHeader.vue'
  import BuyerFooter from '@/components/buyer/BuyerFooter.vue'
  
  export default {
    name: 'BuyerLayout',
    components: {
      BuyerHeader,
      BuyerFooter
    }
  }
  </script>
  
  <style scoped>
  .buyer-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .buyer-main {
    flex: 1;
    padding: 20px;
  }
  </style>