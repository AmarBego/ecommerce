<template>
    <div class="seller-layout">
      <SellerHeader />
      <router-view></router-view>
      <SellerFooter />
    </div>
  </template>
  
  <script>
  import SellerHeader from '@/components/SellerHeader.vue'
  import SellerFooter from '@/components/SellerFooter.vue'
  
  export default {
    name: 'SellerLayout',
    components: {
      SellerHeader,
      SellerFooter
    }
  }
  </script>