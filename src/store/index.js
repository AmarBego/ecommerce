import { createStore } from 'vuex'
import api from '../services/api'

export default createStore({
  state: {
    user: null,
    token: null,
    sessionType: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setToken(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    },
    clearToken(state) {
      state.token = null
      localStorage.removeItem('token')
    },
    setSessionType(state, sessionType) {
        state.sessionType = sessionType
        if (sessionType) {
          localStorage.setItem('sessionType', sessionType)
        } else {
          localStorage.removeItem('sessionType')
        }
    },
  },
  actions: {
    async login({ dispatch, commit }, credentials) {
      try {
        const response = await api.login(credentials)
        commit('setUser', response.data.user)
        commit('setToken', response.data.token)
        await dispatch('setInitialSessionType')
        return response
      } catch (error) {
        console.error('Login failed:', error)
        throw error
      }
    },
    async setInitialSessionType({ commit, getters }) {
      if (getters.isSeller) {
        commit('setSessionType', null) 
      } else {
        commit('setSessionType', 'buyer')
      }
    },
    async switchSession({ commit }, sessionType) {
      try {
        const response = await api.switchSession(sessionType)
        commit('setUser', response.data.user)
        commit('setSessionType', sessionType) 
      } catch (error) {
        console.error('Failed to switch session:', error)
        throw error
      }
    },
    async register({ commit }, userData) {
      try {
        const response = await api.register(userData)
        commit('setUser', response.data.user)
        commit('setToken', response.data.token)
        return response
      } catch (error) {
        console.error('Registration failed:', error)
        throw error
      }
    },
    async logout({ commit }) {
      try {
        await api.logout()
        commit('setUser', null)
        commit('clearToken')
        commit('setSessionType', null)
      } catch (error) {
        console.error('Logout failed:', error)
        throw error
      }
    },
    async checkAuth({ commit, state, dispatch }) {
        if (!state.token) {
          const token = localStorage.getItem('token')
          if (token) {
            commit('setToken', token)
          } else {
            return
          }
        }
        try {
          const response = await api.getCurrentUser()
          commit('setUser', response.data)
          
          const storedSessionType = localStorage.getItem('sessionType')
          if (storedSessionType) {
            commit('setSessionType', storedSessionType)
          } else {
            await dispatch('setInitialSessionType')
          }
        } catch (error) {
          commit('clearToken')
          commit('setUser', null)
          commit('setSessionType', null)
          throw error
        }
      },
    async becomeSeller({ commit }) {
      try {
        const response = await api.becomeSeller()
        commit('setUser', response.data.user)
      } catch (error) {
        console.error('Failed to become a seller:', error)
        throw error
      }
    },
  },
  getters: {
    isAuthenticated: state => !!state.user,
    isBuyer: state => state.user && state.user.roles.includes('buyer'),
    isSeller: state => state.user && state.user.roles.includes('seller'),
    currentSessionType: state => state.user ? state.user.sessionType : null,
  }
})