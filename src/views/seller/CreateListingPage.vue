<template>
    <div class="create-listing">
      <h2>Create New Listing</h2>
      <form @submit.prevent="createListing">
        <div class="form-group">
          <label for="productName">Product Name</label>
          <input type="text" id="productName" v-model="productName" required>
        </div>
        <div class="form-group">
          <label for="productPrice">Price</label>
          <input type="number" id="productPrice" v-model="productPrice" step="0.01" required>
        </div>
        <div class="form-group">
          <label for="productStock">Stock</label>
          <input type="number" id="productStock" v-model="productStock" required>
        </div>
        <div class="form-group">
          <label for="productDescription">Description</label>
          <textarea id="productDescription" v-model="productDescription" required></textarea>
        </div>
        <button type="submit" class="btn-primary">Create Listing</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import api from '@/services/api'
  
  export default {
    name: 'CreateListingPage',
    setup() {
      const router = useRouter()
      const productName = ref('')
      const productPrice = ref(0)
      const productStock = ref(0)
      const productDescription = ref('')
  
      const createListing = async () => {
        try {
          await api.createProduct({
            name: productName.value,
            price: productPrice.value,
            stock: productStock.value,
            description: productDescription.value
          })
          router.push('/dashboard')
        } catch (error) {
          console.error('Failed to create product:', error)
        }
      }
  
      return {
        productName,
        productPrice,
        productStock,
        productDescription,
        createListing
      }
    }
  }
  </script>
  
  <style scoped>
  .create-listing {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input, textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  textarea {
    height: 100px;
  }
  
  .btn-primary {
    background-color: #3498db;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
  }
  
  .btn-primary:hover {
    background-color: #2980b9;
  }
  </style>