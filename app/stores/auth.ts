import { acceptHMRUpdate, defineStore } from 'pinia';

export const useAuth = defineStore('auth', {

  state: () => ({
    isLoggedIn: false,
    user: null
  }),

  getters: {
    isLoggedIn: (state) => state.isLoggedIn,
    user: (state) => state.user
  },

  actions: {
    login(user) {
      this.isLoggedIn = true;
      this.user = user;
    },
    logout() {
      this.isLoggedIn = false;
      this.user = null;
    }
  }

});