<template>
  <div class="seller-layout">
    <SellerHeader />
    <main class="seller-main">
      <h1>Welcome to your Seller Dashboard!</h1>
      <ProductListings />
      <router-view></router-view>
    </main>
    <SellerFooter />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import SellerHeader from '@/components/seller/SellerHeader.vue'
import SellerFooter from '@/components/seller/SellerFooter.vue'
import ProductListings from '@/components/seller/ProductListings.vue'

export default {
  name: 'SellerLayout',
  components: {
    SellerHeader,
    SellerFooter,
    ProductListings
  },
  setup() {
    const router = useRouter()

    const navigateToAddListing = () => {
      router.push('/seller/add-listing')
    }

    return {
      navigateToAddListing
    }
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

.add-listing-btn {
  margin-bottom: 20px;
}

.btn-primary {
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #2980b9;
}
</style>