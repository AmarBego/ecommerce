<template>
  <div class="auth-container">
    <div class="auth-card">
      <h2>Welcome Back</h2>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit" class="btn-primary">Log In</button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
      <p v-if="registered" class="success">You have successfully registered! Please login.</p>
      <div class="auth-footer">
        <p>Don't have an account? <router-link to="/register">Sign up</router-link></p>
      </div>
    </div>
  </div>
</template>

  <script>
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  import '@/assets/global.css'
  
  export default {
    name: 'LoginPage',
    setup() {
      const store = useStore()
      const router = useRouter()
      const email = ref('')
      const password = ref('')
      const error = ref('')
      const registered = ref(false)

      const handleLogin = async () => {
        try {
          await store.dispatch('login', {
            email: email.value,
            password: password.value
          });

          if (store.getters.isSeller) {
            router.push('/role-selection');
          } else {
            await store.dispatch('switchSession', 'buyer');
            router.push('/dashboard');
          }
        } catch (err) {
          error.value = 'Login failed. Please check your credentials.';
        }
      }

      return {
        email,
        password,
        error,
        registered,
        handleLogin
      }
    }
  }
  </script>
  
  <style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;
}

.auth-card {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 1.5rem;
}

.input-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
}

input {
  width: calc(100% - 2rem);
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.btn-primary {
  width: 100%;
  padding: 0.75rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 1rem;
}

.btn-primary:hover {
  background-color: #2980b9;
}

.error {
  color: #d32f2f;
  text-align: center;
  margin-top: 1rem;
}

.success {
  color: #3498db;
  text-align: center;
  margin-top: 1rem;
}

.auth-footer {
  text-align: center;
  margin-top: 1.5rem;
}

.auth-footer a {
  color: #3498db;
  text-decoration: none;
}

.auth-footer a:hover {
  text-decoration: underline;
}
</style>