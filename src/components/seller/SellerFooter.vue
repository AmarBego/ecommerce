<template>
    <footer class="seller-footer">
      <div class="footer-content">
        <p>&copy; {{ currentYear }} E-commerce Platform - Seller View</p>
        <nav>
          <router-link to="/seller/help">Help</router-link>
          <router-link to="/seller/contact">Contact</router-link>
        </nav>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'SellerFooter',
    computed: {
      currentYear() {
        return new Date().getFullYear()
      }
    }
  }
  </script>
  
  <style scoped>
  .seller-footer {
    background-color: #333;
    color: white;
    padding: 1rem 0;
    position: sticky;
    bottom: 0;
    width: 100%;
  }
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
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