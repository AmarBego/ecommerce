<template>
  <footer class="seller-footer">
    <div class="footer-content">
      <div class="footer-section brand">
        <h3>Seller's Corner</h3>
        <p>Empowering businesses in the digital marketplace.</p>
      </div>
      <div class="footer-section links">
        <h3>Quick Links</h3>
        <ul>
          <li><router-link to="/seller/help">Seller Help</router-link></li>
          <li><router-link to="/seller/dashboard">Dashboard</router-link></li>
          <li><router-link to="/seller/analytics">Analytics</router-link></li>
        </ul>
      </div>
      <div class="footer-section contact">
        <h3>Seller Support</h3>
        <p><i class="fas fa-envelope"></i> seller-support@example.com</p>
        <p><i class="fas fa-phone"></i> (987) 654-3210</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} E-commerce Platform - Seller View. All rights reserved.</p>
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
  background: linear-gradient(135deg, #34495e, #2c3e50);
  color: #ecf0f1;
  padding: 3rem 0 1rem;
  clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 100%);
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-section {
  flex: 1;
  margin: 0 1rem 2rem;
  min-width: 250px;
}

.footer-section h3 {
  color: #f1c40f;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.footer-section h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50px;
  height: 2px;
  background-color: #f1c40f;
}

.brand p {
  margin-bottom: 1rem;
}

.links ul {
  list-style-type: none;
  padding: 0;
}

.links li {
  margin-bottom: 0.5rem;
}

.links a {
  color: #ecf0f1;
  text-decoration: none;
  transition: color 0.3s ease;
}

.links a:hover {
  color: #f1c40f;
}

.contact p {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.contact i {
  margin-right: 0.5rem;
  color: #f1c40f;
}

.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(236, 240, 241, 0.1);
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }

  .footer-section {
    margin: 0 0 2rem;
  }
}
</style>