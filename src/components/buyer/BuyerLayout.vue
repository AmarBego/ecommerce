<template>
    <div class="buyer-layout">
      <BuyerHeader />
      <router-view></router-view>
      <BuyerFooter />
    </div>
  </template>
  
  <script>
  import BuyerHeader from '@/components/BuyerHeader.vue'
  import BuyerFooter from '@/components/BuyerFooter.vue'
  
  export default {
    name: 'BuyerLayout',
    components: {
      BuyerHeader,
      BuyerFooter
    }
  }
  </script>