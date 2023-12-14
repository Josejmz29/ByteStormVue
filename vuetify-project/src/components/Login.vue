<template>
    <div>
      
  
      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg"
      >

      <v-card-title class="text-h4 text-blue-grey-lighten-4 d-flex justify-center mx-3 my-3">
            Log in
        </v-card-title>

        <div class="text-subtitle-1 text-medium-emphasis">Account</div>
  
        <v-text-field
          density="compact"
          placeholder="username"
          prepend-inner-icon="mdi-user-outline"
          variant="outlined"
          v-model="usuario.user"
        ></v-text-field>
  
        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Password
  
          <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Forgot login password?</a>
        </div>
  
        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
          v-model="usuario.password"
        ></v-text-field>
  
        <v-card
          class="mb-12"
          color="surface-variant"
          variant="tonal"
        >
          <v-card-text class="text-medium-emphasis text-caption">
            Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for three hours. If you must login now, you can also click "Forgot login password?" below to reset the login password.
          </v-card-text>
        </v-card>
  
        <v-btn
          block
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          @click="login()"
        >
          Log In
        </v-btn>
  
        <v-card-text class="text-center">
          <a
            class="text-blue text-decoration-none"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            @click="$router.push('register')"
          >
            Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
          </a>
        </v-card-text>
      </v-card>
    </div>
  </template>

<script>

import { useAuthStore } from '@/store/authStore';
import {postValidate} from '@/api/authapi';

export default {
    
  data: () => ({
    visible: false,
    usuario: {
      user: '',
      password: '',
    },
  }),
  methods: {
    async login() {
      try {
        const response = await postValidate(this.usuario);
        const token = response.token;

        // Usa el store de autenticación para almacenar el token
       
        const authStore = useAuthStore();
        authStore.setToken(token);

        // Redirige al usuario o realiza otras acciones según sea necesario
        this.$router.push('/operativos');
      } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        
      }
    },
},
}
</script>