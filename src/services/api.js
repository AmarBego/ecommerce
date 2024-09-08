import axios from 'axios'
import store from '../store'

const api = axios.create({
  baseURL: 'http://localhost:3000/api'
})

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 403) {
      store.dispatch('logout')
    }
    return Promise.reject(error)
  }
)
export default {
  login(credentials) {
    return api.post('/auth/login', credentials)
  },
  register(userData) {
    return api.post('/auth/register', userData)
  },
  logout() {
    return api.post('/auth/logout')
  },
  getProducts() {
    return api.get('/products')
  },
  getCurrentUser() {
    return api.get('/user/current')
  },
  becomeSeller() {
    return api.post('/user/become-seller')
  },
  switchSession(sessionType) {
    return api.post('/user/switch-session', { sessionType })
  }
}