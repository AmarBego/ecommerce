<template>
  <div class="buyer-layout">
    <BuyerHeader />
    <router-view></router-view>
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