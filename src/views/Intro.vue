<template>
  <div class="intro-page">
    <div class="intro-container">
      <div class="intro-content">
        <h1 class="intro-title">Welcome to Our E-commerce Platform</h1>
        <p class="intro-subtitle">Where Buyers Meet Sellers in a Trusted Marketplace</p>
        <div class="features">
          <div class="feature">
            <i class="fas fa-shopping-cart"></i>
            <h3>Shop with Confidence</h3>
            <p>Browse a wide range of quality products from verified sellers.</p>
          </div>
          <div class="feature">
            <i class="fas fa-store"></i>
            <h3>Sell with Ease</h3>
            <p>Reach millions of customers and grow your business online.</p>
          </div>
          <div class="feature">
            <i class="fas fa-shield-alt"></i>
            <h3>Secure Transactions</h3>
            <p>Enjoy safe and protected buying and selling experiences.</p>
          </div>
        </div>
        <div class="cta-buttons">
          <button @click="navigateTo('/register')" class="btn btn-primary">Get Started</button>
          <button @click="navigateTo('/login')" class="btn btn-secondary">Log In</button>
        </div>
      </div>
    </div>
    <CommonFooter />
  </div>
</template>

<script>
import '@/assets/global.css'
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
.intro-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.intro-content {
  max-width: 1200px;
  text-align: center;
}

.intro-title {
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.intro-subtitle {
  font-size: 1.5rem;
  color: #34495e;
  margin-bottom: 3rem;
}

.features {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.feature {
  flex: 1;
  min-width: 250px;
  margin: 1rem;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature:hover {
  transform: translateY(-5px);
}

.feature i {
  font-size: 3rem;
  color: #3498db;
  margin-bottom: 1rem;
}

.feature h3 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.feature p {
  color: #7f8c8d;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary {
  background-color: #3498db;
  color: white;
}

.btn-primary:hover {
  background-color: #2980b9;
}

.btn-secondary {
  background-color: #ecf0f1;
  color: #2c3e50;
}

.btn-secondary:hover {
  background-color: #bdc3c7;
}

@media (max-width: 768px) {
  .intro-title {
    font-size: 2.5rem;
  }

  .intro-subtitle {
    font-size: 1.2rem;
  }

  .features {
    flex-direction: column;
  }

  .feature {
    margin: 1rem 0;
  }
}
</style>