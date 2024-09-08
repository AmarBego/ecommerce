<template>
    <div class="intro">
      <h1>Welcome to Our E-commerce Platform</h1>
      <p>Here, you can be both a buyer and a seller!</p>
      <div class="actions">
        <button @click="navigateTo('/register')">Register</button>
        <button @click="navigateTo('/login')">Login</button>
      </div>
    </div>
  </template>
  
  <script>
  import { useRouter } from 'vue-router'
  
  export default {
    name: 'IntroPage',
    setup() {
      const router = useRouter()
  
      const navigateTo = (path) => {
        router.push(path)
      }
  
      return {
        navigateTo
      }
    }
  }
  </script>
  
  <style scoped>
  .intro {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }
  
  h1 {
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 2rem;
  }
  
  .actions {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  
  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>