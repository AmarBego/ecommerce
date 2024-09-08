<template>
  <footer class="buyer-footer">
    <div class="footer-content">
      <div class="footer-section brand">
        <h3>Buyer's Hub</h3>
        <p>Your trusted marketplace for quality products.</p>
      </div>
      <div class="footer-section links">
        <h3>Quick Links</h3>
        <ul>
          <li><router-link to="/buyer/help">Help Center</router-link></li>
          <li><router-link to="/buyer/orders">My Orders</router-link></li>
          <li><router-link to="/buyer/wishlist">Wishlist</router-link></li>
        </ul>
      </div>
      <div class="footer-section contact">
        <h3>Contact Support</h3>
        <p><i class="fas fa-envelope"></i> buyer-support@example.com</p>
        <p><i class="fas fa-phone"></i> (123) 456-7890</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} E-commerce Platform - Buyer View. All rights reserved.</p>
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
  background: linear-gradient(135deg, #2980b9, #3498db);
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
  color: #f39c12;
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
  background-color: #f39c12;
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
  color: #f39c12;
}

.contact p {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.contact i {
  margin-right: 0.5rem;
  color: #f39c12;
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