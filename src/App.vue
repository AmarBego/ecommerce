<template>
  <div id="app">
    <CommonHeader v-if="!isInDashboard" />
    <router-view></router-view>
    <CommonFooter v-if="!isInDashboard" />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import CommonHeader from '@/components/common/CommonHeader.vue'
import CommonFooter from '@/components/common/CommonFooter.vue'

export default {
  name: 'App',
  components: {
    CommonHeader,
    CommonFooter
  },
  setup() {
    const route = useRoute()
    const isInDashboard = computed(() => {
      return route.path.includes('/dashboard') || route.path.includes('/seller') || route.path.includes('/buyer')
    })

    return {
      isInDashboard
    }
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.main-content {
  flex: 1;
}

main {
  flex: 1;
}
</style>