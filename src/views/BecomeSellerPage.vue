<template>
    <div class="become-seller">
      <h2>Become a Seller</h2>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="businessName">Business Name:</label>
          <input type="text" id="businessName" v-model="businessName" required>
        </div>
        <div>
          <label for="businessAddress">Business Address:</label>
          <input type="text" id="businessAddress" v-model="businessAddress" required>
        </div>
        <button type="submit">Register as Seller</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  
  export default {
    name: 'BecomeSellerPage',
    setup() {
      const store = useStore()
      const router = useRouter()
      const businessName = ref('')
      const businessAddress = ref('')
  
      const handleSubmit = async () => {
        try {
          await store.dispatch('becomeSeller', {
            businessName: businessName.value,
            businessAddress: businessAddress.value
          })
          router.push('/dashboard')
        } catch (error) {
          console.error('Failed to become a seller:', error)
        }
      }
  
      return {
        businessName,
        businessAddress,
        handleSubmit
      }
    }
  }
  </script>