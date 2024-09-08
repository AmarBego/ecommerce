<template>
  <footer class="common-footer">
    <div class="footer-content">
      <div class="footer-section brand">
        <h3>Your E-commerce Platform</h3>
        <p>Connecting buyers and sellers in a trusted marketplace.</p>
        <div class="social-icons">
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
      <div class="footer-section links">
        <h3>Quick Links</h3>
        <ul>
          <li><router-link to="/faq">FAQ</router-link></li>
          <li><router-link to="/terms">Terms of Service</router-link></li>
          <li><router-link to="/privacy">Privacy Policy</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
        </ul>
      </div>
      <div class="footer-section contact">
        <h3>Contact Us</h3>
        <p><i class="fas fa-envelope"></i> support@example.com</p>
        <p><i class="fas fa-phone"></i> (123) 456-7890</p>
        <p><i class="fas fa-map-marker-alt"></i> 123 E-commerce St, Web City, 12345</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} Your E-commerce Platform. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'CommonFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.common-footer {
  background: linear-gradient(135deg, #2c3e50, #34495e);
  color: #ecf0f1;
  padding: 3rem 0 1rem;
  margin-top: auto;
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
  color: #3498db;
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
  background-color: #3498db;
}

.brand p {
  margin-bottom: 1rem;
}

.social-icons a {
  display: inline-block;
  margin-right: 1rem;
  color: #ecf0f1;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #3498db;
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
  color: #3498db;
}

.contact p {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.contact i {
  margin-right: 0.5rem;
  color: #3498db;
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