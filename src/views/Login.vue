<template>
    <div class="login">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Login</button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
      <p v-if="registered" class="success">You have successfully registered! Please login.</p>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  
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
  .login {
    max-width: 300px;
    margin: 0 auto;
  }
  form div {
    margin-bottom: 1rem;
  }
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  input {
    width: 100%;
    padding: 0.5rem;
  }
  button {
    width: 100%;
    padding: 0.5rem;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  .error {
    color: red;
  }
  .success {
    color: green;
  }
  </style>