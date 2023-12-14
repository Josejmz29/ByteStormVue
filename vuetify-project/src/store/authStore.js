import { defineStore } from 'pinia';
import  {jwtDecode } from 'jwt-decode';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
  }),

  actions: {
    setToken(token) {
      this.token = token;
      
    },

    clearToken() {
      this.token = null;
      
    },
    isTokenValid() {
        const token = this.token;
        if (token) {
            const decodedToken = jwtDecode(token);
            const currentTime = Date.now() / 1000;
            if (decodedToken.exp < currentTime) {
                this.clearToken();
                
                return false;
            }
            return true;
        }
        return false;
    }
  },
});