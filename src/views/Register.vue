<template>
    <div class="register">
      <h2>Register</h2>
      <form @submit.prevent="handleRegister">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" required>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <div>
          <label for="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" required>
        </div>
        <button type="submit">Register</button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  
  export default {
    name: 'RegisterPage',
    setup() {
      const store = useStore()
      const router = useRouter()
      const name = ref('')
      const email = ref('')
      const password = ref('')
      const confirmPassword = ref('')
      const error = ref('')
  
      const handleRegister = async () => {
        if (password.value !== confirmPassword.value) {
          error.value = 'Passwords do not match.'
          return
        }
  
        try {
          await store.dispatch('register', {
            name: name.value,
            email: email.value,
            password: password.value
          })
          router.push({ path: '/login', query: { registered: 'success' } })
        } catch (err) {
          error.value = 'Registration failed. Please try again.'
        }
      }
  
      return {
        name,
        email,
        password,
        confirmPassword,
        error,
        handleRegister
      }
    }
  }
  </script>
  
  <style scoped>
  .register {
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
  </style>