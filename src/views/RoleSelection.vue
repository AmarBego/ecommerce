<template>
  <div class="role-selection-container">
    <div class="role-selection-content">
      <h1>Choose Your Role</h1>
      <p>Select how you'd like to use our platform today:</p>
      <div class="role-buttons">
        <button @click="selectRole('buyer')" class="role-button buyer">
          <i class="fas fa-shopping-cart"></i>
          <span>Buyer</span>
        </button>
        <button @click="selectRole('seller')" class="role-button seller">
          <i class="fas fa-store"></i>
          <span>Seller</span>
        </button>
      </div>
    </div>
    <CommonFooter />
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { nextTick } from 'vue'
import CommonFooter from '@/components/common/CommonFooter.vue'

export default {
  name: 'RoleSelection',
  components: {
    CommonFooter
  },
  setup() {
    const store = useStore()
    const router = useRouter()

    const selectRole = async (role) => {
      await store.dispatch('switchSession', role)
      nextTick(() => {
        router.push('/dashboard')
      })
    }

    return {
      selectRole
    }
  }
}
</script>

<style scoped>
.role-selection-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f0f2f5;
}

.role-selection-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
}

.role-buttons {
  display: flex;
  gap: 2rem;
}

.role-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border: none;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.role-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}

.role-button i {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.role-button span {
  font-size: 1.5rem;
  font-weight: bold;
}

.buyer {
  color: #3498db;
}

.seller {
  color: #e74c3c;
}
</style>