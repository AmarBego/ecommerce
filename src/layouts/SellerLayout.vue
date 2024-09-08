<template>
    <div class="seller-layout">
      <SellerHeader />
      <router-view></router-view>
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