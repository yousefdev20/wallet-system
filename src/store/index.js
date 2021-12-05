import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem('user')),
    admin: JSON.parse(localStorage.getItem('admin')),
  },
  mutations: {
    LOGIN_CLIENT(state, user) {
      state.user = user
      axios.defaults.headers.common.Authorization = `Bearer ${state.user.token}`
      localStorage.setItem('user', JSON.stringify(user))
      this.commit('LOGOUT_ADMIN')
    },
    LOGOUT_CLIENT(state) {
      state.user = null;
      localStorage.removeItem('user');
    },
    LOGIN_ADMIN(state, admin) {
      state.admin = admin;
      axios.defaults.headers.common.Authorization = `Bearer ${state.admin.token}`
      localStorage.setItem('admin', JSON.stringify(admin));
      this.commit('LOGOUT_CLIENT')
    },
    LOGOUT_ADMIN(state) {
      state.admin = null;
      localStorage.removeItem('admin');
    }
  },
  getters: {
    cleanCache: (state) => {
      state.user = null;
      localStorage.removeItem('user');
      // this.$notify({group: 'auth', text: 'token has expired', type: 'error'})
    }
  },
  actions: {
  },
  modules: {
  }
})
