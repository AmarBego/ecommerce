<template>
    <component :is="currentLayout">
      <h1>Welcome to your {{ sessionType }} dashboard!</h1>
      <button v-if="canSwitchRole" @click="switchRole">
        Switch to {{ otherRole }} view
      </button>


    </component>
  </template>
  
  <script>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import BuyerLayout from '@/layouts/BuyerLayout.vue'
  import SellerLayout from '@/layouts/SellerLayout.vue'
  
  export default {
    name: 'DashboardPage',
    components: {
      BuyerLayout,
      SellerLayout
    },
    setup() {
      const store = useStore()
      const sessionType = computed(() => store.state.sessionType)
      const currentLayout = computed(() => 
  store.state.sessionType === 'buyer' ? BuyerLayout : SellerLayout
)
      const canSwitchRole = computed(() => store.getters.hasBothRoles)
      const otherRole = computed(() => sessionType.value === 'buyer' ? 'seller' : 'buyer')
  
      const switchRole = () => {
        store.commit('setSessionType', otherRole.value)
      }
  
      return {
        sessionType,
        currentLayout,
        canSwitchRole,
        otherRole,
        switchRole
      }
    }
  }
  </script>