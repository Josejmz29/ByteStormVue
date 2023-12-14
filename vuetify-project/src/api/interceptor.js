// axiosInterceptor.js


import axios from 'axios';
import { useAuthStore } from '@/store/authStore';

export default function axiosInterceptor() {
  const authStore = useAuthStore();

  axios.interceptors.request.use(
    (config) => {
      const token = authStore.token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  }
