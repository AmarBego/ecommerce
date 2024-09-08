<template>
    <div class="product-listings">
      <h2>Product Listings</h2>
      <button @click="navigateToCreateListing" class="btn-primary">Add New Product</button>
      
      <table class="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product._id">
            <td>{{ product.name }}</td>
            <td>${{ product.price.toFixed(2) }}</td>
            <td>{{ product.stock }}</td>
            <td>{{ product.description }}</td>
            <td>
              <button @click="editProduct(product._id)" class="btn-secondary">Edit</button>
              <button @click="deleteProduct(product._id)" class="btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  
  export default {
    name: 'ProductListings',
    setup() {
      const store = useStore()
      const router = useRouter()
      const products = ref([])
  
      const fetchProducts = async () => {
        try {
          const response = await store.dispatch('fetchSellerProducts')
          products.value = response.data
        } catch (error) {
          console.error('Failed to fetch products:', error)
        }
      }
  
      onMounted(fetchProducts)
  
      const navigateToCreateListing = () => {
        router.push('/seller/create-listing')
      }
  
      const editProduct = (productId) => {
        // Implement edit functionality
        console.log('Edit product:', productId)
      }
  
      const deleteProduct = async (productId) => {
        try {
          await store.dispatch('deleteProduct', productId)
          await fetchProducts() // Refresh the product list
        } catch (error) {
          console.error('Failed to delete product:', error)
        }
      }
  
      return {
        products,
        navigateToCreateListing,
        editProduct,
        deleteProduct
      }
    }
  }
  </script>
  
  <style scoped>
  .product-listings {
    padding: 20px;
  }
  
  .btn-primary {
    background-color: #3498db;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 20px;
  }
  
  .product-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .product-table th, .product-table td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
  }
  
  .product-table th {
    background-color: #f2f2f2;
  }
  
  .btn-secondary, .btn-danger {
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 5px;
  }
  
  .btn-secondary {
    background-color: #2ecc71;
    color: white;
  }
  
  .btn-danger {
    background-color: #e74c3c;
    color: white;
  }
  </style>