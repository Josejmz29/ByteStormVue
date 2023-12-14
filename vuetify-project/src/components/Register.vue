<template>
    <div>
      
  
      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg"
      >

      <v-card-title class="text-h4 text-blue-grey-lighten-4 d-flex justify-center mx-3 my-3">
            Sign up
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

  
        <v-btn
          block
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          @click="postUsuario()"
        >
          Create account
        </v-btn>
  
      </v-card>
    </div>
  </template>

<script>
import { postUsuarioApi } from "@/api/usuarioapi";


export default {
    
  data: () => ({
    visible: false,
    usuario: {
      user: '',
      password: '',
    },
  }),
  methods: {
    
    async postUsuario(){

        try {
            const response = await postUsuarioApi(this.usuario);
            console.log(response);
            this.$router.push('/succesSignin');
        } catch (error) {
            console.error('Error en el registro:', error);
        }
    }
},
}
</script>