<template>
    <footer class="buyer-footer">
      <div class="footer-content">
        <p>&copy; {{ currentYear }} E-commerce Platform - Buyer View</p>
        <nav>
          <router-link to="/buyer/help">Help</router-link>
          <router-link to="/buyer/contact">Contact</router-link>
        </nav>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'BuyerFooter',
    computed: {
      currentYear() {
        return new Date().getFullYear()
      }
    }
  }
  </script>
  
  <style scoped>
  .buyer-footer {
    flex-shrink: 0;
    background-color: #333;
    color: white;
    padding: 1rem 0;
    width: 100%;
  }
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
  nav {
    display: flex;
    gap: 1rem;
  }
  nav a {
    color: white;
    text-decoration: none;
  }
  nav a:hover {
    text-decoration: underline;
  }
  </style>