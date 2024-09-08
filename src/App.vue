<template>
  <div id="app">
    <router-view></router-view>
    <CommonFooter v-if="showCommonHeader" />
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import CommonFooter from '@/components/common/CommonFooter.vue'

export default {
  name: 'App',
  components: {
    CommonFooter
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const isAuthenticated = ref(false)

    const showCommonHeader = computed(() => {
      return route.path === '/' && !isAuthenticated.value
    })

    onMounted(async () => {
      try {
        await store.dispatch('checkAuth')
        isAuthenticated.value = store.getters.isAuthenticated
        const sessionType = store.state.sessionType

        if (isAuthenticated.value && route.path === '/') {
          if (!sessionType) {
            router.push('/role-selection')
          } else {
            router.push('/dashboard')
          }
        } else if (!isAuthenticated.value && route.path !== '/login' && route.path !== '/register') {
          router.push('/')
        }
      } catch (error) {
        console.error('Failed to initialize session:', error)
        router.push('/login')
      }
    })

    return {
      showCommonHeader
    }
  }
}
</script>